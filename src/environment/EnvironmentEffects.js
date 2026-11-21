// Grass fields with wind, flickering fluorescent fixtures, floating objects,
// instanced trees and other reusable environmental details.
import * as THREE from 'three';
import { makeMaterial, quality } from '../core/Materials.js';
import { rng, leafTex, barkTex, glowTex } from '../utils/Textures.js';

const windUniforms = { time: { value: 0 }, strength: { value: 1 } };
export function tickWind(t) { windUniforms.time.value = t; }

function bladeGeometry(h, w) {
  // Two-sided blade built from both windings so normals can point up on both
  // faces (avoids dark back faces with DoubleSide lighting).
  const g = new THREE.BufferGeometry();
  const seg = 2, pos = [], col = [], nrm = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, ww = w * (1 - t * 0.9);
    pos.push(-ww / 2, t * h, 0, ww / 2, t * h, 0);
    const c = 0.72 + t * 0.42;
    col.push(c, c, c, c, c, c);
    nrm.push(0, 1, 0.15, 0, 1, 0.15);
  }
  for (let i = 0; i < seg; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2, a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setIndex(idx);
  return g;
}

function windMaterial(color, sway, bh = 1) {
  const m = makeMaterial({ color, vertexColors: true, side: THREE.FrontSide, roughness: 0.9 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.time = windUniforms.time;
    sh.uniforms.sway = { value: sway };
    sh.uniforms.bh = { value: bh };
    sh.vertexShader = 'uniform float time; uniform float sway; uniform float bh;\n' + sh.vertexShader.replace('#include <project_vertex>', `
      vec4 mvPosition = vec4( transformed, 1.0 );
      #ifdef USE_INSTANCING
        mvPosition = instanceMatrix * mvPosition;
      #endif
      float hgt = clamp(position.y / bh, 0.0, 1.0);
      float w = sin(time * 1.6 + mvPosition.x * 0.35 + mvPosition.z * 0.22) * 0.6 + sin(time * 2.7 + mvPosition.x * 0.9) * 0.25;
      float gust = 0.5 + 0.5 * sin(time * 0.35 + mvPosition.x * 0.05 + mvPosition.z * 0.03);
      mvPosition.x += w * sway * hgt * hgt * (0.6 + gust);
      mvPosition.z += w * sway * 0.5 * hgt * hgt;
      mvPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * mvPosition;`);
  };
  m.customProgramCacheKey = () => 'wind';
  return m;
}

// Scatter grass blades across an area, chunked for frustum culling.
// avoid(x,z) => true to skip a spot; heightAt(x,z) terrain
export function grassField(level, { x0, z0, x1, z1, heightAt, avoid = null, density = 1, height = 0.45, width = 0.06, color = 0x6c9a48, tint = [0.85, 1.15], sway = 0.12, chunk = 24, seed = 3 }) {
  const counts = { low: 0.3, medium: 0.55, high: 0.95 };
  const per = density * (counts[quality.level] ?? 0.7);
  const geo = bladeGeometry(1, width / height);
  geo.scale(height, height, height);
  const mat = windMaterial(color, sway, height);
  level.disposables.push(geo, mat);
  const r = rng(seed);
  const dummy = new THREE.Object3D();
  const c = new THREE.Color();
  const chunks = [];
  for (let cx = x0; cx < x1; cx += chunk) for (let cz = z0; cz < z1; cz += chunk) {
    const n = Math.floor(chunk * chunk * 5 * per);
    const mats = [];
    for (let i = 0; i < n; i++) {
      const x = cx + r() * chunk, z = cz + r() * chunk;
      if (x > x1 || z > z1) continue;
      if (avoid && avoid(x, z)) continue;
      mats.push([x, heightAt ? heightAt(x, z) : 0, z, r() * Math.PI, 0.6 + r() * 0.8]);
    }
    if (!mats.length) continue;
    const mesh = new THREE.InstancedMesh(geo, mat, mats.length);
    mats.forEach((t, i) => {
      dummy.position.set(t[0], t[1], t[2]); dummy.rotation.set(0, t[3], 0); dummy.scale.set(1, t[4], 1); dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      const k = tint[0] + r() * (tint[1] - tint[0]);
      mesh.setColorAt(i, c.setRGB(k, k * (0.95 + r() * 0.1), k));
    });
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    mesh.userData.center = new THREE.Vector3(cx + chunk / 2, mats[0][1], cz + chunk / 2);
    level.group.add(mesh);
    chunks.push(mesh);
  }
  // distance culling: grass only near the viewer
  const far = { low: 38, medium: 55, high: 80 }[quality.level] ?? 55;
  let timer = 0;
  const game = level.game;
  const cull = () => {
    const p = game.camera.position;
    for (const m of chunks) { const cc = m.userData.center; m.visible = Math.hypot(cc.x - p.x, cc.z - p.z) < far + chunk * 0.7; }
  };
  cull();
  level.onUpdate((dt) => { timer -= dt; if (timer <= 0) { timer = 0.3; cull(); } });
}

// Instanced stylised trees (trunk + foliage blobs). kind: 'round' | 'pine' | 'poplar' | 'lollipop'
export function trees(level, list, { kind = 'round', leaf = 0x4f7f3a, trunk = 0x5b4636, snow = false, cast = true } = {}) {
  if (!list.length) return;
  const tm = makeMaterial({ map: barkTex(), color: trunk === 0x5b4636 ? 0xffffff : trunk, vertexColors: false, texScale: [1, 1] });
  const lm = makeMaterial({ map: leafTex(leaf), color: 0xffffff, vertexColors: false, roughness: 0.95 });
  level.disposables.push(tm, lm);
  let tg, lg;
  if (kind === 'pine') {
    tg = new THREE.CylinderGeometry(0.12, 0.2, 2, 6); tg.translate(0, 1, 0);
    const parts = [];
    for (let i = 0; i < 4; i++) { const g = new THREE.ConeGeometry(1.7 - i * 0.35, 2.2, 8); g.translate(0, 1.6 + i * 1.25, 0); parts.push(g); }
    lg = mergeSimple(parts);
    if (snow) {
      const sg = [];
      for (let i = 0; i < 4; i++) { const g = new THREE.ConeGeometry(1.2 - i * 0.28, 0.9, 8); g.translate(0, 2.3 + i * 1.25, 0); sg.push(g); }
      const snowGeo = mergeSimple(sg);
      const sm = makeMaterial({ color: 0xf4f8ff, vertexColors: false, roughness: 0.9 });
      level.disposables.push(sm, snowGeo);
      instance(level, snowGeo, sm, list, false);
    }
  } else if (kind === 'poplar') {
    tg = new THREE.CylinderGeometry(0.1, 0.16, 2, 6); tg.translate(0, 1, 0);
    lg = new THREE.SphereGeometry(1, 10, 8); lg.scale(0.9, 3.2, 0.9); lg.translate(0, 4.2, 0);
  } else if (kind === 'lollipop') {
    tg = new THREE.CylinderGeometry(0.07, 0.09, 2.6, 6); tg.translate(0, 1.3, 0);
    lg = new THREE.SphereGeometry(1.1, 14, 10); lg.translate(0, 3.4, 0);
  } else {
    tg = new THREE.CylinderGeometry(0.16, 0.26, 3, 7); tg.translate(0, 1.5, 0);
    const parts = [];
    const r = rng(9);
    for (let i = 0; i < 5; i++) { const g = new THREE.IcosahedronGeometry(1.2 + r() * 0.6, 1); g.translate((r() - 0.5) * 1.8, 3.6 + r() * 1.4, (r() - 0.5) * 1.8); parts.push(g); }
    lg = mergeSimple(parts);
  }
  level.disposables.push(tg, lg);
  instance(level, tg, tm, list, cast);
  instance(level, lg, lm, list, cast);
  for (const t of list) level.addCollider(t[0] - 0.25 * (t[4] || 1), t[1], t[2] - 0.25 * (t[4] || 1), t[0] + 0.25 * (t[4] || 1), t[1] + 3, t[2] + 0.25 * (t[4] || 1), null);
}

function mergeSimple(geos) {
  const nonIdx = geos.map((g) => { const n = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(n.attributes)) if (!['position', 'normal', 'uv'].includes(k)) n.deleteAttribute(k); return n; });
  let total = 0; nonIdx.forEach((g) => { total += g.attributes.position.count; });
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) {
    const size = nonIdx[0].attributes[name].itemSize;
    const arr = new Float32Array(total * size);
    let off = 0;
    for (const g of nonIdx) { arr.set(g.attributes[name].array, off); off += g.attributes[name].array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, size));
  }
  geos.forEach((g) => g.dispose());
  return out;
}

