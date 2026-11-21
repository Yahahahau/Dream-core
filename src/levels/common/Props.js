// Shared environment pieces: houses, roofs, fences, poles, lamps and furniture.
import * as THREE from 'three';
import { sidingTex, roofTex, windowTex, fenceTex, doorTex, glowTex } from '../../utils/Textures.js';
import { makeMaterial } from '../../core/Materials.js';

export function gableRoofGeo(w, d, rise, over = 0.35) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 - over, 0); s.lineTo(w / 2 + over, 0); s.lineTo(0, rise); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: d + over * 2, bevelEnabled: false });
  g.translate(0, 0, -(d + over * 2) / 2);
  return g;
}

// Exterior of a house. Returns helpers in house-local space.
export function house(level, o) {
  const b = level.b;
  const { x, z, y = 0, w = 7, d = 6, h = 5.4, rotY = 0, wall = 0xe7dcc4, roof = 0x7a4a3a, trim = 0xffffff, door = 0x8a6a4a,
    floors = 2, windows = true, chimney = false, roofRise = 2.6, collide = true, frontDoor = true, sky = 0x5a6f88, porch = false, garage = false } = o;
  const c = Math.cos(rotY), s = Math.sin(rotY);
  const L = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  const wm = b.mat('siding' + wall, { map: sidingTex(wall), roughness: 0.85, texScale: [2, 2] });
  const rm = b.mat('roof' + roof, { map: roofTex(roof), roughness: 0.9, texScale: [1, 1] });
  const tm = b.mat('trim' + trim, { color: trim, roughness: 0.6 });
  const winM = b.mat('win' + sky, { map: windowTex(trim, sky, 4), roughness: 0.2, texScale: [1, 1] });
  const dm = b.mat('hdoor' + door, { map: doorTex(door, 'panel'), roughness: 0.6 });
  // body (sunk a little into the ground to sit on slopes)
  b.box(x, y - 1.2, z, w, h + 1.2, d, wm, { rotY, collide, floorY: y, aoStrength: 0.35 });
  // roof
  const rg = gableRoofGeo(w, d, roofRise);
  b.add(rg, rm, { x, y: y + h, z, rotY: rotY + Math.PI / 2 * 0, cast: true });
  // gable ends are part of the roof prism; trim boards
  const tb = (lx, ly, lz, bw, bh, bd) => { const p = L(lx, lz); b.box(p[0], y + ly, p[1], bw, bh, bd, tm, { rotY, collide: false, ao: false }); };
  tb(0, h - 0.12, d / 2 + 0.03, w + 0.1, 0.16, 0.08);
  tb(0, h - 0.12, -d / 2 - 0.03, w + 0.1, 0.16, 0.08);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) tb(sx * (w / 2 + 0.02), 0, sz * (d / 2 + 0.02), 0.14, h, 0.14);
  if (chimney) { const p = L(w * 0.25, -d * 0.1); b.box(p[0], y + h, p[1], 0.6, roofRise + 0.9, 0.6, tm, { rotY, collide: false, tint: 0xd8d0c8 }); }
  // windows on front/back and sides
  const win = (lx, ly, lz, ww, wh, face) => {
    const p = L(lx, lz);
    const ww2 = face === 'side' ? 0.06 : ww, wd = face === 'side' ? ww : 0.06;
    b.box(p[0], y + ly, p[1], ww2, wh, wd, winM, { rotY, collide: false, ao: false, stretch: true });
  };
  if (windows) {
    const cols = Math.max(2, Math.round(w / 2.4));
    for (let f = 0; f < floors; f++) {
      const ly = 0.9 + f * (h / floors);
      for (let i = 0; i < cols; i++) {
        const lx = -w / 2 + (i + 0.5) * (w / cols);
        if (f === 0 && frontDoor && Math.abs(lx) < 0.9) continue;
        win(lx, ly, d / 2 + 0.01, 0.9, 1.2, 'front');
        win(lx, ly, -d / 2 - 0.01, 0.9, 1.2, 'back');
      }
      win(w / 2 + 0.01, ly, 0, 0.9, 1.2, 'side');
      win(-w / 2 - 0.01, ly, 0, 0.9, 1.2, 'side');
    }
  }
  if (frontDoor) { const p = L(0, d / 2 + 0.02); b.box(p[0], y, p[1], 1.0, 2.1, 0.06, dm, { rotY, collide: false, ao: false, stretch: true }); }
  if (porch) { const p = L(0, d / 2 + 0.8); b.box(p[0], y - 0.4, p[1], 2.4, 0.55, 1.6, tm, { rotY, tint: 0xd9d2c4, surface: 'wood' }); }
  if (garage) { const p = L(w / 2 + 2, 0.3); b.box(p[0], y - 0.5, p[1], 3.6, 3.3, d - 0.6, wm, { rotY, floorY: y }); const q = L(w / 2 + 2, d / 2 - 0.29); b.box(q[0], y, q[1], 2.8, 2.3, 0.06, tm, { rotY, collide: false, tint: 0xf2f2ee }); const r = L(w / 2 + 2, 0.3); b.add(gableRoofGeo(3.6, d - 0.6, 1.2, 0.2), rm, { x: r[0], y: y + 2.8, z: r[1], rotY }); }
  return { L };
}

