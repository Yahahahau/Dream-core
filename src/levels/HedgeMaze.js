// LEVEL 07 — Hedge Maze: a genuine, navigable maze (recursive backtracker),
// a fountain plaza at the center, things waiting in dead ends and two doors
// that are secretly the same door.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane, streetLamp } from './common/Props.js';
import { hedgeTex, grassTex, dirtTex, rng, plasterTex, textTex, colorBarsTex } from '../utils/Textures.js';
import { trees, grassField, halo } from '../environment/EnvironmentEffects.js';
import { createWater } from '../environment/WaterSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const N = 13, C = 4, X0 = -26, Z0 = -8, HH = 3.2;
const cx = (c) => X0 + (c + 0.5) * C;
const cz = (r) => Z0 - (r + 0.5) * C;

function generate(seed) {
  const r = rng(seed);
  // walls: h[r][c] = wall on the south side of cell (c,r) (row r .. r=N is the north boundary)
  const h = Array.from({ length: N + 1 }, () => Array(N).fill(true));
  const v = Array.from({ length: N + 1 }, () => Array(N).fill(true)); // v[c][r] west side of cell
  const seen = Array.from({ length: N }, () => Array(N).fill(false));
  const inPlaza = (c, rr) => c >= 5 && c <= 7 && rr >= 5 && rr <= 7;
  const stack = [[6, 0]];
  seen[6][0] = true;
  while (stack.length) {
    const [c, rr] = stack[stack.length - 1];
    const opts = [[0, 1], [0, -1], [1, 0], [-1, 0]].map(([dc, dr]) => [c + dc, rr + dr, dc, dr]).filter(([nc, nr]) => nc >= 0 && nr >= 0 && nc < N && nr < N && !seen[nc][nr] && !inPlaza(nc, nr));
    if (!opts.length) { stack.pop(); continue; }
    const [nc, nr, dc, dr] = opts[(r() * opts.length) | 0];
    if (dr === 1) h[rr + 1][c] = false; else if (dr === -1) h[rr][c] = false;
    else if (dc === 1) v[c + 1][rr] = false; else v[c][rr] = false;
    seen[nc][nr] = true;
    stack.push([nc, nr]);
  }
  // open the plaza and connect it on all four sides
  for (let c = 5; c <= 7; c++) for (let rr = 5; rr <= 7; rr++) {
    if (rr > 5) h[rr][c] = false;
    if (c > 5) v[c][rr] = false;
  }
  h[5][6] = false; h[8][6] = false; v[5][6] = false; v[8][6] = false;
  h[0][6] = false; // entrance
  // a few loops so it is not a perfect tree
  for (let i = 0; i < 10; i++) { const c = 1 + ((r() * (N - 2)) | 0), rr = 1 + ((r() * (N - 2)) | 0); if (r() < 0.5) h[rr][c] = false; else v[c][rr] = false; }
  return { h, v };
}

