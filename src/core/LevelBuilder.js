// LevelBuilder: authoring helpers that turn simple box/wall/room calls into
// merged, vertex-shaded static geometry plus collision volumes.
//
// Static geometry is batched per material and merged at finalize() so each
// level renders with a small number of draw calls. Vertex colors carry a cheap
// "baked" contact-occlusion gradient near floors and ceilings.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { makeMaterial, quality } from './Materials.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { contactStrip } from './Architecture.js';
import { blobShadowTex } from '../utils/Textures.js';
import { validateLevel } from '../utils/GeometryValidator.js';

const VALIDATE = typeof location !== 'undefined' && /[?&]validate/.test(location.search);

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _c = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0);

export class LevelBuilder {
  constructor(level) {
    this.level = level;
    this.buckets = new Map();
    this.mats = new Map();
    this.plain = this.mat('__plain', { color: 0xffffff, roughness: 0.8 });
    this.placed = new Set();   // duplicate-placement guard
    this.audit = [];           // axis-aligned boxes for validation
    this.warnings = [];
    this.propAudit = [];
  }

  // Returns false (and records a warning) for an exact duplicate of something already placed.
  _guard(kind, minX, minY, minZ, maxX, maxY, maxZ, mat) {
    if (![minX, minY, minZ, maxX, maxY, maxZ].every(Number.isFinite)) { this.warnings.push({ type: 'invalid-transform', kind }); return false; }
    const r = (v) => Math.round(v * 200);
    const key = `${mat.uuid}|${r(minX)},${r(minY)},${r(minZ)},${r(maxX)},${r(maxY)},${r(maxZ)}`;
    if (this.placed.has(key)) { this.warnings.push({ type: 'duplicate', kind, at: [minX, minY, minZ].map((v) => +v.toFixed(2)), mat: mat.name }); return false; }
    this.placed.add(key);
    return true;
  }

  // ---- materials ----
  mat(name, opts) {
    if (this.mats.has(name)) return this.mats.get(name);
    const m = makeMaterial(opts);
    m.name = name;
    this.mats.set(name, m);
    this.level.disposables.push(m);
    return m;
  }

  _push(geo, mat, cast = false) {
    const key = mat.uuid + (cast ? ':c' : '');
    let b = this.buckets.get(key);
    if (!b) { b = { mat, geos: [], cast }; this.buckets.set(key, b); }
    b.geos.push(geo);
  }

