// LEVEL 11 — Frozen Dream: a quiet snowy forest, a frozen lake like a mirror,
// warm windows, a cabin to rest in and a door on a far hill.
import * as THREE from 'three';
import { Level } from './Level.js';
import { terrain, vnoise } from './common/Terrain.js';
import { house, F, curvePoints, ribbon, distToPath, texturedPlane, gableRoofGeo } from './common/Props.js';
import { snowTex, iceTex, woodTex, roofTex, glowTex, rng } from '../utils/Textures.js';
import { trees, halo } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const LX = 40, LZ = -70, LR = 34, LY = -1.2;
const DX = 70, DZ = -250;

const rawH = (x, z) => Math.sin(x * 0.02) * Math.cos(z * 0.017) * 4 + Math.sin(x * 0.05 + 0.7) * 1.2 + vnoise(x * 0.04, z * 0.04, 9) * 1.5;
const CAB = [-30, -22];
const CABH = rawH(CAB[0], CAB[1]);

export function snowH(x, z) {
  let h = rawH(x, z);
  const dc = Math.hypot(x - CAB[0], z - CAB[1]);
  if (dc < 10) { const k = Math.max(0, (dc - 5) / 5); h = CABH + (h - CABH) * (k * k * (3 - 2 * k)); }
  h += 14 * Math.exp(-((x - DX) ** 2 + (z - DZ) ** 2) / (2 * 35 * 35));
  const d = Math.hypot(x - LX, z - LZ);
  if (d < LR + 10) { const k = Math.min(1, Math.max(0, (d - LR) / 10)); h = LY + (h - LY) * (k * k * (3 - 2 * k)); }
  return h;
}

