// Sky dome (gradient + sun + procedural clouds + optional eye field),
// distant billboard clouds and fog.
import * as THREE from 'three';
import { cloudSpriteTex, eyesPatternTex } from '../utils/Textures.js';

const skyVert = /* glsl */`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
  gl_Position.z = gl_Position.w; // push to far plane
}`;

const skyFrag = /* glsl */`
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
uniform vec3 sunDir; uniform vec3 sunColor; uniform float sunSize; uniform float sunGlow;
uniform float cloudCover; uniform float cloudOpacity; uniform vec3 cloudColor; uniform vec3 cloudShade; uniform float cloudScale; uniform float cloudHeight;
uniform float time; uniform float horizonSharp;
uniform sampler2D eyes; uniform float eyesMix; uniform float stars;
uniform float bandMix; uniform vec3 bandColor; uniform float bandLow; uniform float bandHigh;
varying vec3 vDir;
float hash(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.03; a*=0.5; } return v; }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col;
  if (h > 0.0) col = mix(horizon, top, pow(clamp(h,0.0,1.0), horizonSharp));
  else col = mix(horizon, bottom, pow(clamp(-h,0.0,1.0), 0.45));
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += sunColor * (pow(sd, sunSize) * 1.6 + pow(sd, 8.0) * 0.18 * sunGlow);
  if (h > -0.02 && cloudOpacity > 0.0) {
    vec2 uv = d.xz / (d.y + cloudHeight) * cloudScale;
    float n = fbm(uv + vec2(time * 0.006, time * 0.002));
    float n2 = fbm(uv * 2.3 - vec2(time * 0.004, 0.0));
    float c = smoothstep(1.0 - cloudCover, 1.0 - cloudCover + 0.28, n * 0.75 + n2 * 0.35);
    c *= smoothstep(-0.02, 0.12, h);
    vec3 cc = mix(cloudShade, cloudColor, smoothstep(0.3, 0.9, n2 + sd * 0.3));
    col = mix(col, cc, c * cloudOpacity);
  }
  if (bandMix > 0.0) {
    // heavy cloud bank (used for stormy/green sunset skies)
    vec2 uv = d.xz / (d.y + 0.25) * 1.4;
    float n = fbm(uv * 1.5 + vec2(time * 0.004, 0.0));
    float band = smoothstep(bandLow, bandHigh, h + (n - 0.5) * 0.18);
    col = mix(col, bandColor * (0.75 + n * 0.5), band * bandMix);
  }
  if (eyesMix > 0.0) {
    vec2 euv = vec2(atan(d.x, d.z) / 6.2831 * 4.0, h * 2.0);
    vec4 e = texture2D(eyes, euv);
    col = mix(col, e.rgb, eyesMix * smoothstep(-0.1, 0.05, h));
  }
  if (stars > 0.0 && h > 0.0) {
    vec2 sp = floor(d.xz / (d.y + 0.3) * 260.0);
    float s = step(0.9975, hash(sp)) * stars * smoothstep(0.0, 0.3, h);
    col += vec3(s);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export class Atmosphere {
  constructor(game) {
    this.game = game;
    this.uniforms = {
      top: { value: new THREE.Color(0x3f8fe6) }, horizon: { value: new THREE.Color(0xcfe7ff) }, bottom: { value: new THREE.Color(0x9bb7cc) },
      sunDir: { value: new THREE.Vector3(0.4, 0.6, -0.5) }, sunColor: { value: new THREE.Color(0xfff2d6) }, sunSize: { value: 900 }, sunGlow: { value: 1 },
      cloudCover: { value: 0.45 }, cloudOpacity: { value: 0.9 }, cloudColor: { value: new THREE.Color(0xffffff) }, cloudShade: { value: new THREE.Color(0xc9d6e8) }, cloudScale: { value: 0.8 }, cloudHeight: { value: 0.12 },
      time: { value: 0 }, horizonSharp: { value: 0.55 },
      eyes: { value: null }, eyesMix: { value: 0 }, stars: { value: 0 },
      bandMix: { value: 0 }, bandColor: { value: new THREE.Color(0x56705a) }, bandLow: { value: 0.12 }, bandHigh: { value: 0.32 },
    };
    this.material = new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader: skyVert, fragmentShader: skyFrag, side: THREE.BackSide, depthWrite: false, fog: false });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(500, 32, 16), this.material);
    this.dome.frustumCulled = false;
    this.dome.renderOrder = -10;
    this.group = new THREE.Group();
    this.group.add(this.dome);
    this.clouds = new THREE.Group();
    this.group.add(this.clouds);
    game.scene.add(this.group);
  }

  apply(p) {
    const u = this.uniforms, s = p.sky || {};
    u.top.value.set(s.top ?? 0x3f8fe6);
    u.horizon.value.set(s.horizon ?? 0xcfe7ff);
    u.bottom.value.set(s.bottom ?? s.horizon ?? 0x9bb7cc);
    u.sunDir.value.set(...(s.sunDir || p.sun?.dir || [0.4, 0.6, -0.5])).normalize();
    u.sunColor.value.set(s.sunColor ?? 0xfff2d6);
    u.sunSize.value = s.sunSize ?? 900;
    u.sunGlow.value = s.sunGlow ?? 1;
    u.cloudCover.value = s.cloudCover ?? 0.45;
    u.cloudOpacity.value = s.cloudOpacity ?? 0.9;
    u.cloudColor.value.set(s.cloudColor ?? 0xffffff);
    u.cloudShade.value.set(s.cloudShade ?? 0xc9d6e8);
    u.cloudScale.value = s.cloudScale ?? 0.8;
    u.horizonSharp.value = s.horizonSharp ?? 0.55;
    u.stars.value = s.stars ?? 0;
    u.bandMix.value = s.band ? 1 : 0;
    if (s.band) { u.bandColor.value.set(s.band.color); u.bandLow.value = s.band.low; u.bandHigh.value = s.band.high; }
    if (s.eyes) { u.eyes.value = eyesPatternTex(); u.eyesMix.value = s.eyes; } else u.eyesMix.value = 0;

    // billboard clouds
    for (const c of [...this.clouds.children]) { c.material.dispose(); this.clouds.remove(c); }
    const n = s.billboards ?? 0;
    const tint = s.billboardTint ?? '#ffffff';
    let seed = 7;
    const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    for (let i = 0; i < n; i++) {
      const m = new THREE.SpriteMaterial({ map: cloudSpriteTex(i % 5, tint), transparent: true, depthWrite: false, fog: false, opacity: 0.95 });
      const sp = new THREE.Sprite(m);
      const a = r() * Math.PI * 2, dist = 260 + r() * 160, hgt = (s.billboardHeight ?? 70) + r() * 90;
      sp.position.set(Math.cos(a) * dist, hgt, Math.sin(a) * dist);
      const sc = 90 + r() * 110;
      sp.scale.set(sc, sc * 0.62, 1);
      sp.renderOrder = -9;
      this.clouds.add(sp);
    }

    const f = p.fog;
    if (f) this.game.scene.fog = f.density ? new THREE.FogExp2(f.color, f.density) : new THREE.Fog(f.color, f.near ?? 30, f.far ?? 300);
    else this.game.scene.fog = null;
    this.baseFog = this.game.scene.fog ? { color: this.game.scene.fog.color.clone(), near: this.game.scene.fog.near, far: this.game.scene.fog.far, density: this.game.scene.fog.density } : null;
    this.cloudSpeed = s.cloudSpeed ?? 0.004;
  }

  update(dt, t) {
    this.uniforms.time.value = t;
    const cam = this.game.camera;
    this.group.position.copy(cam.position);
    this.clouds.rotation.y += dt * this.cloudSpeed;
  }
}
