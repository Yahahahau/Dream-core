// Architecture kit: reusable modules with consistent dimensions and connection
// rules. Every module is built so that neighbouring pieces meet edge-to-edge or
// overlap by a clear margin — never on the same plane — which keeps surfaces
// free of z-fighting from every camera angle.
//
//   foundation → floor → walls → openings (doors/windows) → ceiling → roof → details
import * as THREE from 'three';

export const KIT = {
  wallT: 0.2,        // standard wall thickness
  frameW: 0.07,      // casing width around openings
  proud: 0.025,      // how far trim stands out from a wall face
  sillD: 0.12,       // window sill projection
};

const local = (x, z, rotY) => { const c = Math.cos(rotY), s = Math.sin(rotY); return (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c]; };

// ---------------------------------------------------------------- railings
// Posts at both ends and every `spacing`, a top rail running between them,
// optional glass/infill panels inset from the posts. One collider for the run.
export function railing(b, x0, z0, x1, z1, y, o = {}) {
  const { h = 1.05, spacing = 1.4, post = 0.06, glass = null, railMat, postMat, infill = 'bars', collide = true } = o;
  const len = Math.hypot(x1 - x0, z1 - z0);
  if (len < 0.05) return;
  const rot = Math.atan2(-(z1 - z0), x1 - x0);
  const dx = (x1 - x0) / len, dz = (z1 - z0) / len;
  const n = Math.max(1, Math.round(len / spacing));
  const pm = postMat || b.mat('__railpost', { color: 0x3a3c40, roughness: 0.45, metalness: 0.5 });
  const rm = railMat || pm;
  for (let i = 0; i <= n; i++) {
    const t = i / n * len;
    // newel posts rise 2 cm above the rail so rail ends are capped, never coplanar
    b.box(x0 + dx * t, y, z0 + dz * t, post, h + 0.03, post, pm, { rotY: rot, collide: false, ao: false });
  }
  // top rail is wider than the posts and sits on them, so faces never coincide
  b.box((x0 + x1) / 2, y + h - 0.04, (z0 + z1) / 2, Math.max(0.02, len - post), 0.05, post + 0.03, rm, { rotY: rot, collide: false, ao: false });
  for (let i = 0; i < n; i++) {
    const a = i / n * len + post / 2 + 0.01, c = (i + 1) / n * len - post / 2 - 0.01, mid = (a + c) / 2;
    if (glass) b.box(x0 + dx * mid, y + 0.08, z0 + dz * mid, c - a, h - 0.2, 0.012, glass, { rotY: rot, collide: false, ao: false });
    else if (infill === 'bars') {
      b.box(x0 + dx * mid, y + 0.1, z0 + dz * mid, c - a, 0.03, 0.03, rm, { rotY: rot, collide: false, ao: false });
      const bars = Math.max(1, Math.round((c - a) / 0.12));
      for (let k = 1; k < bars; k++) { const tb = a + (c - a) * k / bars; b.box(x0 + dx * tb, y + 0.13, z0 + dz * tb, 0.018, h - 0.21, 0.018, rm, { rotY: rot, collide: false, ao: false }); }
    }
  }
  if (collide) b.level.addOBB((x0 + x1) / 2, y, (z0 + z1) / 2, len, h, 0.12, rot);
}

// ---------------------------------------------------------------- pillars
export function pillar(b, x, y, z, h, o = {}) {
  const { size = 0.5, mat, trim = null, round = false, collide = true } = o;
  const tm = trim || mat;
  const bh = Math.min(0.3, h * 0.08), ch = Math.min(0.25, h * 0.06);
  if (round) {
    b.add(new THREE.CylinderGeometry(size / 2, size / 2, h - bh - ch, 20), mat, { x, y: y + bh + (h - bh - ch) / 2, z });
  } else b.box(x, y + bh, z, size, h - bh - ch, size, mat, { collide: false });
  b.box(x, y, z, size + 0.12, bh, size + 0.12, tm, { collide: false, ao: false });
  b.box(x, y + h - ch, z, size + 0.1, ch, size + 0.1, tm, { collide: false, ao: false });
  if (collide) b.level.addCollider(x - size / 2 - 0.06, y, z - size / 2 - 0.06, x + size / 2 + 0.06, y + h, z + size / 2 + 0.06);
}

