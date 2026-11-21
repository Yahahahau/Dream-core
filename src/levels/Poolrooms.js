// LEVEL 03 — Average Waterpark / Poolrooms: bright tiled halls, arcades,
// a raised pool, a slide, a dim tunnel and a deep quiet chamber.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane } from './common/Props.js';
import { tileTex, textTex, lockerTex } from '../utils/Textures.js';
import { createWater, addCaustics } from '../environment/WaterSystem.js';
import { fluorescent, halo, floater } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

export default class Poolrooms extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['hotel', 'school'];
    this.surface = 'tile';
    const T = b.mat('tile', { map: tileTex({ tile: 0xf4f7f7, grout: 0xc4d2d4, n: 8 }), roughness: 0.25, texScale: [2, 2], envMapIntensity: 1.2 });
    const TB = b.mat('tileblue', { map: tileTex({ tile: 0xbfe7ee, grout: 0x8fc4cc, n: 8, key: 'pool' }), roughness: 0.2, texScale: [2, 2] });
    const TS = b.mat('tilestripe', { map: tileTex({ tile: 0x3fa7b8, grout: 0x2f8a99, n: 8, key: 'stripe' }), roughness: 0.25, texScale: [2, 2] });
    const ceil = b.mat('pceil', { color: 0xf4f8f8, roughness: 0.9 });

    // floor with a rectangular hole
    const holed = (x0, z0, x1, z1, hx0, hz0, hx1, hz1, y, m = T) => {
      b.floor(x0, z0, x1, hz0, y, m, { surface: 'tile' });
      b.floor(x0, hz1, x1, z1, y, m, { surface: 'tile' });
      b.floor(x0, hz0, hx0, hz1, y, m, { surface: 'tile' });
      b.floor(hx1, hz0, x1, hz1, y, m, { surface: 'tile' });
    };
    // pool basin
    const basin = (x0, z0, x1, z1, top, depth) => {
      const bot = top - depth;
      b.floor(x0, z0, x1, z1, bot, TB, { surface: 'water', thick: 0.3 });
      b.box((x0 + x1) / 2, bot, z0 - 0.1, x1 - x0 + 0.4, depth, 0.2, TB, { ao: true });
      b.box((x0 + x1) / 2, bot, z1 + 0.1, x1 - x0 + 0.4, depth, 0.2, TB, { ao: true });
      b.box(x0 - 0.1, bot, (z0 + z1) / 2, 0.2, depth, z1 - z0, TB, { ao: true });
      b.box(x1 + 0.1, bot, (z0 + z1) / 2, 0.2, depth, z1 - z0, TB, { ao: true });
      // dark stripe lane markers on the bottom
      for (let x = x0 + 2; x < x1 - 1; x += 3) b.box(x, bot, (z0 + z1) / 2, 0.25, 0.01, z1 - z0 - 2, TS, { collide: false, ao: false });
      // edge coping
      for (const [cx, cz, w, d] of [[(x0 + x1) / 2, z0 - 0.25, x1 - x0 + 1, 0.5], [(x0 + x1) / 2, z1 + 0.25, x1 - x0 + 1, 0.5], [x0 - 0.25, (z0 + z1) / 2, 0.5, z1 - z0], [x1 + 0.25, (z0 + z1) / 2, 0.5, z1 - z0]]) b.box(cx, top, cz, w, 0.03, d, TS, { collide: false, ao: false });
    };

    // arcade wall: openings with round tops, extruded
    const arcade = (x0, z0, x1, z1, y, h, n, ow, oh, thick, m) => {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const s = new THREE.Shape();
      const step = len / n, r = ow / 2;
      s.moveTo(0, 0);
      for (let i = 0; i < n; i++) {
        const c = step * (i + 0.5);
        s.lineTo(c - r, 0); s.lineTo(c - r, oh - r);
        s.absarc(c, oh - r, r, Math.PI, 0, true);
        s.lineTo(c + r, 0);
      }
      s.lineTo(len, 0); s.lineTo(len, h); s.lineTo(0, h); s.closePath();
      const geo = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false, curveSegments: 10 });
      const uv = geo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.5, uv.getY(i) * 0.5);
      geo.translate(0, 0, -thick / 2);
      const ang = Math.atan2(-(z1 - z0), x1 - x0);
      b.add(geo, m, { x: x0, y, z: z0, rotY: ang, cast: false });
      const dx = (x1 - x0) / len, dz = (z1 - z0) / len;
      for (let i = 0; i <= n; i++) {
        const a = i * step, pw = step - ow;
        const ca = Math.max(0, a - pw / 2), cb = Math.min(len, a + pw / 2);
        const m0 = (ca + cb) / 2, half = (cb - ca) / 2;
        const px = x0 + dx * m0, pz = z0 + dz * m0;
        const hx = Math.abs(dx) * half + Math.abs(dz) * thick / 2, hz = Math.abs(dz) * half + Math.abs(dx) * thick / 2;
        this.addCollider(px - hx, y, pz - hz, px + hx, y + h, pz + hz);
      }
    };

    // ================= MAIN HALL =================
    holed(-16, -20, 16, 20, -8, -12, 8, 8, 0);
    basin(-8, -12, 8, 8, 0, 1.6);
    b.stairs(-5, -9, -1.6, 4, 8, 0.2, 0.375, '-z', TB, { surface: 'tile' });
    createWater(this, { x0: -8, z0: -12, x1: 8, z1: 8, y: -0.14, opacity: 0.55, sky: 0xeefcff });
    addCaustics(this, -8, -12, 8, 8, -1.6, { strength: 0.3 });
    // ladders
    for (const x of [-6, 6]) b.prop([[-0.25, -1.6, 0, 0.05, 2.5, 0.05, 0xd8dde0, 'cyl'], [0.25, -1.6, 0, 0.05, 2.5, 0.05, 0xd8dde0, 'cyl']], x, 0, 7.7, 0, { blob: false });
    b.ceiling(-16, -20, 16, 20, 8, ceil);
    for (let x = -12; x <= 12; x += 6) for (let z = -16; z <= 16; z += 8) fluorescent(this, x, 8, z, { w: 3, d: 5, color: 0xf6fdff });
    // walls
    b.wall(-16, -20.1, 16, -20.1, 0, 8, T, { thick: 0.2, openings: [{ at: 24, w: 1.1, h: 2.2 }] });
    b.wall(16.1, -20.2, 16.1, 20.2, 0, 8, T, { thick: 0.2, openings: [{ at: 18.2, w: 3, h: 3.2 }] });
    arcade(-16, -20, -16, 20, 0, 8, 8, 3.2, 5.2, 0.6, T);
    texturedPlane(this, textTex(['NO RUNNING', 'NO DIVING'], { w: 256, h: 192, bg: '#f4f7f7', fg: '#2f8a99', font: 'bold 36px sans-serif', border: '#2f8a99' }), 15.98, 2.4, 10, 1.1, 0.8, -Math.PI / 2);
    texturedPlane(this, textTex('DEPTH 1.6 m', { w: 256, h: 64, bg: '#f4f7f7', fg: '#2f8a99', font: 'bold 34px sans-serif' }), 0, 0.02, -12.4, 1.2, 0.3, 0).rotation.x = -Math.PI / 2;
    // lounge chairs
    for (let i = 0; i < 5; i++) b.prop([[0, 0.25, 0, 0.7, 0.08, 1.9, 0xffffff], [0, 0.3, -0.75, 0.7, 0.7, 0.08, 0xffffff], [0, 0, 0, 0.6, 0.25, 1.6, 0xd8dde0]], 12, 0, -14 + i * 2.2, -0.15, { collide: true });

    // ================= WEST GALLERY + KIDDIE POOL =================
    holed(-26, -20, -16, 20, -24, -6, -19, 6, 0);
    basin(-24, -6, -19, 6, 0, 0.45);
    createWater(this, { x0: -24, z0: -6, x1: -19, z1: 6, y: -0.06, opacity: 0.5, shallow: 0x9ff0ea, sky: 0xeefcff });
    addCaustics(this, -24, -6, -19, 6, -0.45, { strength: 0.25 });
    b.ceiling(-26, -20, -16, 20, 5, ceil);
    b.box(-21, 5, 0, 10.2, 3, 40, T, { collide: false, ao: false });
    b.wall(-26.1, -20.2, -26.1, 20.2, 0, 5, T, { thick: 0.2 });
    b.wall(-26, -20.1, -16, -20.1, 0, 5, T, { thick: 0.2 });
    b.wall(-26, 20.1, -16, 20.1, 0, 5, T, { thick: 0.2 });
    for (let z = -16; z <= 16; z += 6) fluorescent(this, -21, 5, z, { w: 1.2, d: 1.2 });
    for (const z of [-14, 12]) b.prop(F.plant(0xf2f2f2, 0x3f8a5a), -25, 0, z, 0, { collide: true });
    addExamine(this, hitbox(this, -21.5, 0, 0, 5, 0.6, 12), { name: 'Kiddie pool', text: 'The water is warm and only ankle deep. A small plastic boat floats in a circle, very slowly, forever.', notes: 'Poolrooms · gallery', prompt: 'Look at the water' });
    const boat = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.4, 3), makeMaterial({ color: 0xf2c94c, vertexColors: false }));
    boat.rotation.x = Math.PI / 2; this.group.add(boat);
    this.onUpdate((dt, t) => boat.position.set(-21.5 + Math.cos(t * 0.2) * 1.2, -0.02, Math.sin(t * 0.2) * 3));

    // ================= RAISED POOL (north) =================
    const RY = 3;
    b.box(0, 0, 21.5, 32, RY, 3, T, { surface: 'tile' });
    b.box(0, 0, 32.5, 32, RY, 3, T, { surface: 'tile' });
    b.box(-13, 0, 27, 6, RY, 8, T, { surface: 'tile' });
    b.box(13, 0, 27, 6, RY, 8, T, { surface: 'tile' });
    b.box(0, 0, 27, 20, RY - 1.5, 8, TB, { collide: false, ao: false });
    basin(-10, 23, 10, 31, RY, 1.2);
    b.stairs(7, 27, RY - 1.2, 3, 6, 0.2, 0.5, '+x', TB, { surface: 'tile' });
    createWater(this, { x0: -10, z0: 23, x1: 10, z1: 31, y: RY - 0.12, opacity: 0.55, sky: 0xeefcff });
    addCaustics(this, -10, 23, 10, 31, RY - 1.2, { strength: 0.3 });
    b.stairs(0, 12, 0, 6, 15, 0.2, 0.533, '+z', T, { surface: 'tile' });
    for (const x of [-3.1, 3.1]) b.box(x, 0, 16, 0.2, 3.9, 8, T, { tint: 0xe6f2f2 });
    const rail = b.mat('rail', { color: 0xdfe6ea, roughness: 0.3, metalness: 0.5 });
    b.box(-9.5, RY, 20.1, 13, 1.0, 0.08, rail, {});
    b.box(9.5, RY, 20.1, 13, 1.0, 0.08, rail, {});
    b.ceiling(-16, 20, 16, 34, 10, ceil);
    b.wall(-16, 34.1, 16, 34.1, 0, 10, T, { thick: 0.2 });
    b.wall(-16.1, 20, -16.1, 34.2, 0, 10, T, { thick: 0.2 });
    b.wall(16.1, 20, 16.1, 34.2, 0, 10, T, { thick: 0.2 });
    b.box(0, 8, 20.1, 32, 2, 0.2, T, { collide: false, ao: false });
    for (let x = -12; x <= 12; x += 6) fluorescent(this, x, 10, 27, { w: 3, d: 4 });
    // water slide: tube from the raised deck curving down into the main pool
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(13, RY + 1.2, 30), new THREE.Vector3(14, RY + 1.4, 22), new THREE.Vector3(12, RY + 0.4, 15),
      new THREE.Vector3(6, 2.2, 13), new THREE.Vector3(2, 1.4, 16), new THREE.Vector3(-2, 1.0, 12), new THREE.Vector3(-1, 0.3, 7),
    ]);
    const slide = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.55, 12, false), makeMaterial({ color: 0x7fd0f0, transparent: true, opacity: 0.55, side: THREE.DoubleSide, roughness: 0.1, vertexColors: false }));
    this.group.add(slide);
    this.disposables.push(slide.geometry, slide.material);
    b.prop([[0, 0, 0, 0.2, RY + 1.0, 0.2, 0xf2f2f2, 'cyl']], 14, 0, 22, 0, { collide: true, blob: false });
    b.prop([[0, 0, 0, 0.2, 2.2, 0.2, 0xf2f2f2, 'cyl']], 6, 0, 13, 0, { collide: true, blob: false });

    // ================= TUNNEL =================
    const tz0 = -3.7, tz1 = -0.7;
    b.floor(16, tz0, 40, tz1, 0, T, { surface: 'tile' });
    b.wall(16, tz0 - 0.1, 40, tz0 - 0.1, 0, 3.2, T, { thick: 0.2 });
    b.wall(16, tz1 + 0.1, 40, tz1 + 0.1, 0, 3.2, T, { thick: 0.2 });
    const vault = new THREE.CylinderGeometry(1.5, 1.5, 24, 16, 1, true, 0, Math.PI);
    vault.rotateZ(Math.PI / 2);
    { const uv = vault.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 3, uv.getY(i) * 12); }
    const vm = b.mat('vault', { map: tileTex({ tile: 0xeaf3f3, grout: 0xb4c6c8, n: 8, key: 'vault' }), side: THREE.BackSide, texScale: [1, 1] });
    b.add(vault, vm, { x: 28, y: 3.2, z: (tz0 + tz1) / 2 });
    b.ceiling(16, tz0, 40, tz1, 4.7, ceil);
    // shallow channel of water down the middle
    b.box(28, -0.001, -2.2, 24, 0.002, 0.6, TS, { collide: false, ao: false });
    for (let x = 19; x < 40; x += 5) fluorescent(this, x, 4.6, -2.2, { w: 0.4, d: 0.8, color: 0xbdeff2, flicker: x === 34 });
    texturedPlane(this, textTex('DEEP END →', { w: 256, h: 64, bg: '#2f8a99', fg: '#fff', font: 'bold 34px sans-serif' }), 18, 2.4, tz1 - 0.01 + 0.0, 1.1, 0.27, Math.PI);

    // ================= DEEP CHAMBER =================
    const D = { x0: 40, x1: 62, z0: -14, z1: 12 };
    holed(D.x0, D.z0, D.x1, D.z1, 44, -10, 58, 8, 0);
    basin(44, -10, 58, 8, 0, 5);
    createWater(this, { x0: 44, z0: -10, x1: 58, z1: 8, y: -0.25, opacity: 0.45, shallow: 0x2fb5b8, deep: 0x05484f, sky: 0x9ad6dc });
    addCaustics(this, 44, -10, 58, 8, -5, { strength: 0.45, color: 0x6ff6ff });
    const glass = b.mat('dglass', { color: 0xd6f4f6, transparent: true, opacity: 0.25, roughness: 0.05 });
    for (const [cx, cz, w, d] of [[51, -10.6, 15.2, 0.06], [51, 8.6, 15.2, 0.06], [43.4, -1, 0.06, 19.2], [58.6, -1, 0.06, 19.2]]) {
      b.box(cx, 0, cz, w, 1.05, d, glass, { ao: false });
      b.box(cx, 1.0, cz, w + 0.04, 0.06, d + 0.04, rail, { collide: false, ao: false });
    }
    const under = new THREE.PointLight(0x5ff0ff, 30, 22, 1.4); under.position.set(51, -3.5, -1); this.group.add(under);
    b.ceiling(D.x0, D.z0, D.x1, D.z1, 12, b.mat('dceil', { color: 0xc8d8d8, roughness: 1 }));
    b.wall(D.x0, D.z0 - 0.1, D.x1, D.z0 - 0.1, 0, 12, T, { thick: 0.2 });
    b.wall(D.x0, D.z1 + 0.1, D.x1, D.z1 + 0.1, 0, 12, T, { thick: 0.2 });
    b.wall(D.x1 + 0.1, D.z0 - 0.2, D.x1 + 0.1, D.z1 + 0.2, 0, 12, T, { thick: 0.2 });
    b.wall(D.x0 - 0.1, D.z0 - 0.2, D.x0 - 0.1, D.z1 + 0.2, 0, 12, T, { thick: 0.2, openings: [{ at: 0.2 + (tz0 - D.z0) + 1.5, w: 3, h: 3.2 }] });
    for (const [x, z] of [[42, -12], [60, -12], [42, 10], [60, 10]]) b.box(x, 0, z, 1, 12, 1, T, {});
    b.prop(F.bench(0xf2f2f2, 0xc0c8cc), 51, 0, 10.8, Math.PI, { collide: true });
    addNote(this, hitbox(this, 51, 0.45, 10.8, 1.8, 0.3, 0.5), { title: 'Wet paper on the bench', text: 'This pool is deeper than the building.\nI tried to touch the bottom.\nThe light down there is warm.\nDo not stay too long.' });
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 12), new THREE.MeshBasicMaterial({ color: 0xbff8ff }));
    orb.position.set(51, -3.6, -1); this.group.add(orb);
    halo(this, 51, -3.6, -1, 4, '#9ff4ff', 0.6);
    floater(this, orb, { amp: 0.3, speed: 0.4, spin: 0 });
    addExamine(this, hitbox(this, 51, -0.4, -1, 14, 0.5, 18), { name: 'The deep pool', text: 'There is a small light very far down, breathing slowly.', notes: 'Poolrooms · deep chamber', prompt: 'Look down' });
    const water = new THREE.Object3D(); water.position.set(51, 0, -1); this.group.add(water);
    g.audio.positional(water, { kind: 'water', volume: 0.35, ref: 4, filter: ['lowpass', 600] });

    // ================= CHANGING ROOMS =================
    const C = { x0: 3, x1: 13, z0: -30, z1: -20.2 };
    b.floor(C.x0, C.z0, C.x1, C.z1, 0, b.mat('ctile', { map: tileTex({ tile: 0xdfe8e4, grout: 0xa9b8b2, n: 10, key: 'chg' }), texScale: [1.5, 1.5] }), { surface: 'tile' });
    b.ceiling(C.x0, C.z0, C.x1, C.z1, 3, ceil);
    b.wall(C.x0 - 0.1, C.z0 - 0.2, C.x0 - 0.1, C.z1, 0, 3, T, { thick: 0.2 });
    b.wall(C.x1 + 0.1, C.z0 - 0.2, C.x1 + 0.1, C.z1, 0, 3, T, { thick: 0.2 });
    b.wall(C.x0, C.z0 - 0.1, C.x1, C.z0 - 0.1, 0, 3, T, { thick: 0.2, openings: [{ at: 5, w: 1.0, h: 2.15 }] });
    const lm = b.mat('plock', { map: lockerTex(0xe6c84a), roughness: 0.5 });
    for (let z = C.z0 + 0.5; z < C.z1 - 1; z += 0.46) b.box(C.x0 + 0.23, 0, z + 0.23, 0.45, 1.85, 0.45, lm, { stretch: true, collide: false, ao: false });
    this.addCollider(C.x0, 0, C.z0, C.x0 + 0.5, 1.9, C.z1 - 1);
    b.prop(F.bench(0xc89a6a, 0x999999), 8, 0, -25, Math.PI / 2, { collide: true });
    for (let z = C.z0 + 1.5; z < C.z1 - 1; z += 2) b.prop([[0, 1.8, -0.1, 0.12, 0.12, 0.3, 0xc0c8cc], [0, 0, 0, 0.04, 1.9, 0.04, 0xc0c8cc]], C.x1 - 0.2, 0, z, Math.PI / 2, { blob: false });
    for (let z = C.z0 + 2; z < C.z1; z += 3.5) fluorescent(this, 8, 3, z, { w: 0.5, d: 1.2 });
    createDoor(this, { x: 8, y: 0, z: -20.1, rotY: 0, kind: 'flat', color: 0xe6c84a });
    createDoor(this, { x: 8, y: 0, z: C.z0 - 0.1, rotY: 0, kind: 'flat', color: 0x7a3a3a, target: { level: 'hotel', spawn: 'from-pool' }, glimpse: 0xffd8a0, label: 'EXIT' });
    texturedPlane(this, textTex('EXIT', { w: 256, h: 96, bg: '#1a6a2a', fg: '#c8ffc8', font: 'bold 64px sans-serif' }), 8, 2.5, C.z0 + 0.02, 0.6, 0.22, 0, { unlit: true, emissive: true });
    texturedPlane(this, textTex('CHANGING ROOMS', { w: 512, h: 64, bg: '#2f8a99', fg: '#fff', font: 'bold 36px sans-serif' }), 8, 2.5, -19.98, 1.8, 0.22, 0);

    // brightness zones: bright public halls vs quiet tunnel / chamber
    this.setLightZones([
      { min: [16.2, -5, -6], max: [40, 5, 2], hemi: 0.95, exposure: 1.0 },
      { min: [40, -6, -15], max: [63, 13, 13], hemi: 0.55, exposure: 1.1 },
    ], { hemi: 1.75, exposure: 1.05 });

    const pool = new THREE.Object3D(); pool.position.set(0, 0, -2); this.group.add(pool);
    g.audio.positional(pool, { kind: 'water', volume: 0.25, ref: 5, filter: ['lowpass', 900] });

    this.addSpawn('default', [0, 0, -17], yawTo(0, 1));
    this.addSpawn('from-school', [0, 0, -17], yawTo(0, 1));
    this.addSpawn('from-shed', [-21.5, 0, -14], yawTo(1, 0.4));
    this.addSpawn('from-hotel', [8, 0, -28.5], yawTo(0, 1));
    this.addSpawn('from-hallways', [-12, 0, 16], yawTo(1, -1));
  }
}
