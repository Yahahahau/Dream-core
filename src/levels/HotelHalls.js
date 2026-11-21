// LEVEL 04 — Hotel Halls: the Hotel Lullaby on a rainy city street at dusk.
//
// The whole building comes from one Blueprint: the facade you see from the
// street, the lobby, four floors of corridors and guest rooms, the stairwell,
// the elevators and the service core are all generated from the same rooms,
// doors and windows. Window glass is real: from a guest room you look down on
// the street you arrived on, and from the street you see into the lit rooms.
//
// Deliberate dream logic (not construction errors): the 4th floor was closed
// and left in the dark; room 407 opens into a ballroom far larger than the
// building; one elevator button has no floor number; room 206 opens onto the
// apartments.
import * as THREE from 'three';
import { Level } from './Level.js';
import { Blueprint } from '../core/Blueprint.js';
import { windowUnit } from '../core/Architecture.js';
import { F, texturedPlane, streetLamp } from './common/Props.js';
import { carpetTex, marbleTex, wainscotTex, woodTex, textTex, plasterTex, wallpaperTex, tileTex, concreteTex, brickTex, asphaltTex, windowTex, paintingTex } from '../utils/Textures.js';
import { halo, fluorescent } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { zone } from '../interaction/TriggerZone.js';

const FOOT = [-16, 0, 16, 22];
const FLOORS = [['G', 0, 4.45], ['F2', 4.8, 3.15], ['F3', 8.3, 3.15], ['F4', 11.8, 3.0]];
const ROOMX = [[-16, -10.5], [-10.5, -5], [-5, 0.5], [0.5, 6]];
const UNLOCKED = ['201', '203', '301', '202', '302', '304'];