// ---------------------------------------------------------------- windows
// A window unit for a wall: outer casing standing proud of the wall, a sill,
// recessed glass and mullions. `face` is the wall surface the unit sits on;
// rotY makes local +z point out of the wall.
export function windowUnit(b, x, y, z, w, h, rotY, o = {}) {
  const { frameMat, glassMat, sill = true, cross = true, depth = 0.06, shutters = null, recess = -0.015 } = o;
  const L = local(x, z, rotY);
  const fw = KIT.frameW, P = KIT.proud;
  const fm = frameMat || b.mat('__winframe', { color: 0xf6f4ee, roughness: 0.55 });
  // glass sits slightly *into* the wall face
  const g = 0.003; // casings stand just clear of the opening's reveals (no coplanar faces)
  if (glassMat !== null) { const [px, pz] = L(0, recess); b.box(px, y + g, pz, w - 2 * g, h - 2 * g, 0.012, glassMat, { rotY, collide: false, ao: false, stretch: true }); }
  // casing: sides run full height, head and bottom rail sit between them
  // the casing sits on the wall face (2 mm clear), never inside the opening's reveal
  const cz = 0.002 + (depth + P) / 2;
  for (const sx of [-1, 1]) { const [px, pz] = L(sx * (w / 2 + fw / 2), cz); b.box(px, y - fw, pz, fw, h + fw * 2, depth + P, fm, { rotY, collide: false, ao: false }); }
  { const [px, pz] = L(0, cz); b.box(px, y + h, pz, w, fw, depth + P, fm, { rotY, collide: false, ao: false }); b.box(px, y - fw, pz, w, fw, depth + P, fm, { rotY, collide: false, ao: false }); }
  if (cross) {
    { const [px, pz] = L(0, 0); b.box(px, y, pz, 0.035, h, 0.04, fm, { rotY, collide: false, ao: false }); }
    { const [px, pz] = L(0, 0); b.box(px, y + h / 2 - 0.0175, pz, w, 0.035, 0.03, fm, { rotY, collide: false, ao: false }); }
  }
  if (sill) { const [px, pz] = L(0, KIT.sillD / 2 + P); b.box(px, y - fw - 0.045, pz, w + fw * 2 + 0.1, 0.045, KIT.sillD + depth, fm, { rotY, collide: false, ao: false }); }
  if (shutters) for (const sx of [-1, 1]) { const [px, pz] = L(sx * (w / 2 + fw + w * 0.27), P); b.box(px, y, pz, w * 0.5, h, 0.03, shutters, { rotY, collide: false, ao: false }); }
}

// ---------------------------------------------------------------- roofs
// Gable roof with real thickness: two sloped slabs meeting at a ridge cap,
// gable-end walls filling the triangles, fascia boards along the eaves.
// Ridge runs along local z (depth). Placed with its base at wall-top height y.
export function gableRoof(b, x, y, z, w, d, rise, o = {}) {
  const { rotY = 0, roofMat, gableMat, trimMat, over = 0.4, thick = 0.14, cast = true } = o;
  const half = w / 2 + over;
  const slope = Math.atan2(rise, w / 2);
  const slabLen = Math.hypot(half, rise * half / (w / 2));
  const L = local(x, z, rotY);
  const tm = trimMat || b.mat('__fascia', { color: 0xf4f2ec, roughness: 0.6 });
  for (const side of [-1, 1]) {
    // slab hinged at the ridge, rotated about the ridge axis
    const g = new THREE.BoxGeometry(slabLen, thick, d + over * 2);
    { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * slabLen, uv.getY(i) * (d + over * 2)); }
    g.translate(side * slabLen / 2, -thick / 2, 0);
    g.rotateZ(-side * slope);
    b.add(g, roofMat, { x: L(0, 0)[0], y: y + rise + thick * 0.4, z: L(0, 0)[1], rotY, cast });
    // fascia board under the eave
    const ex = side * half;
    const [fx, fz] = L(ex, 0);
    b.box(fx, y + rise * (1 - half / (w / 2)) - 0.16, fz, 0.06, 0.2, d + over * 2 + 0.02, tm, { rotY, collide: false, ao: false });
  }
  // ridge cap
  { const [rx, rz] = L(0, 0); b.box(rx, y + rise + thick * 0.15, rz, 0.16, 0.12, d + over * 2 + 0.04, roofMat, { rotY, collide: false, ao: false }); }
  // gable triangles (slightly inside the wall planes so the siding reads as one surface)
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(0, rise); s.closePath();
  for (const side of [-1, 1]) {
    const g = new THREE.ExtrudeGeometry(s, { depth: 0.18, bevelEnabled: false });
    g.translate(0, 0, side > 0 ? d / 2 - 0.18 : -d / 2);
    const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.5, uv.getY(i) * 0.5);
    b.add(g, gableMat, { x: L(0, 0)[0], y, z: L(0, 0)[1], rotY });
  }
}

