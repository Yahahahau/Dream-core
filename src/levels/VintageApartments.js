// LEVEL 05 — Vintage Apartments: a three-storey building at golden hour.
// Narrow halls, a real stairwell, lived-in rooms and balconies over a hazy town.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane, streetLamp, ribbon } from './common/Props.js';
import { woodTex, wallpaperTex, brickTex, concreteTex, asphaltTex, plasterTex, windowTex, textTex, carpetTex, paintingTex, screenTex, doorTex, staticTex, tileTex } from '../utils/Textures.js';
import { halo } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, addPortal, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const FH = 3; // floor-to-floor height

function facadeTex(base, seed) {
  const c = document.createElement('canvas'); c.width = 128; c.height = 128;
  const x = c.getContext('2d');
  x.fillStyle = base; x.fillRect(0, 0, 128, 128);
  let s = seed;
  const r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  for (let i = 0; i < 4; i++) for (let k = 0; k < 4; k++) {
    const lit = r() < 0.35;
    x.fillStyle = lit ? ['#ffd890', '#ffe8b8', '#ffc070'][(r() * 3) | 0] : '#3a3440';
    x.fillRect(8 + i * 30, 8 + k * 30, 18, 20);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export default class VintageApartments extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['mall', 'broken', 'hotel'];
    this.surface = 'wood';
    const floorW = b.mat('afloor', { map: woodTex(0x9a6e48, 5), roughness: 0.6, texScale: [2, 2] });
    const hallWall = b.mat('ahall', { map: wallpaperTex(0xe6d2b0, 0x9a6a5a, 'stripe'), roughness: 0.9, texScale: [1.2, 1.2] });
    const wpA = b.mat('awpA', { map: wallpaperTex(0xeadfc6, 0xb48c7a), roughness: 0.9, texScale: [1, 1] });
    const wpB = b.mat('awpB', { map: wallpaperTex(0xd6e2cf, 0x7a9a7a), roughness: 0.9, texScale: [1, 1] });
    const ceil = b.mat('aceil', { map: plasterTex(0xf1e8d8, 'aceil'), roughness: 0.95 });
    const brick = b.mat('abrick', { map: brickTex(0xa0604a, 0xd8cbb8), roughness: 0.9, texScale: [2, 2] });
    const conc = b.mat('aconc', { map: concreteTex(0xb8b0a2), texScale: [2, 2] });
    const rail = b.mat('arail', { color: 0x3a3a3a, roughness: 0.5, metalness: 0.4 });
    const winM = b.mat('awin', { map: windowTex(0xf4efe4, 0xf2c8a0, 4), emissive: 0xf2c8a0, emissiveIntensity: 0.4, roughness: 0.1 });
    const t = 0.2;

    // ---------- shell (brick) ----------
    const X0 = 0, X1 = 20, Z0 = 0, Z1 = 9, TOP = FH * 3 + 2.6;
    const southOps = [{ at: 4, w: 1.2, h: 2.3 }];
    for (let f = 0; f < 3; f++) for (const x of [1.5, 9, 13.5]) southOps.push({ at: x, w: 1.1, h: 1.3, y0: f * FH + 1.0 });
    for (let f = 1; f < 3; f++) southOps.push({ at: 4, w: 1.1, h: 1.3, y0: f * FH + 1.0 });
    for (let f = 0; f < 3; f++) southOps.push({ at: 18, w: 1.1, h: 1.6, y0: f * FH + 1.6 });
    b.wall(X0 - t, Z0 - t / 2, X1 + t, Z0 - t / 2, 0, TOP, brick, { thick: t, openings: southOps });
    southOps.filter((o) => o.y0).forEach((o) => b.box(X0 - t + o.at, o.y0, Z0 - t / 2, o.w, o.h, 0.04, winM, { collide: false, stretch: true, ao: false }));
    const northOps = [];
    for (let f = 0; f < 3; f++) { northOps.push({ at: 3.6 + t, w: 1.2, h: 2.2, y0: f * FH }); northOps.push({ at: 12.4 + t, w: 1.2, h: 2.2, y0: f * FH }); northOps.push({ at: 6.4 + t, w: 1.0, h: 1.3, y0: f * FH + 1.0 }); northOps.push({ at: 9.6 + t, w: 1.0, h: 1.3, y0: f * FH + 1.0 }); northOps.push({ at: 1.5 + t, w: 1.0, h: 1.3, y0: f * FH + 1.0 }); northOps.push({ at: 14.5 + t, w: 1.0, h: 1.3, y0: f * FH + 1.0 }); }
    b.wall(X0 - t, Z1 + t / 2, X1 + t, Z1 + t / 2, 0, TOP, brick, { thick: t, openings: northOps });
    northOps.filter((o) => o.h < 2).forEach((o) => b.box(X0 - t + o.at, o.y0, Z1 + t / 2, o.w, o.h, 0.04, winM, { collide: false, stretch: true, ao: false }));
    b.wall(X0 - t / 2, Z0, X0 - t / 2, Z1, 0, TOP, brick, { thick: t, openings: [0, 1, 2].map((f) => ({ at: 0.9, w: 0.9, h: 1.3, y0: f * FH + 1.0 })) });
    b.wall(X1 + t / 2, Z0, X1 + t / 2, Z1, 0, TOP, brick, { thick: t, openings: [{ at: 0.75, w: 1.0, h: 2.15, y0: FH * 3 }] });
    b.box(10, TOP, 4.5, 20.8, 0.3, 9.8, conc, { surface: 'concrete' });
    b.box(8, FH * 3 - 0.3, 4.5, 16, 0.3, 9, conc, { surface: 'concrete', ao: false });

    // ---------- floors / ceilings ----------
    for (let f = 0; f < 3; f++) {
      const y = f * FH;
      b.box(8, y - 0.3, 4.5, 16, 0.3, 9, floorW, { surface: 'wood', ao: false });
      b.box(18, y - 0.3, 0.75, 4, 0.3, 1.5, conc, { surface: 'concrete', ao: false });
      b.ceiling(0, 0, 16, 9, y + FH - 0.31, ceil, { thick: 0.01 });
    }
    b.box(18, FH * 3 - 0.3, 0.75, 4, 0.3, 1.5, conc, { surface: 'concrete', ao: false });

    // ---------- stairwell (switchback, every floor) ----------
    const stairM = b.mat('astair', { map: woodTex(0x7a5236, 3, 'stair'), texScale: [1, 1] });
    for (let f = 0; f < 3; f++) {
      const y = f * FH;
      b.stairs(17, 1.5, y, 2, 8, 0.1875, 0.5, '+z', stairM, { surface: 'wood', slab: 0.35 });
      b.box(18, y + 1.5 - 0.3, 7, 4, 0.3, 3, conc, { surface: 'concrete', ao: false });
      b.stairs(19, 5.5, y + 1.5, 2, 8, 0.1875, 0.5, '-z', stairM, { surface: 'wood', slab: 0.35 });
      b.box(18, y, 3.5, 0.08, 2.6, 4, rail, { collide: true, ao: false, tint: 0x888888 });
      halo(this, 18, y + FH - 0.5, 4.5, 1.1, '#ffe0b0', 0.6);
    }
    b.wall(16 + t / 2, 1.5, 16 + t / 2, 9, 0, TOP, hallWall, { thick: t });

    // ---------- each floor: hallway + two apartments ----------
    const units = [
      { f: 0, x0: 0, wp: wpA, label: '1A', kind: 'computer' }, { f: 0, x0: 8, wp: wpB, label: '1B', kind: 'kettle', mirror: true },
      { f: 1, x0: 0, wp: wpB, label: '2A', kind: 'piano' }, { f: 1, x0: 8, wp: wpA, label: '2B', kind: 'locked', mirror: true },
      { f: 2, x0: 0, wp: wpA, label: '3A', kind: 'chair' }, { f: 2, x0: 8, wp: wpB, label: '3B', kind: 'child', mirror: true },
    ];
    for (let f = 0; f < 3; f++) {
      const y = f * FH, hz1 = 1.8;
      // hallway north wall with two doors
      b.wall(0, hz1 + t / 2, 16, hz1 + t / 2, y, FH - 0.3, hallWall, { thick: t, openings: [{ at: 6, w: 0.95, h: 2.1 }, { at: 10, w: 0.95, h: 2.1 }] });
      b.box(8, y + 0.01, 0.9, 15.6, 0.01, 1.2, b.mat('runner', { map: carpetTex('hotel'), texScale: [1.2, 1.2] }), { collide: false, ao: false, tint: 0xbb9988 });
      halo(this, 4, y + FH - 0.45, 0.9, 1, '#ffe2b8', 0.6); halo(this, 12, y + FH - 0.45, 0.9, 1, '#ffe2b8', 0.6);
      b.prop([[0, 0, 0, 0.3, 0.06, 0.3, 0xf2e2c0, 'cyl']], 4, y + FH - 0.36, 0.9, 0, { blob: false }); b.prop([[0, 0, 0, 0.3, 0.06, 0.3, 0xf2e2c0, 'cyl']], 12, y + FH - 0.36, 0.9, 0, { blob: false });
    }
    // mailboxes in the ground hallway
    b.prop(Array.from({ length: 6 }, (_, i) => [((i % 3) - 1) * 0.36, 1.0 + (i / 3 | 0) * 0.3, 0, 0.34, 0.28, 0.12, 0xb8a070]), 1.5, 0, 0.12, 0, { collide: true, blob: false });
    addExamine(this, hitbox(this, 1.5, 0.95, 0.2, 1.2, 0.7, 0.3), { name: 'Mailboxes', text: 'Six mailboxes. Five have names. The sixth has a small drawing of a cloud.', notes: 'Apartments · entrance' });

    for (const u of units) this.unit(u, { floorW, ceil, winM, rail, t });

    // roof door
    createDoor(this, { x: X1 + t / 2, y: FH * 3, z: 0.75, rotY: Math.PI / 2 + Math.PI, color: 0x5a7a8a, kind: 'flat', target: { level: 'mall', spawn: 'from-apartments' }, glimpse: 0xf0f6ff, label: 'Roof?' });
    texturedPlane(this, textTex('ROOF', { w: 192, h: 64, bg: '#5a7a8a', fg: '#fff', font: 'bold 40px sans-serif' }), X1 - 0.02, FH * 3 + 2.35, 0.75, 0.5, 0.17, -Math.PI / 2);
    // entrance door
    createDoor(this, { x: 4 - t, y: 0, z: Z0 - t / 2, rotY: 0, color: 0x6a3a2a, kind: 'panel', w: 1.1 });

    // ---------- the street outside ----------
    const side = b.mat('sidewalk', { map: tileTex({ tile: 0xb8b2a6, grout: 0x8a857c, n: 4, key: 'sidewalk' }), texScale: [3, 3] });
    b.box(10, -0.3, -2.4, 90, 0.45, 4.6, side, { surface: 'concrete', ao: false });
    b.floor(-35, -14, 55, -4.7, 0, b.mat('road', { map: asphaltTex(0x55555c), texScale: [6, 6] }), { surface: 'concrete' });
    b.box(10, -0.3, -16.3, 90, 0.45, 4.6, side, { surface: 'concrete', ao: false });
    for (let x = -30; x < 55; x += 6) b.box(x, 0.001, -9.35, 2.5, 0.01, 0.15, b.mat('roadline', { color: 0xf2e6c0, roughness: 0.8 }), { collide: false, ao: false });
    // opposite facades
    const fac = [['#c98a6a', 1], ['#d8c098', 2], ['#9aa8b8', 3], ['#c8a0a8', 4], ['#a8b890', 5], ['#d6b080', 6]];
    for (let i = 0; i < 6; i++) {
      const tex = facadeTex(fac[i][0], fac[i][1]); tex.repeat.set(3, 3);
      const m = makeMaterial({ map: tex, vertexColors: false, roughness: 0.9, emissive: 0x332211, emissiveMap: tex, emissiveIntensity: 0.6 });
      this.disposables.push(m, tex);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(14, 12 + (i % 3) * 3, 8), m);
      mesh.position.set(-28 + i * 14.5, (12 + (i % 3) * 3) / 2, -23);
      this.group.add(mesh);
      this.addCollider(mesh.position.x - 7, 0, -27, mesh.position.x + 7, 20, -18.6);
    }
    const signs = ['LAUNDROMAT', 'VIDEO RENTAL', 'BAKERY', 'TOYS & GAMES', 'TAILOR', 'FLOWERS'];
    signs.forEach((s, i) => texturedPlane(this, textTex(s, { w: 512, h: 96, bg: ['#2a4a6a', '#6a2a3a', '#7a5a2a', '#2a6a4a', '#4a3a6a', '#8a4a5a'][i], fg: '#ffeac0', font: 'bold 52px sans-serif' }), -28 + i * 14.5, 3.4, -18.97, 4.5, 0.8, 0, { emissive: true }));
    // street ends
    this.addCollider(-36, 0, -30, -35, 20, 0); this.addCollider(55, 0, -30, 56, 20, 0);
    this.addCollider(-36, 0, -0.2, -0.2 - 0.0, 3, 0); this.addCollider(20.2, 0, -0.2, 56, 3, 0);
    // dead-end façades at both ends of the street
    const endM = b.mat('ends', { map: brickTex(0x8a5a4a, 0xc8bca8), texScale: [2, 2] });
    b.box(-36, 0, -10, 1, 14, 20, endM); b.box(56, 0, -10, 1, 14, 20, endM);
    for (const x of [-20, 0, 20, 40]) streetLamp(this, x, 0.15, -0.6, -Math.PI / 2 * 1, { on: true, light: x === 0 });
    b.prop([[0, 0.3, 0, 4.2, 0.7, 1.8, 0x8fb0c8], [0.2, 1.0, 0, 2.2, 0.6, 1.6, 0x8fb0c8], [-1.3, 0, 0.8, 0.6, 0.6, 0.2, 0x222222, 'cyl'], [1.3, 0, 0.8, 0.6, 0.6, 0.2, 0x222222, 'cyl'], [-1.3, 0, -0.8, 0.6, 0.6, 0.2, 0x222222, 'cyl'], [1.3, 0, -0.8, 0.6, 0.6, 0.2, 0x222222, 'cyl']], 12, 0, -6, 0, { collide: true });
    // town beyond the balconies
    for (let i = 0; i < 26; i++) {
      const tex = facadeTex(['#b98a7a', '#c8b098', '#8a98a8', '#a88a98'][i % 4], 50 + i); tex.repeat.set(2, 2 + (i % 3));
      const m = new THREE.MeshBasicMaterial({ map: tex, color: 0xd8c0b0 });
      const h = 10 + (i * 37 % 25);
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(12, h, 12), m);
      mesh.position.set(-60 + (i % 9) * 18 + (i % 2) * 6, h / 2 - 4, 40 + (i / 9 | 0) * 30);
      this.group.add(mesh); this.disposables.push(m, tex, mesh.geometry);
    }
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 300), new THREE.MeshBasicMaterial({ color: 0x8a7a6a }));
    ground.rotation.x = -Math.PI / 2; ground.position.set(0, -4, 160); this.group.add(ground);
    this.disposables.push(ground.geometry, ground.material);

    this.addSpawn('default', [7, 0.15, -9], yawTo(-0.35, 1));
    this.addSpawn('from-bus', [7, 0.15, -9], yawTo(-0.35, 1));
    this.addSpawn('from-hotel', [6, FH, 1.2], yawTo(1, 0));
    this.addSpawn('from-hallways', [2, 0, 1], yawTo(1, 0));
    this.addSpawn('from-broken', [3, 0, 4.5], yawTo(1, 0));
  }

  unit(u, { floorW, ceil, winM, rail, t }) {
    const b = this.b;
    const y = u.f * FH, x0 = u.x0, x1 = u.x0 + 8, z0 = 1.8 + t, z1 = 9;
    const m = u.mirror ? -1 : 1;
    const mx = (lx) => (u.mirror ? x1 - lx : x0 + lx); // local x from the outer wall
    // party wall between units
    if (!u.mirror) b.wall(x1, z0, x1, z1, y, FH - 0.3, u.wp, { thick: t });
    // partition: bedroom on the outer side
    b.wall(mx(3.2), 5, mx(3.2), z1, y, FH - 0.3, u.wp, { thick: 0.12, openings: [{ at: 1.2, w: 0.9, h: 2.1 }] });
    b.wall(mx(0), 5, mx(3.2), 5, y, FH - 0.3, u.wp, { thick: 0.12 });
    // inner wallpaper skins (no collision)
    const doorX0 = u.mirror ? 10 : 6;
    b.wall(x0 + 0.05, z0 + 0.02, x1 - 0.05, z0 + 0.02, y, FH - 0.3, u.wp, { thick: 0.02, collide: false, openings: [{ at: doorX0 - x0 - 0.05, w: 0.95, h: 2.1 }] });
    const nOps = (u.mirror ? [[9.6, 1.0, 1.3, 1.0], [12.4, 1.2, 2.2, 0], [14.5, 1.0, 1.3, 1.0]] : [[1.5, 1.0, 1.3, 1.0], [3.6, 1.2, 2.2, 0], [6.4, 1.0, 1.3, 1.0]]).map(([x, w, h, y0]) => ({ at: x - x0, w, h, y0 }));
    b.wall(x0, z1 - 0.02, x1, z1 - 0.02, y, FH - 0.3, u.wp, { thick: 0.02, collide: false, openings: nOps });
    // door from the hallway
    const doorX = u.mirror ? 10 : 6;
    const locked = u.kind === 'locked' ? 'A name is written on the door, but every time you read it, it is a different name.' : null;
    createDoor(this, { x: doorX, y, z: 1.8 + t / 2, rotY: Math.PI, color: [0x6a3a2a, 0x3a5a4a, 0x7a6a3a][u.f], kind: 'panel', locked });
    texturedPlane(this, textTex(u.label, { w: 128, h: 64, bg: '#d4a649', fg: '#2a1a10', font: 'bold 42px Georgia, serif' }), doorX + (u.mirror ? -0.72 : 0.72), y + 1.6, 1.8 - 0.01, 0.2, 0.1, Math.PI);
    // balcony
    const bx = mx(3.6);
    b.box(bx, y - 0.25, z1 + 0.9, 3, 0.25, 1.6, b.mat('balc', { map: concreteTex(0xc8c0b0) }), { surface: 'concrete', ao: false });
    b.box(bx, y, z1 + 1.68, 3, 1.0, 0.05, rail, {});
    b.box(bx - 1.48, y, z1 + 0.9, 0.05, 1.0, 1.6, rail, {});
    b.box(bx + 1.48, y, z1 + 0.9, 0.05, 1.0, 1.6, rail, {});
    b.prop(F.plant(0xb86a4a, 0x5a8a4a), bx + 1.1 * m, y, z1 + 1.2, 0);
    // ceiling lamp
    halo(this, mx(5.5), y + FH - 0.6, 6, 1.3, '#ffdcae', 0.55);
    const pl = new THREE.PointLight(0xffd8a8, 3, 8, 1.6); pl.position.set(mx(5.5), y + 2.2, 6); this.group.add(pl);
    // furniture (common)
    const r = u.mirror ? Math.PI : 0;
    b.prop(F.counter(2.6, 0xe8dcc0, 0x8a7a60), mx(6.6), y, z0 + 0.35, 0, { collide: true });
    b.prop(F.fridge(), mx(7.5), y, z0 + 0.4, 0, { collide: true });
    b.prop(F.stove(), mx(5.0), y, z0 + 0.35, 0, { collide: true });
    b.prop(F.table(0xb08a60, 1.2, 0.8), mx(5.8), y, 4.0, 0, { collide: true });
    b.prop(F.chair(0x8a5a3a, 0x6a4a2a), mx(5.3), y, 3.4, 0);
    b.prop(F.chair(0x8a5a3a, 0x6a4a2a), mx(6.3), y, 4.6, Math.PI);
    b.prop(F.bed(u.f === 2 && u.mirror ? 0xf2c4d8 : 0xe8e2f0), mx(1.6), y, 7.6, Math.PI, { collide: true });
    b.prop(F.wardrobe(), mx(0.4), y, 5.8, Math.PI / 2 * m, { collide: true });
    texturedPlane(this, paintingTex(u.f * 2 + (u.mirror ? 1 : 0)), mx(7.95), y + 1.6, 6.5, 0.8, 0.6, -Math.PI / 2 * m);

    if (u.kind === 'computer') {
      b.prop(F.desk(0x8a6a4a), mx(7.3), y, 7.6, -Math.PI / 2, { collide: true });
      b.prop(F.crt(), mx(7.4), y + 0.75, 7.6, -Math.PI / 2, { blob: false });
      const scr = texturedPlane(this, screenTex('desktop', 3), mx(7.4) - 0.13, y + 0.94, 7.6, 0.32, 0.25, -Math.PI / 2, { unlit: true, emissive: true });
      addPortal(this, scr, { prompt: 'Use the computer', target: 'broken', spawn: 'default', style: 'static' });
      b.prop(F.sofa(0x8a6a5a), mx(5.5), y, 7.8, Math.PI, { collide: true });
    } else if (u.kind === 'kettle') {
      b.prop([[0, 0, 0, 0.2, 0.2, 0.2, 0xd8d8d0, 'sphere']], mx(5.0), y + 0.92, z0 + 0.3, 0, { blob: false });
      addNote(this, hitbox(this, mx(5.8), y + 0.75, 4.0, 1.2, 0.1, 0.8), { title: 'Note by the kettle', text: 'Put the kettle on.\nI will be home in a minute.\n\n(The kettle is still warm. The note is very old.)' });
      b.prop(F.tvOld(), mx(7.2), y, 7.6, -Math.PI / 2 * m, { collide: true });
      const tv = texturedPlane(this, staticTex(), mx(6.9), y + 0.78, 7.6, 0.58, 0.44, -Math.PI / 2 * m, { unlit: true });
      tv.material.map = tv.material.map.clone(); tv.material.map.needsUpdate = true; this.disposables.push(tv.material.map);
      this.onUpdate(() => { tv.material.map.offset.set(Math.random(), Math.random()); });
      this.game.audio.positional(tv, { kind: 'static', volume: 0.06, ref: 1.2, filter: ['highpass', 2500] });
      b.prop(F.armchair(0x7a8f6a), mx(5.4), y, 7.6, Math.PI / 2 * m, { collide: true });
      b.prop(F.rug(0x9a5a5a), mx(5.8), y, 7.4, 0, { blob: false });
    } else if (u.kind === 'piano') {
      b.prop(F.piano(), mx(6.5), y, 8.6, Math.PI, { collide: true });
      for (const z of [7, 8]) b.prop(F.plant(0xd8d0c0, 0x4a8a5a), mx(7.6), y, z, 0, { collide: true });
      addExamine(this, hitbox(this, mx(6.5), y, 8.4, 1.5, 1.3, 0.7), { name: 'Upright piano', text: 'Sheet music is open to a song you hummed as a child. You never knew it had a name.', notes: 'Apartments · 2A' });
      b.prop(F.sofa(0x6a7a9a), mx(5.4), y, 6.2, 0, { collide: true });
    } else if (u.kind === 'chair') {
      b.prop(F.chair(0xd8d0c0, 0x8a7a6a), mx(6), y, 7, Math.PI, { collide: true });
      addNote(this, hitbox(this, mx(6), y + 0.4, 7, 0.5, 0.5, 0.5), { title: 'On the chair', text: 'This chair faces the wall\nbecause the view was too beautiful\nand I wanted to save it for later.' });
    } else if (u.kind === 'child') {
      for (let i = 0; i < 6; i++) b.prop([[0, 0, 0, 0.22, 0.22, 0.22, [0xe85a5a, 0x5ab0e8, 0xf2d24a, 0x6ad07a, 0xc87ae8, 0xf29a4a][i]]], mx(4.6 + (i % 3) * 0.4), y, 7.8 + (i / 3 | 0) * 0.5, i, { blob: false });
      texturedPlane(this, textTex(['my house', '  ☁', ' ▢ ▢', ' ▢▯▢'], { w: 256, h: 256, bg: '#fffef4', fg: '#3a6ad0', font: '34px "Comic Sans MS", cursive' }), mx(7.95), y + 1.4, 5.6, 0.5, 0.5, -Math.PI / 2 * m);
      addExamine(this, hitbox(this, mx(7.9), y + 1.1, 5.6, 0.2, 0.6, 0.6), { name: 'Drawing on the wall', text: 'A crayon drawing of a white house with a cloud above it. Signed with your initials.', notes: 'Apartments · 3B' });
      b.prop(F.rug(0x7ab0d8, 1.8, 1.4), mx(5.2), y, 7.9, 0, { blob: false });
    } else if (u.kind === 'locked') {
      b.prop(F.sofa(0x9a8a7a), mx(5.4), y, 7.8, Math.PI, { collide: true });
    }
  }
}