// Picket fence following a polyline, with fine-grained colliders.
export function fenceAlong(level, pts, heightAt, { h = 1.05, color = 0xf4f1ea, collide = true } = {}) {
  const pos = [], uv = [], idx = [];
  let dist = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x, z] = pts[i];
    if (i > 0) dist += Math.hypot(x - pts[i - 1][0], z - pts[i - 1][1]);
    const y = heightAt ? heightAt(x, z) : 0;
    pos.push(x, y - 0.05, z, x, y + h, z);
    uv.push(dist / 1.0, 0, dist / 1.0, 1);
    if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const m = makeMaterial({ map: fenceTex(), color, alphaTest: 0.5, side: THREE.DoubleSide, vertexColors: false, roughness: 0.8 });
  const mesh = new THREE.Mesh(g, m);
  mesh.castShadow = true; mesh.receiveShadow = true;
  level.group.add(mesh);
  level.disposables.push(g, m);
  if (collide) {
    for (let i = 1; i < pts.length; i++) {
      const [x0, z0] = pts[i - 1], [x1, z1] = pts[i];
      const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / 0.5));
      for (let k = 0; k < n; k++) {
        const t = (k + 0.5) / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t, y = heightAt ? heightAt(x, z) : 0;
        level.addCollider(x - 0.14, y - 0.5, z - 0.14, x + 0.14, y + h, z + 0.14);
      }
    }
  }
  return mesh;
}

// Sample a smooth curve through control points.
export function curvePoints(ctrl, step = 2) {
  const c = new THREE.CatmullRomCurve3(ctrl.map(([x, z]) => new THREE.Vector3(x, 0, z)));
  const n = Math.max(2, Math.ceil(c.getLength() / step));
  return c.getSpacedPoints(n).map((p) => [p.x, p.z]);
}

// Ribbon (roads, paths) draped over terrain.
export function ribbon(level, pts, width, heightAt, mat, { lift = 0.04, uvScale = 4 } = {}) {
  const pos = [], uv = [], idx = [];
  let dist = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x, z] = pts[i];
    const [nx, nz] = pts[Math.min(i + 1, pts.length - 1)], [px, pz] = pts[Math.max(i - 1, 0)];
    let dx = nx - px, dz = nz - pz; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
    const ox = -dz * width / 2, oz = dx * width / 2;
    if (i > 0) dist += Math.hypot(x - pts[i - 1][0], z - pts[i - 1][1]);
    const ya = heightAt ? heightAt(x + ox, z + oz) : 0, yb = heightAt ? heightAt(x - ox, z - oz) : 0;
    pos.push(x + ox, ya + lift, z + oz, x - ox, yb + lift, z - oz);
    uv.push(0, dist / uvScale, 1, dist / uvScale);
    if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  const mesh = new THREE.Mesh(g, mat);
  mesh.receiveShadow = true;
  level.group.add(mesh);
  level.disposables.push(g);
  return mesh;
}

// Distance from point to polyline (for keeping grass off roads etc).
export function distToPath(x, z, pts) {
  let best = Infinity;
  for (let i = 1; i < pts.length; i++) {
    const [ax, az] = pts[i - 1], [bx, bz] = pts[i];
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2));
    const d = Math.hypot(x - ax - dx * t, z - az - dz * t);
    if (d < best) best = d;
  }
  return best;
}

