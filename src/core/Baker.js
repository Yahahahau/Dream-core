// Static lighting baker.
//
// Runs once when a level is built. Static geometry is subdivided into a grid
// (resolution per quality tier) and every vertex gathers light by ray casting
// against the level's own architecture:
//
//   • point / fixture lights  — inverse-square falloff, cosine term, hard visibility
//   • sunlight                — direct, only where the sun ray escapes (so it falls
//                               through real window openings in window shapes)
//   • sky light               — cosine-weighted hemisphere rays that escape to the
//                               sky; interiors are lit from their actual windows
//   • bounce + ambient        — a small indirect term scaled by local openness
//                               (doubles as ambient occlusion: corners get dark)
//
// The result is written into the vertex colours of the merged static meshes,
// which then render unlit — a baked lightmap stored per vertex. Dynamic
// objects (doors, elevator doors, water, particles) stay real-time.
import * as THREE from 'three';

const CELL = 2;

export class OccluderGrid {
  constructor(boxes) {
    this.boxes = boxes;
    this.grid = new Map();
    this.stamp = new Uint32Array(boxes.length);
    this.mark = 1;
    let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    boxes.forEach((b, i) => {
      x0 = Math.min(x0, b.min[0]); x1 = Math.max(x1, b.max[0]); z0 = Math.min(z0, b.min[2]); z1 = Math.max(z1, b.max[2]);
      y0 = Math.min(y0, b.min[1]); y1 = Math.max(y1, b.max[1]);
      for (let x = Math.floor(b.min[0] / CELL); x <= Math.floor(b.max[0] / CELL); x++) for (let z = Math.floor(b.min[2] / CELL); z <= Math.floor(b.max[2] / CELL); z++) {
        const k = x * 100003 + z;
        let a = this.grid.get(k); if (!a) { a = []; this.grid.set(k, a); } a.push(i);
      }
    });
    this.bounds = { x0: x0 - 1, x1: x1 + 1, z0: z0 - 1, z1: z1 + 1, y0: y0 - 1, y1: y1 + 1 };
  }

  // true if the segment p + d*t, t∈(0,maxT) hits any box
  blocked(px, py, pz, dx, dy, dz, maxT) {
    const B = this.bounds;
    this.mark = (this.mark + 1) >>> 0 || 1;
    let cx = Math.floor(px / CELL), cz = Math.floor(pz / CELL);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tdx = dx !== 0 ? Math.abs(CELL / dx) : Infinity, tdz = dz !== 0 ? Math.abs(CELL / dz) : Infinity;
    let tmx = dx !== 0 ? ((dx > 0 ? (cx + 1) * CELL : cx * CELL) - px) / dx : Infinity;
    let tmz = dz !== 0 ? ((dz > 0 ? (cz + 1) * CELL : cz * CELL) - pz) / dz : Infinity;
    let t = 0;
    const inv = [1 / (dx || 1e-9), 1 / (dy || 1e-9), 1 / (dz || 1e-9)], o = [px, py, pz];
    for (let guard = 0; guard < 400 && t < maxT; guard++) {
      const list = this.grid.get(cx * 100003 + cz);
      if (list) for (const i of list) {
        if (this.stamp[i] === this.mark) continue;
        this.stamp[i] = this.mark;
        const b = this.boxes[i];
        let t0 = 0.0005, t1 = maxT;
        let hit = true;
        for (let a = 0; a < 3; a++) {
          let ta = (b.min[a] - o[a]) * inv[a], tb = (b.max[a] - o[a]) * inv[a];
          if (ta > tb) { const s = ta; ta = tb; tb = s; }
          if (ta > t0) t0 = ta; if (tb < t1) t1 = tb;
          if (t0 > t1) { hit = false; break; }
        }
        if (hit) return true;
      }
      // leave the occupied world early
      const yy = py + dy * t;
      if (yy > B.y1 || yy < B.y0) return false;
      if (tmx < tmz) { t = tmx; tmx += tdx; cx += stepX; } else { t = tmz; tmz += tdz; cz += stepZ; }
      if (cx * CELL > B.x1 + CELL || (cx + 1) * CELL < B.x0 - CELL || cz * CELL > B.z1 + CELL || (cz + 1) * CELL < B.z0 - CELL) return false;
    }
    return false;
  }
}

// cosine-weighted hemisphere directions (Fibonacci spiral)
function hemisphere(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const u = (i + 0.5) / n, phi = i * 2.399963;
    const r = Math.sqrt(u), x = r * Math.cos(phi), y = r * Math.sin(phi), z = Math.sqrt(1 - u);
    out.push([x, y, z]);
  }
  return out;
}

const _t = new THREE.Vector3(), _b = new THREE.Vector3(), _n = new THREE.Vector3();