export default class HotelHalls extends Level {
  build() {
    const b = this.b;
    this.neighbors = ['apartments', 'edge', 'pool', 'hallways'];
    this.surface = 'carpet';
    // dusk + rain: little sky light comes in, the building is lit by its own lamps
    this.bakeConfig = {
      ambient: { color: 0x9aa8d0, intensity: 0.07 },
      bounce: { color: 0xffd8b0, intensity: 0.2 },
      sky: { color: 0x4a5a86, intensity: 1.2 },
      sun: null,
    };
    const M = {
      ext: b.mat('h-brick', { map: brickTex(0x8a4636, 0xc8b8a4), texScale: [2.2, 2.2] }),
      trim: b.mat('h-trim', { color: 0xefe6d2, roughness: 0.6 }),
      glass: b.mat('h-glass', { color: 0xbcd0e6, transparent: true, opacity: 0.2, roughness: 0.05, depthWrite: false }),
      lobbyW: b.mat('h-lobbyw', { map: wainscotTex(0x5a2e20, 0xd9c49a, 0xc9a35a, 0.2, 'wallpaper'), texScale: [1.6, 4.45] }),
      corrW: b.mat('h-corrw', { map: wainscotTex(0x6b3a2a, 0xd9c49a, 0xc9a35a, 0.33, 'wallpaper'), texScale: [1.6, 3.15] }),
      roomW: b.mat('h-roomw', { map: wallpaperTex(0xe9dcc4, 0xb48c7a), texScale: [1, 1] }),
      roomW2: b.mat('h-roomw2', { map: wallpaperTex(0xd8e2d0, 0x7a9a7a, 'stripe'), texScale: [1.2, 1.2] }),
      bathW: b.mat('h-bathw', { map: tileTex({ tile: 0xe8f0ee, grout: 0xb4c4c0, n: 8, key: 'hbath' }), texScale: [1.2, 1.2] }),
      bareW: b.mat('h-barew', { map: plasterTex(0xb8b0a2, 'hbare'), texScale: [2, 2] }),
      service: b.mat('h-service', { map: concreteTex(0xa8a49c), texScale: [2, 2] }),
      marble: b.mat('h-marble', { map: marbleTex(0xece4d6), texScale: [2, 2] }),
      carpet: b.mat('h-carpet', { map: carpetTex('hotel'), texScale: [2, 2] }),
      roomFloor: b.mat('h-roomfloor', { map: carpetTex('mall'), color: 0xd8c8b8, texScale: [2, 2] }),
      wood: b.mat('h-wood', { map: woodTex(0x8a5a36, 6, 'hparq'), texScale: [1.5, 1.5] }),
      conc: b.mat('h-conc', { map: concreteTex(0x8a8780), texScale: [2, 2] }),
      ceil: b.mat('h-ceil', { map: plasterTex(0xf2e6cf, 'hceil') }),
      ceilDark: b.mat('h-ceild', { map: plasterTex(0x9a9488, 'hceild') }),
      roof: b.mat('h-roof', { map: concreteTex(0x6a6862), texScale: [3, 3] }),
    };
    this.M = M;

    // ================== BLUEPRINT ==================
    const bp = new Blueprint(this, { name: 'Hotel Lullaby', footprint: FOOT, extMat: M.ext, extT: 0.26, intT: 0.08, trimMat: M.trim, glassMat: M.glass, slab: 0.3 });
    bp.roofMat = M.roof;
    this.bp = bp;
    for (const [id, y, h] of FLOORS) bp.addFloor(id, y, h);
    const R = (fid, id, x0, z0, x1, z1, o) => bp.room(fid, id, x0, z0, x1, z1, o);
    const svc = { wall: M.service, floor: M.conc, ceil: M.ceilDark, surface: 'concrete', base: 0x8a8780 };
    const elevDest = [
      { label: 'Lobby', spawn: 'elev-L1' }, { label: 'Floor 2', spawn: 'elev-E2a' }, { label: 'Floor 3', spawn: 'elev-E3a' },
      { label: 'Floor 4 — closed', spawn: 'elev-E4a' }, { label: 'Floor ?', level: 'edge', spawn: 'from-elevator' },
    ];

    // ---- core: identical on every floor (elevator shafts, staff room, service corridor, stairwell)
    for (const [fid] of FLOORS) {
      R(fid, 'shaft1', 11, 0, 13.8, 4.5, { kind: 'shaft-elev' });
      R(fid, 'shaft2', 11, 4.5, 13.8, 9, { kind: 'shaft-elev' });
      R(fid, 'staff', 11, 9, 13.8, 14, { ...svc });
      R(fid, 'svc', 13.8, 0, 16, 14, { ...svc });
      R(fid, 'stair', 11, 14, 16, 22, { ...svc, kind: 'stair', noBaseboard: true });
      bp.door(fid, { x: 13.8, z: 11.5, from: 'svc', door: { kind: 'flat', color: 0x7a7a74, locked: fid === 'G' ? null : 'Linen room. Locked from the inside.' } });
      bp.door(fid, { x: 14.9, z: 14, from: 'svc', door: { kind: 'flat', color: 0x5a6a5a } });
      bp.window(fid, { x: 16, z: 18, w: 1.0, h: 1.3, sill: fid === 'G' ? 1.6 : 1.2 });
      bp.window(fid, { x: 16, z: 8, w: 0.9, h: 1.1, sill: fid === 'G' ? 1.6 : 1.1 });
    }
    // ---- ground floor
    R('G', 'lobby', -16, 0, 6, 14, { wall: M.lobbyW, floor: M.marble, ceil: M.ceil, surface: 'marble' });
    R('G', 'dining', -16, 14, -2, 22, { wall: M.corrW, floor: M.wood, ceil: M.ceil, surface: 'wood' });
    R('G', 'kitchen', -2, 14, 6, 22, { wall: M.bathW, floor: M.conc, ceil: M.ceilDark, surface: 'tile' });
    R('G', 'elevhall', 6, 0, 11, 14, { wall: M.lobbyW, floor: M.marble, ceil: M.ceil, surface: 'marble' });
    R('G', 'utility', 6, 14, 11, 22, { ...svc });
    bp.door('G', { x: -5, z: 0, w: 2.0, h: 2.6, from: 'lobby', door: { kind: 'flat', color: 0x3a2a22, label: 'Hotel entrance' } });
    bp.door('G', { x: 16, z: 4, w: 1.0, from: 'svc', door: { kind: 'flat', color: 0x6a6a60 } });
    bp.passage('G', { x: 6, z: 7, w: 6, h: 3.2 });
    bp.passage('G', { x: -9, z: 14, w: 6, h: 3.0 });
    bp.door('G', { x: 2, z: 14, from: 'lobby', door: { kind: 'flat', color: 0x8a8a84 } });
    bp.door('G', { x: 6, z: 18, from: 'kitchen', door: { kind: 'flat', color: 0x8a8a84 } });
    bp.door('G', { x: 8.5, z: 14, from: 'elevhall', door: { kind: 'flat', color: 0x8a8a84 } });
    bp.door('G', { x: 11, z: 14.75, from: 'utility', door: { kind: 'flat', color: 0x5a6a5a } });
    for (const x of [-13.5, -9.5, -0.5, 3]) bp.window('G', { x, z: 0, w: 2.2, h: 2.7, sill: 0.55 });
    bp.window('G', { x: 8.5, z: 0, w: 1.6, h: 2.3, sill: 0.9 });
    for (const z of [4, 10]) bp.window('G', { x: -16, z, w: 1.8, h: 2.4, sill: 0.7 });
    bp.window('G', { x: -16, z: 18, w: 1.6, h: 2.2, sill: 0.9 });
    for (const x of [-13, -9, -5]) bp.window('G', { x, z: 22, w: 1.6, h: 2.2, sill: 0.9 });
    bp.window('G', { x: 2, z: 22, w: 1.4, h: 1.2, sill: 1.4 });
    bp.window('G', { x: 8.5, z: 22, w: 1.0, h: 1.0, sill: 1.6 });
    bp.elevator('G', { id: 'L1', x: 11, z: 2.25, destinations: elevDest, label: 'L' });
    bp.elevator('G', { id: 'L2', x: 11, z: 6.75, destinations: elevDest, label: 'L' });

    // ---- guest floors: 8 rooms each (bath + entry + bedroom), corridor, lift lobby, housekeeping
    this.rooms = [];
    for (const [fid] of FLOORS.slice(1)) {
      const fn = fid[1];
      const dark = fid === 'F4';
      const hall = { wall: dark ? M.bareW : M.corrW, floor: dark ? M.conc : M.carpet, ceil: dark ? M.ceilDark : M.ceil, surface: dark ? 'concrete' : 'carpet' };
      R(fid, 'corr', -16, 9, 6, 12, hall);
      R(fid, 'elevhall', 6, 0, 11, 14, hall);
      R(fid, 'house', 6, 14, 11, 22, { ...svc });
      bp.passage(fid, { x: 6, z: 10.5, w: 2.6, h: 2.5 });
      bp.door(fid, { x: 8.5, z: 14, from: 'elevhall', door: { kind: 'flat', color: 0x8a8a84 } });
      bp.door(fid, { x: 11, z: 14.75, from: 'house', door: { kind: 'flat', color: 0x5a6a5a } });
      bp.window(fid, { x: 8.5, z: 0, w: 1.6, h: 1.6, sill: 0.85 });
      bp.window(fid, { x: -16, z: 10.5, w: 1.0, h: 1.5, sill: 0.9 });
      ROOMX.forEach(([x0, x1], i) => {
        const sNum = `${fn}0${i * 2 + 1}`, nNum = `${fn}0${i * 2 + 2}`;
        const wp = dark ? M.bareW : (i % 2 ? M.roomW2 : M.roomW);
        const rf = dark ? M.conc : M.roomFloor, rs = dark ? 'concrete' : 'carpet', rc = dark ? M.ceilDark : M.ceil;
        const bath = { wall: dark ? M.bareW : M.bathW, floor: M.conc, ceil: rc, surface: 'tile' };
        const room = { wall: wp, floor: rf, ceil: rc, surface: rs };
        // south room — bedroom window looks onto the main street
        R(fid, 'bath' + sNum, x0, 6.4, x0 + 2.2, 9, bath);
        R(fid, 'entry' + sNum, x0 + 2.2, 6.4, x1, 9, room);
        R(fid, 'bed' + sNum, x0, 0, x1, 6.4, room);
        bp.passage(fid, { x: (x0 + 2.2 + x1) / 2, z: 6.4, w: x1 - x0 - 2.7, h: 2.5 });
        bp.door(fid, { x: x0 + 2.2, z: 7.7, w: 0.85, from: 'entry' + sNum, door: { kind: 'flat', color: 0xf2eee6 } });
        bp.window(fid, { x: (x0 + x1) / 2, z: 0, w: 1.4, h: 1.6, sill: 0.85 });
        if (i === 0) bp.window(fid, { x: -16, z: 1.3, w: 1.1, h: 1.5, sill: 0.9 });
        // north room (mirrored) — window onto the back alley
        R(fid, 'bath' + nNum, x0, 12, x0 + 2.2, 14.6, bath);
        R(fid, 'entry' + nNum, x0 + 2.2, 12, x1, 14.6, room);
        R(fid, 'bed' + nNum, x0, 14.6, x1, 22, room);
        bp.passage(fid, { x: (x0 + 2.2 + x1) / 2, z: 14.6, w: x1 - x0 - 2.7, h: 2.5 });
        bp.door(fid, { x: x0 + 2.2, z: 13.3, w: 0.85, from: 'entry' + nNum, door: { kind: 'flat', color: 0xf2eee6 } });
        bp.window(fid, { x: (x0 + x1) / 2, z: 22, w: 1.4, h: 1.6, sill: 0.85 });
        if (i === 0) bp.window(fid, { x: -16, z: 20.7, w: 1.1, h: 1.5, sill: 0.9 });
        // corridor doors
        const sTarget = sNum === '407' ? { level: 'hotel', spawn: 'ballroom' } : null;
        const nTarget = nNum === '206' ? { level: 'apartments', spawn: 'from-hotel' } : null;
        const sLocked = dark || sTarget || UNLOCKED.includes(sNum) ? null : ['A television is playing a cartoon you loved. You can see its light under the door.', 'Someone is humming on the other side.', 'DO NOT DISTURB.', 'The handle is warm.'][i];
        const nLocked = dark || nTarget || UNLOCKED.includes(nNum) ? null : 'Locked. A room-service tray outside holds one untouched glass of milk.';
        const dc = dark ? 0x6a5a4a : 0x7a3a2a;
        bp.door(fid, { x: x1 - 1.0, z: 9, from: 'corr', door: { kind: 'hotel', color: dc, locked: sLocked, target: sTarget, glimpse: 0xffe2b8, label: sTarget ? `Room ${sNum}` : null } });
        bp.door(fid, { x: x0 + 3.2, z: 12, from: 'corr', door: { kind: 'hotel', color: dc, locked: nLocked, target: nTarget, glimpse: 0xffd2a8, label: nTarget ? `Room ${nNum}` : null } });
        this.rooms.push(
          { fid, num: sNum, x0, x1, z0: 0, z1: 6.4, bz0: 6.4, bz1: 9, south: true, dark, closed: !!sLocked, plate: [x1 - 1.75, 9.095, 0] },
          { fid, num: nNum, x0, x1, z0: 14.6, z1: 22, bz0: 12, bz1: 14.6, south: false, dark, closed: !!nLocked, plate: [x0 + 3.95, 11.905, Math.PI] },
        );
      });
      bp.elevator(fid, { id: `E${fn}a`, x: 11, z: 2.25, destinations: elevDest, label: fn });
      bp.elevator(fid, { id: `E${fn}b`, x: 11, z: 6.75, destinations: elevDest, label: fn });
    }
    for (let i = 0; i < FLOORS.length - 1; i++) bp.stairs({ from: FLOORS[i][0], to: FLOORS[i + 1][0], room: 'stair', mat: M.conc, stringer: M.service, surface: 'concrete', skipBottomLanding: true });
    // the ground floor of the stairwell is a full slab (upper floors only have landings)
    b.box(13.5, -0.3, 18, 5, 0.3, 8, M.conc, { surface: 'concrete', ao: false });
    bp.build();
    bp.validate();

    this.facade(M);
    this.street(M);
    this.interiors(M);
    this.ballroom(M);
    this.spawnsAndZones();
  }