export function telephonePole(level, x, y, z, rotY = 0) {
  const b = level.b;
  b.prop([[0, 0, 0, 0.26, 8, 0.26, 0x6b5440, 'cyl'], [0, 7.2, 0, 2.2, 0.14, 0.14, 0x5a4636], [-0.9, 7.34, 0, 0.08, 0.16, 0.08, 0x9aa], [0.9, 7.34, 0, 0.08, 0.16, 0.08, 0x9aa]], x, y, z, rotY, { collide: true, blob: false });
}

export function wires(level, poles, sag = 0.9, color = 0x222222) {
  const m = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.7 });
  level.disposables.push(m);
  for (const side of [-0.9, 0.9]) {
    const pts = [];
    for (let i = 1; i < poles.length; i++) {
      const [ax, ay, az, ar] = poles[i - 1], [bx, by, bz, br] = poles[i];
      const oa = [Math.cos(ar || 0) * side, -Math.sin(ar || 0) * side], ob = [Math.cos(br || 0) * side, -Math.sin(br || 0) * side];
      for (let k = 0; k <= 12; k++) {
        const t = k / 12;
        pts.push(new THREE.Vector3(ax + oa[0] + (bx + ob[0] - ax - oa[0]) * t, ay + 7.4 + (by - ay) * t - Math.sin(t * Math.PI) * sag, az + oa[1] + (bz + ob[1] - az - oa[1]) * t));
      }
    }
    const g = new THREE.BufferGeometry().setFromPoints(pts);
    level.group.add(new THREE.Line(g, m));
    level.disposables.push(g);
  }
}

export function streetLamp(level, x, y, z, rotY = 0, { on = true, color = 0xffd9a0, light = false, height = 5 } = {}) {
  const b = level.b;
  b.prop([[0, 0, 0, 0.16, height, 0.16, 0x7d8088, 'cyl'], [0.7, height - 0.1, 0, 1.5, 0.1, 0.1, 0x7d8088], [1.35, height - 0.32, 0, 0.5, 0.22, 0.3, 0x5d6068]], x, y, z, rotY, { collide: true, blob: false });
  const c = Math.cos(rotY), s = Math.sin(rotY);
  const lx = x + 1.35 * c, lz = z - 1.35 * s;
  const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.24), new THREE.MeshBasicMaterial({ color: on ? color : 0x555555 }));
  bulb.position.set(lx, y + height - 0.34, lz); bulb.rotation.y = rotY;
  level.group.add(bulb);
  level.disposables.push(bulb.geometry, bulb.material);
  if (on) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex('#ffe2b0'), color, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    sp.position.set(lx, y + height - 0.4, lz); sp.scale.setScalar(2.6);
    level.group.add(sp); level.disposables.push(sp.material);
    // light pool on the ground
    const pool = new THREE.Mesh(new THREE.CircleGeometry(3.2, 24), new THREE.MeshBasicMaterial({ map: glowTex('#ffcf90'), color, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending }));
    pool.rotation.x = -Math.PI / 2; pool.position.set(lx, y + 0.03, lz);
    level.group.add(pool); level.disposables.push(pool.geometry, pool.material);
    if (light) { const pl = new THREE.PointLight(color, 8, 14, 1.5); pl.position.set(lx, y + height - 0.6, lz); level.group.add(pl); }
  }
  return [lx, lz];
}

