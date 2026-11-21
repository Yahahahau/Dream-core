// Stylised water: animated ripple normals, fresnel sky reflection, sun glints,
// optional vertex swell for open ocean. Caustic overlays for pool floors.
import * as THREE from 'three';
import { causticsTex } from '../utils/Textures.js';

const vert = /* glsl */`
uniform float time; uniform float swell;
varying vec3 vWorld;
#include <fog_pars_vertex>
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  if (swell > 0.0) {
    w.y += (sin(w.x * 0.05 + time * 0.6) * 0.6 + sin(w.z * 0.07 - time * 0.5) * 0.5 + sin((w.x + w.z) * 0.13 + time) * 0.2) * swell;
  }
  vWorld = w.xyz;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const frag = /* glsl */`
uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 skyCol; uniform vec3 sunDir; uniform vec3 sunColor;
uniform float opacity; uniform float scale; uniform float strength; uniform float glint;
varying vec3 vWorld;
#include <fog_pars_fragment>
float h(vec2 p){
  return sin(p.x * 1.3 + time * 1.1) * 0.25 + sin(p.y * 1.7 - time * 0.9) * 0.22
       + sin((p.x + p.y) * 2.9 + time * 1.7) * 0.1 + sin((p.x * 0.7 - p.y) * 4.3 - time * 2.3) * 0.06;
}
void main(){
  vec2 p = vWorld.xz * scale;
  float e = 0.05;
  float hx = h(p + vec2(e, 0.0)) - h(p - vec2(e, 0.0));
  float hz = h(p + vec2(0.0, e)) - h(p - vec2(0.0, e));
  vec3 n = normalize(vec3(-hx * strength, 1.0, -hz * strength));
  vec3 v = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0) * 0.85 + 0.06;
  float dist = length(cameraPosition - vWorld);
  vec3 base = mix(shallow, deep, clamp(dist * 0.015, 0.0, 1.0) * 0.6 + 0.2);
  vec3 col = mix(base, skyCol, fres);
  vec3 r = reflect(-normalize(sunDir), n);
  float spec = pow(max(dot(r, v), 0.0), 180.0) * glint;
  col += sunColor * spec;
  float a = mix(opacity, 1.0, fres);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;

export function createWater(level, { x0, z0, x1, z1, y, radius = 0, deep = 0x0e6a78, shallow = 0x5fd0cf, sky = 0xe8fbff, opacity = 0.62, scale = 1.2, strength = 0.5, swell = 0, segments = 1, sunDir = [0.3, 1, 0.2], sunColor = 0xffffff, glint = 1.2, follow = false }) {
  const w = x1 - x0, d = z1 - z0;
  // round basins get round water so no corner pokes through the rim
  const geo = radius > 0 ? new THREE.CircleGeometry(radius, 40) : new THREE.PlaneGeometry(w, d, segments, segments);
  geo.rotateX(-Math.PI / 2);
  const uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, {
    time: { value: 0 }, deep: { value: new THREE.Color(deep) }, shallow: { value: new THREE.Color(shallow) },
    skyCol: { value: new THREE.Color(sky) }, sunDir: { value: new THREE.Vector3(...sunDir) }, sunColor: { value: new THREE.Color(sunColor) },
    opacity: { value: opacity }, scale: { value: scale }, strength: { value: strength }, swell: { value: swell }, glint: { value: glint },
  }]);
  const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vert, fragmentShader: frag, transparent: opacity < 1, fog: true, depthWrite: opacity >= 1 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((x0 + x1) / 2, y, (z0 + z1) / 2);
  mesh.renderOrder = 2;
  level.group.add(mesh);
  level.water.push({ x0, z0, x1, z1, y });
  const game = level.game;
  level.onUpdate((dt, t) => {
    uniforms.time.value = t;
    if (follow) {
      const c = game.camera.position;
      mesh.position.x = Math.round(c.x / 40) * 40; mesh.position.z = Math.round(c.z / 40) * 40;
    }
  });
  return mesh;
}

export function addCaustics(level, x0, z0, x1, z1, y, { color = 0x9fffff, strength = 0.35, scale = 0.25 } = {}) {
  const tex = causticsTex();
  const mat = new THREE.MeshBasicMaterial({ map: tex, color, transparent: true, opacity: strength, blending: THREE.AdditiveBlending, depthWrite: false });
  const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
  geo.rotateX(-Math.PI / 2);
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (x1 - x0) * scale, uv.getY(i) * (z1 - z0) * scale);
  const m = new THREE.Mesh(geo, mat);
  m.position.set((x0 + x1) / 2, y + 0.02, (z0 + z1) / 2);
  level.group.add(m);
  const t2 = tex.clone(); // second layer for interference
  t2.needsUpdate = true;
  const m2 = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: t2, color, transparent: true, opacity: strength * 0.7, blending: THREE.AdditiveBlending, depthWrite: false }));
  m2.position.copy(m.position); m2.position.y += 0.005;
  level.group.add(m2);
  level.disposables.push(t2);
  level.onUpdate((dt, t) => {
    tex.offset.set(t * 0.03, t * 0.017);
    t2.offset.set(-t * 0.021, t * 0.026);
  });
}
