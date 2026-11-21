// LEVEL 09 — The Edge of the World: an endless ocean, small islands, a plank
// bridge, a staircase that climbs into the sky and architecture that floats.
import * as THREE from 'three';
import { Level } from './Level.js';
import { terrain, vnoise } from './common/Terrain.js';
import { house, F, texturedPlane, gableRoofGeo } from './common/Props.js';
import { grassTex, woodTex, rockTex, plasterTex, sidingTex, roofTex, glowTex } from '../utils/Textures.js';
import { createWater } from '../environment/WaterSystem.js';
import { trees, grassField, floater, halo } from '../environment/EnvironmentEffects.js';
import { createDoor } from '../interaction/Door.js';
import { createElevator } from '../interaction/Elevator.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const ISLANDS = [
  { x: 0, z: 0, r: 30, top: 3 },
  { x: 66, z: 0, r: 26, top: 4 },
  { x: -70, z: -60, r: 16, top: 9, cliff: true },
  { x: 30, z: 90, r: 12, top: 2 },
];
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function seaHeight(x, z) {
  let h = -9;
  for (const I of ISLANDS) {
    const d = Math.hypot(x - I.x, z - I.z), f = 1 - d / I.r;
    if (f <= -0.4) continue;
    const s = I.cliff ? smooth(0.05, 0.15, f) : smooth(0, 0.35, f);
    const v = -9 + (I.top + 9) * s + (s > 0.9 ? (vnoise(x * 0.15, z * 0.15, 4) - 0.5) * 0.6 : 0);
    if (v > h) h = v;
  }
  return h;
}