// ---- furniture part lists for LevelBuilder.prop ----
export const F = {
  desk: (c = 0xc8a878, leg = 0x6b6f76) => [[0, 0.7, 0, 1.0, 0.05, 0.6, c], [-0.45, 0, -0.25, 0.04, 0.7, 0.04, leg], [0.45, 0, -0.25, 0.04, 0.7, 0.04, leg], [-0.45, 0, 0.25, 0.04, 0.7, 0.04, leg], [0.45, 0, 0.25, 0.04, 0.7, 0.04, leg], [0, 0.5, -0.1, 0.9, 0.12, 0.4, 0x8a8f96]],
  chair: (c = 0x4f7fb0, leg = 0x6b6f76) => [[0, 0.42, 0, 0.42, 0.04, 0.4, c], [0, 0.46, -0.19, 0.42, 0.42, 0.03, c], [-0.18, 0, -0.17, 0.03, 0.44, 0.03, leg], [0.18, 0, -0.17, 0.03, 0.44, 0.03, leg], [-0.18, 0, 0.17, 0.03, 0.44, 0.03, leg], [0.18, 0, 0.17, 0.03, 0.44, 0.03, leg]],
  table: (c = 0xb08a60, w = 1.4, d = 0.9, h = 0.74) => [[0, h - 0.05, 0, w, 0.05, d, c], [-w / 2 + 0.06, 0, -d / 2 + 0.06, 0.06, h - 0.05, 0.06, c], [w / 2 - 0.06, 0, -d / 2 + 0.06, 0.06, h - 0.05, 0.06, c], [-w / 2 + 0.06, 0, d / 2 - 0.06, 0.06, h - 0.05, 0.06, c], [w / 2 - 0.06, 0, d / 2 - 0.06, 0.06, h - 0.05, 0.06, c]],
  roundTable: (c = 0xf2f2f2, r = 0.45) => [[0, 0.72, 0, r * 2, 0.04, r * 2, c, 'cyl'], [0, 0, 0, 0.08, 0.72, 0.08, 0x777777, 'cyl'], [0, 0, 0, 0.5, 0.03, 0.5, 0x777777, 'cyl']],
  sofa: (c = 0x9a6a7a) => [[0, 0.2, 0, 2.0, 0.25, 0.85, c], [0, 0.2, -0.33, 2.0, 0.65, 0.2, c], [-0.95, 0.2, 0, 0.18, 0.42, 0.85, c], [0.95, 0.2, 0, 0.18, 0.42, 0.85, c], [0, 0, 0, 1.9, 0.2, 0.75, 0x4a3a30], [-0.45, 0.45, 0.05, 0.86, 0.1, 0.62, c], [0.45, 0.45, 0.05, 0.86, 0.1, 0.62, c]],
  armchair: (c = 0x7a8f6a) => [[0, 0.2, 0, 0.9, 0.25, 0.8, c], [0, 0.2, -0.3, 0.9, 0.65, 0.2, c], [-0.4, 0.2, 0, 0.15, 0.42, 0.8, c], [0.4, 0.2, 0, 0.15, 0.42, 0.8, c], [0, 0, 0, 0.8, 0.2, 0.7, 0x4a3a30]],
  bed: (c = 0xe8e2f0, frame = 0x8a6a4a) => [[0, 0, 0, 1.5, 0.35, 2.1, frame], [0, 0.35, 0.05, 1.4, 0.22, 1.95, 0xf6f4ef], [0, 0.57, 0.25, 1.42, 0.06, 1.5, c], [0, 0.57, -0.75, 1.1, 0.14, 0.4, 0xffffff], [0, 0, -1.05, 1.5, 1.0, 0.08, frame]],
  shelf: (c = 0x8a6a4a, w = 1.0, h = 1.9) => { const p = [[0, 0, 0, w, h, 0.04, c], [-w / 2, 0, 0.15, 0.04, h, 0.3, c], [w / 2, 0, 0.15, 0.04, h, 0.3, c]]; for (let i = 0; i < 5; i++) p.push([0, i * h / 4.2, 0.15, w, 0.03, 0.3, c]); for (let i = 0; i < 4; i++) for (let k = 0; k < 6; k++) p.push([-w / 2 + 0.1 + k * (w - 0.2) / 6, i * h / 4.2 + 0.03, 0.15, 0.1, 0.22 + (k * 7 % 5) * 0.02, 0.22, [0xb04a4a, 0x4a6ab0, 0xd8c070, 0x5a9a6a, 0x8a5aa0, 0xe8e0d0][(i + k) % 6]]); return p; },
  tvOld: () => [[0, 0, 0, 0.9, 0.5, 0.5, 0x6a4a30], [0, 0.5, 0, 0.7, 0.55, 0.55, 0x2b2b2b], [0, 1.05, -0.05, 0.02, 0.3, 0.02, 0x999999]],
  crt: (c = 0xd8d2c0) => [[0, 0, -0.05, 0.42, 0.34, 0.4, c], [0, 0.04, 0.12, 0.36, 0.3, 0.08, c]],
  fridge: () => [[0, 0, 0, 0.75, 1.75, 0.7, 0xf0ece0], [0.3, 0.9, 0.36, 0.03, 0.5, 0.03, 0xbbbbbb], [0.3, 0.3, 0.36, 0.03, 0.3, 0.03, 0xbbbbbb]],
  counter: (w = 2, c = 0xe8e2d0, top = 0x9a8a70) => [[0, 0, 0, w, 0.88, 0.6, c], [0, 0.88, 0, w + 0.04, 0.05, 0.64, top]],
  stove: () => [[0, 0, 0, 0.7, 0.9, 0.62, 0xf2f2ee], [0, 0.9, 0, 0.7, 0.03, 0.62, 0x222222], [0, 0.9, -0.28, 0.7, 0.2, 0.06, 0xf2f2ee]],
  lamp: (c = 0xf2e2c0) => [[0, 0, 0, 0.3, 0.03, 0.3, 0x3a3a3a, 'cyl'], [0, 0, 0, 0.03, 1.4, 0.03, 0x3a3a3a, 'cyl'], [0, 1.35, 0, 0.42, 0.32, 0.42, c, 'cone']],
  plant: (pot = 0xb86a4a, leaf = 0x4f8a4a) => [[0, 0, 0, 0.36, 0.36, 0.36, pot, 'cyl'], [0, 0.36, 0, 0.6, 0.7, 0.6, leaf, 'sphere'], [0.12, 0.8, 0.05, 0.36, 0.5, 0.36, leaf, 'sphere']],
  bench: (c = 0x9a7a5a, leg = 0x3a3a3a) => [[0, 0.42, 0, 1.8, 0.06, 0.45, c], [0, 0.48, -0.2, 1.8, 0.4, 0.05, c], [-0.8, 0, 0, 0.06, 0.42, 0.4, leg], [0.8, 0, 0, 0.06, 0.42, 0.4, leg]],
  locker: (c = 0x5f86a6) => [[0, 0, 0, 0.45, 1.85, 0.45, c]],
  rug: (c = 0x9a5a5a, w = 2.2, d = 1.5) => [[0, 0, 0, w, 0.015, d, c]],
  vending: (c = 0xc83a3a) => [[0, 0, 0, 0.9, 1.85, 0.75, c], [-0.12, 0.6, 0.38, 0.55, 1.0, 0.02, 0xbfd8e8], [0.3, 0.8, 0.38, 0.15, 0.4, 0.02, 0x333333]],
  arcade: (c = 0x3a2a6a) => [[0, 0, 0, 0.75, 1.8, 0.8, c], [0, 0.95, 0.2, 0.7, 0.12, 0.5, 0x222222], [0, 1.05, 0.12, 0.6, 0.55, 0.06, 0x111111]],
  stool: (c = 0xd84a5a) => [[0, 0.62, 0, 0.36, 0.06, 0.36, c, 'cyl'], [0, 0, 0, 0.05, 0.62, 0.05, 0x999999, 'cyl'], [0, 0, 0, 0.32, 0.02, 0.32, 0x999999, 'cyl']],
  wardrobe: (c = 0x8a6a4a) => [[0, 0, 0, 1.2, 2.0, 0.6, c], [-0.05, 0.9, 0.31, 0.03, 0.2, 0.02, 0xd0b070], [0.05, 0.9, 0.31, 0.03, 0.2, 0.02, 0xd0b070]],
  piano: () => [[0, 0, 0, 1.5, 1.25, 0.6, 0x2a1e18], [0, 0.72, 0.32, 1.4, 0.08, 0.25, 0xf4f0e6], [0, 0.8, 0.3, 1.4, 0.05, 0.22, 0x111111]],
};

export function texturedPlane(level, tex, x, y, z, w, h, rotY = 0, { unlit = false, emissive = false, opacity = 1, double = false, alpha = false } = {}) {
  const m = unlit ? new THREE.MeshBasicMaterial({ map: tex, transparent: opacity < 1 || alpha, alphaTest: alpha ? 0.02 : 0, opacity, side: double ? THREE.DoubleSide : THREE.FrontSide, toneMapped: !emissive })
    : makeMaterial({ map: tex, vertexColors: false, roughness: 0.7, emissive: emissive ? 0xffffff : 0x000000, emissiveMap: emissive ? tex : null, emissiveIntensity: emissive ? 0.6 : 1, side: double ? THREE.DoubleSide : THREE.FrontSide, transparent: opacity < 1, opacity });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m);
  mesh.position.set(x, y, z); mesh.rotation.y = rotY;
  level.group.add(mesh);
  level.disposables.push(m, mesh.geometry);
  return mesh;
}
