// Unified building blueprint.
//
// A building is described once: footprint, floors (elevation + clear height),
// rooms (rectangles on wall centre lines), doors, passages, windows, stairs
// and elevators. Everything — exterior facade, interior walls, floor slabs,
// ceilings, window glass, sills, stair shafts — is generated from that single
// description, so the outside and the inside can never disagree:
//
//  * every wall line is split into segments by the rooms on each side; each
//    side gets its own finish layer (exterior material outside, the room's
//    material inside) and both layers receive exactly the same openings;
//  * a window is one opening shared by both layers: glass on the wall centre,
//    an exterior casing + sill outside and an interior casing + stool inside;
//  * stairs are switchback flights generated from the floor elevations, with
//    landings that are part of the floor slabs they connect to.
//
// validate() then checks the result semantically (doors on real walls with
// rooms on both sides, windows on exterior walls, stairs meeting floor levels,
// head-room, room connectivity) instead of only testing bounding boxes.
import * as THREE from 'three';
import { windowUnit, railing, stairFlight, contactStrip, KIT } from './Architecture.js';
import { createDoor } from '../interaction/Door.js';
import { createElevator } from '../interaction/Elevator.js';

const EPS = 1e-4;
const near = (a, b, e = 1e-3) => Math.abs(a - b) < e;

export class Blueprint {
  constructor(level, o) {
    this.level = level;
    this.b = level.b;
    this.name = o.name || 'building';
    this.extMat = o.extMat;          // facade material
    this.extT = o.extT ?? 0.24;      // exterior layer thickness
    this.intT = o.intT ?? 0.08;      // interior layer thickness (per side)
    this.trimMat = o.trimMat;
    this.glassMat = o.glassMat;
    this.slab = o.slab ?? 0.3;
    this.floors = [];
    this.issues = [];
    this.footprint = o.footprint;    // [x0, z0, x1, z1]
  }

  addFloor(id, y, h) { const f = { id, y, h, rooms: [], doors: [], passages: [], windows: [], elevators: [] }; this.floors.push(f); return f; }
  floorById(id) { return this.floors.find((f) => f.id === id); }
  nextFloor(f) { const i = this.floors.indexOf(f); return this.floors[i + 1] || null; }
  top(f) { const n = this.nextFloor(f); return n ? n.y - this.slab : f.y + f.h + 0.05; }

  room(fid, id, x0, z0, x1, z1, o = {}) { const r = { id, x0, z0, x1, z1, ...o }; this.floorById(fid).rooms.push(r); return r; }
  door(fid, o) { this.floorById(fid).doors.push({ w: 1.0, h: 2.15, ...o }); }
  passage(fid, o) { this.floorById(fid).passages.push({ h: 2.4, ...o }); }
  window(fid, o) { this.floorById(fid).windows.push({ w: 1.2, h: 1.5, sill: 0.9, ...o }); }
  elevator(fid, o) { this.floorById(fid).elevators.push(o); }
  stairs(o) { (this.stairList ||= []).push(o); }

  roomAt(f, x, z) { return f.rooms.find((r) => x > r.x0 + EPS && x < r.x1 - EPS && z > r.z0 + EPS && z < r.z1 - EPS) || null; }
  thick(r) { return r ? (r.kind === 'shaft-elev' ? 0 : this.intT) : this.extT; }
  matOf(r) { return r ? r.wall : this.extMat; }