  // ---------------------------------------------------------------- exterior
  facade(M) {
    const b = this.b;
    const [x0, z0, x1, z1] = FOOT;
    const o = 0.3; // string course stands 4 cm proud of the 26 cm facade layer
    for (const [, y] of FLOORS.slice(1)) {
      b.box((x0 + x1) / 2, y - 0.22, z0 - o, x1 - x0 + 2 * o + 0.12, 0.18, 0.12, M.trim, { collide: false, ao: false });
      b.box((x0 + x1) / 2, y - 0.22, z1 + o, x1 - x0 + 2 * o + 0.12, 0.18, 0.12, M.trim, { collide: false, ao: false });
      b.box(x0 - o, y - 0.22, (z0 + z1) / 2, 0.12, 0.18, z1 - z0 + 2 * o, M.trim, { collide: false, ao: false });
      b.box(x1 + o, y - 0.22, (z0 + z1) / 2, 0.12, 0.18, z1 - z0 + 2 * o, M.trim, { collide: false, ao: false });
    }
    // roof: cornice, parapet, water tank
    const top = FLOORS[3][1] + FLOORS[3][2] + 0.05 + 0.3;
    b.box((x0 + x1) / 2, top - 0.3, z0 - 0.34, x1 - x0 + 0.84, 0.32, 0.16, M.trim, { collide: false, ao: false });
    b.box((x0 + x1) / 2, top - 0.3, z1 + 0.34, x1 - x0 + 0.84, 0.32, 0.16, M.trim, { collide: false, ao: false });
    b.box(x0 - 0.34, top - 0.3, (z0 + z1) / 2, 0.16, 0.32, z1 - z0 + 0.52, M.trim, { collide: false, ao: false });
    b.box(x1 + 0.34, top - 0.3, (z0 + z1) / 2, 0.16, 0.32, z1 - z0 + 0.52, M.trim, { collide: false, ao: false });
    b.box((x0 + x1) / 2, top - 0.3, z0 - 0.08, x1 - x0 + 0.52, 1.2, 0.36, M.ext, { collide: true });
    b.box((x0 + x1) / 2, top - 0.3, z1 + 0.08, x1 - x0 + 0.52, 1.2, 0.36, M.ext, { collide: true });
    b.box(x0 - 0.08, top - 0.3, (z0 + z1) / 2, 0.36, 1.2, z1 - z0 - 0.2, M.ext, { collide: true });
    b.box(x1 + 0.08, top - 0.3, (z0 + z1) / 2, 0.36, 1.2, z1 - z0 - 0.2, M.ext, { collide: true });
    b.prop([[-1, 0, -1, 0.15, 1.6, 0.15, 0x4a4a4a], [1, 0, 1, 0.15, 1.6, 0.15, 0x4a4a4a], [1, 0, -1, 0.15, 1.6, 0.15, 0x4a4a4a], [-1, 0, 1, 0.15, 1.6, 0.15, 0x4a4a4a], [0, 1.6, 0, 2.6, 2.4, 2.6, 0x7a6a5a, 'cyl'], [0, 4.0, 0, 2.8, 0.6, 2.8, 0x5a4a3a, 'cone']], 9, top, 17, 0, { collide: true, name: 'water tank' });
    // entrance canopy and the hotel name
    b.box(-5, 3.1, -1.4, 4.6, 0.25, 2.6, M.trim, { collide: false });
    for (const sx of [-2.1, 2.1]) b.prop([[0, 0, 0, 0.1, 3.1, 0.1, 0x2a2a2a, 'cyl']], -5 + sx, 0, -2.55, 0, { collide: true, name: 'canopy post', blob: false });
    texturedPlane(this, textTex('HOTEL LULLABY', { w: 1024, h: 128, bg: '#2a1a14', fg: '#f6d48a', font: '600 78px Georgia, serif' }), -5, 3.225, -2.715, 4.4, 0.24, Math.PI, { unlit: true, emissive: true });
    halo(this, -5, 2.85, -1.4, 3.2, '#ffd8a0', 0.55);
    for (const sx of [-1.6, 1.6]) halo(this, -5 + sx, 2.4, -0.4, 1.0, '#ffe0b0', 0.8);
    // vertical neon blade sign on the street corner
    b.box(-15.45, 4.0, -0.7, 0.14, 7.0, 0.1, M.trim, { collide: false, ao: false });
    texturedPlane(this, textTex(['L', 'U', 'L', 'L', 'A', 'B', 'Y'], { w: 128, h: 896, bg: '#1a0e1e', fg: '#ff8ac8', font: 'bold 104px "Trebuchet MS", sans-serif', shadow: '#ff4aa8', key: 'h-blade' }), -15.45, 7.5, -1.2, 0.9, 6.3, Math.PI / 2, { unlit: true, emissive: true, double: true });
    halo(this, -15.45, 7.5, -1.4, 7, '#ff6ab8', 0.25);
    halo(this, 16.4, 2.5, 4, 0.9, '#ffe8c0', 0.75); // side door lamp
  }

