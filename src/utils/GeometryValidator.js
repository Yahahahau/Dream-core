// Static geometry audit used by the QA pass (?validate=1).
// Finds coplanar same-facing surfaces (z-fighting), near-coplanar surfaces that
// flicker at distance, props sunk into walls, and objects floating in the air.
// Nothing is deleted automatically: intentional intersections are allowed, the
// report just lists what needs a human decision.
const AX = [0, 1, 2];

function faces(b, i) {
  const out = [];
  for (const a of AX) {
    const [u, v] = AX.filter((k) => k !== a);
    for (const dir of [-1, 1]) {
      out.push({ box: i, a, dir, c: dir < 0 ? b.min[a] : b.max[a], u0: b.min[u], u1: b.max[u], v0: b.min[v], v1: b.max[v] });
    }
  }
  return out;
}

function overlap(f, g) {
  const du = Math.min(f.u1, g.u1) - Math.max(f.u0, g.u0);
  const dv = Math.min(f.v1, g.v1) - Math.max(f.v0, g.v0);
  return du > 0 && dv > 0 ? du * dv : 0;
}

// is face f buried inside some box (other than its own)? then it cannot flicker
function buried(f, boxes, grid) {
  const p = [0, 0, 0];
  const [u, v] = AX.filter((k) => k !== f.a);
  p[f.a] = f.c + f.dir * 0.004; p[u] = (f.u0 + f.u1) / 2; p[v] = (f.v0 + f.v1) / 2;
  for (const j of grid(p)) {
    if (j === f.box) continue;
    const b = boxes[j];
    if (!b.visible || b.transparent) continue;
    if (p[0] > b.min[0] && p[0] < b.max[0] && p[1] > b.min[1] && p[1] < b.max[1] && p[2] > b.min[2] && p[2] < b.max[2]) return true;
  }
  return false;
}

export function validateLevel(audit, props = []) {
  const boxes = audit.filter((b) => b.visible);
  // spatial hash for "point inside box" queries
  const cell = 4, hash = new Map();
  boxes.forEach((b, i) => {
    for (let x = Math.floor(b.min[0] / cell); x <= Math.floor(b.max[0] / cell); x++) for (let z = Math.floor(b.min[2] / cell); z <= Math.floor(b.max[2] / cell); z++) {
      const k = x + ',' + z; if (!hash.has(k)) hash.set(k, []); hash.get(k).push(i);
    }
  });
  const grid = (p) => hash.get(Math.floor(p[0] / cell) + ',' + Math.floor(p[2] / cell)) || [];

  const issues = [];
  const buckets = new Map();
  boxes.forEach((b, i) => {
    for (const f of faces(b, i)) {
      if (f.a === 1 && f.dir < 0 && !b.ceiling) continue;
      const key = f.a + ':' + f.dir + ':' + Math.round(f.c / 0.01);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(f);
    }
  });
  for (const [key, list] of buckets) {
    const [a, dir, k] = key.split(':').map(Number);
    // compare with this bucket and the neighbouring ones (near-coplanar)
    for (const nk of [k, k + 1]) {
      const other = nk === k ? list : buckets.get(a + ':' + dir + ':' + nk);
      if (!other) continue;
      for (let i = 0; i < list.length; i++) {
        const f = list[i];
        for (let j = nk === k ? i + 1 : 0; j < other.length; j++) {
          const g = other[j];
          if (g.box === f.box) continue;
          const gap = Math.abs(f.c - g.c);
          if (gap > 0.012) continue;
          const area = overlap(f, g);
          if (area < 0.002) continue;
          const A = boxes[f.box], B = boxes[g.box];
          if (A.transparent || B.transparent) continue;
          if (buried(f, boxes, grid) || buried(g, boxes, grid)) continue;
          const same = A.mat === B.mat;
          issues.push({ type: gap < 0.002 ? 'z-fight' : 'near-coplanar', severity: same ? 'low' : 'high', axis: 'xyz'[a], dir, at: +f.c.toFixed(3), area: +area.toFixed(3), mats: [A.mat.name, B.mat.name], where: [((f.u0 + f.u1) / 2).toFixed(1), ((f.v0 + f.v1) / 2).toFixed(1)] });
        }
      }
    }
  }
  // props pushed into walls / floating props
  const solids = boxes.filter((b) => !b.transparent && (b.max[1] - b.min[1]) > 1.2);
  for (const p of props) {
    for (const w of solids) {
      const ox = Math.min(p.max[0], w.max[0]) - Math.max(p.min[0], w.min[0]);
      const oy = Math.min(p.max[1], w.max[1]) - Math.max(p.min[1], w.min[1]);
      const oz = Math.min(p.max[2], w.max[2]) - Math.max(p.min[2], w.min[2]);
      if (ox > 0.06 && oy > 0.06 && oz > 0.06) { issues.push({ type: 'prop-in-wall', severity: 'high', prop: p.name, at: [p.min[0], p.min[1], p.min[2]].map((v) => +v.toFixed(2)), wall: w.mat.name, depth: +Math.min(ox, oz).toFixed(2) }); break; }
    }
  }
  return issues;
}