function instance(level, geo, mat, list, cast) {
  const mesh = new THREE.InstancedMesh(geo, mat, list.length);
  const d = new THREE.Object3D();
  list.forEach((t, i) => { d.position.set(t[0], t[1], t[2]); d.rotation.set(0, t[3] || 0, 0); d.scale.setScalar(t[4] || 1); d.updateMatrix(); mesh.setMatrixAt(i, d.matrix); });
  mesh.castShadow = cast;
  mesh.receiveShadow = true;
  mesh.computeBoundingSphere();
  level.group.add(mesh);
  return mesh;
}

// Fluorescent ceiling panel with optional flicker and a soft glow sprite.
export function fluorescent(level, x, y, z, { w = 0.6, d = 1.2, flicker = false, color = 0xf4fbff, light = false, rotY = 0 } = {}) {
  const mat = new THREE.MeshBasicMaterial({ color, toneMapped: false });
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, d), mat);
  m.position.set(x, y - 0.02, z); m.rotation.y = rotY;
  level.group.add(m);
  level.disposables.push(mat, m.geometry);
  let pl = null;
  if (level.bake && !flicker) {
    const c = new THREE.Color(color);
    level.bakeLights.push({ pos: [x, y - 0.12, z], color: [c.r, c.g, c.b], intensity: 1.5 + w * d * 0.7, r0: 2.1, range: 11, down: true });
  }
  if (light) {
    pl = new THREE.PointLight(0xeef8ff, 4, 9, 1.6);
    pl.userData.dynamic = !!flicker;
    pl.position.set(x, y - 0.4, z);
    level.group.add(pl);
  }
  if (flicker) {
    const base = new THREE.Color(color), dark = base.clone().multiplyScalar(0.25);
    let timer = 0, on = true;
    level.onUpdate((dt) => {
      timer -= dt;
      if (timer <= 0) {
        on = !on;
        timer = on ? 0.4 + Math.random() * 4 : 0.03 + Math.random() * 0.12;
        mat.color.copy(on ? base : dark);
        if (pl) pl.intensity = on ? 4 : 0.3;
      }
    });
  }
  return m;
}