  street() {
    const b = this.b, g = this.game, M = this.M;
    const walk = b.mat('h-walk', { map: tileTex({ tile: 0x8a8680, grout: 0x5a5852, n: 4, key: 'hwalk' }), texScale: [2.4, 2.4] });
    const road = b.mat('h-road', { map: asphaltTex(0x34363c), texScale: [6, 6] });
    const alley = b.mat('h-alley', { map: concreteTex(0x6a6862), texScale: [3, 3] });
    const lineM = b.mat('h-line', { color: 0xd8cfa0 });
    // sidewalks top at 0, roads top at -0.15 (a real kerb)
    const slab = (x0, z0, x1, z1, top, m, surface) => b.box((x0 + x1) / 2, top - 0.3, (z0 + z1) / 2, x1 - x0, 0.3, z1 - z0, m, { surface, ao: false, cell: 2.5 });
    slab(-60, -4, 60, 0, 0, walk, 'concrete');
    slab(-60, -18, 60, -14, 0, walk, 'concrete');
    slab(-60, -14, 60, -4, -0.15, road, 'asphalt');
    slab(16, 0, 19, 28, 0, walk, 'concrete');
    slab(19, 0, 27, 40, -0.15, road, 'asphalt');
    slab(27, 0, 30, 40, 0, walk, 'concrete');
    slab(-20, 0, -16, 28, 0, alley, 'concrete');
    slab(-16, 22, 16, 28, 0, alley, 'concrete');
    for (let x = -58; x < 58; x += 6) b.box(x, -0.15, -9, 2.6, 0.022, 0.14, lineM, { collide: false, ao: false });
    for (let k = 0; k < 6; k++) b.box(-5, -0.15, -5.0 - k * 1.6, 3, 0.022, 0.6, lineM, { collide: false, ao: false });
    // the street opposite: shops closed for the night, a few lit windows upstairs
    const fac = [[0xa8836a, 'BAKERY', '#7a5a2a'], [0x8f9aa8, 'VIDEO RENTAL', '#2a3a7a'], [0xb89a9a, 'LAUNDROMAT', '#2a6a6a'], [0x9a8a6a, 'FLOWERS', '#7a3a5a'], [0x8a9a86, 'PHARMACY', '#2a7a4a']];
    const blindsLit = b.mat('h-blinds-lit', { map: windowTex(0x3a3a3a, 0xffc878, 2) });
    const blindsDark = b.mat('h-blinds-dark', { map: windowTex(0x3a3a3a, 0x2a3040, 2) });
    fac.forEach(([col, name, sc], i) => {
      const x = -40 + i * 20, w = 18, h = 11 + (i % 3) * 3.4;
      b.box(x, 0, -24, w, h, 12, b.mat('h-opp' + i, { map: brickTex(col, 0xc8bca8), texScale: [2, 2] }), { collide: true, cell: 2 });
      b.box(x, 0, -17.97, w - 2, 3.0, 0.06, b.mat('h-shop' + i, { map: windowTex(0x2a2a2a, i % 2 ? 0xd8b080 : 0x4a5a6a, 4) }), { collide: false, ao: false, stretch: true });
      texturedPlane(this, textTex(name, { w: 512, h: 96, bg: sc, fg: '#ffeac0', font: 'bold 52px sans-serif' }), x, 3.65, -17.92, 6, 1.1, 0, { unlit: true, emissive: true });
      for (let fl = 1; fl * 3.4 + 2.4 < h; fl++) for (let c = 0; c < 4; c++) {
        const wx = x - w / 2 + 2.25 + c * 4.5, lit = ((i * 7 + fl * 3 + c) % 5) === 0;
        windowUnit(b, wx, fl * 3.4 + 0.6, -18, 1.3, 1.6, 0, { frameMat: M.trim, glassMat: lit ? blindsLit : blindsDark, recess: 0.008, cross: false });
        if (lit) halo(this, wx, fl * 3.4 + 1.4, -17.6, 2.4, '#ffc878', 0.3);
      }
    });
    // neighbouring buildings close the block
    const nb = b.mat('h-neigh', { map: brickTex(0x6a4a3e, 0xb8ac98), texScale: [2.2, 2.2] });
    b.box(-40, 0, 14, 40, 18, 28, nb, { collide: true, cell: 4 });
    b.box(-2, 0, 34, 44, 16, 12, nb, { collide: true, cell: 4 });
    b.box(45, 0, 20, 30, 14, 40, nb, { collide: true, cell: 4 });
    b.box(-63, 0, -9, 6, 20, 30, nb, { collide: true, cell: 4 });
    b.box(63, 0, -9, 6, 20, 30, nb, { collide: true, cell: 4 });
    b.box(23, 0, 42, 14, 14, 4, nb, { collide: true, cell: 4 });
    this.addCollider(-60, -1, -18.4, 60, 6, -18.1);
    // street furniture
    for (const x of [-46, -28, -12, 8, 24, 44]) streetLamp(this, x, 0, -3.5, Math.PI / 2, { on: true });
    for (const x of [-38, -18, 2, 22, 42]) streetLamp(this, x, 0, -14.5, -Math.PI / 2, { on: true });
    streetLamp(this, 18.6, 0, 16, 0, { on: true });
    streetLamp(this, -18.5, 0, 25, Math.PI / 2, { on: true, color: 0xcfe0ff, height: 4 });
    const car = (x, z, r, col) => b.prop([[0, 0.3, 0, 1.8, 0.7, 4.2, col], [0, 1.0, -0.2, 1.6, 0.55, 2.2, col], [0, 1.02, -0.2, 1.64, 0.42, 2.0, 0x1a2230], ...[[-0.82, 1.3], [0.82, 1.3], [-0.82, -1.3], [0.82, -1.3]].map(([wx, wz]) => [wx, 0, wz, 0.24, 0.62, 0.62, 0x111111])], x, -0.15, z, r, { collide: true, name: 'car' });
    car(-26, -5.4, Math.PI / 2, 0x8a2a2a); car(12, -5.4, Math.PI / 2, 0xd8d8d0); car(36, -12.6, -Math.PI / 2, 0x2a4a6a); car(25.4, 24, Math.PI, 0x5a6a5a);
    b.prop([[0, 0, 0, 0.3, 0.6, 0.3, 0xc83a3a, 'cyl'], [0, 0.6, 0, 0.34, 0.22, 0.34, 0xc83a3a, 'sphere']], -9.5, 0, -3.4, 0, { collide: true, name: 'hydrant' });
    b.prop([[0, 0, 0, 0.6, 1.1, 0.45, 0x2a5a9a]], 6.5, 0, -0.9, 0, { collide: true, name: 'newspaper box' });
    addExamine(this, hitbox(this, 6.5, 0, -0.9, 0.7, 1.2, 0.6), { name: 'Newspaper box', text: 'Today\'s paper. The headline is the date you fell asleep.', notes: 'Hotel · street' });
    b.prop([[0, 0, 0, 1.2, 1.3, 0.8, 0x3a5a3a], [0, 1.3, 0, 1.24, 0.08, 0.84, 0x2a4a2a]], -18, 0, 24.2, 0, { collide: true, name: 'dumpster' });
    // rain falls only outside
    const rain = particles(this, { count: 2400, size: 0.05, color: 0xb8c8e0, box: 34, height: 18, fall: 11, drift: 0.12, opacity: 0.5 });
    this.onUpdate(() => {
      const p = g.camera.position;
      const inside = (p.x > -16 && p.x < 16 && p.z > 0 && p.z < 22 && p.y < 15) || p.z > 100;
      rain.visible = !inside;
    });
    for (const [x, z, v] of [[-5, -1.5, 0.35], [-5, -9, 0.45], [-18, 25, 0.3]]) {
      const s = new THREE.Object3D(); s.position.set(x, 2, z); this.group.add(s);
      g.audio.positional(s, { kind: 'water', volume: v, ref: 5, filter: ['highpass', 1600] });
    }
  }

