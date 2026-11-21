// LEVEL 00 — Starting Zone: endless green hills, a road, a small white house
// with a cloud that never leaves it, and a door standing alone on a hill.
import * as THREE from 'three';
import { Level } from './Level.js';
import { terrain, vnoise } from './common/Terrain.js';
import { house, fenceAlong, curvePoints, ribbon, distToPath, telephonePole, wires, F, texturedPlane, gableRoofGeo } from './common/Props.js';
import { grassTex, asphaltTex, sidingTex, roofTex, woodTex, wallpaperTex, windowTex, cloudSpriteTex, paintingTex, plasterTex } from '../utils/Textures.js';
import { grassField, shyObject } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addNote, addExamine, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const HX = 36, HZ = -132; // the white house
const DX = -78, DZ = -66; // the lone door

export function hills(x, z) {
  let h = Math.sin(x * 0.017) * Math.cos(z * 0.014) * 7 + Math.sin(x * 0.031 + 1.2) * 3.5 + Math.cos(z * 0.026 + 0.5) * 3 + Math.sin((x + z) * 0.055) * 1.1;
  h += 21 * Math.exp(-((x - HX) ** 2 + (z - HZ) ** 2) / (2 * 34 * 34));
  h += 7 * Math.exp(-((x - DX) ** 2 + (z - DZ) ** 2) / (2 * 20 * 20));
  return h;
}

