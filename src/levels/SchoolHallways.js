// LEVEL 02 — School Hallways: corridors, lockers, classrooms, a cafeteria,
// a stairwell down to the pool and a classroom that is far too tall.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane } from './common/Props.js';
import { checkerTex, wainscotTex, ceilingTileTex, lockerTex, corkTex, posterTex, chalkboardTex, windowTex, cloudSeaTex, textTex, plasterTex, tileTex, concreteTex } from '../utils/Textures.js';
import { fluorescent } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';

const HT = 3.2;

function clockTex() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = '#fff'; x.beginPath(); x.arc(64, 64, 60, 0, 7); x.fill();
  x.strokeStyle = '#222'; x.lineWidth = 6; x.stroke();
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; x.fillStyle = '#222'; x.fillRect(64 + Math.sin(a) * 48 - 2, 64 - Math.cos(a) * 48 - 2, 4, 6); }
  x.lineCap = 'round';
  x.lineWidth = 6; x.beginPath(); x.moveTo(64, 64); x.lineTo(64 + Math.sin(3.25 / 12 * Math.PI * 2) * 28, 64 - Math.cos(3.25 / 12 * Math.PI * 2) * 28); x.stroke();
  x.lineWidth = 4; x.beginPath(); x.moveTo(64, 64); x.lineTo(64 + Math.sin(0.25 * Math.PI * 2) * 42, 64 - Math.cos(0.25 * Math.PI * 2) * 42); x.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export default class SchoolHallways extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['pool', 'almond', 'hallways'];
    const floorM = b.mat('sfloor', { map: checkerTex(0xe9e3d0, 0x9fb0a2, 4), roughness: 0.55, texScale: [1.2, 1.2] });
    const wallM = b.mat('swall', { map: wainscotTex(0x8fa79a, 0xece6d4, 0x5e7a6c, 0.36), roughness: 0.85, texScale: [1.5, HT] });
    const ceilM = b.mat('sceil', { map: ceilingTileTex(), roughness: 0.95, texScale: [1.2, 1.2] });
    const plainW = b.mat('swall2', { map: plasterTex(0xe8e2d0), texScale: [2, 2] });
    const lockM = b.mat('lockers', { map: lockerTex(0x5f86a6), roughness: 0.5, metalness: 0.2 });
    const lockM2 = b.mat('lockers2', { map: lockerTex(0xc86a4a), roughness: 0.5, metalness: 0.2 });
    const cork = b.mat('cork', { map: corkTex(), roughness: 0.9 });
    const winM = b.mat('swin', { map: windowTex(0xf2f0e8, 0xcfe4f6, 4), emissive: 0xdfeefa, emissiveIntensity: 0.5, roughness: 0.1 });
    const t = 0.2;

    // ---------- corridor A (x -32..30) ----------
    b.floor(-32, -2, 30, 2, 0, floorM, { surface: 'tile' });
    b.ceiling(-42, -2.2, 30, 2.2, HT, ceilM);
    const doorAt = (x) => ({ at: x + 32, w: 1.0, h: 2.15 });
    b.wall(-32, 2 + t / 2, 26, 2 + t / 2, 0, HT, wallM, { thick: t, openings: [doorAt(-21.5), doorAt(-10.5), doorAt(10.5)] });
    b.wall(-32, -2 - t / 2, 30, -2 - t / 2, 0, HT, wallM, { thick: t, openings: [{ at: 32, w: 4, h: 2.6 }] });
    b.wall(30 + t / 2, -2.2, 30 + t / 2, 34, 0, HT, wallM, { thick: t });
    // stairwell
    b.wall(-42, 2 + t / 2, -32, 2 + t / 2, -2.4, HT + 2.4, wallM, { thick: t });
    b.wall(-42, -2 - t / 2, -32, -2 - t / 2, -2.4, HT + 2.4, wallM, { thick: t });
    b.stairs(-38, 0, -2.4, 4, 12, 0.2, 0.5, '+x', b.mat('stair', { map: concreteTex(0xb7b1a2), texScale: [1, 1] }), { surface: 'concrete' });
    b.floor(-42, -2, -38, 2, -2.4, floorM, { surface: 'tile' });
    b.wall(-42 - t / 2, -2.2, -42 - t / 2, 2.2, -2.4, HT + 2.4, wallM, { thick: t, openings: [{ at: 2.2, w: 1.1, h: 2.15 }] });
    createDoor(this, { x: -42 - t / 2, y: -2.4, z: 0, rotY: Math.PI / 2, color: 0x7fa8c8, kind: 'school', target: { level: 'pool', spawn: 'from-school' }, glimpse: 0xcff8ff, label: 'POOL' });
    texturedPlane(this, textTex('→ POOL', { w: 256, h: 64, bg: '#2a5d8a', fg: '#fff', font: 'bold 40px sans-serif' }), -41.85, 0.25, 0, 0.9, 0.22, Math.PI / 2);
    texturedPlane(this, textTex('↓ POOL · GYM', { w: 384, h: 64, bg: '#2a5d8a', fg: '#fff', font: 'bold 36px sans-serif' }), -31.5, 2.75, -1.85, 1.2, 0.2, 0);

    // ---------- lockers along the south wall ----------
    const lockerRun = (x0, x1, mat) => {
      for (let x = x0; x < x1 - 0.2; x += 0.46) b.box(x + 0.23, 0.05, -1.75, 0.45, 1.85, 0.45, mat, { collide: false, stretch: true, ao: false, tint: 0xffffff });
      b.box((x0 + x1) / 2, 0, -1.75, x1 - x0, 0.05, 0.45, plainW, { collide: false, ao: false, tint: 0x555555 });
      this.addCollider(x0, 0, -2, x1, 1.9, -1.5);
    };
    lockerRun(-30, -6, lockM); lockerRun(6, 28, lockM2);
    // locker that opens a little
    addExamine(this, hitbox(this, -18.3, 0.9, -1.6, 0.45, 0.6, 0.3), { name: 'Locker 117', text: 'It is not locked. Inside: a juice box, still cold, and a photo of a golden field.', notes: 'School · corridor' , prompt: 'Open locker' });

    // ---------- bulletin boards & posters in the corridor ----------
    for (const x of [-27, -16, -4, 3, 18, 22]) { b.box(x, 1.1, 1.97, 2.2, 1.1, 0.04, cork, { collide: false, stretch: true, ao: false }); }
    for (let i = 0; i < 5; i++) texturedPlane(this, posterTex('school', i), 28.85 + 1.13, 1.6, 6 + i * 6, 0.7, 0.95, -Math.PI / 2);
    addNote(this, hitbox(this, 3, 1.1, 1.85, 2.2, 1.1, 0.3), { title: 'Pinned to the board', text: 'LOST: one summer.\nLast seen near the house on the hill.\nIf found, please do not return it.\nKeep it somewhere warm.', prompt: 'Read the board' });

    // ---------- fluorescent lights ----------
    for (let x = -38; x < 30; x += 3.6) fluorescent(this, x, HT, 0, { w: 0.5, d: 1.2, rotY: Math.PI / 2, flicker: x > 12 && x < 16, light: x > 12 && x < 16 });
    for (let z = 5; z < 34; z += 3.6) fluorescent(this, 28, HT, z, { w: 0.5, d: 1.2, flicker: z > 18 && z < 22 });
    const hum = new THREE.Object3D(); hum.position.set(0, 2.9, 0); this.group.add(hum);
    g.audio.positional(hum, { kind: 'hum', base: 120, volume: 0.12, ref: 3 });

    // ---------- classrooms ----------
    const classroom = (x0, x1, z0, z1, h, opts = {}) => {
      b.floor(x0, z0, x1, z1, 0, floorM, { surface: 'tile' });
      b.ceiling(x0, z0, x1, z1, h, ceilM);
      b.wall(x0 - t / 2, z0, x0 - t / 2, z1 + t, 0, h, wallM, { thick: t });
      b.wall(x1 + t / 2, z0, x1 + t / 2, z1 + t, 0, h, wallM, { thick: t });
      const ws = opts.windows ?? 3, span = x1 - x0;
      const openings = [];
      for (let i = 0; i < ws; i++) openings.push({ at: span * (i + 0.5) / ws, w: Math.min(2.4, span / ws - 0.6), h: Math.min(h - 1.4, opts.winH ?? 1.6), y0: 0.95 });
      b.wall(x0, z1 + t / 2, x1, z1 + t / 2, 0, h, wallM, { thick: t, openings });
      openings.forEach((o) => b.box(x0 + o.at, o.y0, z1 + t / 2, o.w, o.h, 0.04, winM, { collide: false, stretch: true, ao: false }));
      // chalkboard on the west wall + desks facing it
      const cz = (z0 + z1) / 2;
      b.box(x0 + 0.05, 0.9, cz, 0.06, 1.3, Math.min(4, z1 - z0 - 2), b.mat('board', { map: chalkboardTex(opts.board || ['What did you dream about?', 'Write it down before', 'it disappears.']), roughness: 0.9 }), { collide: false, stretch: true, ao: false, rotY: 0 });
      b.prop(F.desk(0xb8946a), x0 + 1.4, 0, cz + 1.4, Math.PI / 2, { collide: true });
      for (let i = 0; i < 4; i++) for (let k = 0; k < 4; k++) {
        const dx = x0 + 3.2 + i * 1.5, dz = z0 + 1.6 + k * 1.6;
        if (dx > x1 - 0.8 || dz > z1 - 0.8) continue;
        b.prop(F.desk(0xd4b48a), dx, 0, dz, -Math.PI / 2, { collide: true });
        b.prop(F.chair(0x4f7fb0), dx + 0.55, 0, dz, -Math.PI / 2, { collide: false });
      }
      texturedPlane(this, clockTex(), x1 - 0.02 + 0, 2.5, cz, 0.45, 0.45, -Math.PI / 2);
      texturedPlane(this, posterTex('school', Math.abs(x0) | 0), x0 + span / 2, 1.7, z0 + 0.02, 0.6, 0.8, 0);
    };
    classroom(-26, -17, 2.2, 10.5, HT);
    classroom(-15, -6, 2.2, 10.5, HT, { board: ['Count the doors', 'on your way home.', 'There is one extra.'] });
    classroom(6, 15, 2.2, 10.5, HT, { board: ['TODAY:', 'remember'] });
    // filler walls between classrooms (music room with no door)
    // music room between C2 and C3 shares their walls: only its own north wall
    b.wall(-5.8, 10.5 + t / 2, 5.8, 10.5 + t / 2, 0, HT, wallM, { thick: t });
    b.wall(15.2, 10.5 + t / 2, 25.9, 10.5 + t / 2, 0, HT, wallM, { thick: t });
    createDoor(this, { x: -21.5, y: 0, z: 2 + t / 2, rotY: Math.PI, kind: 'school', color: 0x9c7a56 });
    createDoor(this, { x: -10.5, y: 0, z: 2 + t / 2, rotY: Math.PI, kind: 'school', color: 0x9c7a56, locked: 'Class is in session. You can hear chalk tapping, very slowly.' });
    createDoor(this, { x: 10.5, y: 0, z: 2 + t / 2, rotY: Math.PI, kind: 'school', color: 0x9c7a56 });
    addExamine(this, hitbox(this, -25.9, 0.9, 6.35, 0.3, 1.3, 4), { name: 'Chalkboard', text: '"What did you dream about? Write it down before it disappears." Someone has written your name underneath, in your handwriting.', notes: 'School · classroom 1' });

    // ---------- cafeteria ----------
    const cf = b.mat('cafefloor', { map: tileTex({ tile: 0xe6dcc6, grout: 0xb9ad94, n: 6, key: 'cafe' }), texScale: [2, 2] });
    b.floor(-12, -20, 12, -2.2, 0, cf, { surface: 'tile' });
    b.ceiling(-12, -20, 12, -2, 4, ceilM);
    b.box(0, HT, -2.1, 24, 0.8, 0.2, wallM, { collide: false, ao: false });
    b.wall(-12 - t / 2, -20 - t, -12 - t / 2, -2.2, 0, 4, wallM, { thick: t });
    b.wall(12 + t / 2, -20 - t, 12 + t / 2, -2.2, 0, 4, wallM, { thick: t });
    const cw = [{ at: 4, w: 2.4, h: 1.8, y0: 1 }, { at: 9, w: 2.4, h: 1.8, y0: 1 }, { at: 18, w: 1.1, h: 2.2 }, { at: 21.5, w: 2.4, h: 1.8, y0: 1 }];
    b.wall(-12, -20 - t / 2, 12, -20 - t / 2, 0, 4, wallM, { thick: t, openings: cw });
    cw.filter((o) => o.y0).forEach((o) => b.box(-12 + o.at, o.y0, -20 - t / 2, o.w, o.h, 0.04, winM, { collide: false, stretch: true, ao: false }));
    createDoor(this, { x: 6, y: 0, z: -20 - t / 2, rotY: 0, kind: 'school', color: 0xd8c25a, target: { level: 'almond', spawn: 'default' }, glimpse: 0xfff0c8, label: 'Go out to the playground' });
    texturedPlane(this, textTex('PLAYGROUND', { w: 384, h: 64, bg: '#1f7a3a', fg: '#fff', font: 'bold 40px sans-serif' }), 6, 2.45, -19.88, 1.2, 0.2, 0);
    for (let i = 0; i < 4; i++) {
      const z = -6 - i * 3.4;
      b.prop(F.table(0xe8e0cc, 6, 0.9), 0, 0, z, 0, { collide: true });
      b.prop([[0, 0, 0, 6, 0.45, 0.3, 0x5f86a6]], 0, 0, z - 0.75, 0, { collide: true });
      b.prop([[0, 0, 0, 6, 0.45, 0.3, 0x5f86a6]], 0, 0, z + 0.75, 0, { collide: true });
    }
    b.prop(F.counter(7, 0xd8d0c0, 0xb0b8c0), -10.6, 0, -11, Math.PI / 2, { collide: true });
    b.prop(F.vending(0x2f6ab0), 10.9, 0, -8, -Math.PI / 2, { collide: true });
    b.prop(F.vending(0xc83a3a), 10.9, 0, -9.1, -Math.PI / 2, { collide: true });
    for (let x = -9; x <= 9; x += 4.5) for (let z = -5; z >= -18; z -= 4.3) fluorescent(this, x, 4, z, { w: 0.6, d: 1.2 });
    addExamine(this, hitbox(this, -10.6, 0.9, -11, 0.7, 0.4, 7), { name: 'Lunch trays', text: 'Thirty trays, each with the same lunch you had on your first day. None of them have been touched.', notes: 'School · cafeteria' });

    // ---------- corridor B (north) ----------
    b.floor(26, 2, 30, 34, 0, floorM, { surface: 'tile', collide: false });
    this.addCollider(26, -0.2, 2, 30, 0, 34);
    b.ceiling(26, 2, 30.2, 34, HT, ceilM);
    b.wall(26 - t / 2, 2, 26 - t / 2, 34, 0, HT, wallM, { thick: t, openings: [{ at: 17, w: 1.0, h: 2.15 }] });
    createDoor(this, { x: 26 - t / 2, y: 0, z: 19, rotY: Math.PI / 2, kind: 'school', color: 0x9c7a56, locked: 'NURSE. A sign says: “Back in five minutes.” The sign is very old.' });

    // ---------- the tall classroom ----------
    const TH = 11;
    b.floor(20, 34, 36, 48, 0, floorM, { surface: 'tile' });
    b.ceiling(20, 34, 36, 48, TH, ceilM);
    b.wall(20, 34 - t / 2, 36, 34 - t / 2, 0, TH, wallM, { thick: t, openings: [{ at: 8, w: 4, h: HT }] });
    b.wall(20 - t / 2, 34 - t, 20 - t / 2, 48 + t, 0, TH, wallM, { thick: t });
    b.wall(36 + t / 2, 34 - t, 36 + t / 2, 48 + t, 0, TH, wallM, { thick: t });
    const tw = [{ at: 3, w: 3, h: 8, y0: 1 }, { at: 8, w: 3, h: 8, y0: 1 }, { at: 13, w: 3, h: 8, y0: 1 }];
    b.wall(20, 48 + t / 2, 36, 48 + t / 2, 0, TH, wallM, { thick: t, openings: tw });
    tw.forEach((o) => b.box(20 + o.at, o.y0, 48 + t / 2, o.w, o.h, 0.04, winM, { collide: false, stretch: true, ao: false }));
    b.box(20.05, 5.5, 41, 0.06, 2.4, 6, b.mat('bigboard', { map: chalkboardTex(['The ceiling gets taller', 'when nobody looks up.', '', 'Please look up.']), roughness: 0.9 }), { collide: false, stretch: true, ao: false });
    for (let i = 0; i < 3; i++) for (let k = 0; k < 3; k++) {
      b.prop(F.desk(0xd4b48a), 25 + i * 2.6, 0, 37.5 + k * 3, -Math.PI / 2, { collide: true });
      b.prop(F.chair(0xd8763a), 25.55 + i * 2.6, 0, 37.5 + k * 3, -Math.PI / 2);
    }
    for (let x = 23; x < 36; x += 4) for (let z = 37; z < 48; z += 4) fluorescent(this, x, TH, z, { w: 0.6, d: 1.2 });
    addNote(this, hitbox(this, 25, 0.75, 43.5, 1, 0.2, 0.6), { title: 'Homework', text: 'My Summer, by ______\n\nI went to a house on a hill.\nThere was a cloud that stayed with it.\nI went inside and came out here.\nI think I am still there too.' });

    // cloud sea far below the windows
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), new THREE.MeshBasicMaterial({ map: cloudSeaTex(), color: 0xffffff }));
    sea.material.map.repeat.set(10, 10);
    sea.rotation.x = -Math.PI / 2; sea.position.y = -40;
    this.group.add(sea);
    this.disposables.push(sea.geometry, sea.material);

    // spawns
    this.addSpawn('default', [-24, 0, 0], yawTo(1, 0));
    this.addSpawn('from-house', [-24, 0, 0], yawTo(1, 0));
    this.addSpawn('from-pool', [-40, -2.4, 0], yawTo(1, 0));
    this.addSpawn('from-hallways', [28, 0, 28], yawTo(0, -1));
    this.addSpawn('from-almond', [6, 0, -18.5], yawTo(0, 1));
  }
}