  chandelier(x, y, z, r = 0.7) {
    const grp = new THREE.Group(); grp.position.set(x, y, z);
    const gm = new THREE.MeshBasicMaterial({ color: 0xfff0c8 }), sm = new THREE.MeshStandardMaterial({ color: 0xc9a35a, metalness: 0.8, roughness: 0.3 });
    for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; const s = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), gm); s.position.set(Math.cos(a) * r, -0.1 + (i % 2) * 0.12, Math.sin(a) * r); grp.add(s); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.03, 6, 24), sm); ring.rotation.x = Math.PI / 2; grp.add(ring);
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.8, 6), sm); rod.position.y = 0.4; grp.add(rod);
    this.group.add(grp); this.disposables.push(gm, sm);
    halo(this, x, y - 0.1, z, 3.4, '#ffe2a8', 0.55);
  }

  // ---------------------------------------------------------------- interiors
  interiors(M) {
    const b = this.b, g = this.game;
    // --- lobby
    b.box(-5, 0.004, 7, 5, 0.012, 13, M.carpet, { collide: false, ao: false });
    b.prop([[0, 0, 0, 1.1, 1.1, 6, 0x4a2618], [0.1, 1.1, 0, 1.3, 0.06, 6.2, 0xe8dcc0]], -13.6, 0, 7, 0, { collide: true, name: 'reception desk' });
    b.prop(Array.from({ length: 12 }, (_, i) => [0, 1.2 + (i % 3) * 0.45, -1.6 + (i / 3 | 0) * 0.6, 0.05, 0.14, 0.09, 0xd4a649]), -15.85, 0, 7.5, 0, { name: 'key board', blob: false });
    texturedPlane(this, textTex('RECEPTION', { w: 512, h: 96, bg: null, fg: '#d4a649', font: '600 58px Georgia, serif' }), -15.9, 3.5, 7, 2.6, 0.5, Math.PI / 2, { unlit: true, alpha: true });
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xd4b25a, metalness: 0.9, roughness: 0.25 }));
    bell.position.set(-13.3, 1.16, 8); this.group.add(bell); this.disposables.push(bell.geometry, bell.material);
    let rings = 0;
    const bellDef = { mesh: bell, prompt: 'Ring the bell', use: (gm) => { gm.audio.sfx('bell', bell.position); rings++; gm.ui.caption(rings < 3 ? 'Nobody comes.' : rings < 6 ? 'Somewhere upstairs, a bell rings back.' : 'The fourth floor lights flicker on, just for a moment.'); } };
    bell.userData.interactable = bellDef; this.addInteractable(bellDef);
    addNote(this, hitbox(this, -13.2, 1.12, 5.6, 0.6, 0.1, 0.8), { title: 'Guest book', text: 'Room 201 — checked in\nRoom 203 — checked in\nRoom 302 — checked in\nRoom 407 — ________\n\nThe last line is waiting for your name.' });
    b.prop(F.sofa(0x7a2f3a), -1.5, 0, 3.4, 0, { collide: true, name: 'sofa' });
    b.prop(F.sofa(0x7a2f3a), -1.5, 0, 8.6, Math.PI, { collide: true, name: 'sofa' });
    b.prop(F.armchair(0xb07a3a), 1.9, 0, 6.0, -Math.PI / 2, { collide: true, name: 'armchair' });
    b.prop(F.table(0x3a2014, 1.8, 0.9, 0.42), -1.5, 0, 6.0, 0, { collide: true, name: 'coffee table' });
    for (const [x, z] of [[-15.3, 0.8], [5.3, 0.8], [-15.3, 13.2], [5.3, 13.2]]) b.prop(F.plant(0xd4a649, 0x3f6a3a), x, 0, z, 0, { collide: true, name: 'plant' });
    this.chandelier(-5, 3.6, 4); this.chandelier(-5, 3.6, 10); this.chandelier(-9, 3.55, 18);
    for (const z of [7]) halo(this, -15.75, 2.6, z, 0.9, '#ffd8a0', 0.7);
    texturedPlane(this, paintingTex(1), 5.91, 2.4, 2.2, 1.4, 1.05, -Math.PI / 2);
    // lift lobby
    for (const z of [3, 10]) halo(this, 8.5, 4.2, z, 1.6, '#ffe2b8', 0.6);
    // --- dining room
    for (let i = 0; i < 3; i++) for (let k = 0; k < 2; k++) {
      const x = -13 + i * 4, z = 16.6 + k * 3.0;
      b.prop(F.roundTable(0xf6f2ea, 0.6), x, 0, z, 0, { collide: true, name: 'table' });
      for (let a = 0; a < 4; a++) b.prop(F.chair(0x6b3a22, 0x3a2014), x + Math.cos(a * Math.PI / 2) * 0.95, 0, z + Math.sin(a * Math.PI / 2) * 0.95, -a * Math.PI / 2 - Math.PI / 2, { name: 'chair' });
    }
    for (const x of [-13, -5]) halo(this, x, 3.9, 18, 1.4, '#ffd8a0', 0.45);
    addExamine(this, hitbox(this, -9, 0.7, 18, 9, 0.3, 5), { name: 'Set tables', text: 'Every table is set for one. The napkins are folded into small paper houses.', notes: 'Hotel · dining room' });
    // --- kitchen & utility: service light, dimmer
    b.prop(F.counter(5, 0xd8dcdc, 0x9aa0a4), 2, 0, 21.6, Math.PI, { collide: true, name: 'kitchen counter' });
    b.prop(F.counter(3, 0xd8dcdc, 0x9aa0a4), 0.6, 0, 18.2, Math.PI / 2, { collide: true, name: 'kitchen island' });
    fluorescent(this, 2.5, 4.45, 18, { w: 0.5, d: 1.2, rotY: Math.PI / 2 });
    fluorescent(this, -0.8, 4.45, 20, { w: 0.4, d: 1.0, rotY: Math.PI / 2, flicker: true, light: true });
    for (const z of [17.3, 19.3]) b.prop(F.shelf(0x6a6a64, 1.6, 2.0), 10.6, 0, z, -Math.PI / 2, { collide: true, name: 'utility shelf' });
    b.prop([[0, 0, 0, 1.4, 1.6, 1.0, 0x6a7a7a], [0, 1.6, 0, 0.3, 0.8, 0.3, 0x5a5a5a, 'cyl']], 7.3, 0, 20.9, 0, { collide: true, name: 'boiler' });
    halo(this, 8.5, 4.1, 18, 0.8, '#fff0d0', 0.45);
    const hum = new THREE.Object3D(); hum.position.set(7.3, 1, 20.9); this.group.add(hum);
    g.audio.positional(hum, { kind: 'hum', base: 50, volume: 0.25, ref: 2 });
    // --- service core: one wall light per landing (floor 3's has burnt out), exit signs
    const wallLight = (x, y, z, i) => { halo(this, x, y, z, 0.8, '#f2f4e8', 0.6); this.bakeLights.push({ pos: [x - 0.2, y, z], color: [0.95, 0.96, 0.9], intensity: i, r0: 1.4, range: 9 }); };
    FLOORS.forEach(([fid, y], i) => {
      if (fid !== 'F3') wallLight(15.8, y + 2.3, 14.7, 2.2);          // landing (floor 3's has burnt out)
      const next = FLOORS[i + 1];
      if (next) wallLight(15.8, y + (next[1] - y) / 2 + 2.0, 21.0, 1.2); // half landing
    });
    for (const [fid, y] of FLOORS) {
      if (fid === 'G') { halo(this, 14.9, 4.2, 6, 0.8, '#f2f4e8', 0.5); halo(this, 12.4, 4.2, 11.5, 0.7, '#f2f4e8', 0.45); }
      texturedPlane(this, textTex('EXIT', { w: 192, h: 64, bg: '#0a3a1a', fg: '#7aff9a', font: 'bold 44px sans-serif' }), 10.905, y + 2.42, 14.75, 0.36, 0.12, -Math.PI / 2, { unlit: true, emissive: true });
      halo(this, 10.8, y + 2.42, 14.75, 0.6, '#5aff8a', 0.3);
    }
    // --- guest floors
    for (const [fid, y] of FLOORS.slice(1)) {
      const dark = fid === 'F4';
      if (!dark) {
        for (let x = -14; x <= 4; x += 4.5) halo(this, x, y + 2.9, 10.5, 1.0, '#ffd8a0', 0.7);
        for (const z of [3, 10]) halo(this, 8.5, y + 2.9, z, 1.1, '#ffd8a0', 0.6);
        halo(this, 8.5, y + 2.8, 18, 0.7, '#fff0d0', 0.4);
        b.prop([[0, 0, 0, 0.6, 0.9, 1.0, 0xd8d4cc], [0, 0.9, 0, 0.62, 0.05, 1.02, 0x9a9a94]], 7.0, y, 20.5, 0, { collide: true, name: 'linen cart' });
      } else {
        // closed floor: emergency lights and one failing tube
        for (const x of [-15.6, 5.4]) halo(this, x, y + 2.3, 10.5, 0.7, '#5aff8a', 0.35);
        fluorescent(this, -4, y + 3.0, 10.5, { w: 0.4, d: 1.0, rotY: Math.PI / 2, flicker: true, light: true, color: 0xdfe8ff });
        for (let k = 0; k < 3; k++) b.prop([[0, 0, 0, 0.32, 0.4, 0.32, [0xd8d0c0, 0x7a8aa0, 0xc8a070][k], 'cyl']], -9 + k * 5.5, y, 11.55, 0, { name: 'paint can', blob: false });
        b.prop([[0, 0, -0.3, 0.06, 2.2, 0.06, 0xb8b0a0], [0, 0, 0.3, 0.06, 2.2, 0.06, 0xb8b0a0], ...[0.3, 0.8, 1.3, 1.8].map((h) => [0, h, 0, 0.05, 0.04, 0.6, 0xb8b0a0])], -9, y, 9.45, Math.PI / 2, { name: 'ladder' });
        addNote(this, hitbox(this, 2.5, y + 1.2, 9.15, 0.6, 0.5, 0.1), { title: 'Sign taped to the wall', text: 'FLOOR CLOSED FOR RENOVATION\n\nPlease do not use room 407.\nThere is nothing wrong with room 407.\nPlease do not use it.' });
      }
      for (const r of this.rooms.filter((q) => q.fid === fid)) this.furnishRoom(r, y);
      texturedPlane(this, textTex(`FLOOR ${fid[1]}`, { w: 256, h: 64, bg: '#2a1a14', fg: '#d4a649', font: '600 38px Georgia, serif' }), 6.09, y + 2.0, 12.6, 0.9, 0.22, Math.PI / 2);
    }
  }

  furnishRoom(r, y) {
    const b = this.b;
    const { x0, x1, south, dark } = r;
    const zW = south ? r.z0 : r.z1;   // window wall
    const dir = south ? 1 : -1;       // pointing from the window into the room
    const cz = (r.z0 + r.z1) / 2;
    const n = (k) => `${r.num} ${k}`;
    // number plate beside the corridor door
    texturedPlane(this, textTex(r.num, { w: 128, h: 64, bg: '#c9a35a', fg: '#3a2014', font: 'bold 40px Georgia, serif' }), r.plate[0], y + 1.55, r.plate[1], 0.24, 0.12, r.plate[2]);
    // bathroom: tub along the corridor wall, basin opposite
    const bzC = south ? r.bz1 - 0.45 : r.bz0 + 0.45, bzS = south ? r.bz0 + 0.45 : r.bz1 - 0.45;
    b.prop([[0, 0, 0, 1.4, 0.55, 0.75, 0xf2f2ee]], x0 + 0.85, y, bzC, 0, { collide: true, name: n('tub') });
    b.prop([[0, 0, 0, 0.45, 0.82, 0.5, 0xf2f2ee], [0, 0.82, 0, 0.5, 0.06, 0.55, 0xe8e8e4]], x0 + 0.35, y, bzS, 0, { collide: true, name: n('basin') });
    if (dark) {
      b.prop([[0, 0, 0, 1.6, 0.7, 2.2, 0xe8e4dc]], x0 + 1.2, y, cz, 0, { collide: true, name: n('sheet') });
      b.prop([[0, 0, 0, 0.9, 1.1, 0.9, 0xe8e4dc]], x1 - 0.8, y, zW + dir * 1.3, 0.3, { collide: true, name: n('sheet') });
      return;
    }
    const lit = !r.closed || ['203', '305', '308', '204'].includes(r.num);
    b.prop(F.bed([0xe8e2f0, 0xf2e0c8, 0xd8e8f2][parseInt(r.num, 10) % 3], 0x5a3a24), x0 + 1.2, y, cz, Math.PI / 2, { collide: true, name: n('bed') });
    for (const dz of [-1.35, 1.35]) {
      b.prop([[0, 0, 0, 0.45, 0.55, 0.4, 0x5a3a24]], x0 + 0.32, y, cz + dz, 0, { collide: true, name: n('nightstand') });
      b.prop([[0, 0, 0, 0.14, 0.03, 0.14, 0x3a3a3a, 'cyl'], [0, 0, 0, 0.02, 0.32, 0.02, 0x3a3a3a, 'cyl'], [0, 0.3, 0, 0.24, 0.2, 0.24, 0xf6e2b8, 'cone']], x0 + 0.32, y + 0.55, cz + dz, 0, { name: n('lamp'), blob: false });
      if (lit) halo(this, x0 + 0.32, y + 1.0, cz + dz, 0.7, '#ffd8a0', 0.75);
    }
    b.prop(F.desk(0x6b4a2e, 0x3a2a1e), x1 - 0.45, y, zW + dir * 1.4, -Math.PI / 2, { collide: true, name: n('desk') });
    b.prop(F.chair(0x7a3a2a, 0x3a2a1e), x1 - 1.05, y, zW + dir * 1.4, Math.PI / 2, { name: n('chair') });
    b.prop(F.armchair(0x8a6a5a), x0 + 0.75, y, zW + dir * 0.75, south ? 0.6 : Math.PI - 0.6, { collide: true, name: n('armchair') });
    b.prop([[0, 0, 0, 0.5, 0.75, 1.2, 0x5a3a24], [0, 0.75, 0, 0.12, 0.45, 0.8, 0x1a1a1a]], x1 - 0.35, y, cz + dir * 0.4, 0, { collide: true, name: n('dresser') });
    texturedPlane(this, paintingTex((parseInt(r.num, 10) * 7) % 4), x0 + 0.1, y + 1.75, cz, 0.9, 0.68, Math.PI / 2);
    if (lit) halo(this, (x0 + x1) / 2, y + 2.85, cz, 1.4, '#ffe8c8', 0.45);
    if (r.num === '201') addNote(this, hitbox(this, x1 - 0.45, y + 0.75, zW + dir * 1.4, 0.6, 0.1, 1), { title: 'Hotel stationery', text: 'Dear whoever stays here next,\nlook at the street at night.\nCount the lit windows across the road.\nThere is always one more than yesterday.' });
    if (r.num === '302') addExamine(this, hitbox(this, (x0 + x1) / 2, y + 0.9, zW + dir * 0.25, 1.4, 1.6, 0.3), { name: 'Window of room 302', text: 'The back alley, the rain, one light in the building behind. Someone there is looking out of their window too.', notes: 'Hotel · floor 3', prompt: 'Look outside' });
  }

  // ---------------------------------------------------------------- the ballroom behind room 407
  ballroom(M) {
    const b = this.b;
    const Y = 0, X0 = -24, X1 = 24, Z0 = 160, Z1 = 200, H = 12;
    b.floor(X0, Z0, X1, Z1, Y, M.wood, { surface: 'wood' });
    b.ceiling(X0, Z0, X1, Z1, Y + H, M.ceil);
    const wallT = b.mat('h-ballw', { map: wainscotTex(0x5a2e20, 0xd9c49a, 0xc9a35a, 0.12, 'wallpaper'), texScale: [1.6, H] });
    b.wall(X0 - 0.1, Z0 - 0.2, X0 - 0.1, Z1 + 0.2, Y, H, wallT, { thick: 0.2 });
    b.wall(X1 + 0.1, Z0 - 0.2, X1 + 0.1, Z1 + 0.2, Y, H, wallT, { thick: 0.2 });
    b.wall(X0, Z0 - 0.1, X1, Z0 - 0.1, Y, H, wallT, { thick: 0.2, openings: [{ at: 24, w: 1.0, h: 2.12 }] });
    const wins = []; for (let i = 0; i < 6; i++) wins.push({ at: 4 + i * 8, w: 3, h: 7, y0: 2 });
    b.wall(X0, Z1 + 0.1, X1, Z1 + 0.1, Y, H, wallT, { thick: 0.2, openings: wins });
    const night = b.mat('h-ballglass', { map: windowTex(0xe8dcc0, 0x18203a, 4) });
    wins.forEach((o) => b.box(X0 + o.at, Y + o.y0, Z1 + 0.1, o.w, o.h, 0.02, night, { collide: false, stretch: true, ao: false }));
    createDoor(this, { x: 0, y: Y, z: Z0 - 0.1, rotY: 0, kind: 'hotel', color: 0x7a3a2a, target: { level: 'hotel', spawn: 'from-ballroom' }, glimpse: 0x4a3a30, label: 'Back to the corridor', wallDepth: 0.2 });
    b.box(0, Y, Z1 - 3, 16, 0.8, 5.6, M.wood, { surface: 'wood' });
    b.stairs(0, Z1 - 5.8 - 1.6, Y, 4, 4, 0.2, 0.4, '+z', M.wood, { surface: 'wood' });
    b.prop(F.piano(), 4, Y + 0.8, Z1 - 2.6, Math.PI, { collide: true, name: 'piano' });
    for (let i = 0; i < 5; i++) for (let k = 0; k < 3; k++) b.prop(F.roundTable(0xf6f2ea, 0.75), X0 + 6 + i * 9, Y, Z0 + 8 + k * 7, 0, { collide: true, name: 'table' });
    for (const [x, z] of [[-12, 172], [12, 172], [0, 184]]) this.chandelier(x, Y + 9, z, 1.2);
    for (const [x, z] of [[-12, 192], [12, 192]]) halo(this, x, Y + 8, z, 4, '#ffe2a8', 0.5);
    addExamine(this, hitbox(this, 4, Y + 0.8, Z1 - 2.6, 1.6, 1.3, 0.8), { name: 'Piano in the ballroom', text: 'One key is pressed down and never comes back up. You can almost hear the note.', notes: 'Hotel · room 407, which is a ballroom' });
    zone(this, 0, Y, 180, 48, 4, 40, { once: true, onEnter: (gm) => { gm.ui.caption('Room 407 is much larger than the hotel around it.'); gm.journal.addObject(this.id, 'Room 407', 'A ballroom behind an ordinary guest-room door, larger than the whole building.', 'Hotel · floor 4'); } });
  }

  spawnsAndZones() {
    const yF2 = FLOORS[1][1], yF4 = FLOORS[3][1];
    this.addSpawn('default', [-5, 0, -3], yawTo(0, 1));
    this.addSpawn('from-hallways', [-5, 0, 2.2], yawTo(0, 1));
    this.addSpawn('from-pool', [8.5, 0, 19], yawTo(0, -1));
    this.addSpawn('from-apartments', [-1.8, yF2, 10.9], yawTo(0, -1));
    this.addSpawn('ballroom', [0, 0, 161.5], yawTo(0, 1));
    this.addSpawn('from-ballroom', [5, yF4, 10.6], yawTo(-1, 0));
    // ambient level for dynamic objects (the static building is baked)
    this.setLightZones([
      { min: [-16, yF4 - 0.5, 0], max: [16, yF4 + 3.5, 22], hemi: 0.35, exposure: 1.0 },
      { min: [11, -1, 0], max: [16, 16, 22], hemi: 0.5, exposure: 1.0 },
      { min: [-30, -1, 150], max: [30, 14, 210], hemi: 1.0, exposure: 1.05 },
    ], { hemi: 0.9, exposure: 1.05 });
  }
}
