// Camera-following particle volumes: snow, pollen, dust motes, sparkles.
import * as THREE from 'three';
import { glowTex } from '../utils/Textures.js';
import { quality } from '../core/Materials.js';

export function particles(level, { kind = 'snow', count = 1500, size = 0.12, color = 0xffffff, box = 40, height = 20, fall = 1.2, drift = 0.4, opacity = 0.9, additive = false }) {
  const mult = { low: 0.4, medium: 0.75, high: 1 }[quality.level] ?? 0.75;
  const n = Math.floor(count * mult);
  const pos = new Float32Array(n * 3), seed = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * box;
    pos[i * 3 + 1] = Math.random() * height;
    pos[i * 3 + 2] = (Math.random() - 0.5) * box;
    seed[i] = Math.random() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
  const uniforms = {
    time: { value: 0 }, center: { value: new THREE.Vector3() }, box: { value: box }, height: { value: height },
    fall: { value: fall }, drift: { value: drift }, size: { value: size }, color: { value: new THREE.Color(color) },
    map: { value: glowTex('#ffffff') }, opacity: { value: opacity }, pr: { value: 1 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    vertexShader: /* glsl */`
      uniform float time, box, height, fall, drift, size, pr; uniform vec3 center;
      attribute float seed; varying float vA;
      void main(){
        vec3 p = position;
        p.y = mod(p.y - time * fall * (0.7 + fract(seed) * 0.6) - center.y, height) + center.y - height * 0.35;
        p.x += sin(time * 0.5 + seed) * drift + cos(time * 0.23 + seed * 2.0) * drift * 0.5;
        p.z += cos(time * 0.4 + seed * 1.3) * drift;
        p.x = mod(p.x - center.x + box * 0.5, box) + center.x - box * 0.5;
        p.z = mod(p.z - center.z + box * 0.5, box) + center.z - box * 0.5;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = size * pr * 420.0 / -mv.z;
        vA = smoothstep(box * 0.5, box * 0.2, length(p.xz - center.xz));
        if (fall < 0.01) vA *= 0.5 + 0.5 * sin(time * 2.0 + seed * 7.0);
      }`,
    fragmentShader: /* glsl */`
      uniform sampler2D map; uniform vec3 color; uniform float opacity; varying float vA;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(color, t.a * opacity * vA); if (gl_FragColor.a < 0.01) discard; }`,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  level.group.add(pts);
  const game = level.game;
  level.onUpdate((dt, t) => {
    uniforms.time.value = t;
    uniforms.center.value.copy(game.camera.position);
    uniforms.pr.value = game.renderer.r.getPixelRatio();
  });
  return pts;
}