export default class StartingZone extends Level {
  build() {
    this.outdoor = true;
    const b = this.b, g = this.game;
    this.heightAt = hills;
    this.terrainSurface = 'grass';
    this.neighbors = ['almond', 'school'];
    const H = hills;

    // ---------- ground ----------
    const gm = makeMaterial({ map: grassTex(0x6a9c45), vertexColors: true, roughness: 0.95 });
    this.disposables.push(gm);
    terrain(this, {
      size: 1000, heightAt: H, mat: gm, uvScale: 5,
      colorAt: (x, z) => { const n = vnoise(x * 0.02, z * 0.02, 1), m = vnoise(x * 0.1, z * 0.1, 2); const k = 0.88 + n * 0.2 + m * 0.06; return [k * (0.96 + n * 0.08), k, k * (0.92 + m * 0.06)]; },
    });

    // ---------- road ----------
    const road = curvePoints([[2, 40], [0, 8], [3, -30], [-6, -62], [6, -92], [24, -112], [HX, HZ + 8]], 2);
    this.road = road;
    const rm = makeMaterial({ map: asphaltTex(0x5d6066, '#f3efe2'), vertexColors: false, roughness: 0.92 });
    this.disposables.push(rm);
    ribbon(this, road, 4.2, H, rm, { lift: 0.05, uvScale: 4 });
    // gravel shoulders
    const sm = makeMaterial({ color: 0xb8ad94, vertexColors: false, roughness: 1 });
    this.disposables.push(sm);
    ribbon(this, road, 5.4, H, sm, { lift: 0.03, uvScale: 4 });

    // ---------- fences winding over the hills ----------
    const fences = [
      [[-30, 30], [-22, 0], [-26, -40], [-18, -80], [-30, -120], [-60, -150], [-110, -170]],
      [[20, 30], [16, -10], [24, -50], [36, -80], [70, -100], [110, -95], [150, -120]],
      [[62, -100], [76, -125], [72, -152], [55, -170], [22, -176], [2, -160]],
      [[-140, -40], [-110, -30], [-95, -10], [-70, 10], [-40, 18]],
    ];
    fences.forEach((f) => fenceAlong(this, curvePoints(f, 1.6), H));

    // ---------- the white house on the hill ----------
    this.buildWhiteHouse(H(HX, HZ));

    // cloud that stays above the house
    const cm = new THREE.SpriteMaterial({ map: cloudSpriteTex(3), transparent: true, depthWrite: false, fog: false });
    const cloud = new THREE.Sprite(cm);
    cloud.position.set(HX, H(HX, HZ) + 20, HZ);
    cloud.scale.set(34, 20, 1);
    this.group.add(cloud);
    this.disposables.push(cm);
    this.onUpdate((dt, t) => { cloud.position.y = H(HX, HZ) + 20 + Math.sin(t * 0.25) * 0.6; });

    // ---------- other houses in the distance ----------
    const others = [
      [-92, -205, 0.3, 0xe6d8bc, 0x7a4a3a], [112, -118, -0.6, 0xece4d2, 0x6a5a50], [160, -262, 0.1, 0xe2d6c0, 0x8a4a3a],
      [-165, -150, 1.2, 0xefe6d4, 0x7a4a3a], [95, 48, 2.6, 0xe6dcc8, 0x6a4a3a], [-135, 70, 2.2, 0xe9e1cf, 0x7a5a48],
      [210, -70, -1.3, 0xefe8da, 0x80503c], [-45, -290, 0.2, 0xe4d7bf, 0x704a40],
    ];
    for (const [x, z, r, wc, rc] of others) house(this, { x, z, y: H(x, z), rotY: r, wall: wc, roof: rc, w: 6 + (x % 3), d: 5.5, h: 5.4, chimney: x > 0 });
    // the house that moves when you look away
    const shy = new THREE.Group();
    const sw = makeMaterial({ map: sidingTex(0xf0e8d8), vertexColors: false, texScale: [2, 2] });
    const sr = makeMaterial({ map: roofTex(0x7a4a3a), vertexColors: false });
    this.disposables.push(sw, sr);
    const body = new THREE.Mesh(new THREE.BoxGeometry(5, 4.5, 5), sw); body.position.y = 2.25; shy.add(body);
    const rf = new THREE.Mesh(gableRoofGeo(5, 5, 2), sr); rf.position.y = 4.5; shy.add(rf);
    shy.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
    const shyPos = [[-200, H(-200, -40) - 0.2, -40, 0.4], [-190, H(-190, -95) - 0.2, -95, 1.0], [-215, H(-215, 10) - 0.2, 10, -0.3]];
    shy.position.set(...shyPos[0].slice(0, 3));
    this.group.add(shy);
    shyObject(this, shy, shyPos);

    // water tower
    const wt = [185, -205];
    b.prop([[0, 0, 0, 0.3, 9, 0.3, 0x8d8a84, 'cyl'], [2, 0, 0, 0.3, 9, 0.3, 0x8d8a84, 'cyl'], [1, 0, 1.8, 0.3, 9, 0.3, 0x8d8a84, 'cyl'], [1, 9, 0.6, 4.2, 3.4, 4.2, 0xa9a59c, 'cyl'], [1, 12.4, 0.6, 4.6, 1.2, 4.6, 0x7d786f, 'cone']], wt[0], H(...wt), wt[1], 0, { collide: true });

    // telephone poles along the road
    const poles = [];
    for (let i = 4; i < road.length - 4; i += 14) {
      const [x, z] = road[i], [nx, nz] = road[i + 1];
      let dx = nx - x, dz = nz - z; const l = Math.hypot(dx, dz); dx /= l; dz /= l;
      const px = x - dz * 4.5, pz = z + dx * 4.5, py = H(px, pz);
      const rot = Math.atan2(-dz, dx) + Math.PI / 2;
      telephonePole(this, px, py, pz, rot);
      poles.push([px, py, pz, rot]);
    }
    wires(this, poles);

    // mailbox + bench
    const mb = [HX + 3.5, HZ + 9];
    b.prop([[0, 0, 0, 0.08, 1.05, 0.08, 0x6b5440], [0, 1.0, 0, 0.3, 0.28, 0.5, 0x5a7fa8]], mb[0], H(...mb), mb[1], 0, { collide: true });
    addExamine(this, hitbox(this, mb[0], H(...mb) + 0.9, mb[1], 0.5, 0.5, 0.7), { name: 'Mailbox', text: 'The mailbox is full of letters addressed to you. Every page is blank.', notes: 'Starting Zone · by the house' });
    const bx = -40, bz = -20;
    b.prop(F.bench(0xf0ebe0, 0xb8b2a8), bx, H(bx, bz), bz, yawTo(HX - bx, HZ - bz) + Math.PI, { collide: true });
    addExamine(this, hitbox(this, bx, H(bx, bz), bz, 1.8, 0.9, 0.8), { name: 'Bench on the hill', text: 'Someone sat here for a long time, looking at the house. The seat is still warm.', notes: 'Starting Zone' });

    // ---------- the lone door ----------
    const dy = H(DX, DZ);
    createDoor(this, { x: DX, y: dy - 0.02, z: DZ, rotY: Math.PI / 2, freeStanding: true, target: { level: 'almond', spawn: 'default' }, glimpse: 0xffe6b0, label: 'Open the door', color: 0xf8f6f0, kind: 'flat' });
    // daisies around it
    const fl = [];
    for (let i = 0; i < 900; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 26;
      const x = DX + Math.cos(a) * r, z = DZ + Math.sin(a) * r;
      fl.push([x, H(x, z) + 0.12, z, Math.random() * 3, 0.6 + Math.random() * 0.6]);
    }
    const fg = new THREE.IcosahedronGeometry(0.06, 0);
    const fm = makeMaterial({ color: 0xffffff, vertexColors: false, roughness: 1, emissive: 0x333322 });
    this.disposables.push(fm);
    b.instanced(fg, fm, fl);
    const yel = fl.filter((_, i) => i % 4 === 0).map((f) => [f[0] + 0.1, f[1] - 0.01, f[2], 0, 0.7]);
    const ym = makeMaterial({ color: 0xf6d64a, vertexColors: false, roughness: 1 });
    this.disposables.push(ym);
    b.instanced(fg.clone(), ym, yel);

    // ---------- grass ----------
    grassField(this, {
      x0: -130, z0: -250, x1: 150, z1: 60, heightAt: H, density: 0.75, height: 0.42, color: 0x6c9e46, sway: 0.09, seed: 4,
      avoid: (x, z) => distToPath(x, z, road) < 3.4 || (Math.abs(x - HX) < 6 && Math.abs(z - HZ) < 6),
    });
    particles(this, { kind: 'pollen', count: 220, size: 0.05, color: 0xfffbe0, box: 40, height: 10, fall: 0.05, drift: 0.8, opacity: 0.7 });

    // ---------- spawns ----------
    const [sx, sz] = road[20];
    this.addSpawn('default', [sx, H(sx, sz), sz], yawTo(HX - sx, HZ - sz) - 0.12);
    this.spawns.menu = { pos: [-52, H(-52, -40) + 5.5, -40], yaw: yawTo(HX + 52, HZ + 40) + 0.1, pitch: -0.02 };
    this.addSpawn('house', [HX, H(HX, HZ) + 0.02, HZ - 1], 0);
    this.addSpawn('door', [DX + 2.5, dy, DZ], yawTo(-1, 0));
  }

