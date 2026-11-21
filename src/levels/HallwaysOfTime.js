// LEVEL 08 — Hallways of Time: one long corridor made of pieces of every
// earlier place, joined in the wrong order. It changes a little on each visit.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane } from './common/Props.js';
import { checkerTex, wainscotTex, ceilingTileTex, lockerTex, carpetTex, wallpaperTex, woodTex, marbleTex, tileTex, plasterTex, textTex, paintingTex, windowTex, posterTex } from '../utils/Textures.js';
import { fluorescent, halo, trees } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { createElevator } from '../interaction/Elevator.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';

export default class HallwaysOfTime extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['school', 'hotel', 'apartments', 'mall', 'pool', 'edge'];
    this.surface = 'carpet';
    const visits = (g.save.data.visits.hallways || 0);
    this.visits = visits;
    const t = 0.2;
    const M = {
      beige: b.mat('hbeige', { map: plasterTex(0xe8dcc8, 'hbeige'), texScale: [2, 2] }),
      beigeF: b.mat('hbeigef', { map: woodTex(0xb8977a, 6, 'hallwood'), roughness: 0.6, texScale: [2, 2] }),
      schoolW: b.mat('hschoolw', { map: wainscotTex(0x8fa79a, 0xece6d4, 0x5e7a6c, 0.36), texScale: [1.5, 3.2] }),
      schoolF: b.mat('hschoolf', { map: checkerTex(0xe9e3d0, 0x9fb0a2, 4), roughness: 0.55, texScale: [1.2, 1.2] }),
      hotelW: b.mat('hhotelw', { map: wainscotTex(0x6b3a2a, 0xd9c49a, 0xc9a35a, 0.33, 'wallpaper'), texScale: [1.6, 3] }),
      hotelF: b.mat('hhotelf', { map: carpetTex('hotel'), texScale: [2, 2] }),
      aptW: b.mat('haptw', { map: wallpaperTex(0xe6d2b0, 0x9a6a5a, 'stripe'), texScale: [1.2, 1.2] }),
      aptF: b.mat('haptf', { map: woodTex(0x9a6e48, 5), texScale: [2, 2] }),
      mallW: b.mat('hmallw', { map: plasterTex(0xf2efe8, 'mall'), texScale: [3, 3] }),
      mallF: b.mat('hmallf', { map: marbleTex(0xeeeae4), roughness: 0.2, texScale: [3, 3] }),
      poolT: b.mat('hpool', { map: tileTex({ tile: 0xf4f7f7, grout: 0xc4d2d4, n: 8 }), roughness: 0.25, texScale: [2, 2] }),
      ceil: b.mat('hceil', { map: ceilingTileTex(), texScale: [1.2, 1.2] }),
      plainCeil: b.mat('hpc', { map: plasterTex(0xf2ece0, 'hpc') }),
    };
    // corridor segment: [zStart, zEnd(more negative)], width, height, wall, floor, ceil, doors
    const seg = (z0, z1, w, h, wall, floor, ceil, surface, doors = []) => {
      const x0 = -w / 2, x1 = w / 2;
      b.floor(x0, z1, x1, z0, 0, floor, { surface });
      b.ceiling(x0 - t, z1, x1 + t, z0, h, ceil);
      const ops = (side) => doors.filter((d) => d.side === side).map((d) => ({ at: z0 - d.z, w: 1.0, h: 2.15 }));
      b.wall(x0 - t / 2, z0, x0 - t / 2, z1, 0, h, wall, { thick: t, openings: ops(-1) });
      b.wall(x1 + t / 2, z0, x1 + t / 2, z1, 0, h, wall, { thick: t, openings: ops(1) });
      for (const d of doors) {
        createDoor(this, { x: d.side * (w / 2 + t / 2), y: 0, z: d.z, rotY: d.side > 0 ? -Math.PI / 2 : Math.PI / 2, color: d.color ?? 0x8a6a4a, kind: d.kind ?? 'panel', target: d.target, glimpse: d.glimpse ?? 0xfff0dc, label: d.label, locked: d.locked });
        if (d.sign) texturedPlane(this, textTex(d.sign, { w: 256, h: 64, bg: '#2a2a30', fg: '#e8e0d0', font: 'bold 30px sans-serif' }), d.side * (w / 2 - 0.01), 2.45, d.z, 0.8, 0.2, d.side > 0 ? -Math.PI / 2 : Math.PI / 2);
      }
    };
    // a thick frame where one memory turns into another
    const frame = (z, w, h, wNext, hNext) => {
      // a portal frame: side pieces from the outer wall line in to the inner
      // opening, a lintel above it; depth 0.46 so it stands clear of both walls
      const W = Math.max(w, wNext) + 0.5, H = Math.max(h, hNext) + 0.02, m = M.beige;
      const inner = Math.min(w, wNext) - 0.2, innerH = Math.min(h, hNext) - 0.15;
      const sideW = (W - inner) / 2;
      b.box(-(inner / 2 + sideW / 2), 0, z, sideW, H, 0.46, m, {});
      b.box(inner / 2 + sideW / 2, 0, z, sideW, H, 0.46, m, {});
      b.box(0, innerH, z, inner, H - innerH, 0.46, m, { collide: false });
    };

    // S0 — entry (plain, quiet)
    seg(2, -18, 3, 3, M.beige, M.beigeF, M.plainCeil, 'carpet');
    b.wall(-1.6, 2 + t / 2, 1.6, 2 + t / 2, 0, 3, M.beige, { thick: t });
    texturedPlane(this, textTex(visits <= 1 ? 'WELCOME' : `YOU HAVE BEEN HERE ${visits} TIMES`, { w: 768, h: 96, bg: null, fg: '#7a6a5a', font: '44px Georgia, serif', key: 'visits' + visits }), 0, 2.2, 1.99, 2.6, 0.33, Math.PI, { unlit: true, alpha: true });
    for (let z = -2; z > -18; z -= 4) halo(this, 0, 2.7, z, 1.1, '#ffe8c8', 0.55);
    texturedPlane(this, paintingTex(visits % 4), -1.49, 1.6, -9, 0.9, 0.68, Math.PI / 2);
    addExamine(this, hitbox(this, -1.45, 1.2, -9, 0.2, 0.8, 1), { name: 'The painting that changes', text: ['A field at noon.', 'A field at sunset. Wasn\'t it noon before?', 'A field at night, with one lit window.', 'A field, and someone standing in it, waving.'][visits % 4], notes: `Hallways of Time · visit ${visits}` });
    frame(-18, 3, 3, 4, 3.2);
    // S1 — school
    seg(-18, -40, 4, 3.2, M.schoolW, M.schoolF, M.ceil, 'tile', [{ side: -1, z: -30, kind: 'school', color: 0x9c7a56, target: { level: 'school', spawn: 'from-hallways' }, glimpse: 0xeaf6ff, label: 'Classroom', sign: 'ROOM 2-B' }]);
    for (let z = -19; z > -40; z -= 0.46) if (z < -32 || z > -27) b.box(1.77, 0.05, z - 0.23, 0.45, 1.85, 0.45, b.mat('hlock', { map: lockerTex(0x5f86a6), roughness: 0.5 }), { collide: false, stretch: true, ao: false });
    this.addCollider(1.5, 0, -40, 2, 1.9, -18);
    for (let z = -20; z > -40; z -= 3.6) fluorescent(this, 0, 3.2, z, { w: 0.5, d: 1.2, flicker: z < -34 });
    texturedPlane(this, posterTex('school', 3 + visits), -1.99, 1.6, -22, 0.6, 0.8, Math.PI / 2);
    frame(-40, 4, 3.2, 3, 2.8);
    // S2 — hotel
    seg(-40, -62, 3, 2.8, M.hotelW, M.hotelF, M.plainCeil, 'carpet', [
      { side: 1, z: -46, kind: 'hotel', color: 0x7a3a2a, locked: 'Room 311. Someone inside is laughing at a joke you told years ago.' },
      { side: -1, z: -52, kind: 'hotel', color: 0x7a3a2a, target: { level: 'hotel', spawn: 'from-hallways' }, glimpse: 0xffd8a0, label: 'Room 312', sign: '312' },
      { side: 1, z: -58, kind: 'hotel', color: 0x7a3a2a, locked: 'Room 313. The door is warm, like a hand.' },
    ]);
    for (let z = -43; z > -62; z -= 4) for (const s of [-1, 1]) halo(this, s * 1.4, 1.95, z, 0.9, '#ffd8a0', 0.7);
    frame(-62, 3, 2.8, 2.2, 2.7);
    // S3 — apartments (narrow)
    seg(-62, -80, 2.2, 2.7, M.aptW, M.aptF, M.plainCeil, 'wood', [
      { side: 1, z: -68, color: 0x6a3a2a, target: { level: 'apartments', spawn: 'from-hallways' }, glimpse: 0xffd8b0, label: 'Apartment 1A', sign: '1A' },
      { side: -1, z: -74, color: 0x3a5a4a, locked: 'You can smell dinner. It is your favourite.' },
    ]);
    b.box(-1.11, 1.0, -77.5, 0.04, 1.2, 1.2, b.mat('hwin', { map: windowTex(0xf4efe4, visits >= 3 ? 0x1a2a4a : 0xf2c8a0, 4), emissive: visits >= 3 ? 0x101828 : 0xf2c8a0, emissiveIntensity: 0.6 }), { collide: false, stretch: true, ao: false });
    halo(this, 0, 2.3, -66, 1, '#ffe2b8', 0.6); halo(this, 0, 2.3, -75, 1, '#ffe2b8', 0.6);
    frame(-80, 2.2, 2.7, 8, 4);
    // S4 — mall (wide)
    seg(-80, -100, 8, 4, M.mallW, M.mallF, M.plainCeil, 'tile', [{ side: 1, z: -92, kind: 'flat', color: 0xd8d0c0, target: { level: 'mall', spawn: 'from-hallways' }, glimpse: 0xf4f8ff, label: 'Mall entrance', sign: 'MALL' }]);
    for (const z of [-84, -90, -96]) { b.prop([[0, 0, 0, 1.4, 0.6, 1.4, 0xd8d4cc]], -2.5, 0, z, 0, { collide: true }); }
    trees(this, [[-2.5, 0.6, -84, 0, 0.55], [-2.5, 0.6, -90, 0, 0.55], [-2.5, 0.6, -96, 0, 0.55]], { kind: 'round', leaf: 0x5a9a4a, cast: false });
    for (let z = -82; z > -100; z -= 4.5) fluorescent(this, 1.5, 4, z, { w: 1, d: 1 });
    b.prop(F.bench(0xb89a7a, 0x8a8a8a), 3.2, 0, -86, -Math.PI / 2, { collide: true });
    frame(-100, 8, 4, 4, 3.5);
    // S5 — pool tiles
    seg(-100, -114, 4, 3.5, M.poolT, M.poolT, M.poolT, 'tile', [{ side: -1, z: -108, kind: 'flat', color: 0x7fa8c8, target: { level: 'pool', spawn: 'from-hallways' }, glimpse: 0xcff8ff, label: 'Pool', sign: 'POOL' }]);
    for (let z = -102; z > -114; z -= 4) fluorescent(this, 0, 3.5, z, { w: 0.6, d: 1.2, color: 0xeefcff });
    frame(-114, 4, 3.5, 4, 6.5);
    // S6 — stairs up and down again
    seg(-114, -134, 4, 6.5, M.beige, M.beigeF, M.plainCeil, 'carpet');
    const st = b.mat('hstair', { map: woodTex(0x7a5236, 3, 'stair'), texScale: [1, 1] });
    b.stairs(0, -116, 0, 4, 12, 0.25, 0.4, '-z', st, { surface: 'wood' });
    b.box(0, 0, -123, 4, 3, 4.4, st, { surface: 'wood' });
    b.stairs(0, -130, 0, 4, 12, 0.25, 0.4, '+z', st, { surface: 'wood' });
    for (const z of [-120, -128]) halo(this, 0, 5.8, z, 1.4, '#fff0d8', 0.5);
    addExamine(this, hitbox(this, 0, 3, -123, 4, 0.5, 2), { name: 'Landing', text: 'From the top of the stairs you can see the whole corridor behind you. It is longer than the way you walked.', notes: 'Hallways of Time', prompt: 'Look back' });
    frame(-134, 4, 6.5, 3, 3);
    // S7 — old elevator
    seg(-134, -140, 3, 3, M.hotelW, M.hotelF, M.plainCeil, 'carpet');
    b.wall(-1.6, -140 - t / 2, 1.6, -140 - t / 2, 0, 3, M.hotelW, { thick: t, openings: [{ at: 1.6, w: 2.6, h: 2.62 }] });
    createElevator(this, { id: 'old', x: 0, y: 0, z: -140 - t / 2 - 1.2, rotY: 0, label: '?', wallColor: 0x8a7a5a, destinations: [{ label: 'Down — to the sea', level: 'edge', spawn: 'from-elevator' }, { label: 'Hotel lobby', level: 'hotel', spawn: 'elev-L1' }, { label: 'Back to the start of the hall', spawn: 'default' }] });
    halo(this, 0, 2.7, -137, 1, '#ffd8a0', 0.6);

    // the lone chair: in a different place every visit
    const chairZ = [-10, -25, -50, -70, -88, -105][visits % 6];
    b.prop(F.chair(0xd8c8a8, 0x8a7a5a), 0.2, 0, chairZ, visits * 1.3, { collide: true });
    addExamine(this, hitbox(this, 0.2, 0, chairZ, 0.6, 1, 0.6), { name: 'A chair that moves', text: visits <= 1 ? 'Just a chair, left in the middle of the hall.' : 'The same chair. It was somewhere else last time. You are sure of it.', notes: `Hallways of Time · visit ${visits}` });
    addNote(this, hitbox(this, 0, 0.1, -16, 1, 0.1, 0.6), { title: 'Taped to the floor', text: 'Every door here opens onto somewhere you have already been.\nThat is how you know it is a memory.' });

    this.addSpawn('default', [0, 0, 0], yawTo(0, -1));
    this.addSpawn('from-elevator', [0, 0, -138], yawTo(0, 1));
  }
}
