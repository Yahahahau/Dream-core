// Grid-accelerated AABB world + ramps + optional terrain heightfield.
// The player is a vertical capsule approximated by a circle in XZ.
const CELL = 4;

export class CollisionSystem {
  constructor() { this.clear(); }

  clear() {
    this.grid = new Map();
    this.boxes = [];
    this.ramps = [];
    this.heightAt = null;
    this.terrainSurface = 'grass';
    this.defaultSurface = 'concrete';
  }

  load(level) {
    this.clear();
    this.heightAt = level.heightAt;
    this.surfaceAt = level.surfaceAt ? level.surfaceAt.bind(level) : null;
    this.terrainSurface = level.terrainSurface;
    this.defaultSurface = level.surface;
    for (const c of level.colliders) this.addBox(c);
    this.ramps = level.ramps;
  }

  addBox(c) {
    this.boxes.push(c);
    const x0 = Math.floor(c.min[0] / CELL), x1 = Math.floor(c.max[0] / CELL);
    const z0 = Math.floor(c.min[2] / CELL), z1 = Math.floor(c.max[2] / CELL);
    if ((x1 - x0 + 1) * (z1 - z0 + 1) > 4000) { (this.big ||= []).push(c); return; }
    for (let x = x0; x <= x1; x++) for (let z = z0; z <= z1; z++) {
      const k = x * 73856093 ^ z * 19349663;
      let arr = this.grid.get(k);
      if (!arr) { arr = []; this.grid.set(k, arr); }
      arr.push(c);
    }
  }

  query(x, z, r) {
    const out = new Set(this.big || []);
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    for (let i = x0; i <= x1; i++) for (let j = z0; j <= z1; j++) {
      const arr = this.grid.get(i * 73856093 ^ j * 19349663);
      if (arr) for (const c of arr) out.add(c);
    }
    return out;
  }

  // Highest walkable surface under (x,z) at or below maxY.
  groundAt(x, z, maxY, r = 0.18) {
    let best = -Infinity, surface = this.defaultSurface;
    if (this.heightAt) {
      const h = this.heightAt(x, z);
      if (h <= maxY) { best = h; surface = (this.surfaceAt && this.surfaceAt(x, z)) || this.terrainSurface; }
    }
    for (const c of this.query(x, z, r)) {
      if (!c.enabled) continue;
      if (x + r < c.min[0] || x - r > c.max[0] || z + r < c.min[2] || z - r > c.max[2]) continue;
      const top = c.max[1];
      if (top <= maxY && top > best) { best = top; surface = c.surface || this.defaultSurface; }
    }
    for (const rp of this.ramps) {
      if (x < rp.x0 || x > rp.x1 || z < rp.z0 || z > rp.z1) continue;
      const t = rp.axis === 'x' ? (x - rp.x0) / (rp.x1 - rp.x0) : (z - rp.z0) / (rp.z1 - rp.z0);
      const h = rp.yA + (rp.yB - rp.yA) * t;
      if (h <= maxY && h > best) { best = h; surface = rp.surface || this.defaultSurface; }
    }
    return { y: best, surface };
  }

  // Push a circle (x,z,r) out of boxes overlapping the vertical span [y0,y1].
  resolve(pos, r, y0, y1) {
    let hit = false;
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const c of this.query(pos.x, pos.z, r + 0.1)) {
        if (!c.enabled) continue;
        if (c.max[1] <= y0 || c.min[1] >= y1) continue;
        const cx = Math.max(c.min[0], Math.min(pos.x, c.max[0]));
        const cz = Math.max(c.min[2], Math.min(pos.z, c.max[2]));
        let dx = pos.x - cx, dz = pos.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2), push = r - d;
          pos.x += dx / d * push; pos.z += dz / d * push;
        } else {
          // center inside the box: exit along the shallowest axis
          const pens = [pos.x - c.min[0] + r, c.max[0] - pos.x + r, pos.z - c.min[2] + r, c.max[2] - pos.z + r];
          const m = Math.min(...pens), i = pens.indexOf(m);
          if (i === 0) pos.x -= m; else if (i === 1) pos.x += m; else if (i === 2) pos.z -= m; else pos.z += m;
        }
        moved = hit = true;
      }
      if (!moved) break;
    }
    return hit;
  }

  // Ceiling above the head (lowest box bottom above y).
  ceilingAt(x, z, y, r) {
    let best = Infinity;
    for (const c of this.query(x, z, r)) {
      if (!c.enabled) continue;
      if (x + r < c.min[0] || x - r > c.max[0] || z + r < c.min[2] || z - r > c.max[2]) continue;
      if (c.min[1] >= y && c.min[1] < best) best = c.min[1];
    }
    return best;
  }

  // Segment test used to keep interaction rays from passing through walls.
  // ignore: colliders belonging to the target itself (never count as blockers)
  segmentBlocked(ax, ay, az, bx, by, bz, ignore = null) {
    const minx = Math.min(ax, bx), maxx = Math.max(ax, bx), minz = Math.min(az, bz), maxz = Math.max(az, bz);
    for (const c of this.query((ax + bx) / 2, (az + bz) / 2, Math.max(maxx - minx, maxz - minz) / 2 + 0.5)) {
      if (!c.enabled || (ignore && ignore.has(c))) continue;
      // a box that contains the end point is the object being looked at
      if (bx >= c.min[0] - 0.05 && bx <= c.max[0] + 0.05 && by >= c.min[1] - 0.05 && by <= c.max[1] + 0.05 && bz >= c.min[2] - 0.05 && bz <= c.max[2] + 0.05) continue;
      let t0 = 0, t1 = 1;
      const o = [ax, ay, az], d = [bx - ax, by - ay, bz - az];
      let ok = true;
      for (let i = 0; i < 3; i++) {
        if (Math.abs(d[i]) < 1e-9) { if (o[i] < c.min[i] || o[i] > c.max[i]) { ok = false; break; } continue; }
        let ta = (c.min[i] - o[i]) / d[i], tb = (c.max[i] - o[i]) / d[i];
        if (ta > tb) [ta, tb] = [tb, ta];
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t0 < 0.97) return true;
    }
    return false;
  }
}