  buildWhiteHouse(y) {
    const b = this.b;
    const w = 7, d = 6, h = 3.1, t = 0.22;
    const x0 = HX - w / 2, x1 = HX + w / 2, z0 = HZ - d / 2, z1 = HZ + d / 2;
    const ext = b.mat('wh-ext', { map: plasterTex(0xf7f6f2, 'whiteplaster'), roughness: 0.85, texScale: [2, 2] });
    const inn = b.mat('wh-in', { map: wallpaperTex(0xeee4cf, 0xc7a28c), roughness: 0.9, texScale: [1.2, 1.2] });
    const fl = b.mat('wh-floor', { map: woodTex(0xa47c55, 5), roughness: 0.7, texScale: [2.5, 2.5] });
    const rm = b.mat('wh-roof', { color: 0xf3f2ee, roughness: 0.8 });
    // foundation + floor
    b.box(HX, y - 1.5, HZ, w + 0.4, 1.28, d + 0.4, ext, { ao: false, tint: 0xd8d6d0, surface: 'wood' });
    b.floor(x0 - 0.2, z0 - 0.2, x1 + 0.2, z1 + 0.2, y, fl, { surface: 'wood', thick: 0.22 });
    // shell walls: front has door, sides + back windows
    const op = { s: [], n: [{ at: w / 2, w: 1.0, h: 2.12 }], e: [{ at: d / 2, w: 1.1, h: 1.2, y0: 0.95 }], w: [{ at: d / 2, w: 1.1, h: 1.2, y0: 0.95 }] };
    b.room(x0, z0, x1, z1, y, h, { wall: ext, thick: t, openings: { ...op, s: [{ at: 2, w: 1.1, h: 1.2, y0: 0.95 }, { at: 5, w: 0.95, h: 2.12 }] } });
    // inner wallpaper skin
    const it = 0.04;
    b.room(x0 + it, z0 + it, x1 - it, z1 - it, y, h, { wall: inn, thick: 0.02, wallOpts: { collide: false }, openings: { n: [{ at: w / 2 - it, w: 1.0, h: 2.12 }], e: [{ at: d / 2 - it, w: 1.1, h: 1.2, y0: 0.95 }], w: [{ at: d / 2 - it, w: 1.1, h: 1.2, y0: 0.95 }], s: [{ at: 2 - it, w: 1.1, h: 1.2, y0: 0.95 }, { at: 5 - it, w: 0.95, h: 2.12 }] } });
    b.ceiling(x0, z0, x1, z1, y + h, b.mat('wh-ceil', { color: 0xf4f1ea, roughness: 0.9 }));
    // window glass (bright sky) in openings
    const winM = b.mat('wh-win', { map: windowTex(0xffffff, 0xbfe0ff, 4), emissive: 0xbfe0ff, emissiveIntensity: 0.35, roughness: 0.1, texScale: [1, 1] });
    b.box(x1 + t / 2, y + 0.95, HZ, 0.05, 1.2, 1.1, winM, { collide: false, stretch: true, ao: false });
    b.box(x0 - t / 2, y + 0.95, HZ, 0.05, 1.2, 1.1, winM, { collide: false, stretch: true, ao: false });
    b.box(x0 + 2, y + 0.95, z0 - t / 2, 1.1, 1.2, 0.05, winM, { collide: false, stretch: true, ao: false });
    // roof + chimney
    b.add(gableRoofGeo(w + t * 2, d + t * 2, 2.2, 0.4), rm, { x: HX, y: y + h, z: HZ, cast: true });
    b.box(HX + 1.8, y + h + 0.16, HZ - 1, 0.6, 2.45, 0.6, ext, { collide: false });
    // step
    b.box(HX, y - 0.6, z1 + 0.65, 1.8, 0.45, 0.9, ext, { tint: 0xe2e0da, surface: 'concrete' });

    // front door (yellow, like the reference)
    createDoor(this, { x: HX, y, z: z1 + t / 2, rotY: 0, color: 0xf2c94c, kind: 'panel', w: 0.98, swing: 1 });
    // back door: an impossible connection
    createDoor(this, { x: x0 + 5, y, z: z0 - t / 2, rotY: 0, color: 0xf6f3ea, kind: 'panel', w: 0.93, swing: 1, target: { level: 'school', spawn: 'from-house' }, glimpse: 0xe8f4ff, label: 'Open the back door' });

    // furniture
    b.prop(F.table(0xb89870, 1.0, 0.7), HX - 1.6, y, HZ - 0.6, 0.1, { collide: true });
    b.prop(F.chair(0xe9e2d0, 0xb89870), HX - 1.6, y, HZ + 0.2, Math.PI + 0.2, { collide: true });
    b.prop(F.armchair(0x8fb0c8), HX + 2.2, y, HZ + 1.6, -2.4, { collide: true });
    b.prop(F.lamp(), HX + 2.9, y, HZ + 2.4, 0);
    b.prop(F.rug(0xc98f8f, 2.4, 1.6), HX + 0.4, y, HZ + 0.4, 0, { blob: false });
    b.prop(F.shelf(0xe8e2d4, 0.9, 1.6), HX + 3.25, y, HZ - 1.5, -Math.PI / 2, { collide: true });
    const note = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.3), new THREE.MeshStandardMaterial({ color: 0xfbf7ea, roughness: 0.9 }));
    note.rotation.set(-Math.PI / 2, 0, 0.3); note.position.set(HX - 1.5, y + 0.75, HZ - 0.6);
    this.group.add(note);
    this.disposables.push(note.geometry, note.material);
    addNote(this, note, { title: 'A note on the table', text: 'You can stay as long as you want.\nNobody is coming.\nThat is okay.\n\nThe back door does not open to the garden anymore.' });
    texturedPlane(this, paintingTex(0), HX - 3.44, y + 1.6, HZ + 1, 0.9, 0.68, Math.PI / 2);
    addExamine(this, hitbox(this, HX - 3.4, y + 1.2, HZ + 1, 0.2, 0.8, 1), { name: 'Painting of this house', text: 'A painting of this very house, seen from the road. In the painting, there is a light on inside.', notes: 'Starting Zone · white house' });
    // warm interior light
    const pl = new THREE.PointLight(0xffe2b8, 3, 9, 1.5);
    pl.position.set(HX, y + 2.6, HZ);
    this.group.add(pl);
  }

  onEnter() {}

  update(dt, t) {
    super.update(dt, t);
    const p = this.game.player.pos;
    if (this.game.state === 'play' && !this.game.world.busy && Math.hypot(p.x, p.z) > 440) {
      this.game.ui.caption('You walked too far. The road brings you back.');
      this.game.world.goTo('starting', 'default', { style: 'white' });
    }
  }
}