export default class HedgeMaze extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['frozen', 'almond'];
    this.heightAt = () => 0;
    this.terrainSurface = 'grass';
    const { h, v } = generate(1337);
    this.maze = { h, v };

    // ground
    const lawn = makeMaterial({ map: grassTex(0x5f9a40, 'lawn'), vertexColors: false, roughness: 1 });
    lawn.map.repeat.set(120, 120);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(480, 480), lawn);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true;
    this.group.add(ground);
    this.disposables.push(lawn, ground.geometry);
    const gravel = b.mat('gravel', { map: dirtTex(0xc2b49a), roughness: 1, texScale: [3, 3] });
    b.box(0, -0.18, Z0 - N * C / 2, N * C, 0.2, N * C, gravel, { collide: false, ao: false });
    b.box(0, -0.18, 6, 3, 0.2, 28, gravel, { collide: false, ao: false });

    // hedges
    const hm = b.mat('hedge', { map: hedgeTex(), roughness: 1, texScale: [2, 2] });
    for (let rr = 0; rr <= N; rr++) for (let c = 0; c < N; c++) if (h[rr][c]) b.box(cx(c), 0, Z0 - rr * C, C + 1, HH, 1, hm, { cast: true, aoStrength: 0.5 });
    for (let c = 0; c <= N; c++) for (let rr = 0; rr < N; rr++) if (v[c][rr]) b.box(X0 + c * C, 0, cz(rr), 1, HH, C + 1, hm, { cast: true, aoStrength: 0.5 });

    // ---------- the plaza ----------
    const PX = cx(6), PZ = cz(6);
    const stone = b.mat('mstone', { map: plasterTex(0xe6e0d2, 'mstone'), texScale: [1.5, 1.5] });
    b.box(PX, -0.08, PZ, 11, 0.1, 11, stone, { collide: false, ao: false });
    b.prop([[0, 0, 0, 4.4, 0.6, 4.4, 0xe6e0d2, 'cyl'], [0, 0, 0, 0.5, 1.6, 0.5, 0xe6e0d2, 'cyl'], [0, 1.6, 0, 1.4, 0.2, 1.4, 0xe6e0d2, 'cyl'], [0, 1.8, 0, 0.3, 0.6, 0.3, 0xe6e0d2, 'cyl']], PX - 3, 0, PZ + 2.5, 0, { collide: true });
    createWater(this, { x0: PX - 5, z0: PZ + 0.5, x1: PX - 1, z1: PZ + 4.5, y: 0.55, opacity: 0.6, shallow: 0x7fd0c8, sky: 0xdff0ff, scale: 2 });
    const fw = new THREE.Object3D(); fw.position.set(PX - 3, 1, PZ + 2.5); this.group.add(fw);
    g.audio.positional(fw, { kind: 'water', volume: 0.45, ref: 3, filter: ['bandpass', 1500] });
    trees(this, [[PX + 3, 0, PZ - 2, 0, 3.2]], { kind: 'lollipop', leaf: 0xd88ab0 });
    for (const [dx, dz, r] of [[-4.6, -3, Math.PI / 2], [4.6, 3, -Math.PI / 2]]) b.prop(F.bench(0xf2eee6, 0x8a8a8a), PX + dx, 0, PZ + dz, r, { collide: true });
    createDoor(this, { x: PX + 1, y: 0, z: PZ + 3.5, rotY: Math.PI, freeStanding: true, target: { level: 'frozen', spawn: 'default' }, glimpse: 0xeaf2ff, label: 'Open the white door', color: 0xf8f8f4, kind: 'flat' });
    addExamine(this, hitbox(this, PX + 3, 0, PZ - 2, 1, 4, 1), { name: 'The pink tree', text: 'You can see it from anywhere in the maze. Up close, the leaves are soft, like a sweater you lost.', notes: 'Hedge maze · center' });

    // colored lamp posts at chosen intersections (landmarks)
    const lamps = [[2, 2, 0xff8a8a], [10, 2, 0x8ab8ff], [2, 10, 0xffe08a], [10, 10, 0x9af0a8], [6, 3, 0xffffff]];
    for (const [c, rr, col] of lamps) {
      b.prop([[0, 0, 0, 0.12, 3.6, 0.12, 0x2a2a2a, 'cyl'], [0, 3.6, 0, 0.45, 0.45, 0.45, col, 'sphere']], cx(c) + 1.4, 0, cz(rr) + 1.4, 0, { collide: true, blob: false });
      halo(this, cx(c) + 1.4, 3.8, cz(rr) + 1.4, 1.6, '#' + new THREE.Color(col).getHexString(), 0.5);
    }

    // ---------- dead ends ----------
    const dead = [];
    for (let c = 0; c < N; c++) for (let rr = 0; rr < N; rr++) {
      if (c >= 5 && c <= 7 && rr >= 5 && rr <= 7) continue;
      const walls = { s: h[rr][c], n: h[rr + 1][c], w: v[c][rr], e: v[c + 1][rr] };
      const cnt = Object.values(walls).filter(Boolean).length;
      if (cnt === 3 && !(c === 6 && rr === 0)) dead.push({ c, rr, open: Object.keys(walls).find((k) => !walls[k]) });
    }
    const R = rng(77);
    dead.sort(() => R() - 0.5);
    // place an object against the wall opposite the opening, facing the opening
    const place = (d) => {
      const back = { s: 'n', n: 's', w: 'e', e: 'w' }[d.open];
      const off = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] }[back];
      const x = cx(d.c) + off[0] * 1.2, z = cz(d.rr) + off[1] * 1.2;
      const look = { n: [0, -1], s: [0, 1], e: [1, 0], w: [-1, 0] }[d.open];
      const rot = Math.atan2(look[0], look[1]);
      return { x, z, rot, wallX: cx(d.c) + off[0] * 1.45, wallZ: cz(d.rr) + off[1] * 1.45 };
    };
    const features = [
      (p) => { b.prop(F.bench(0xf2eee6, 0x6a6a6a), p.x, 0, p.z, p.rot, { collide: true }); addExamine(this, hitbox(this, p.x, 0, p.z, 1.8, 1, 0.6), { name: 'Bench in a dead end', text: 'A perfect place to be lost for a while.', notes: 'Hedge maze' }); },
      (p) => { b.prop([[0, 0, 0, 0.4, 0.9, 0.4, 0xd8d2c4, 'cyl'], [0, 0.9, 0, 1.0, 0.15, 1.0, 0xd8d2c4, 'cyl']], p.x, 0, p.z, 0, { collide: true }); createWater(this, { x0: p.x - 0.4, z0: p.z - 0.4, x1: p.x + 0.4, z1: p.z + 0.4, y: 1.04, opacity: 0.7, scale: 3 }); addExamine(this, hitbox(this, p.x, 0, p.z, 1, 1.1, 1), { name: 'Birdbath', text: 'The water reflects a sky with two suns.', notes: 'Hedge maze' }); },
      (p) => { trees(this, [[p.x, 0, p.z, 0, 0.9]], { kind: 'lollipop', leaf: 0x8ab8ff }); addExamine(this, hitbox(this, p.x, 0, p.z, 1, 3, 1), { name: 'Blue tree', text: 'It hums very quietly, the same note as a refrigerator at night.', notes: 'Hedge maze' }); },
      (p) => { b.prop([...F.roundTable(0xffffff, 0.45), [0, 0.76, 0, 0.18, 0.12, 0.18, 0xf2d0e0, 'cyl'], [0.2, 0.76, 0.1, 0.12, 0.08, 0.12, 0xffffff, 'cyl']], p.x, 0, p.z, 0, { collide: true }); b.prop(F.chair(0xffffff, 0xdddddd), p.x + Math.sin(p.rot) * 0.8, 0, p.z + Math.cos(p.rot) * 0.8, p.rot + Math.PI); addNote(this, hitbox(this, p.x, 0.7, p.z, 0.9, 0.2, 0.9), { title: 'Tea for one', text: 'The tea is still hot.\nThe cup has a lipstick mark\nin the shape of a tiny house.' }); },
      (p) => { b.prop(F.tvOld(), p.x, 0, p.z, p.rot, { collide: true }); const s = texturedPlane(this, colorBarsTex(), p.x + Math.sin(p.rot) * 0.29, 0.78, p.z + Math.cos(p.rot) * 0.29, 0.58, 0.44, p.rot, { unlit: true, emissive: true }); g.audio.positional(s, { kind: 'hum', base: 60, volume: 0.15, ref: 1.2 }); addExamine(this, s, { name: 'Television in the hedges', text: 'Color bars. If you stare long enough, the yellow one is a little brighter than it should be.', notes: 'Hedge maze' }); },
      (p) => { b.prop([[0, 0, 0, 0.9, 0.9, 0.9, 0xf2f0ea, 'sphere'], [0, 0.8, 0, 0.65, 0.65, 0.65, 0xf2f0ea, 'sphere'], [0, 1.35, 0, 0.45, 0.45, 0.45, 0xf2f0ea, 'sphere']], p.x, 0, p.z, 0, { collide: true }); addExamine(this, hitbox(this, p.x, 0, p.z, 1, 1.8, 1), { name: 'Statue', text: 'Three spheres. The plaque says: "A Person, Resting". It does look restful.', notes: 'Hedge maze' }); },
      (p) => { createDoor(this, { x: p.wallX - Math.sin(p.rot) * -0.0, y: 0, z: p.wallZ, rotY: p.rot, freeStanding: true, frame: true, color: 0xd88a8a, kind: 'flat', locked: 'A red door in the hedge. It is locked from the other side, and the other side is also hedge.' }); },
    ];
    const used = [];
    for (let i = 0; i < Math.min(features.length, dead.length); i++) { features[i](place(dead[i])); used.push(dead[i]); }
    // the impossible passage: two doors in two dead ends that lead into each other
    const A = dead[features.length], B = dead[features.length + 1];
    if (A && B) {
      const pa = place(A), pb = place(B);
      this.addSpawn('pairA', [cx(A.c), 0, cz(A.rr)], pa.rot + Math.PI);
      this.addSpawn('pairB', [cx(B.c), 0, cz(B.rr)], pb.rot + Math.PI);
      createDoor(this, { x: pa.wallX, y: 0, z: pa.wallZ, rotY: pa.rot, freeStanding: true, color: 0x7ab07a, kind: 'flat', target: { level: 'maze', spawn: 'pairB' }, glimpse: 0xd8ffd8, label: 'Green door' });
      createDoor(this, { x: pb.wallX, y: 0, z: pb.wallZ, rotY: pb.rot, freeStanding: true, color: 0x7ab07a, kind: 'flat', target: { level: 'maze', spawn: 'pairA' }, glimpse: 0xd8ffd8, label: 'Green door' });
    }

    // ---------- outside: gardens, flower beds, ring of trees ----------
    const beds = [];
    for (let i = 0; i < 2; i++) for (let k = 0; k < 6; k++) beds.push([(i ? 4 : -4), 0.15, 2 + k * 3]);
    for (const [x, , z] of beds) b.prop([[0, 0, 0, 2.2, 0.25, 2, 0x6a4a30], ...Array.from({ length: 12 }, (_, j) => [((j % 4) - 1.5) * 0.5, 0.25, ((j / 4 | 0) - 1) * 0.55, 0.22, 0.22, 0.22, [0xff8ab0, 0xffe08a, 0xffffff, 0xb08aff][j % 4], 'sphere'])], x, 0, z, 0, { collide: true });
    for (const x of [-8, 8]) b.prop([[0, 0, 0, 1.6, 1.6, 1.6, 0x3f7a34, 'sphere'], [0, 1.4, 0, 1.0, 1.0, 1.0, 0x3f7a34, 'sphere']], x, 0, -5, 0, { collide: true });
    const ring = [];
    for (let i = 0; i < 46; i++) { const a = i / 46 * Math.PI * 2; ring.push([Math.cos(a) * 62, 0, -34 + Math.sin(a) * 66, a, 1.3 + (i % 3) * 0.25]); }
    trees(this, ring, { kind: 'round', leaf: 0x4a7f3a });
    for (let i = 0; i < 46; i++) { const a = i / 46 * Math.PI * 2; this.addCollider(Math.cos(a) * 60 - 4, 0, -34 + Math.sin(a) * 64 - 4, Math.cos(a) * 60 + 4, 4, -34 + Math.sin(a) * 64 + 4); }
    grassField(this, { x0: -40, z0: -8, x1: 40, z1: 28, heightAt: () => 0, density: 0.7, height: 0.32, color: 0x66a046, sway: 0.07, seed: 12, avoid: (x, z) => Math.abs(x) < 2 || (Math.abs(x) < 6 && z > 0 && z < 20) });
    createDoor(this, { x: 0, y: 0, z: 22, rotY: Math.PI, freeStanding: true, target: { level: 'almond', spawn: 'from-maze' }, glimpse: 0xffe8b0, label: 'Back to the fields', kind: 'flat', color: 0x2e3a2e });
    texturedPlane(this, textTex(['THE GARDEN', 'please stay on the path'], { w: 512, h: 192, bg: '#f2eee2', fg: '#3a5a3a', font: '40px Georgia, serif', border: '#3a5a3a' }), -2.6, 1.2, -7.4, 1.6, 0.6, 0);
    b.prop([[0, 0, 0, 0.1, 1.0, 0.1, 0x3a3a3a]], -2.6, 0, -7.6, 0, { blob: false });

    this.addSpawn('default', [0, 0, 16], yawTo(0, -1));
    this.addSpawn('from-almond', [0, 0, 16], yawTo(0, -1));
    this.addSpawn('from-frozen', [PX + 1, 0, PZ + 1.8], yawTo(0, -1));
  }
}
