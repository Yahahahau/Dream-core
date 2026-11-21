// WebGL renderer + lightweight post-processing chain with quality tiers.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { setAnisotropy } from '../utils/Textures.js';
import { tier } from './QualityPresets.js';

const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, time: { value: 0 }, resolution: { value: new THREE.Vector2(1, 1) },
    saturation: { value: 1 }, contrast: { value: 1 }, brightness: { value: 0 },
    lift: { value: new THREE.Color(0, 0, 0) }, gain: { value: new THREE.Color(1, 1, 1) },
    vignette: { value: 0.25 }, grain: { value: 0.03 },
    aberration: { value: 0 }, wave: { value: 0 }, scan: { value: 0 }, haze: { value: 0 }, hazeColor: { value: new THREE.Color(1, 1, 1) },
    fade: { value: 0 }, fadeColor: { value: new THREE.Color(1, 1, 1) }, underwater: { value: 0 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float time; uniform vec2 resolution;
    uniform float saturation, contrast, brightness, vignette, grain, aberration, wave, scan, haze, fade, underwater;
    uniform vec3 lift, gain, hazeColor, fadeColor;
    varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      if (wave > 0.0) {
        uv.x += sin(uv.y * 24.0 + time * 1.7) * 0.0025 * wave;
        float band = step(0.996, rand(vec2(floor(time * 6.0), floor(uv.y * 40.0))));
        uv.x += band * 0.02 * wave;
      }
      if (underwater > 0.0) uv += vec2(sin(uv.y*18.0+time*2.0), cos(uv.x*14.0+time*1.6)) * 0.004 * underwater;
      vec4 c;
      if (aberration > 0.0) {
        vec2 off = (uv - 0.5) * aberration * 0.012;
        c.r = texture2D(tDiffuse, uv + off).r; c.g = texture2D(tDiffuse, uv).g; c.b = texture2D(tDiffuse, uv - off).b; c.a = 1.0;
      } else c = texture2D(tDiffuse, uv);
      vec3 col = c.rgb;
      col = col * gain + lift * (1.0 - col);
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, saturation);
      col = (col - 0.5) * contrast + 0.5 + brightness;
      col = mix(col, hazeColor, haze * smoothstep(0.2, 1.0, 1.0 - abs(uv.y - 0.55) * 1.4) * 0.5);
      if (scan > 0.0) col *= 1.0 - scan * 0.12 * (0.5 + 0.5 * sin(uv.y * resolution.y * 1.4));
      float d = distance(vUv, vec2(0.5));
      col *= mix(1.0, smoothstep(0.85, 0.25, d), vignette);
      col += (rand(vUv * resolution + fract(time * 13.1)) - 0.5) * grain;
      col = mix(col, vec3(0.08, 0.32, 0.36) * (0.6 + l), underwater * 0.55);
      col = mix(col, fadeColor, fade);
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }`,
};

export class Renderer {
  constructor(game, container) {
    this.game = game;
    const r = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.info.autoReset = false;
    container.appendChild(r.domElement);
    r.domElement.id = 'game-canvas';
    this.r = r;
    setAnisotropy(Math.min(8, r.capabilities.getMaxAnisotropy()));
    this.scale = 1;     // dynamic resolution multiplier
    this.quality = 'medium';
    this.composer = null;
    this.grade = null;
    this.bloom = null;
    this.fade = 0;
  }

  setQuality(q) {
    this.quality = q;
    const r = this.r, T = tier(q);
    this.tier = T;
    // every tier keeps real-time shadows; LOW uses a smaller, harder-filtered map
    r.shadowMap.enabled = true;
    r.shadowMap.type = T.shadowSoft ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    r.shadowMap.needsUpdate = true;
    this.maxRatio = T.maxRatio;
    this.game.camera.far = T.far;
    this.game.camera.updateProjectionMatrix();
    this.scale = 1;
    this.composer?.dispose?.();
    this.composer = null;
    const scene = this.game.scene, cam = this.game.camera;
    const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: T.msaa });
    const comp = new EffectComposer(r, target);
    comp.addPass(new RenderPass(scene, cam));
    if (T.bloom) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.22, 0.6, 0.9);
      comp.addPass(this.bloom);
    } else this.bloom = null;
    this.grade = new ShaderPass(GradeShader);
    comp.addPass(this.grade);
    comp.addPass(new OutputPass());
    this.composer = comp;
    this.resize();
  }

  pixelRatio() {
    const dpr = Math.min(window.devicePixelRatio || 1, this.maxRatio || 1.5);
    return Math.max(0.5, dpr * this.scale);
  }

  resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    const pr = this.pixelRatio();
    this.r.setPixelRatio(pr);
    this.r.setSize(w, h);
    if (this.composer) { this.composer.setPixelRatio(pr); this.composer.setSize(w, h); }
    if (this.grade) this.grade.uniforms.resolution.value.set(w * pr, h * pr);
    if (this.bloom) this.bloom.resolution.set(w * pr / 2, h * pr / 2);
    const cam = this.game.camera;
    cam.aspect = w / h;
    this.game.cam?.updateFov();
    cam.updateProjectionMatrix();
  }

  setPost(p = {}) {
    if (!this.grade) return;
    const u = this.grade.uniforms;
    u.saturation.value = p.saturation ?? 1.05;
    u.contrast.value = p.contrast ?? 1.0;
    u.brightness.value = p.brightness ?? 0;
    u.lift.value.set(p.lift ?? 0x000000);
    u.gain.value.set(p.gain ?? 0xffffff);
    u.vignette.value = this.game.settings.data.vignette ? (p.vignette ?? 0.28) : 0;
    u.grain.value = this.game.settings.data.grain ? (p.grain ?? 0.025) : 0;
    u.aberration.value = p.aberration ?? 0;
    u.wave.value = p.wave ?? 0;
    u.scan.value = p.scan ?? 0;
    u.haze.value = p.haze ?? 0;
    u.hazeColor.value.set(p.hazeColor ?? 0xffffff);
    if (this.bloom) this.bloom.strength = p.bloom ?? 0.22;
    this.post = p;
  }

  render(t) {
    this.r.info.reset();
    if (this.grade) {
      const u = this.grade.uniforms;
      u.time.value = t;
      u.fade.value = this.fade;
      this.composer.render();
    } else this.r.render(this.game.scene, this.game.camera);
  }
}