// ---------------------------------------------------------------- stairs
// Stair flight with closed stringers on both sides and an optional handrail.
export function stairFlight(b, x, z, y0, width, steps, rise, run, dir, mat, o = {}) {
  const { stringer = null, rail = true, surface = null } = o;
  const r = b.stairs(x, z, y0, width, steps, rise, run, dir, mat, { surface, slab: o.slab });
  const sm = stringer || mat;
  const along = dir[1] === 'x' ? [1, 0] : [0, 1], sign = dir[0] === '-' ? -1 : 1;
  const len = r.total, up = r.up;
  const ang = Math.atan2(up, len);
  for (const side of [-1, 1]) {
    const ox = along[0] ? 0 : side * (width / 2 + 0.04), oz = along[0] ? side * (width / 2 + 0.04) : 0;
    const cx = x + along[0] * sign * len / 2 + ox, cz = z + along[1] * sign * len / 2 + oz;
    const g = new THREE.BoxGeometry(along[0] ? Math.hypot(len, up) : 0.08, 0.3, along[0] ? 0.08 : Math.hypot(len, up));
    if (along[0]) g.rotateZ(sign * ang); else g.rotateX(-sign * ang);
    b.add(g, sm, { x: cx, y: y0 + up / 2 + 0.05, z: cz });
    if (rail) {
      const hg = new THREE.CylinderGeometry(0.025, 0.025, Math.hypot(len, up) + 0.3, 8);
      if (along[0]) { hg.rotateZ(Math.PI / 2); hg.rotateZ(sign * ang); } else { hg.rotateX(Math.PI / 2); hg.rotateX(-sign * ang); }
      b.add(hg, b.mat('__handrail', { color: 0x6a4a30, roughness: 0.4 }), { x: cx, y: y0 + up / 2 + 0.95, z: cz });
      for (const t of [0.05, 0.5, 0.95]) {
        const px = x + along[0] * sign * len * t + ox, pz = z + along[1] * sign * len * t + oz;
        b.box(px, y0 + up * t + 0.12, pz, 0.03, 0.85, 0.03, b.mat('__handrail', { color: 0x6a4a30 }), { collide: false, ao: false });
      }
    }
  }
  return r;
}

// ---------------------------------------------------------------- contact shading
// Soft dark gradient strips along the base of a wall: a cheap baked contact-AO
// term that grounds walls on floors. Drawn as a decal 6 mm above the floor.
export function contactStrip(b, x0, z0, x1, z1, y, width = 0.45, strength = 0.32) {
  if (!b._aoMat) {
    const c = document.createElement('canvas'); c.width = 4; c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 64);
    g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.35, 'rgba(0,0,0,0.45)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 64);
    const t = new THREE.CanvasTexture(c);
    b._aoMat = new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: strength, color: 0x1a140e, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    b._aoMat.userData.texScale = [1, 1];
    b.level.disposables.push(b._aoMat, t);
  }
  const len = Math.hypot(x1 - x0, z1 - z0);
  const g = new THREE.PlaneGeometry(len, width);
  // v=0 (dark) at the wall edge
  g.translate(0, -width / 2, 0);
  g.rotateX(-Math.PI / 2);
  const rot = Math.atan2(-(z1 - z0), x1 - x0);
  g.rotateY(rot);
  g.translate((x0 + x1) / 2, y + 0.006, (z0 + z1) / 2);
  const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i), uv.getY(i));
  b._push(b._ensureAttrs(g), b._aoMat);
}