export default class FrozenDream extends Level {
  build() {
    const b = this.b, g = this.game, H = snowH;
    this.heightAt = H;
    this.terrainSurface = 'snow';
    this.neighbors = ['anemoia'];

    const sm = makeMaterial({ map: snowTex(), vertexColors: true, roughness: 0.9 });
    this.disposables.push(sm);
    terrain(this, { size: 900, heightAt: H, mat: sm, uvScale: 6, colorAt: (x, z) => { const n = vnoise(x * 0.03, z * 0.03, 2); return [0.92 + n * 0.08, 0.95 + n * 0.05, 1]; } });
    // frozen lake
    const ice = makeMaterial({ map: iceTex(), vertexColors: false, roughness: 0.06, metalness: 0.1, envMapIntensity: 1.6, forceStandard: true });
    ice.map.repeat.set(10, 10);
    const lake = new THREE.Mesh(new THREE.CircleGeometry(LR + 1, 64), ice);
    lake.rotation.x = -Math.PI / 2; lake.position.set(LX, LY + 0.03, LZ); lake.receiveShadow = true;
    this.group.add(lake);
    this.disposables.push(ice, lake.geometry);
    this.addCollider(LX - LR * 0.7, LY - 1, LZ - LR * 0.7, LX + LR * 0.7, LY + 0.03, LZ + LR * 0.7, 'ice');
    const boat = [[0, 0, 0, 1.2, 0.4, 3, 0x7a5a3a], [0, 0.4, 1.3, 1.1, 0.1, 0.3, 0x6a4a2a], [0, 0.4, 0, 1.1, 0.06, 0.2, 0x6a4a2a]];
    b.prop(boat, LX + 8, LY - 0.15, LZ - 5, 0.7, { collide: true });
    addExamine(this, hitbox(this, LX + 8, LY, LZ - 5, 1.6, 0.8, 3), { name: 'Boat frozen in the lake', text: 'Frozen mid-turn, as if someone stopped rowing to listen to something.', notes: 'Frozen Dream · the lake' });

    // paths of trodden snow
    const path = curvePoints([[0, 24], [2, 0], [-10, -20], [-24, -30], [-10, -48], [6, -110], [30, -160], [55, -210], [DX, DZ + 10]], 2);
    const pm = makeMaterial({ map: snowTex(), color: 0xc8d2e0, vertexColors: false, roughness: 1 });
    this.disposables.push(pm);
    ribbon(this, path, 2.4, H, pm, { lift: 0.04, uvScale: 4 });
    // footprints already walking ahead of you
    const fp = [];
    for (let i = 4; i < path.length - 2; i += 1) {
      const [x, z] = path[i], [nx, nz] = path[i + 1];
      const dx = nx - x, dz = nz - z, l = Math.hypot(dx, dz);
      const side = i % 2 ? 0.18 : -0.18;
      fp.push([x - dz / l * side, H(x, z) + 0.07, z + dx / l * side, Math.atan2(dx, dz), 1]);
    }
    const fpg = new THREE.PlaneGeometry(0.14, 0.3); fpg.rotateX(-Math.PI / 2);
    const fpm = makeMaterial({ color: 0x9aa8c0, vertexColors: false, roughness: 1, transparent: true, opacity: 0.55, depthWrite: false });
    this.disposables.push(fpm);
    b.instanced(fpg, fpm, fp);

    // forest
    const R = rng(5);
    const pines = [];
    for (let i = 0; i < 700 && pines.length < 340; i++) {
      const x = (R() - 0.5) * 520, z = 60 - R() * 400;
      if (Math.hypot(x - LX, z - LZ) < LR + 6) continue;
      if (distToPath(x, z, path) < 5) continue;
      if (Math.hypot(x + 30, z + 22) < 12 || Math.hypot(x - DX, z - DZ) < 18) continue;
      pines.push([x, H(x, z) - 0.2, z, R() * 6, 0.8 + R() * 0.9]);
    }
    trees(this, pines, { kind: 'pine', leaf: 0x2f4a3a, snow: true });
    // distant silhouettes
    for (let i = 0; i < 9; i++) { const x = -300 + i * 75, z = -480 - (i % 3) * 30; b.box(x, H(x, z) - 2, z, 18 + (i % 3) * 6, 28 + (i % 4) * 14, 12, b.mat('fsil', { color: 0x8894a8, roughness: 1 }), { collide: false, ao: false }); }

    // isolated houses with warm windows
    for (const [x, z, r] of [[-60, -90, 0.6], [90, -20, -0.9], [-20, -150, 0.2]]) {
      house(this, { x, z, y: H(x, z), rotY: r, w: 6, d: 5, h: 3.2, floors: 1, wall: 0x8a5a4a, roof: 0xeef2f8, sky: 0xffcf80, chimney: true });
      halo(this, x + Math.sin(r) * 2.6, H(x, z) + 1.5, z + Math.cos(r) * 2.6, 3, '#ffcf80', 0.35);
    }

    // the cabin (enterable)
    const CX = -30, CZ = -22, CY = H(CX, CZ);
    const logs = b.mat('logs', { map: woodTex(0x7a5236, 8, 'logs'), texScale: [2, 2] });
    b.box(CX, CY - 1.4, CZ, 6.6, 1.4, 5.6, logs, { ao: false, surface: 'wood' });
    b.room(CX - 3, CZ - 2.5, CX + 3, CZ + 2.5, CY, 2.7, { wall: logs, thick: 0.25, floor: b.mat('cabinfloor', { map: woodTex(0xa07a50, 5), texScale: [2, 2] }), surface: 'wood', ceil: logs, openings: { n: [{ at: 3, w: 1.0, h: 2.1 }], e: [{ at: 2.5, w: 1.0, h: 0.9, y0: 1.1 }], w: [{ at: 2.5, w: 1.0, h: 0.9, y0: 1.1 }] } });
    b.add(gableRoofGeo(6.6, 5.6, 2.2, 0.5), b.mat('snowroof', { map: roofTex(0xeef2f8), texScale: [1, 1] }), { x: CX, y: CY + 2.7, z: CZ, rotY: Math.PI / 2, cast: true });
    createDoor(this, { x: CX, y: CY, z: CZ + 2.5 + 0.125, rotY: 0, color: 0x6a4a30, kind: 'panel' });
    b.prop([[0, 0, 0, 1.6, 1.4, 0.6, 0x8a8a8a], [0, 0.2, 0.05, 0.9, 0.7, 0.55, 0x1a1210], [0, 1.4, 0, 0.6, 1.3, 0.5, 0x8a8a8a]], CX, CY, CZ - 2.2, 0, { collide: true });
    const fire = new THREE.PointLight(0xff9a40, 6, 9, 1.5); fire.position.set(CX, CY + 0.6, CZ - 1.6); this.group.add(fire);
    const fireGlow = halo(this, CX, CY + 0.55, CZ - 1.85, 1.2, '#ff9a40', 0.9);
    this.onUpdate((dt, t) => { const f = 0.85 + Math.sin(t * 11) * 0.06 + Math.sin(t * 23.7) * 0.05; fire.intensity = 6 * f; fireGlow.material.opacity = 0.8 * f; });
    b.prop(F.armchair(0x9a3a3a), CX + 1, CY, CZ - 0.3, -2.6, { collide: true });
    b.prop(F.rug(0x8a5a3a, 2, 1.4), CX, CY, CZ - 0.6, 0, { blob: false });
    b.prop(F.table(0x8a6a4a, 0.9, 0.6), CX - 1.8, CY, CZ + 1.2, 0, { collide: true });
    addNote(this, hitbox(this, CX - 1.8, CY + 0.72, CZ + 1.2, 0.9, 0.1, 0.6), { title: 'Written in the frost on the table', text: 'Rest here as long as you need.\nThe door on the hill will wait.\nIt always waits.' });
    const fireSnd = new THREE.Object3D(); fireSnd.position.set(CX, CY + 0.5, CZ - 2); this.group.add(fireSnd);
    g.audio.positional(fireSnd, { kind: 'noise', volume: 0.25, ref: 1.5, filter: ['bandpass', 1200] });

    // the distant door on the hill, glowing warm
    const dy = H(DX, DZ);
    createDoor(this, { x: DX, y: dy - 0.02, z: DZ, rotY: Math.PI * 0.12, freeStanding: true, color: 0xffd8a8, kind: 'panel', target: { level: 'anemoia', spawn: 'default' }, glimpse: 0xffb080, label: 'Go towards the warm light' });
    const lamp = halo(this, DX, dy + 1.2, DZ - 0.4, 10, '#ffb070', 0.45);
    this.onUpdate((dt, t) => { lamp.material.opacity = 0.38 + Math.sin(t * 0.8) * 0.07; });
    const beacon = new THREE.PointLight(0xffa060, 18, 30, 1.5); beacon.position.set(DX, dy + 2, DZ + 1); this.group.add(beacon);
    addExamine(this, hitbox(this, 6, H(6, -110), -110, 3, 2, 3), { name: 'Footprints', text: 'Fresh footprints in your size, walking ahead of you towards the hill. They never come back.', notes: 'Frozen Dream', prompt: 'Look at the snow' });

    particles(this, { count: 1800, size: 0.09, color: 0xffffff, box: 46, height: 22, fall: 1.1, drift: 0.6, opacity: 0.9 });

    this.addSpawn('default', [0, H(0, 20), 20], yawTo(0, -1));
    this.addSpawn('from-maze', [0, H(0, 20), 20], yawTo(0, -1));
  }
}