// Gentle bobbing / spinning motion for floating objects.
export function floater(level, obj, { amp = 0.25, speed = 0.6, spin = 0.1, phase = Math.random() * 6 } = {}) {
  const y0 = obj.position.y;
  level.onUpdate((dt, t) => {
    obj.position.y = y0 + Math.sin(t * speed + phase) * amp;
    obj.rotation.y += spin * dt;
  });
}

// Sprite glow halo for lamps.
export function halo(level, x, y, z, size = 1.2, color = '#fff2d0', opacity = 0.6) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(color), transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.position.set(x, y, z); s.scale.setScalar(size);
  level.group.add(s);
  if (level.bake && opacity > 0.15) {
    const c = new THREE.Color(color);
    level.bakeLights.push({ pos: [x, y, z], color: [c.r, c.g, c.b], intensity: opacity * size * 0.55, r0: Math.max(0.6, size * 0.7), range: Math.max(4, size * 5) });
  }
  level.disposables.push(s.material);
  return s;
}

// Things that move when you are not looking at them.
export function shyObject(level, obj, positions) {
  const game = level.game;
  const frustum = new THREE.Frustum(), m = new THREE.Matrix4();
  let idx = 0, unseen = 0;
  const box = new THREE.Box3();
  level.onUpdate((dt) => {
    const cam = game.camera;
    m.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    frustum.setFromProjectionMatrix(m);
    box.setFromObject(obj);
    if (frustum.intersectsBox(box)) { unseen = 0; return; }
    unseen += dt;
    if (unseen > 4) {
      idx = (idx + 1) % positions.length;
      const p = positions[idx];
      obj.position.set(p[0], p[1], p[2]);
      if (p[3] !== undefined) obj.rotation.y = p[3];
      unseen = -8;
    }
  });
}