  // ---------------------------------------------------------------- walls
  wallSegments(f) {
    const lines = new Map(); // key 'h:z' or 'v:x' -> breakpoints
    const add = (k, a, b) => { if (!lines.has(k)) lines.set(k, new Set()); lines.get(k).add(+a.toFixed(4)).add(+b.toFixed(4)); };
    for (const r of f.rooms) { add('h:' + r.z0.toFixed(4), r.x0, r.x1); add('h:' + r.z1.toFixed(4), r.x0, r.x1); add('v:' + r.x0.toFixed(4), r.z0, r.z1); add('v:' + r.x1.toFixed(4), r.z0, r.z1); }
    for (const r of f.rooms) for (const [k, s] of lines) {
      const [o, c] = k.split(':'); const cv = +c;
      if (o === 'h' && cv > r.z0 && cv < r.z1) { s.add(+r.x0.toFixed(4)); s.add(+r.x1.toFixed(4)); }
      if (o === 'v' && cv > r.x0 && cv < r.x1) { s.add(+r.z0.toFixed(4)); s.add(+r.z1.toFixed(4)); }
    }
    const segs = [];
    for (const [k, set] of lines) {
      const [o, c] = k.split(':'); const cv = +c;
      const pts = [...set].sort((a, b) => a - b);
      let cur = null;
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1], m = (a + b) / 2;
        const A = o === 'h' ? this.roomAt(f, m, cv - 0.01) : this.roomAt(f, cv - 0.01, m);
        const B = o === 'h' ? this.roomAt(f, m, cv + 0.01) : this.roomAt(f, cv + 0.01, m);
        if (A === B || (!A && !B)) { cur = null; continue; } // inside one room (no wall) or nothing
        if (cur && cur.A === A && cur.B === B && near(cur.b, a)) cur.b = b;
        else { cur = { o, c: cv, a, b, A, B, ops: [] }; segs.push(cur); }
      }
    }
    return segs;
  }

  // ---------------------------------------------------------------- build
  build() {
    const b = this.b;
    for (const f of this.floors) {
      const segs = this.wallSegments(f);
      f.segs = segs;
      const findSeg = (x, z) => segs.find((s) => (s.o === 'h' ? near(s.c, z, 0.05) && x > s.a - EPS && x < s.b + EPS : near(s.c, x, 0.05) && z > s.a - EPS && z < s.b + EPS));
      const addOp = (it, kind) => {
        const s = findSeg(it.x, it.z);
        if (!s) { this.issues.push({ type: `${kind}-not-on-wall`, floor: f.id, at: [it.x, it.z] }); return null; }
        const at = s.o === 'h' ? it.x : it.z;
        s.ops.push({ at, w: it.w, h: it.h, y0: it.y0 ?? (kind === 'window' ? it.sill : 0), kind, it });
        it.seg = s;
        return s;
      };
      for (const d of f.doors) addOp(d, 'door');
      for (const p of f.passages) addOp(p, 'passage');
      for (const w of f.windows) { const s = addOp(w, 'window'); if (s && s.A && s.B) this.issues.push({ type: 'window-on-interior-wall', floor: f.id, at: [w.x, w.z] }); }
      for (const e of f.elevators) addOp({ ...e, w: 2.62, h: 2.62 }, 'elevator');
      const top = this.top(f);
      for (const s of segs) this.buildSegment(f, s, top);
      this.buildCorners(f, segs, top);
      this.buildFloorsAndCeilings(f, top);
      for (const d of f.doors) this.buildDoor(f, d);
      for (const w of f.windows) if (w.seg) this.buildWindow(f, w);
      for (const e of f.elevators) this.buildElevator(f, e);
    }
    for (const s of this.stairList || []) this.buildStairs(s);
    return this;
  }

  // two finish layers per wall segment, sharing the same openings
  buildSegment(f, s, top) {
    const b = this.b;
    const tA = this.thick(s.A), tB = this.thick(s.B);
    const h = top - f.y;
    const ops = s.ops.map((o) => ({ at: o.at - s.a, w: o.w, h: o.h, y0: o.y0 }));
    const layer = (side) => {
      const r = side < 0 ? s.A : s.B, t = side < 0 ? tA : tB;
      if (t <= 0) return;
      const outside = !r;
      const off = side * t / 2;
      // the exterior layer also covers the slab edge up to the next floor line
      const hh = (outside || r.kind === 'stair') && this.nextFloor(f) ? this.nextFloor(f).y - f.y : h;
      const mat = this.matOf(r);
      const o = { thick: t, openings: ops, contact: !outside, cast: outside ? true : false };
      if (s.o === 'h') b.wall(s.a, s.c + off, s.b, s.c + off, f.y, hh, mat, o);
      else b.wall(s.c + off, s.a, s.c + off, s.b, f.y, hh, mat, o);
      // baseboard on interior faces (stops at doors)
      if (!outside && !r.noBaseboard) {
        let cur = s.a;
        const doors = s.ops.filter((o) => o.y0 === 0).sort((p, q) => p.at - q.at);
        const runs = [];
        for (const d of doors) { runs.push([cur, d.at - d.w / 2 - KIT.frameW]); cur = d.at + d.w / 2 + KIT.frameW; }
        runs.push([cur, s.b]);
        const bm = b.mat('__baseboard' + (r.base ?? 0xf2eee6), { color: r.base ?? 0xf2eee6, roughness: 0.5 });
        // stop at the room's own corner walls instead of running into them
        const lo = s.o === 'h' ? r.x0 : r.z0, hi = s.o === 'h' ? r.x1 : r.z1;
        if (near(runs[0][0], lo)) runs[0][0] += this.intT + 0.002;
        if (near(runs[runs.length - 1][1], hi)) runs[runs.length - 1][1] -= this.intT + 0.002;
        for (const [p, q] of runs) {
          if (q - p < 0.05) continue;
          const bo = side * (t + 0.012);
          if (s.o === 'h') b.box((p + q) / 2, f.y, s.c + bo, q - p, 0.11, 0.024, bm, { collide: false, ao: false });
          else b.box(s.c + bo, f.y, (p + q) / 2, 0.024, 0.11, q - p, bm, { collide: false, ao: false });
        }
      }
    };
    layer(-1); layer(1);
  }

  // corner posts fill the quadrants that no wall layer reaches (outer corners)
  buildCorners(f, segs, top) {
    const pts = new Map();
    for (const s of segs) for (const e of [s.a, s.b]) {
      const x = s.o === 'h' ? e : s.c, z = s.o === 'h' ? s.c : e;
      const k = x.toFixed(3) + ',' + z.toFixed(3);
      if (!pts.has(k)) pts.set(k, { x, z, segs: [] });
      pts.get(k).segs.push(s);
    }
    for (const p of pts.values()) {
      const hs = p.segs.filter((s) => s.o === 'h'), vs = p.segs.filter((s) => s.o === 'v');
      if (!hs.length || !vs.length) continue;
      for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
        const coveredH = hs.some((s) => (sx < 0 ? s.a < p.x - EPS : s.b > p.x + EPS) && this.thick(sz < 0 ? s.A : s.B) > 0);
        const coveredV = vs.some((s) => (sz < 0 ? s.a < p.z - EPS : s.b > p.z + EPS) && this.thick(sx < 0 ? s.A : s.B) > 0);
        if (coveredH || coveredV) continue;
        // empty quadrant: which room/outside is it?
        const room = this.roomAt(f, p.x + sx * 0.05, p.z + sz * 0.05);
        if (room && room.kind === 'shaft-elev') continue;
        const tx = Math.max(...vs.map((s) => this.thick(sx < 0 ? s.A : s.B))), tz = Math.max(...hs.map((s) => this.thick(sz < 0 ? s.A : s.B)));
        if (tx <= 0 || tz <= 0) continue;
        const outside = !room;
        const hh = (outside || room.kind === 'stair') && this.nextFloor(f) ? this.nextFloor(f).y - f.y : top - f.y;
        this.b.box(p.x + sx * tx / 2, f.y, p.z + sz * tz / 2, tx - 0.012, hh, tz - 0.012, this.matOf(room), { collide: true, ao: !outside, cast: outside });
      }
    }
  }

  buildFloorsAndCeilings(f, top) {
    const b = this.b;
    for (const r of f.rooms) {
      if (r.kind === 'shaft-elev' || r.kind === 'stair') continue;
      b.box((r.x0 + r.x1) / 2, f.y - this.slab, (r.z0 + r.z1) / 2, r.x1 - r.x0, this.slab, r.z1 - r.z0, r.floor, { surface: r.surface, ao: false });
      if (r.noCeiling) continue;
      const t = this.intT + 0.012;
      b.box((r.x0 + r.x1) / 2, top - 0.05, (r.z0 + r.z1) / 2, r.x1 - r.x0 - 2 * t, 0.05, r.z1 - r.z0 - 2 * t, r.ceil, { collide: false, ao: false, isCeiling: true });
    }
    // roof slab over the top floor
    if (!this.nextFloor(f) && this.footprint) {
      const [x0, z0, x1, z1] = this.footprint;
      b.box((x0 + x1) / 2, top, (z0 + z1) / 2, x1 - x0, this.slab, z1 - z0, this.roofMat || this.extMat, { collide: true, ao: false, cast: true });
    }
  }

  // rotation so a door/window's local +z points from side A to side B (or the reverse)
  rotFor(s, towardB = true) {
    if (s.o === 'h') return towardB ? 0 : Math.PI;
    return towardB ? Math.PI / 2 : -Math.PI / 2;
  }

  buildDoor(f, d) {
    const s = d.seg;
    if (!s) return;
    // approach side: the room the player comes from (d.from), default side A
    const fromB = d.from ? s.B && s.B.id === d.from : false;
    const rotY = this.rotFor(s, fromB);
    const depth = this.thick(s.A) + this.thick(s.B);
    const x = s.o === 'h' ? d.x : s.c, z = s.o === 'h' ? s.c : d.z;
    d.obj = createDoor(this.level, { x, y: f.y, z, rotY, w: d.w - 0.05, h: d.h - 0.02, wallDepth: depth, ...d.door });
  }

  buildWindow(f, w) {
    const b = this.b, s = w.seg;
    const outsideIsB = !s.B;
    const tIn = this.thick(outsideIsB ? s.A : s.B), tOut = this.thick(outsideIsB ? s.B : s.A);
    const dir = outsideIsB ? 1 : -1; // normal pointing outward
    const rotOut = this.rotFor(s, outsideIsB);
    const rotIn = rotOut + Math.PI;
    const px = s.o === 'h' ? w.x : s.c, pz = s.o === 'h' ? s.c : w.z;
    const ox = s.o === 'h' ? 0 : dir, oz = s.o === 'h' ? dir : 0;
    // outside: casing + sill; glass placed on the wall centre (recess = -tOut)
    windowUnit(b, px + ox * tOut, f.y + w.sill, pz + oz * tOut, w.w, w.h, rotOut, { frameMat: this.trimMat, glassMat: w.glass || this.glassMat, recess: -tOut, cross: w.cross ?? true });
    // inside: interior casing and window stool, no second glass
    windowUnit(b, px - ox * tIn, f.y + w.sill, pz - oz * tIn, w.w, w.h, rotIn, { frameMat: w.innerTrim || this.trimMat, glassMat: null, recess: 0, cross: false, sill: true });
    // reveals (the inside faces of the opening) are part of the wall layers already
    (this.level.windows ||= []).push({ x: px, y: f.y + w.sill, z: pz, w: w.w, h: w.h, normal: [ox, 0, oz], room: outsideIsB ? s.A : s.B });
  }

  buildElevator(f, e) {
    const s = e.it?.seg || null;
    const seg = f.segs.find((q) => q.ops.some((o) => o.kind === 'elevator' && o.it.id === e.id));
    if (!seg) return;
    const toward = seg.A && seg.A.kind === 'shaft-elev'; // car sits in the shaft, faces the lobby
    const rotY = this.rotFor(seg, !toward) + Math.PI;
    const n = [Math.sin(rotY), Math.cos(rotY)];
    const lobbyT = this.thick(toward ? seg.B : seg.A);
    const cx = (seg.o === 'h' ? e.x : seg.c) - n[0] * (1.2 + 0.1 - lobbyT), cz = (seg.o === 'h' ? seg.c : e.z) - n[1] * (1.2 + 0.1 - lobbyT);
    void s;
    e.obj = createElevator(this.level, { id: e.id, x: cx, y: f.y, z: cz, rotY, destinations: e.destinations, label: e.label, wallColor: e.wallColor ?? 0xb59a6a });
  }

  // switchback stairs between two floors inside a 'stair' room
  buildStairs(o) {
    const b = this.b, f0 = this.floorById(o.from), f1 = this.floorById(o.to);
    const r = f0.rooms.find((q) => q.id === o.room);
    const t = this.intT + 0.01;
    const x0 = r.x0 + t, x1 = r.x1 - t, z0 = r.z0 + t, z1 = r.z1 - t;
    const Ld = o.landing ?? 1.3;
    const rise = f1.y - f0.y, half = rise / 2;
    const steps = Math.round(half / 0.175), stepRise = half / steps;
    const run = ((z1 - z0) - 2 * Ld) / steps;
    const wHalf = (x1 - x0) / 2 - 0.06;
    const mat = o.mat, sm = o.stringer || o.mat;
    // near-end landing of the lower floor (part of that floor's slab)
    if (!o.skipBottomLanding) b.box((x0 + x1) / 2, f0.y - this.slab, z0 + Ld / 2, x1 - x0, this.slab, Ld, mat, { surface: o.surface, ao: false });
    // flight 1 (west half) up to the mid landing at the far end
    const fx1 = x0 + wHalf / 2 + 0.03, fx2 = x1 - wHalf / 2 - 0.03;
    stairFlight(b, fx1, z0 + Ld, f0.y, wHalf, steps, stepRise, run, '+z', mat, { stringer: sm, surface: o.surface, slab: 0.32 });
    b.box((x0 + x1) / 2, f0.y + half - 0.25, z1 - Ld / 2, x1 - x0, 0.25, Ld, mat, { surface: o.surface, ao: false });
    // flight 2 (east half) back to the near end of the upper floor
    stairFlight(b, fx2, z1 - Ld, f0.y + half, wHalf, steps, stepRise, run, '-z', mat, { stringer: sm, surface: o.surface, slab: 0.32 });
    b.box((x0 + x1) / 2, f1.y - this.slab, z0 + Ld / 2, x1 - x0, this.slab, Ld, mat, { surface: o.surface, ao: false });
    // the slot between the flights is guarded
    b.box((x0 + x1) / 2, f0.y, (z0 + z1) / 2, 0.12, half + 1.0, (z1 - z0) - 2 * Ld + 0.06, sm, { collide: true, ao: false });
    // record for validation
    (this.stairsBuilt ||= []).push({ from: f0.y, mid: f0.y + half, to: f1.y, bottom: z0 + Ld, top: z0 + Ld, x0, x1, room: r.id, steps, stepRise, headroom: (f1.y - this.slab) - (f0.y + stepRise) });
    void fx1;
  }

  // ---------------------------------------------------------------- validation
  validate() {
    const issues = [...this.issues];
    for (const f of this.floors) {
      const top = this.top(f);
      for (const r of f.rooms) if (r.kind !== 'shaft-elev' && top - f.y < 2.3) issues.push({ type: 'low-ceiling', floor: f.id, room: r.id, height: +(top - f.y).toFixed(2) });
      for (const d of f.doors) {
        if (!d.seg) continue;
        if (!d.seg.A && !d.seg.B) issues.push({ type: 'door-on-nothing', floor: f.id, at: [d.x, d.z] });
        if (d.h > top - f.y - 0.1) issues.push({ type: 'door-taller-than-storey', floor: f.id, at: [d.x, d.z] });
        const len = d.seg.b - d.seg.a, at = (d.seg.o === 'h' ? d.x : d.z) - d.seg.a;
        if (at - d.w / 2 < 0.08 || at + d.w / 2 > len - 0.08) issues.push({ type: 'door-into-corner', floor: f.id, at: [d.x, d.z] });
      }
      for (const w of f.windows) if (w.seg && w.sill + w.h > top - f.y - 0.15) issues.push({ type: 'window-above-ceiling', floor: f.id, at: [w.x, w.z] });
      // room graph: every room must connect to something through a door/passage/stair/elevator
      const links = new Map(f.rooms.map((r) => [r, new Set()]));
      for (const it of [...f.doors, ...f.passages]) if (it.seg) { const { A, B } = it.seg; if (A && B) { links.get(A).add(B); links.get(B).add(A); } else if (A || B) (links.get(A || B)).add('outside'); }
      for (const r of f.rooms) if (!links.get(r).size && !r.kind && !r.sealed) issues.push({ type: 'room-unreachable', floor: f.id, room: r.id });
    }
    for (const s of this.stairsBuilt || []) {
      if (!this.floors.some((f) => near(f.y, s.from))) issues.push({ type: 'stair-start-not-at-floor', room: s.room });
      if (!this.floors.some((f) => near(f.y, s.to))) issues.push({ type: 'stair-end-not-at-floor', room: s.room });
      if (s.stepRise > 0.2 || s.stepRise < 0.14) issues.push({ type: 'stair-riser', room: s.room, rise: +s.stepRise.toFixed(3) });
    }
    this.level.blueprintReport = (this.level.blueprintReport || []).concat([{ building: this.name, issues }]);
    return issues;
  }
}

export { THREE };