export default class EdgeOfTheWorld extends Level {
  build() {
    const b = this.b, g = this.game, H = seaHeight;
    this.heightAt = H;
    this.terrainSurface = 'grass';
    this.neighbors = ['frozen', 'hotel', 'hallways'];
    this.killY = -1.2;

    const gm = makeMaterial({ map: grassTex(0x6aa04a, 'isle'), vertexColors: true, roughness: 0.95 });
    this.disposables.push(gm);
    terrain(this, {
      size: 320, cx: 0, cz: 0, heightAt: H, mat: gm, uvScale: 4,
      colorAt: (x, z) => { const h = H(x, z); if (h < 0.9) { const k = Math.max(0, h + 2) / 3; return [1.35 - k * 0.1, 1.25, 0.95]; } return [1, 1, 1]; },
    });
    createWater(this, { x0: -1500, z0: -1500, x1: 1500, z1: 1500, y: 0, segments: 96, opacity: 0.9, deep: 0x0d4a6e, shallow: 0x3aa0b8, sky: 0xcfe6f6, swell: 0.22, scale: 0.35, strength: 0.6, sunDir: [0.3, 0.35, -0.8], glint: 2.5, follow: true });

    // ---------- island 1: elevator, lighthouse, house ----------
    createElevator(this, { id: 'sea', x: 6, y: H(6, 6) + 0.05, z: 6, rotY: -0.6, label: '?', wallColor: 0xd8d2c4, destinations: [{ label: 'Hotel lobby', level: 'hotel', spawn: 'elev-L1' }, { label: 'Hallways', level: 'hallways', spawn: 'from-elevator' }] });
    addExamine(this, hitbox(this, 6 + Math.sin(-0.6) * -1.5, H(6, 6), 6 - 1.5 * Math.cos(-0.6), 2.6, 2.8, 0.4), { name: 'Elevator on an island', text: 'An elevator standing alone in the grass, still humming. Its button says "?".', notes: 'Edge of the World', prompt: 'Look at it' });
    const lx = -14, lz = 10, ly = H(lx, lz);
    const bands = [];
    for (let i = 0; i < 6; i++) bands.push([0, i * 2.4, 0, 3.4 - i * 0.22, 2.4, 3.4 - i * 0.22, i % 2 ? 0xd84a4a : 0xf6f4ee, 'cyl']);
    b.prop([...bands, [0, 14.4, 0, 2.4, 2, 2.4, 0xeaf6ff, 'cyl'], [0, 16.4, 0, 2.8, 1.4, 2.8, 0x3a3a3a, 'cone']], lx, ly - 0.3, lz, 0, { collide: true, cast: true });
    const beamMat = new THREE.MeshBasicMaterial({ map: glowTex('#fff6d0'), color: 0xfff2c0, transparent: true, opacity: 0.35, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    const beam = new THREE.Mesh(new THREE.ConeGeometry(4, 60, 16, 1, true), beamMat);
    beam.geometry.translate(0, -30, 0); beam.rotation.z = Math.PI / 2;
    const pivot = new THREE.Group(); pivot.position.set(lx, ly + 15.4, lz); pivot.add(beam); this.group.add(pivot);
    halo(this, lx, ly + 15.4, lz, 5, '#fff2c0', 0.7);
    this.disposables.push(beamMat, beam.geometry);
    this.onUpdate((dt) => { pivot.rotation.y += dt * 0.6; });
    house(this, { x: 10, z: -14, y: H(10, -14), rotY: 0.4, w: 6, d: 5, h: 3, floors: 1, wall: 0xf6f4ee, roof: 0x5a6a8a, chimney: true });
    b.prop(F.bench(0xf2eee6, 0x8a8a8a), -6, H(-6, -22), -22, Math.PI * 0.95, { collide: true });
    addExamine(this, hitbox(this, -6, H(-6, -22), -22, 1.8, 1, 0.8), { name: 'Bench facing the sea', text: 'From here the horizon is so far away it curves a little. There is no other shore.', notes: 'Edge of the World · island one', prompt: 'Sit' });
    const bottle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.32, 8), makeMaterial({ color: 0x7ab890, transparent: true, opacity: 0.7, roughness: 0.1, vertexColors: false }));
    bottle.rotation.z = 1.3; bottle.position.set(-20, H(-20, -14) + 0.08, -14); this.group.add(bottle);
    addNote(this, bottle, { title: 'Message in a bottle', text: 'If you are reading this,\nyou made it to the end of the world.\n\nIt is not an end.\nIt is just where the water starts.', prompt: 'Open the bottle' });
    trees(this, [[-18, H(-18, -4), -4, 0, 1.1], [16, H(16, 8), 8, 1, 0.9], [-4, H(-4, 16), 16, 2, 1.2]], { kind: 'round', leaf: 0x5a8f3a });
    grassField(this, { x0: -26, z0: -26, x1: 26, z1: 26, heightAt: H, density: 0.6, height: 0.35, color: 0x6aa04a, sway: 0.12, seed: 31, avoid: (x, z) => H(x, z) < 0.6 });

    // ---------- plank bridge to island 2 (a gentle ramp) ----------
    const bx0 = 21, bx1 = 47, y0 = H(bx0, 0), y1 = H(bx1, 0);
    const plank = b.mat('plank', { map: woodTex(0x8a6a4a, 4, 'plank'), texScale: [1, 1] });
    for (let x = bx0; x < bx1; x += 0.6) {
      const k = (x - bx0) / (bx1 - bx0), y = y0 + (y1 - y0) * k - 0.08 + Math.sin(k * Math.PI) * 0.0;
      b.box(x + 0.25, y, 0, 0.5, 0.08, 2.2, plank, { collide: false, ao: false, tint: 0xeeeeee - ((x * 7) % 3) * 0x101010 });
    }
    this.addRamp(bx0, -1.1, bx1, 1.1, 'x', y0, y1, 'wood');
    for (let x = bx0; x <= bx1; x += 3) for (const s of [-1.1, 1.1]) { const k = (x - bx0) / (bx1 - bx0); b.prop([[0, -2, 0, 0.14, 3.2, 0.14, 0x6a4a30, 'cyl']], x, y0 + (y1 - y0) * k, s, 0, { blob: false }); }
    const rope = new THREE.LineBasicMaterial({ color: 0x8a7a5a });
    for (const s of [-1.1, 1.1]) { const pts = []; for (let x = bx0; x <= bx1; x += 1) { const k = (x - bx0) / (bx1 - bx0); pts.push(new THREE.Vector3(x, y0 + (y1 - y0) * k + 1.0 - Math.sin(((x - bx0) % 3) / 3 * Math.PI) * 0.15, s)); } const gg = new THREE.BufferGeometry().setFromPoints(pts); this.group.add(new THREE.Line(gg, rope)); this.disposables.push(gg); }
    this.disposables.push(rope);
    // keep people on the bridge
    this.addCollider(bx0 + 1, -5, -1.4, bx1 - 1, 9, -1.2); this.addCollider(bx0 + 1, -5, 1.2, bx1 - 1, 9, 1.4);

    // ---------- island 2: rocks, trees and the stair into the sky ----------
    const rm = b.mat('rock', { map: rockTex(), texScale: [3, 3] });
    for (const [x, z, s] of [[74, 10, 3], [58, 14, 2], [80, -6, 2.4], [52, -8, 1.6]]) b.add(new THREE.DodecahedronGeometry(s, 0), rm, { x, y: H(x, z) + s * 0.4, z, rotY: x, collide: true, cast: true });
    trees(this, [[72, H(72, 6), 6, 0, 1.2], [60, H(60, 10), 10, 1, 1], [76, H(76, -4), -4, 2, 1.3]], { kind: 'poplar', leaf: 0x5a8f3a });
    const stairM = b.mat('skystair', { map: plasterTex(0xf4f2ec, 'skystair'), texScale: [1, 1] });
    const SY0 = H(66, -10);
    b.stairs(66, -10, SY0, 2.2, 66, 0.4, 0.66, '-z', stairM, { surface: 'concrete', slab: 0.3 });
    const topY = SY0 + 66 * 0.4, topZ = -10 - 66 * 0.66;
    addExamine(this, hitbox(this, 66, SY0, -10.5, 2.2, 1.2, 1), { name: 'Stairs into the sky', text: 'No railing, no supports. Every step is exactly where your foot expects it to be.', notes: 'Edge of the World · island two' });
    // floating island at the top
    const PX = 66, PZ = topZ - 10;
    b.box(PX, topY - 3, PZ, 20, 3, 20, rm, { surface: 'grass', tint: 0xb0a898 });
    b.box(PX, topY - 0.02, PZ, 20, 0.04, 20, b.mat('floatgrass', { map: grassTex(0x6aa04a, 'isle'), texScale: [4, 4] }), { collide: false, ao: false });
    const under = new THREE.Mesh(new THREE.ConeGeometry(12, 18, 8), makeMaterial({ map: rockTex(), vertexColors: false }));
    under.rotation.x = Math.PI; under.position.set(PX, topY - 3 - 9, PZ); this.group.add(under);
    this.disposables.push(under.geometry, under.material);
    grassField(this, { x0: PX - 9.5, z0: PZ - 9.5, x1: PX + 9.5, z1: PZ + 9.5, heightAt: () => topY, density: 0.9, height: 0.3, color: 0x6aa04a, sway: 0.18, chunk: 10, seed: 44 });
    const shrine = b.mat('shrine', { map: plasterTex(0xfbfaf6, 'shrine') });
    b.room(PX - 2.5, PZ - 7, PX + 2.5, PZ - 2, topY, 3, { wall: shrine, thick: 0.2, openings: { n: [{ at: 2.5, w: 1.0, h: 2.15 }] }, ceil: shrine, floor: shrine });
    b.add(gableRoofGeo(5.4, 5.4, 1.6, 0.3), b.mat('shrineroof', { map: roofTex(0x5a7aa8) }), { x: PX, y: topY + 3, z: PZ - 4.5 });
    createDoor(this, { x: PX, y: topY, z: PZ - 2 + 0.1, rotY: 0, color: 0xf2f6ff, kind: 'flat', target: { level: 'frozen', spawn: 'default' }, glimpse: 0xeef4ff, label: 'It is cold behind this door' });
    halo(this, PX, topY + 2.6, PZ - 1.7, 1, '#eaf2ff', 0.7);
    addExamine(this, hitbox(this, PX + 6, topY, PZ + 4, 2, 1.6, 2), { name: 'View from the floating island', text: 'The sea goes on in every direction, and the islands look like the dots in a children\'s map.', notes: 'Edge of the World · floating island', prompt: 'Look out' });
    b.prop(F.bench(0xf2eee6, 0x8a8a8a), PX + 6, topY, PZ + 6, Math.PI, { collide: true });

    // ---------- floating architecture & distant structures ----------
    const upside = new THREE.Group();
    const hw = makeMaterial({ map: sidingTex(0xf0e8e0), vertexColors: false }), hr = makeMaterial({ map: roofTex(0x8a5a4a), vertexColors: false });
    this.disposables.push(hw, hr);
    const hb = new THREE.Mesh(new THREE.BoxGeometry(6, 4.5, 6), hw); upside.add(hb);
    const hrf = new THREE.Mesh(gableRoofGeo(6, 6, 2.4), hr); hrf.rotation.z = Math.PI; hrf.position.y = -2.25; upside.add(hrf);
    upside.position.set(-40, 32, -50); upside.rotation.set(0.1, 0.5, 0);
    upside.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.group.add(upside);
    floater(this, upside, { amp: 1.2, speed: 0.15, spin: 0.01 });
    const steps = new THREE.Group();
    for (let i = 0; i < 24; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.2, 0.6), shrine); const a = i * 0.35; s.position.set(Math.cos(a) * 2.4, i * 0.35, Math.sin(a) * 2.4); s.rotation.y = -a; steps.add(s); }
    steps.position.set(-30, 8, 30); this.group.add(steps);
    floater(this, steps, { amp: 0.6, speed: 0.2, spin: 0.03 });
    for (let i = 0; i < 7; i++) {
      const a = -1.2 + i * 0.4, d = 520 + (i % 3) * 120;
      const tw = new THREE.Mesh(new THREE.BoxGeometry(8, 90 + (i % 4) * 40, 8), new THREE.MeshBasicMaterial({ color: 0xbfd2e0 }));
      tw.position.set(Math.sin(a) * d, 40, -Math.cos(a) * d); this.group.add(tw); this.disposables.push(tw.geometry, tw.material);
    }
    const doorSea = new THREE.Group(); doorSea.position.set(-120, 0, 60); this.group.add(doorSea);
    const dm = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 0.15), new THREE.MeshStandardMaterial({ color: 0xffffff })); dm.position.y = 1.2; doorSea.add(dm);
    this.disposables.push(dm.geometry, dm.material);

    this.addSpawn('default', [-2, H(-2, 0), 0], yawTo(1, 0.1));
    const ex = 6 + Math.sin(-0.6) * -0.2, ez = 6 + Math.cos(-0.6) * -0.2;
    this.spawns['from-elevator'] = this.spawns['elev-sea'];
    void ex; void ez;
  }
}