  _ensureAttrs(g) {
    let geo = g.index ? g.toNonIndexed() : g;
    if (geo !== g) g.dispose();
    const n = geo.attributes.position.count;
    if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
    if (!geo.attributes.normal) geo.computeVertexNormals();
    if (!geo.attributes.color) {
      const col = new Float32Array(n * 3).fill(1);
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    }
    for (const k of Object.keys(geo.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) geo.deleteAttribute(k);
    geo.clearGroups();
    return geo;
  }

  _shade(geo, { tint = 0xffffff, ao = true, floorY = 0, ceilY = null, aoStrength = 0.4 }) {
    const pos = geo.attributes.position, col = geo.attributes.color;
    _c.set(tint);
    for (let i = 0; i < pos.count; i++) {
      let f = 1;
      if (ao) {
        const dy = pos.getY(i) - floorY;
        f *= 1 - aoStrength * Math.exp(-Math.max(0, dy) * 2.6);
        if (ceilY !== null) f *= 1 - 0.18 * Math.exp(-Math.max(0, ceilY - pos.getY(i)) * 3);
      }
      col.setXYZ(i, col.getX(i) * _c.r * f, col.getY(i) * _c.g * f, col.getZ(i) * _c.b * f);
    }
  }

  // ---- primitives ----
  // Box with center x/z and bottom y.
  box(x, y, z, w, h, d, mat, o = {}) {
    const flat = h < 0.3 || w < 0.02 || d < 0.02;
    const rq = o.rotY ? ((o.rotY % (Math.PI / 2)) + Math.PI / 2) % (Math.PI / 2) : 0;
    const axisAligned = !o.rotX && !o.rotZ && (rq < 1e-3 || Math.PI / 2 - rq < 1e-3);
    if (axisAligned) {
      const swap = o.rotY && Math.abs(Math.cos(o.rotY)) < 0.5;
      const ax = swap ? d : w, az = swap ? w : d;
      if (!this._guard('box', x - ax / 2, y, z - az / 2, x + ax / 2, y + h, z + az / 2, mat)) return null;
      this.audit.push({ min: [x - ax / 2, y, z - az / 2], max: [x + ax / 2, y + h, z + az / 2], mat, visible: !(mat.visible === false), transparent: mat.transparent, ceiling: !!o.isCeiling });
    }
    const ao = o.ao ?? !flat;
    const hs = ao ? Math.min(10, Math.max(1, Math.ceil(h / 0.35))) : 1;
    let g = new THREE.BoxGeometry(w, h, d, 1, hs, 1);
    const [sx, sy] = o.texScale || mat.userData.texScale || [2, 2];
    const uv = g.attributes.uv;
    const counts = [2 * (hs + 1), 2 * (hs + 1), 4, 4, 2 * (hs + 1), 2 * (hs + 1)];
    let vi = 0;
    if (!o.stretch) {
      counts.forEach((cnt, face) => {
        for (let k = 0; k < cnt; k++, vi++) {
          let u = uv.getX(vi), v = uv.getY(vi);
          if (face < 2) { u = u * d / sx + (z - d / 2) / sx; v = v * h / sy + y / sy; }
          else if (face < 4) { u = u * w / sx + (x - w / 2) / sx; v = v * d / sy + (z - d / 2) / sy; }
          else { u = u * w / sx + (x - w / 2) / sx; v = v * h / sy + y / sy; }
          uv.setXY(vi, u, v);
        }
      });
    }
    g.translate(0, h / 2, 0);
    if (o.rotY) g.rotateY(o.rotY);
    if (o.rotX) g.rotateX(o.rotX);
    if (o.rotZ) g.rotateZ(o.rotZ);
    g.translate(x, y, z);
    g = this._ensureAttrs(g);
    this._shade(g, { tint: o.tint ?? 0xffffff, ao, floorY: o.floorY ?? y, ceilY: o.ceilY ?? null, aoStrength: o.aoStrength ?? 0.4 });
    // outdoor architecture casts sun shadows; interior shells do not (they would block the key light)
    const cast = o.cast ?? (!!this.level.outdoor && !flat && h > 0.5 && !mat.transparent);
    this._push(g, mat, cast);
    if (o.collide !== false && !o.noCollide) {
      if (o.rotY && !o.rotX && !o.rotZ) this.level.addOBB(x, y, z, w, h, d, o.rotY, o.surface);
      else {
        g.computeBoundingBox();
        const bb = g.boundingBox;
        this.level.addCollider(bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z, o.surface);
      }
    }
    return g;
  }

  // Walkable slab whose top surface is at y.
  floor(x0, z0, x1, z1, y, mat, o = {}) {
    const t = o.thick ?? 0.2;
    return this.box((x0 + x1) / 2, y - t, (z0 + z1) / 2, Math.abs(x1 - x0), t, Math.abs(z1 - z0), mat, { ao: false, ...o });
  }

  ceiling(x0, z0, x1, z1, y, mat, o = {}) {
    // 1 cm inset so a ceiling's edge never lies in the same plane as a wall face
    return this.box((x0 + x1) / 2, y, (z0 + z1) / 2, Math.abs(x1 - x0) - 0.02, o.thick ?? 0.15, Math.abs(z1 - z0) - 0.02, mat, { ao: false, collide: false, isCeiling: true, ...o });
  }

  // Wall along a segment with optional openings [{at, w, h, y0}].
  wall(x0, z0, x1, z1, y, h, mat, o = {}) {
    const t = o.thick ?? 0.2;
    const dx = x1 - x0, dz = z1 - z0, len = Math.hypot(dx, dz);
    const ang = Math.atan2(-dz, dx);
    // group openings that share a column (e.g. a door with windows stacked above it)
    const raw = (o.openings || []).map((op) => ({ a: op.at - op.w / 2, b: op.at + op.w / 2, y0: op.y0 ?? 0, y1: (op.y0 ?? 0) + (op.h ?? 2.2) })).sort((p, q) => p.a - q.a);
    const cols = [];
    for (const op of raw) {
      const last = cols[cols.length - 1];
      if (last && op.a < last.b - 1e-3) { last.a = Math.min(last.a, op.a); last.b = Math.max(last.b, op.b); last.holes.push([op.y0, op.y1]); }
      else cols.push({ a: op.a, b: op.b, holes: [[op.y0, op.y1]] });
    }
    const pieces = [];
    let cur = 0;
    for (const col of cols) {
      if (col.a > cur) pieces.push([cur, col.a, 0, h]);
      const holes = col.holes.sort((p, q) => p[0] - q[0]);
      let y = 0;
      for (const [y0, y1] of holes) { if (y0 > y) pieces.push([col.a, col.b, y, y0]); y = Math.max(y, y1); }
      if (y < h) pieces.push([col.a, col.b, y, h]);
      cur = col.b;
    }
    if (cur < len) pieces.push([cur, len, 0, h]);
    const ux = dx / len, uz = dz / len, nx = -uz, nz = ux;
    for (const [a, b, yb, yt] of pieces) {
      if (b - a < 0.001 || yt - yb < 0.001) continue;
      const mid = (a + b) / 2;
      const cx = x0 + ux * mid, cz = z0 + uz * mid;
      this.box(cx, y + yb, cz, b - a, yt - yb, t, mat, { ...o, rotY: ang, floorY: y, ceilY: y + h });
      // baked contact shading where the wall meets the floor (both faces)
      if (yb === 0 && h >= 1.5 && o.contact !== false && o.collide !== false && !mat.transparent) {
        const ax = x0 + ux * a, az = z0 + uz * a, bx = x0 + ux * b, bz = z0 + uz * b, ht = t / 2;
        contactStrip(this, ax + nx * ht, az + nz * ht, bx + nx * ht, bz + nz * ht, y);
        contactStrip(this, bx - nx * ht, bz - nz * ht, ax - nx * ht, az - nz * ht, y);
      }
    }
  }

  // Rectangular room. doors: {n:[{at,w,h}], s:[], e:[], w:[]} measured from the min corner.
  room(x0, z0, x1, z1, y, h, o = {}) {
    const t = o.thick ?? 0.2, op = o.openings || {};
    if (o.floor) this.floor(x0, z0, x1, z1, y, o.floor, { surface: o.surface });
    if (o.ceil) this.ceiling(x0, z0, x1, z1, y + h, o.ceil);
    if (o.wall) {
      const wo = { thick: t, ...(o.wallOpts || {}) };
      if (!o.skip?.includes('s')) this.wall(x0, z0 - t / 2, x1, z0 - t / 2, y, h, o.wall, { ...wo, openings: op.s });
      if (!o.skip?.includes('n')) this.wall(x0, z1 + t / 2, x1, z1 + t / 2, y, h, o.wall, { ...wo, openings: op.n });
      if (!o.skip?.includes('w')) this.wall(x0 - t / 2, z0 - t, x0 - t / 2, z1 + t, y, h, o.wall, { ...wo, openings: (op.w || []).map((p) => ({ ...p, at: p.at + t })) });
      if (!o.skip?.includes('e')) this.wall(x1 + t / 2, z0 - t, x1 + t / 2, z1 + t, y, h, o.wall, { ...wo, openings: (op.e || []).map((p) => ({ ...p, at: p.at + t })) });
    }
  }

  // Arbitrary geometry into the static batch.
  add(geo, mat, o = {}) {
    let g = geo;
    _m.compose(_v.set(o.x ?? 0, o.y ?? 0, o.z ?? 0), _q.setFromEuler(new THREE.Euler(o.rotX ?? 0, o.rotY ?? 0, o.rotZ ?? 0)), new THREE.Vector3().setScalar(1).multiply(o.scaleV || new THREE.Vector3(o.scale ?? 1, o.scale ?? 1, o.scale ?? 1)));
    g.applyMatrix4(_m);
    g = this._ensureAttrs(g);
    this._shade(g, { tint: o.tint ?? 0xffffff, ao: o.ao ?? false, floorY: o.floorY ?? (o.y ?? 0) });
    this._push(g, mat, o.cast);
    if (o.collide) {
      g.computeBoundingBox();
      const bb = g.boundingBox;
      this.level.addCollider(bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z, o.surface);
    }
    return g;
  }

  // Multi-part prop with per-part colors merged into the shared plain material.
  // parts: [cx, cy(bottom), cz, w, h, d, color]
  prop(parts, x, y, z, rotY = 0, o = {}) {
    const geos = [];
    const box = new THREE.Box3();
    for (const p of parts) {
      const [cx, cy, cz, w, h, d, color, shape] = p;
      let g;
      if (shape === 'cyl') g = new THREE.CylinderGeometry(w / 2, w / 2, h, 12);
      else if (shape === 'sphere') g = new THREE.SphereGeometry(w / 2, 12, 8);
      else if (shape === 'cone') g = new THREE.ConeGeometry(w / 2, h, 12);
      else {
        // bevelled edges read as real furniture instead of raw cubes
        const m = Math.min(w, h, d);
        g = m > 0.035 && !o.sharp ? new RoundedBoxGeometry(w, h, d, quality.level === 'low' ? 1 : 2, Math.min(0.02, m * 0.22)) : new THREE.BoxGeometry(w, h, d);
      }
      if (shape === 'sphere') g.scale(1, h / w, d / w);
      g.translate(cx, cy + h / 2, cz);
      g.rotateY(rotY);
      g.translate(x, y, z);
      g = this._ensureAttrs(g);
      this._shade(g, { tint: color ?? 0xcccccc, ao: true, floorY: y, aoStrength: 0.3 });
      g.computeBoundingBox();
      box.union(g.boundingBox);
      geos.push(g);
    }
    for (const g of geos) this._push(g, o.mat || this.plain, o.cast ?? true);
    if (o.collide) this.level.addCollider(box.min.x, box.min.y, box.min.z, box.max.x, box.max.y, box.max.z, o.surface);
    this.propAudit.push({ min: box.min.toArray(), max: box.max.toArray(), name: o.name || 'prop' });
    if (o.blob !== false) this.blob(x, y, z, (box.max.x - box.min.x) * 1.25, (box.max.z - box.min.z) * 1.25);
    return box;
  }

  // Soft contact shadow decal.
  blob(x, y, z, w, d) {
    if (!this.blobMat) {
      this.blobMat = this.mat('__blob', { map: blobShadowTex(), transparent: true, depthWrite: false, unlit: true, vertexColors: false, color: 0xffffff, polygonOffset: true });
      this.blobMat.userData.texScale = [1, 1];
    }
    const g = new THREE.PlaneGeometry(w, d);
    g.rotateX(-Math.PI / 2);
    g.translate(x, y + 0.012, z);
    this._push(this._ensureAttrs(g), this.blobMat);
  }

  // Straight stairs: visual steps + one smooth ramp for collision.
  // dir: '+x' | '-x' | '+z' | '-z' (direction you walk to go up)
  stairs(x, z, y0, width, steps, rise, run, dir, mat, o = {}) {
    const total = steps * run, up = steps * rise;
    for (let i = 0; i < steps; i++) {
      const along = i * run + run / 2, h = (i + 1) * rise;
      let cx = x, cz = z, w = width, d = run;
      if (dir === '+x') { cx = x + along; w = run; d = width; }
      if (dir === '-x') { cx = x - along; w = run; d = width; }
      if (dir === '+z') { cz = z + along; }
      if (dir === '-z') { cz = z - along; }
      if (dir[1] === 'z') w = width;
      this.box(cx, y0 + h - Math.min(h, o.slab ?? h), cz, w, Math.min(h, o.slab ?? h), d, mat, { collide: false, ao: false, surface: o.surface });
    }
    let r;
    if (dir === '+x') r = [x, z - width / 2, x + total, z + width / 2, 'x', y0, y0 + up];
    if (dir === '-x') r = [x - total, z - width / 2, x, z + width / 2, 'x', y0 + up, y0];
    if (dir === '+z') r = [x - width / 2, z, x + width / 2, z + total, 'z', y0, y0 + up];
    if (dir === '-z') r = [x - width / 2, z - total, x + width / 2, z, 'z', y0 + up, y0];
    this.level.addRamp(...r, o.surface);
    return { total, up };
  }

  ramp(x0, z0, x1, z1, axis, yA, yB, surface) { this.level.addRamp(x0, z0, x1, z1, axis, yA, yB, surface); }

  // Instanced mesh helper for many copies of one geometry.
  instanced(geo, mat, transforms, o = {}) {
    const mesh = new THREE.InstancedMesh(geo, mat, transforms.length);
    const dummy = new THREE.Object3D();
    transforms.forEach((t, i) => {
      dummy.position.set(t[0], t[1], t[2]);
      dummy.rotation.set(0, t[3] || 0, 0);
      dummy.scale.setScalar(t[4] || 1);
      if (t[5]) dummy.scale.set(t[4] || 1, t[5], t[4] || 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = !!o.cast;
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    this.level.group.add(mesh);
    this.level.disposables.push(geo);
    return mesh;
  }

  finalize() {
    if (VALIDATE) {
      const issues = validateLevel(this.audit, this.propAudit);
      this.level.report = { warnings: this.warnings, issues };
      console.info(`[validate] ${this.level.id}: ${issues.length} issues, ${this.warnings.length} warnings`);
    }
    for (const b of this.buckets.values()) {
      const merged = mergeGeometries(b.geos, false);
      b.geos.forEach((g) => g.dispose());
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new THREE.Mesh(merged, b.mat);
      mesh.matrixAutoUpdate = false;
      mesh.castShadow = b.cast;
      mesh.receiveShadow = !b.mat.transparent;
      this.level.group.add(mesh);
      this.level.disposables.push(merged);
    }
    this.buckets.clear();
  }
}

export { UP };