export function bakeGeometries(geos, occ, cfg) {
  const t0 = performance.now();
  const lights = cfg.lights || [];
  const rays = hemisphere(cfg.skyRays || 8);
  const sky = new THREE.Color(cfg.sky?.color ?? 0xbfd8ff).multiplyScalar(cfg.sky?.intensity ?? 0);
  const amb = new THREE.Color(cfg.ambient?.color ?? 0xffffff).multiplyScalar(cfg.ambient?.intensity ?? 0.05);
  const bounce = new THREE.Color(cfg.bounce?.color ?? 0xffffff).multiplyScalar(cfg.bounce?.intensity ?? 0.15);
  const sunDir = cfg.sun ? new THREE.Vector3(...cfg.sun.dir).normalize() : null;
  const sunCol = cfg.sun ? new THREE.Color(cfg.sun.color).multiplyScalar(cfg.sun.intensity) : null;
  const skyLen = cfg.skyLength ?? 30;
  // spatial bucket for lights
  const LC = 8, lgrid = new Map();
  lights.forEach((l, i) => {
    const r = l.range;
    for (let x = Math.floor((l.pos[0] - r) / LC); x <= Math.floor((l.pos[0] + r) / LC); x++) for (let z = Math.floor((l.pos[2] - r) / LC); z <= Math.floor((l.pos[2] + r) / LC); z++) {
      const k = x * 7919 + z; let a = lgrid.get(k); if (!a) { a = []; lgrid.set(k, a); } a.push(i);
    }
  });
  let verts = 0, rayCount = 0, reused = 0;
  const cache = new Map();
  const E = new THREE.Color();
  for (const g of geos) {
    const pos = g.attributes.position, nor = g.attributes.normal, col = g.attributes.color;
    for (let i = 0; i < pos.count; i++) {
      verts++;
      _n.set(nor.getX(i), nor.getY(i), nor.getZ(i)).normalize();
      // non-indexed geometry repeats every corner several times, and rounded
      // furniture has many near-coincident vertices: reuse the result
      const k1 = (Math.round(pos.getX(i) * 12) + 30000) * 60000 + Math.round(pos.getZ(i) * 12) + 30000;
      const k2 = ((Math.round(pos.getY(i) * 12) + 30000) * 8 + Math.round(_n.x * 3) + 3) * 8 * 8 + (Math.round(_n.y * 3) + 3) * 8 + Math.round(_n.z * 3) + 3;
      let sub = cache.get(k1);
      if (!sub) { sub = new Map(); cache.set(k1, sub); }
      const hit = sub.get(k2);
      if (hit) { col.setXYZ(i, col.getX(i) * hit[0], col.getY(i) * hit[1], col.getZ(i) * hit[2]); reused++; continue; }
      const px = pos.getX(i) + _n.x * 0.035, py = pos.getY(i) + _n.y * 0.035, pz = pos.getZ(i) + _n.z * 0.035;
      E.setRGB(0, 0, 0);
      // --- hemisphere: sky through openings, openness for ambient/bounce
      _t.set(_n.y > 0.99 || _n.y < -0.99 ? 1 : 0, _n.y > 0.99 || _n.y < -0.99 ? 0 : 1, 0).cross(_n).normalize();
      _b.crossVectors(_n, _t);
      let open = 0, skyHits = 0;
      const rot = (i * 0.618) % (Math.PI * 2), cr = Math.cos(rot), sr = Math.sin(rot);
      for (const [hx0, hy0, hz] of rays) {
        const hx = hx0 * cr - hy0 * sr, hy = hx0 * sr + hy0 * cr;
        const dx = _t.x * hx + _b.x * hy + _n.x * hz, dy = _t.y * hx + _b.y * hy + _n.y * hz, dz = _t.z * hx + _b.z * hy + _n.z * hz;
        rayCount++;
        if (!occ.blocked(px, py, pz, dx, dy, dz, 1.4)) {
          open++;
          rayCount++;
          if (sky.r + sky.g + sky.b > 0 && dy > -0.2 && !occ.blocked(px + dx * 1.4, py + dy * 1.4, pz + dz * 1.4, dx, dy, dz, skyLen)) skyHits++;
        }
      }
      const openF = open / rays.length, skyF = skyHits / rays.length;
      E.r += amb.r * (0.35 + 0.65 * openF) + bounce.r * openF * (0.3 + skyF) + sky.r * skyF;
      E.g += amb.g * (0.35 + 0.65 * openF) + bounce.g * openF * (0.3 + skyF) + sky.g * skyF;
      E.b += amb.b * (0.35 + 0.65 * openF) + bounce.b * openF * (0.3 + skyF) + sky.b * skyF;
      // --- sun
      if (sunDir) {
        const c = _n.dot(sunDir);
        if (c > 0) { rayCount++; if (!occ.blocked(px, py, pz, sunDir.x, sunDir.y, sunDir.z, 200)) { E.r += sunCol.r * c; E.g += sunCol.g * c; E.b += sunCol.b * c; } }
      }
      // --- local lights
      const near = lgrid.get(Math.floor(px / LC) * 7919 + Math.floor(pz / LC));
      if (near) for (const li of near) {
        const l = lights[li];
        let lx = l.pos[0] - px, ly = l.pos[1] - py, lz = l.pos[2] - pz;
        const d2 = lx * lx + ly * ly + lz * lz;
        if (d2 > l.range * l.range) continue;
        const d = Math.sqrt(d2); lx /= d; ly /= d; lz /= d;
        let c = _n.x * lx + _n.y * ly + _n.z * lz;
        if (c <= 0) continue;
        if (l.down) { const sp = -ly; if (sp <= 0) continue; c *= 0.35 + 0.65 * sp; } // ceiling fixtures throw light downward
        const fall = l.intensity / (1 + d2 / (l.r0 * l.r0)) * Math.max(0, 1 - Math.pow(d / l.range, 4));
        if (fall * c < 0.004) continue;
        rayCount++;
        if (occ.blocked(px, py, pz, lx, ly, lz, d - 0.15)) continue;
        E.r += l.color[0] * fall * c; E.g += l.color[1] * fall * c; E.b += l.color[2] * fall * c;
      }
      sub.set(k2, [E.r, E.g, E.b]);
      col.setXYZ(i, col.getX(i) * E.r, col.getY(i) * E.g, col.getZ(i) * E.b);
    }
  }
  return { verts, unique: verts - reused, rays: rayCount, ms: Math.round(performance.now() - t0) };
}
