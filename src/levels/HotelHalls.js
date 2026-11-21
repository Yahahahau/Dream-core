// LEVEL 04 — Hotel Halls: a lobby, a dining room, elevators, a second floor
// corridor that loops, a ballroom bigger than the building and a quiet lounge.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane } from './common/Props.js';
import { carpetTex, marbleTex, wainscotTex, woodTex, textTex, plasterTex, windowTex, cloudSeaTex, paintingTex } from '../utils/Textures.js';
import { halo } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { createElevator } from '../interaction/Elevator.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { zone } from '../interaction/TriggerZone.js';

const F2 = 40, F3 = 80;

export default class HotelHalls extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['apartments', 'edge', 'pool'];
    this.surface = 'carpet';
    const carpet = b.mat('carpet', { map: carpetTex('hotel'), roughness: 1, texScale: [2, 2] });
    const marble = b.mat('marble', { map: marbleTex(0xece4d6), roughness: 0.25, texScale: [2, 2] });
    const wall = b.mat('hwall', { map: wainscotTex(0x6b3a2a, 0xd9c49a, 0xc9a35a, 0.33, 'wallpaper'), roughness: 0.85, texScale: [1.6, 3] });
    const wallTall = b.mat('hwall6', { map: wainscotTex(0x6b3a2a, 0xd9c49a, 0xc9a35a, 0.18, 'wallpaper'), roughness: 0.85, texScale: [1.6, 6] });
    const ceil = b.mat('hceil', { map: plasterTex(0xf2e6cf, 'hceil'), roughness: 0.9 });
    const wood = b.mat('hwood', { map: woodTex(0x6b3a22, 6, 'dark'), roughness: 0.4, texScale: [1.5, 1.5] });
    const t = 0.2;
    const elevDest = [
      { label: 'Lobby', spawn: 'elev-L1' }, { label: 'Floor 2', spawn: 'elev-F2' }, { label: 'Floor 3 · Lounge', spawn: 'elev-F3' },
      { label: 'Floor ?', level: 'edge', spawn: 'from-elevator' },
    ];

    // =============== LOBBY ===============
    b.floor(-14, -10, 14, 12, 0, marble, { surface: 'tile' });
    b.ceiling(-14, -10, 14, 12.2, 6, ceil);
    b.wall(-14 - t / 2, -10.2, -14 - t / 2, 12.2, 0, 6, wallTall, { thick: t });
    b.wall(14 + t / 2, -10.2, 14 + t / 2, 12.2, 0, 6, wallTall, { thick: t });
    b.wall(-14, -10 - t / 2, 14, -10 - t / 2, 0, 6, wallTall, { thick: t, openings: [{ at: 14, w: 3.2, h: 3 }] });
    b.wall(-14, 12 + t / 2, 14, 12 + t / 2, 0, 6, wallTall, { thick: t, openings: [{ at: 10, w: 2.6, h: 2.62 }, { at: 18, w: 2.6, h: 2.62 }] });
    // entrance (rain outside)
    b.box(0, 0, -10.1, 3.2, 3, 0.05, b.mat('rainglass', { map: windowTex(0x2a2a2a, 0x2a3442, 2), emissive: 0x111822, roughness: 0.05 }), { stretch: true });
    addExamine(this, hitbox(this, 0, 0, -10, 3.2, 3, 0.4), { name: 'Front doors', text: 'It is raining outside. It has always been raining outside. The doors do not open.', notes: 'Hotel · lobby', prompt: 'Push the doors' });
    // carpets
    b.box(0, 0.005, -2, 6, 0.012, 15, carpet, { collide: false, ao: false });
    b.box(8.5, 0.005, -3, 9, 0.012, 9, carpet, { collide: false, ao: false });
    // reception
    b.prop([[0, 0, 0, 1.1, 1.1, 7, 0x5a2e1c], [0.1, 1.1, 0, 1.3, 0.06, 7.2, 0xe8dcc0]], -11, 0, 1, 0, { collide: true });
    b.box(-13.9, 0.8, 1, 0.1, 2.4, 4.5, wood, { collide: false, stretch: false });
    for (let i = 0; i < 6; i++) for (let k = 0; k < 3; k++) b.prop([[0, 0, 0, 0.04, 0.12, 0.08, 0xd4a649]], -13.8, 1.3 + k * 0.5, -0.8 + i * 0.7, 0, { blob: false });
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xd4b25a, metalness: 0.9, roughness: 0.25 }));
    bell.position.set(-10.7, 1.16, 2); this.group.add(bell); this.disposables.push(bell.geometry, bell.material);
    let rings = 0;
    this.addInteractable({ mesh: bell, prompt: 'Ring the bell', use: (gm) => { gm.audio.sfx('bell', bell.position); rings++; gm.ui.caption(rings < 3 ? 'Nobody comes.' : rings < 6 ? 'Somewhere upstairs, a bell rings back.' : 'A key you did not see before is lying on the desk. Room 207.'); if (rings >= 6) this.game.save.flag('key207', true); } });
    bell.userData.interactable = this.interactables[this.interactables.length - 1];
    texturedPlane(this, textTex('RECEPTION', { w: 512, h: 96, bg: null, fg: '#d4a649', font: '600 58px Georgia, serif' }), -13.85, 3.6, 1, 2.6, 0.5, Math.PI / 2, { unlit: true, alpha: true });
    addNote(this, hitbox(this, -10.6, 1.12, -0.5, 0.6, 0.1, 0.8), { title: 'Guest book', text: 'Room 201 — checked in\nRoom 203 — checked in\nRoom 205 — checked in\nRoom 207 — ________\n\nThe last line is waiting for your name.' });
    // lounge
    b.prop(F.sofa(0x7a2f3a), 8.5, 0, -6.2, 0, { collide: true });
    b.prop(F.sofa(0x7a2f3a), 8.5, 0, 0.2, Math.PI, { collide: true });
    b.prop(F.armchair(0xb07a3a), 12.5, 0, -3, -Math.PI / 2, { collide: true });
    b.prop(F.table(0x3a2014, 1.8, 0.9, 0.42), 8.5, 0, -3, 0, { collide: true });
    for (const [x, z] of [[-13, -9], [13, -9], [-13, 11], [13, 6]]) b.prop(F.plant(0xd4a649, 0x3f6a3a), x, 0, z, 0, { collide: true });
    // dining
    for (let i = 0; i < 3; i++) for (let k = 0; k < 2; k++) {
      const x = 4.5 + i * 3.2, z = 6.5 + k * 3;
      b.prop([...F.roundTable(0xf6f2ea, 0.6)], x, 0, z, 0, { collide: true });
      for (let a = 0; a < 4; a++) b.prop(F.chair(0x6b3a22, 0x3a2014), x + Math.cos(a * Math.PI / 2) * 0.95, 0, z + Math.sin(a * Math.PI / 2) * 0.95, -a * Math.PI / 2 - Math.PI / 2);
    }
    addExamine(this, hitbox(this, 7.7, 0.7, 8, 7, 0.3, 4.5), { name: 'Set tables', text: 'Every table is set for one. The napkins are folded into small paper houses.', notes: 'Hotel · dining room' });
    // chandeliers
    const chand = (x, y, z) => {
      const grp = new THREE.Group(); grp.position.set(x, y, z);
      const gm = new THREE.MeshBasicMaterial({ color: 0xfff0c8 }), sm = new THREE.MeshStandardMaterial({ color: 0xc9a35a, metalness: 0.8, roughness: 0.3 });
      for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; const s = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), gm); s.position.set(Math.cos(a) * 0.7, -0.1 + (i % 2) * 0.12, Math.sin(a) * 0.7); grp.add(s); }
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.03, 6, 24), sm); ring.rotation.x = Math.PI / 2; grp.add(ring);
      const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6), sm); rod.position.y = 0.6; grp.add(rod);
      this.group.add(grp);
      this.disposables.push(gm, sm);
      halo(this, x, y - 0.05, z, 3.2, '#ffe2a8', 0.5);
    };
    chand(0, 4.6, -4); chand(0, 4.6, 5); chand(8.5, 4.6, -3);
    for (const [x, z] of [[0, -2], [8, 7]]) { const pl = new THREE.PointLight(0xffd8a0, 14, 18, 1.6); pl.position.set(x, 4.2, z); this.group.add(pl); }
    for (const z of [-6, 0, 6]) for (const x of [-13.9, 13.9]) { halo(this, x + (x < 0 ? 0.15 : -0.15), 2.6, z, 1, '#ffd8a0', 0.65); }
    texturedPlane(this, paintingTex(1), 13.88, 2.8, 2.5, 1.8, 1.35, -Math.PI / 2);

    // elevators (lobby)
    createElevator(this, { id: 'L1', x: -4, y: 0, z: 12 + t / 2 + 1.2, rotY: Math.PI, destinations: elevDest, label: 'L', wallColor: 0xb59a6a });
    createElevator(this, { id: 'L2', x: 4, y: 0, z: 12 + t / 2 + 1.2, rotY: Math.PI, destinations: elevDest, label: 'L', wallColor: 0xb59a6a });

    // =============== FLOOR 2: the corridor that loops ===============
    const y2 = F2, P = 24;
    b.floor(-31, -1.5, 32, 1.5, y2, carpet, { surface: 'carpet' });
    b.ceiling(-31, -1.6, 32, 1.6, y2 + 2.8, ceil);
    const northOps = [], southOps = [];
    for (let x = -24; x <= 24; x += 12) northOps.push({ at: x + 31, w: 1.0, h: 2.15 });
    for (let x = -18; x <= 30; x += 12) southOps.push({ at: x + 31, w: 1.0, h: 2.15 });
    b.wall(-31, 1.5 + t / 2, 32, 1.5 + t / 2, y2, 2.8, wall, { thick: t, openings: northOps });
    b.wall(-31, -1.5 - t / 2, 32, -1.5 - t / 2, y2, 2.8, wall, { thick: t, openings: southOps });
    b.wall(32 + t / 2, -1.7, 32 + t / 2, 1.7, y2, 2.8, wall, { thick: t });
    b.wall(-31 - t / 2, -1.7, -31 - t / 2, 1.7, y2, 2.8, wall, { thick: t, openings: [{ at: 1.7, w: 2.6, h: 2.62 }] });
    createElevator(this, { id: 'F2', x: -31 - t / 2 - 1.2, y: y2, z: 0, rotY: Math.PI / 2, destinations: elevDest, label: '2', wallColor: 0xb59a6a });
    const numFor = (x, side) => { const k = ((Math.round(x) % P) + P) % P; return side > 0 ? (k === 0 ? 207 : 201 + (k / 6 | 0) * 2) : 202 + (((k + 6) % P) / 6 | 0) * 2; };
    let ballroomDoor = null;
    for (let x = -24; x <= 24; x += 12) {
      const n = x === 0 ? 207 : numFor(x, 1);
      if (x === 0) {
        ballroomDoor = createDoor(this, { x, y: y2, z: 1.5 + t / 2, rotY: Math.PI, kind: 'hotel', color: 0x7a3a2a, locked: () => (this.loops >= 2 || this.game.save.flag('key207')) ? null : 'Room 207. A sign on the handle: PLEASE DO NOT DISTURB.' });
      } else createDoor(this, { x, y: y2, z: 1.5 + t / 2, rotY: Math.PI, kind: 'hotel', color: 0x7a3a2a, locked: ['You hear a television through the door. It is playing your favourite cartoon.', 'Someone is humming on the other side.', 'The handle is warm.', 'There is a light under the door, but no sound at all.'][(x / 12 + 2) % 4] });
      texturedPlane(this, textTex(String(n), { w: 128, h: 64, bg: '#c9a35a', fg: '#3a2014', font: 'bold 40px Georgia, serif' }), x + 0.75, y2 + 1.55, 1.5 - 0.01, 0.24, 0.12, Math.PI);
    }
    for (let x = -18; x <= 30; x += 12) {
      const n = numFor(x, -1);
      const target = x === -6 ? { level: 'apartments', spawn: 'from-hotel' } : null;
      createDoor(this, { x, y: y2, z: -1.5 - t / 2, rotY: 0, kind: 'hotel', color: 0x7a3a2a, target, glimpse: 0xffd2a8, label: x === -6 ? 'Room 214' : undefined, locked: target ? null : 'Locked. A room service tray outside has one untouched glass of milk.' });
      texturedPlane(this, textTex(x === -6 ? '214' : String(n), { w: 128, h: 64, bg: '#c9a35a', fg: '#3a2014', font: 'bold 40px Georgia, serif' }), x - 0.75, y2 + 1.55, -1.5 + 0.01, 0.24, 0.12, 0);
    }
    // sconces
    for (let x = -27; x <= 30; x += 6) for (const s of [-1, 1]) { b.prop([[0, 0, 0, 0.18, 0.28, 0.1, 0xf6e2b0]], x, y2 + 1.75, s * 1.44, 0, { blob: false, name: 'sconce' }); halo(this, x, y2 + 1.95, s * 1.3, 0.9, '#ffd8a0', 0.7); }
    const hl = new THREE.PointLight(0xffd2a0, 6, 16, 1.5); hl.position.set(0, y2 + 2.4, 0); this.group.add(hl);
    this.loops = 0;
    // seamless loop: walking east far enough puts you back two rooms earlier
    this.onUpdate(() => {
      const p = this.game.player.pos;
      if (p.y > y2 - 1 && p.y < y2 + 3 && p.x > 20) {
        p.x -= P;
        this.loops++;
        if (this.loops === 2) { this.game.audio.sfx('creak', new THREE.Vector3(0, y2, 1.6)); this.game.ui.caption('Somewhere behind you, a door clicks open.'); ballroomDoor.toggle(); }
      }
    });
    texturedPlane(this, textTex(['201 — 213 →'], { w: 256, h: 64, bg: '#3a2014', fg: '#d4a649', font: '32px Georgia, serif' }), -28, y2 + 2.2, 1.5 - 0.01, 0.8, 0.2, Math.PI);

    // ballroom behind room 207 (larger than the building could hold)
    const by = y2, bx0 = -20, bx1 = 20, bz0 = 1.5 + t, bz1 = 34;
    const parquet = b.mat('parquet', { map: woodTex(0xa0703a, 8, 'parq'), roughness: 0.35, texScale: [1.5, 1.5] });
    b.floor(bx0, bz0, bx1, bz1, by, parquet, { surface: 'wood' });
    b.ceiling(bx0, bz0, bx1, bz1, by + 10, ceil);
    b.wall(bx0 - t / 2, bz0, bx0 - t / 2, bz1 + t, by, 10, wallTall, { thick: t });
    b.wall(bx1 + t / 2, bz0, bx1 + t / 2, bz1 + t, by, 10, wallTall, { thick: t });
    const bw = [{ at: 6, w: 3, h: 6, y0: 1.5 }, { at: 14, w: 3, h: 6, y0: 1.5 }, { at: 22, w: 3, h: 6, y0: 1.5 }, { at: 30, w: 3, h: 6, y0: 1.5 }, { at: 38, w: 3, h: 6, y0: 1.5 }];
    b.wall(bx0, bz1 + t / 2, bx1, bz1 + t / 2, by, 10, wallTall, { thick: t, openings: bw });
    bw.forEach((o) => b.box(bx0 + o.at, by + o.y0, bz1 + t / 2, o.w, o.h, 0.04, b.mat('nightwin', { map: windowTex(0xe8dcc0, 0x1c2a4a, 4), emissive: 0x18243e, roughness: 0.05 }), { collide: false, stretch: true, ao: false }));
    b.box(0, by + 2.8, 1.5 + t / 2, 40, 7.2, t, wallTall, { collide: false });
    b.box(0, by, 31.5, 14, 0.8, 5, wood, { surface: 'wood' });
    b.stairs(0, 27.4, by, 4, 4, 0.2, 0.4, '+z', wood, { surface: 'wood' });
    // (steps end at z 29.0, exactly where the stage front starts)
    b.prop(F.piano(), 3, by + 0.8, 32, Math.PI, { collide: true });
    for (let i = 0; i < 4; i++) for (let k = 0; k < 3; k++) b.prop(F.roundTable(0xf6f2ea, 0.75), -12 + i * 8, by, 8 + k * 6, 0, { collide: true });
    chand(-8, by + 8, 12); chand(8, by + 8, 12); chand(0, by + 8, 22);
    const bl = new THREE.PointLight(0xffd8a0, 30, 40, 1.4); bl.position.set(0, by + 7, 15); this.group.add(bl);
    addExamine(this, hitbox(this, 3, by + 0.8, 32, 1.6, 1.3, 0.8), { name: 'Piano in the ballroom', text: 'One key is pressed down and never comes back up. You can almost hear the note.', notes: 'Hotel · room 207, which is a ballroom' });
    zone(this, 0, by, 18, 40, 4, 30, { once: true, onEnter: (gm) => { gm.ui.caption('Room 207 is much larger than the hallway outside.'); gm.journal.addObject(this.id, 'Room 207', 'A ballroom behind an ordinary hotel door, bigger than the whole floor.', 'Hotel · floor 2'); } });

    // =============== FLOOR 3: lounge above the clouds ===============
    const y3 = F3;
    b.floor(-12, -1.5, 12, 1.5, y3, carpet, { surface: 'carpet' });
    b.ceiling(-12, -1.6, 12, 1.6, y3 + 2.8, ceil);
    b.wall(-12, 1.5 + t / 2, 12, 1.5 + t / 2, y3, 2.8, wall, { thick: t });
    b.wall(-12, -1.5 - t / 2, 12, -1.5 - t / 2, y3, 2.8, wall, { thick: t });
    b.wall(-12 - t / 2, -1.7, -12 - t / 2, 1.7, y3, 2.8, wall, { thick: t, openings: [{ at: 1.7, w: 2.6, h: 2.62 }] });
    createElevator(this, { id: 'F3', x: -12 - t / 2 - 1.2, y: y3, z: 0, rotY: Math.PI / 2, destinations: elevDest, label: '3', wallColor: 0xb59a6a });
    for (let x = -9; x <= 9; x += 6) { halo(this, x, y3 + 1.95, 1.4, 0.9, '#ffd8a0', 0.7); halo(this, x, y3 + 1.95, -1.4, 0.9, '#ffd8a0', 0.7); }
    const L = { x0: 12, x1: 30, z0: -9, z1: 9 };
    b.floor(L.x0, L.z0, L.x1, L.z1, y3, carpet, { surface: 'carpet' });
    b.ceiling(L.x0, L.z0, L.x1, L.z1, y3 + 4, ceil);
    b.wall(L.x0 + t / 2, L.z0, L.x0 + t / 2, -1.5, y3, 4, wall, { thick: t });
    b.wall(L.x0 + t / 2, 1.5, L.x0 + t / 2, L.z1, y3, 4, wall, { thick: t });
    b.box(L.x0 + t / 2, y3 + 2.8, 0, t, 1.2, 3, wall, { collide: false });
    const glassM = b.mat('lglass', { color: 0xdfefff, transparent: true, opacity: 0.18, roughness: 0.05 });
    b.box((L.x0 + L.x1) / 2, y3, L.z0 - t / 2, L.x1 - L.x0, 4, 0.06, glassM, { ao: false });
    b.box((L.x0 + L.x1) / 2, y3, L.z1 + t / 2, L.x1 - L.x0, 4, 0.06, glassM, { ao: false });
    b.box(L.x1 + t / 2, y3, 0, 0.06, 4, L.z1 - L.z0, glassM, { ao: false });
    for (let x = L.x0 + 3; x <= L.x1; x += 3) for (const z of [L.z0, L.z1]) b.box(x, y3, z, 0.12, 4, 0.12, wood, { collide: false });
    b.prop(F.armchair(0xd8c8a8), 24, y3, -4, -2.2, { collide: true });
    b.prop(F.armchair(0xd8c8a8), 24, y3, 4, -0.9, { collide: true });
    b.prop(F.table(0x3a2014, 0.9, 0.9, 0.5), 26, y3, 0, 0, { collide: true });
    b.prop(F.piano(), 16, y3, 7.5, Math.PI, { collide: true });
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.MeshBasicMaterial({ map: cloudSeaTex() }));
    sea.material.map.repeat.set(9, 9); sea.rotation.x = -Math.PI / 2; sea.position.y = y3 - 30;
    this.group.add(sea); this.disposables.push(sea.geometry, sea.material);
    addNote(this, hitbox(this, 26, y3 + 0.5, 0, 0.9, 0.1, 0.9), { title: 'Card on the table', text: 'Thank you for staying with us.\nCheckout is whenever you are ready.\nThere is no rush.\nThere was never any rush.' });

    this.setLightZones([{ min: [-40, F3 - 2, -20], max: [40, F3 + 6, 20], hemi: 1.3, exposure: 1.05 }], { hemi: 0.95, exposure: 1.05 });

    this.addSpawn('default', [0, 0, -8], yawTo(0, 1));
    this.addSpawn('from-pool', [0, 0, -8], yawTo(0, 1));
    this.addSpawn('from-apartments', [-6, y2, -0.6], yawTo(1, 0));
    this.addSpawn('from-hallways', [0, 0, -8], yawTo(0, 1));
  }
}
