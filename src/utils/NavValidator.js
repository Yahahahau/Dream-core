// Progression validation: a collision-aware flood fill from the level's spawn
// that walks exactly the way the player controller does (same radius, step
// height, ramps, stairs, gravity drops, ceiling clearance). Doors that can be
// opened are treated as open, locked ones as walls. Same-level portals and
// elevator rides are followed. Every exit (interactable with a target) must be
// reachable from the spawn, and every destination spawn must exist and stand
// on walkable ground.
import { PLAYER } from '../player/PlayerController.js';
import { LEVEL_BY_ID } from '../levels/LevelRegistry.js';

export function analyzeNavigation(game, level, { cell = 0.45, margin = 18, maxNodes = 450000 } = {}) {
  const col = game.collision;
  const R = PLAYER.radius * 0.92, STEP = PLAYER.step, H = PLAYER.height;
  // open every door that the player could open
  const restored = [];
  for (const it of level.interactables) {
    const d = it.door;
    if (d && d.cols && !d.isLocked()) for (const c of d.cols) { restored.push([c, c.enabled]); c.enabled = false; }
    if (it.elevator) for (const c of it.elevator.cols) { restored.push([c, c.enabled]); c.enabled = false; }
  }
  const exits = [], hops = [];
  for (const it of level.interactables) {
    if (!it.target && !it.links) continue;
    const pos = it.approach ? it.approach() : it.mesh.getWorldPosition(it.mesh.position.clone());
    const label = typeof it.prompt === 'function' ? it.prompt() : it.prompt;
    if (it.target && it.target.level && it.target.level !== level.id) exits.push({ label, target: it.target, pos, reachable: false });
    else if (it.target) hops.push({ pos, spawns: [it.target.spawn] });
    if (it.links) hops.push({ pos, spawns: it.links.filter((l) => !l.level || l.level === level.id).map((l) => l.spawn), exits: it.links.filter((l) => l.level && l.level !== level.id).map((l) => ({ label: label + ' → ' + l.label, target: l, pos, reachable: false })) });
  }
  for (const h of hops) for (const e of h.exits || []) exits.push(e);
  const spawn = level.spawns.default;
  const pts = [spawn.pos, ...exits.map((e) => [e.pos.x, e.pos.y, e.pos.z]), ...hops.map((h) => [h.pos.x, h.pos.y, h.pos.z]), ...Object.values(level.spawns).map((s) => s.pos)];
  let x0 = Infinity, z0 = Infinity, x1 = -Infinity, z1 = -Infinity;
  for (const p of pts) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[2]); z1 = Math.max(z1, p[2]); }
  x0 -= margin; z0 -= margin; x1 += margin; z1 += margin;

  const seen = new Set();
  const queue = [];
  const key = (ix, iz, y) => ix + ',' + iz + ',' + Math.round(y * 4);
  const free = (x, z, y) => {
    const p = { x, z };
    col.resolve(p, R, y + STEP, y + H);
    if (Math.hypot(p.x - x, p.z - z) > 0.02) return false;
    return col.ceilingAt(x, z, y + STEP + 0.01, R * 0.7) - y >= H - 0.02;
  };
  const push = (x, z, y) => {
    const ix = Math.round((x - x0) / cell), iz = Math.round((z - z0) / cell);
    const k = key(ix, iz, y);
    if (seen.has(k)) return;
    seen.add(k); queue.push([ix, iz, y]);
  };
  const seed = (p) => { const g = col.groundAt(p[0], p[2], p[1] + 1.2); if (g.y > -Infinity) push(p[0], p[2], g.y); };
  seed(spawn.pos);
  const usedHops = new Set();
  const visitedPts = [];
  let n = 0;
  while (queue.length && n < maxNodes) {
    const [ix, iz, y] = queue.pop();
    n++;
    const x = x0 + ix * cell, z = z0 + iz * cell;
    visitedPts.push([x, y, z]);
    for (const e of exits) if (!e.reachable && Math.hypot(e.pos.x - x, e.pos.z - z) < 2.0 && Math.abs(e.pos.y - (y + 1.2)) < 1.8) e.reachable = true;
    hops.forEach((h, hi) => {
      if (usedHops.has(hi) || Math.hypot(h.pos.x - x, h.pos.z - z) > 2.0 || Math.abs(h.pos.y - (y + 1.2)) > 1.8) return;
      usedHops.add(hi);
      for (const s of h.spawns) if (level.spawns[s]) seed(level.spawns[s].pos);
    });
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
      const nx = ix + dx, nz = iz + dz;
      const wx = x0 + nx * cell, wz = z0 + nz * cell;
      if (wx < x0 || wx > x1 || wz < z0 || wz > z1) continue;
      const g = col.groundAt(wx, wz, y + STEP);
      if (g.y === -Infinity || g.y < y - 4 || g.y < level.killY + 0.5) continue;
      if (!free(wx, wz, g.y)) continue;
      // the midpoint must be passable too (thin walls between cell centres)
      const mx = (x + wx) / 2, mz = (z + wz) / 2, mg = col.groundAt(mx, mz, Math.max(y, g.y) + STEP);
      if (mg.y === -Infinity || !free(mx, mz, mg.y)) continue;
      const k = key(nx, nz, g.y);
      if (!seen.has(k)) { seen.add(k); queue.push([nx, nz, g.y]); }
    }
  }
  // destination spawns must exist and stand on the ground of their level (checked when that level loads)
  for (const e of exits) e.destinationKnown = !!LEVEL_BY_ID[e.target.level];
  const report = {
    level: level.id, nodes: n, truncated: n >= maxNodes,
    exits: exits.map((e) => ({ label: e.label, to: e.target.level + ':' + (e.target.spawn || 'default'), reachable: e.reachable, destinationKnown: e.destinationKnown, at: [e.pos.x, e.pos.y, e.pos.z].map((v) => +v.toFixed(1)) })),
    doorsClear: level.interactables.filter((it) => it.door && !it.door.isLocked()).map((it) => {
      const p = it.doorPose, s = Math.sin(p.rotY), c = Math.cos(p.rotY);
      // portal doors only need the approach side; ordinary doors need both
      const sides = p.freeStanding || it.target ? [1] : [1, -1];
      const ok = sides.every((side) => [0.65, 1.0].every((d) => { const x = p.x + s * d * side, z = p.z + c * d * side; const g = col.groundAt(x, z, p.y + 1.0); return g.y > -Infinity && Math.abs(g.y - p.y) < 0.6 && free(x, z, g.y); }));
      return { door: typeof it.prompt === 'function' ? it.prompt() : it.prompt, at: [p.x, p.z].map((v) => +v.toFixed(1)), ok };
    }),
    spawnsOnGround: Object.entries(level.spawns).filter(([k]) => k !== 'menu').map(([k, s]) => { const g = col.groundAt(s.pos[0], s.pos[2], s.pos[1] + 1.5); return { spawn: k, ok: g.y > -Infinity && Math.abs(g.y - s.pos[1]) < 3.2 && free(s.pos[0], s.pos[2], g.y) }; }),
    visited: visitedPts,
  };
  for (const [c, en] of restored) c.enabled = en;
  return report;
}
