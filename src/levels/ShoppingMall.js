// LEVEL 06 — Mall or No Mall?: an empty two-storey atrium with escalators,
// storefronts, a food court, an arcade, odd shop interiors and an escalator
// up to a floor that is not on the directory.
import * as THREE from 'three';
import { Level } from './Level.js';
import { F, texturedPlane } from './common/Props.js';
import { marbleTex, tileTex, carpetTex, textTex, stepsTex, plasterTex, grassTex, screenTex, posterTex, concreteTex } from '../utils/Textures.js';
import { fluorescent, halo, trees, grassField } from '../environment/EnvironmentEffects.js';
import { createWater } from '../environment/WaterSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, addPortal, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';
import { railing, pillar } from '../core/Architecture.js';

const UP = 6;

export default class ShoppingMall extends Level {
  build() {
    const b = this.b, g = this.game;
    this.neighbors = ['hallways', 'broken', 'apartments'];
    this.surface = 'tile';
    const marble = b.mat('mmarble', { map: marbleTex(0xeeeae4), roughness: 0.2, texScale: [3, 3], envMapIntensity: 1.3 });
    const wallM = b.mat('mwall', { map: plasterTex(0xf2efe8, 'mall'), roughness: 0.85, texScale: [3, 3] });
    const ceilM = b.mat('mceil', { map: plasterTex(0xfaf8f4, 'mallc'), roughness: 0.95 });
    const glass = b.mat('mglass', { color: 0xdff2fa, transparent: true, opacity: 0.2, roughness: 0.05, metalness: 0.1 });
    const chrome = b.mat('mchrome', { color: 0xd8dce0, roughness: 0.2, metalness: 0.8 });
    const slabM = b.mat('mslab', { map: concreteTex(0xe8e4dc), texScale: [3, 3] });
    const t = 0.2;

    // ============ ATRIUM floors ============
    b.floor(-12, -20, 12, 20, 0, marble, { surface: 'tile' });
    // upper ring walkway
    for (const [x0, z0, x1, z1] of [[-12, -20, 12, -15], [-12, 15, 12, 20], [-12, -15, -7, 15], [7, -15, 12, 15]]) b.box((x0 + x1) / 2, UP - 0.45, (z0 + z1) / 2, x1 - x0, 0.45, z1 - z0, slabM, { surface: 'tile', ao: false });
    for (const [x0, z0, x1, z1] of [[-12, -20, 12, -15], [-12, 15, 12, 20], [-12, -15, -7, 15], [7, -15, 12, 15]]) b.box((x0 + x1) / 2, UP + 0.001, (z0 + z1) / 2, x1 - x0, 0.01, z1 - z0, marble, { collide: false, ao: false });
    // glass railings around the void (gap at escalator landing)
    const railRun = (x0, z0, x1, z1) => railing(b, x0, z0, x1, z1, UP, { glass, railMat: chrome, postMat: chrome, spacing: 1.6 });
    railRun(-7, -15, 7, -15); railRun(-7, 15, -3, 15); railRun(3, 15, 7, 15); railRun(-7, -15, -7, 15); railRun(7, -15, 7, 15);
    // pillars
    for (const x of [-7, 7]) for (const z of [-15, -5, 5, 15]) pillar(b, x + Math.sign(x) * 0.45, 0, z + (Math.abs(z) === 15 ? -Math.sign(z) * 0.45 : 0), UP - 0.45, { size: 0.55, mat: wallM, trim: chrome, round: true });
    // skylight + ceilings
    b.ceiling(-12, -20, 12, -15, 11, ceilM); b.ceiling(-12, 15, 12, 20, 11, ceilM); b.ceiling(7, -15, 12, 15, 11, ceilM);
    b.ceiling(-12, -15, -11, 15, 11, ceilM); b.ceiling(-9, -15, -7, 15, 11, ceilM); b.ceiling(-11, -15, -9, -8, 11, ceilM);
    // skylight well: beams hang below the ceiling line and stop short of each other
    for (const x of [-7, 7]) b.box(x, 10.6, 0, 0.36, 1.32, 29.64, wallM, { collide: false, ao: false });
    for (const z of [-15, 15]) b.box(0, 10.6, z, 14.36, 1.32, 0.36, wallM, { collide: false, ao: false });
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(14, 30), new THREE.MeshBasicMaterial({ color: 0xeef6ff }));
    sky.rotation.x = Math.PI / 2; sky.position.set(0, 12, 0); this.group.add(sky); this.disposables.push(sky.geometry, sky.material);
    for (let x = -5.25; x <= 5.25; x += 3.5) for (let z = -13.5; z <= 13.5; z += 3) b.box(x, 11.84, z, 0.12, 0.1, 2.9, chrome, { collide: false, ao: false, tint: 0x9aa0a8 });
    for (let x = -10; x <= 10; x += 5) for (let z = -18; z <= 18; z += 6) if (Math.abs(x) > 6 || Math.abs(z) > 14) fluorescent(this, x, UP - 0.45, z, { w: 1, d: 1, color: 0xfffaf0 });

    // ============ escalators ============
    const steps = stepsTex();
    const escM = makeMaterial({ map: steps, vertexColors: false, roughness: 0.5, metalness: 0.4 });
    this.disposables.push(escM);
    const escalator = (x, z0, y0, run, rise, dir = 1, speed = 0.5) => {
      const len = Math.hypot(run, rise), ang = Math.atan2(rise, run);
      const geo = new THREE.BoxGeometry(1.2, 0.08, len);
      const mesh = new THREE.Mesh(geo, escM);
      mesh.rotation.x = -ang;
      mesh.position.set(x, y0 + rise / 2, z0 + run / 2);
      this.group.add(mesh);
      this.disposables.push(geo);
      const tex = steps.clone(); tex.needsUpdate = true; tex.repeat.set(1, len * 2.5); mesh.material = escM.clone(); mesh.material.map = tex; this.disposables.push(tex, mesh.material);
      this.onUpdate((dt) => { tex.offset.y -= dt * speed * dir; });
      // side panels + handrails
      const sideGeo = new THREE.BoxGeometry(0.1, 1.0, len);
      for (const s of [-0.7, 0.7]) {
        const p = new THREE.Mesh(sideGeo, glass); p.rotation.x = -ang; p.position.set(x + s, y0 + rise / 2 + 0.45, z0 + run / 2); this.group.add(p);
        const hr = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, len + 0.6), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 })); hr.rotation.x = -ang; hr.position.set(x + s, y0 + rise / 2 + 1.0, z0 + run / 2); this.group.add(hr);
        this.disposables.push(hr.geometry, hr.material);
        this.addCollider(x + s - 0.06, y0, Math.min(z0, z0 + run), x + s + 0.06, y0 + rise + 1.1, Math.max(z0, z0 + run));
      }
      this.disposables.push(sideGeo);
      // truss underneath
      const under = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, len), new THREE.MeshStandardMaterial({ color: 0xc8ccd0, roughness: 0.4, metalness: 0.5 }));
      under.rotation.x = -ang; under.position.set(x, y0 + rise / 2 - 0.35, z0 + run / 2); this.group.add(under);
      this.disposables.push(under.geometry, under.material);
      if (run > 0) this.addRamp(x - 0.6, z0, x + 0.6, z0 + run, 'z', y0, y0 + rise, 'metal');
      else this.addRamp(x - 0.6, z0 + run, x + 0.6, z0, 'z', y0 + rise, y0, 'metal');
    };
    escalator(-1.5, 5, 0, 10, UP, 1);
    escalator(1.5, 5, 0, 10, UP, -1);
    // the escalator to a floor that should not exist
    escalator(-10, -8, UP, 10, UP, 1, 0.3);
    addExamine(this, hitbox(this, -10, UP, -9, 1.4, 1.2, 1.2), { name: 'Escalator going up', text: 'The directory says this mall has two floors. This escalator keeps going anyway.', notes: 'Mall · upper floor', prompt: 'Look up' });

    // ============ fountain ============
    b.prop([[0, 0, 0, 6.4, 0.55, 6.4, 0xe8e4dc, 'cyl'], [0, 0, 0, 0.7, 2.2, 0.7, 0xe8e4dc, 'cyl'], [0, 2.2, 0, 1.6, 0.25, 1.6, 0xe8e4dc, 'cyl']], 0, 0, -6, 0, { collide: true });
    createWater(this, { x0: -2.9, z0: -8.9, x1: 2.9, z1: -3.1, radius: 2.95, y: 0.5, opacity: 0.6, shallow: 0x8fe0e8, sky: 0xf4fbff, scale: 2 });
    const fw = new THREE.Object3D(); fw.position.set(0, 1, -6); this.group.add(fw);
    g.audio.positional(fw, { kind: 'water', volume: 0.4, ref: 3, filter: ['bandpass', 1800] });
    for (const [x, z] of [[-5, 10], [5, 10], [-5, -12], [5, -12]]) { b.prop([[0, 0, 0, 1.6, 0.6, 1.6, 0xd8d4cc]], x, 0, z, 0, { collide: true }); }
    trees(this, [[-5, 0.6, 10, 0, 0.7], [5, 0.6, 10, 0, 0.7], [-5, 0.6, -12, 0, 0.7], [5, 0.6, -12, 0, 0.7]], { kind: 'round', leaf: 0x5a9a4a, cast: false });
    for (const z of [-1, 2]) b.prop(F.bench(0xb89a7a, 0x8a8a8a), -4.5, 0, z, Math.PI / 2, { collide: true });
    // directory
    b.prop([[0, 0, 0, 1.2, 2.2, 0.3, 0x3a4a6a]], 4.5, 0, -1, -Math.PI / 2, { collide: true });
    texturedPlane(this, textTex(['DIRECTORY', '', 'FLOOR 1 · Shops · Food', 'FLOOR 2 · Shops · Arcade', '', '✕ YOU ARE HERE', '✕ YOU ARE HERE'], { w: 256, h: 384, bg: '#eef2f8', fg: '#2a3a5a', font: 'bold 22px sans-serif' }), 4.34, 1.3, -1, 0.9, 1.35, -Math.PI / 2);
    addExamine(this, hitbox(this, 4.5, 0.5, -1, 0.5, 1.8, 1.3), { name: 'Mall directory', text: 'Two floors. Two "you are here" marks, in two different places. Both are correct.', notes: 'Mall · atrium' });

    // ============ stores ============
    const stores = [
      { side: 1, z0: -20, f: 0, name: 'OPEN SKY', color: '#6ab0e0', kind: 'sky' },
      { side: 1, z0: -10, f: 0, name: 'SOFT GOODS', color: '#d88aa8', kind: 'clothes' },
      { side: 1, z0: 0, f: 0, name: 'VIDEO STATION', color: '#3a4a8a', kind: 'video' },
      { side: 1, z0: 10, f: 0, name: '', kind: 'closed' },
      { side: -1, z0: -20, f: 0, name: 'LULLABY BOOKS', color: '#8a6a4a', kind: 'books' },
      { side: -1, z0: -10, f: 0, name: '', kind: 'closed' },
      { side: -1, z0: 0, f: 0, name: 'CLOUD 9 SHOES', color: '#7ac0c8', kind: 'clothes' },
      { side: -1, z0: 10, f: 0, name: 'MEMORY LANE TOYS', color: '#e8a040', kind: 'toys' },
      { side: 1, z0: -20, f: 1, name: '', kind: 'closed' },
      { side: 1, z0: -10, f: 1, name: 'PASTEL', color: '#c8a0d8', kind: 'clothes' },
      { side: 1, z0: 0, f: 1, name: 'CHAIRS', color: '#9a9a9a', kind: 'chairs' },
      { side: 1, z0: 10, f: 1, name: 'SUNDAY BAKERY', color: '#d8a060', kind: 'bakery' },
      { side: -1, z0: -20, f: 1, name: '', kind: 'closed' },
      { side: -1, z0: -10, f: 1, name: 'PIXEL PALACE', color: '#5a3aa0', kind: 'arcade' },
      { side: -1, z0: 0, f: 1, name: '', kind: 'closed' },
      { side: -1, z0: 10, f: 1, name: 'MUSIC BOX', color: '#4a8a7a', kind: 'books' },
    ];
    for (const s of stores) this.store(s, { wallM, ceilM, glass, chrome, marble, t });

    // outer walls
    b.wall(-22 - t / 2, -20, -22 - t / 2, 20, 0, 12, wallM, { thick: t });
    b.wall(22 + t / 2, -20, 22 + t / 2, 20, 0, 12, wallM, { thick: t });
    b.wall(-22, -20 - t / 2, 22, -20 - t / 2, 0, 12, wallM, { thick: t, openings: [{ at: 22, w: 6, h: 3.2 }] });
    b.wall(-22, 20 + t / 2, 22, 20 + t / 2, 0, 12, wallM, { thick: t, openings: [{ at: 22, w: 24, h: 5.5 }] });

    // ============ food court ============
    const fc = b.mat('fctile', { map: tileTex({ tile: 0xf2e6d0, grout: 0xc8b898, n: 4, key: 'fc' }), texScale: [2, 2] });
    b.floor(-12, 20, 12, 34, 0, fc, { surface: 'tile' });
    b.ceiling(-12, 20, 12, 34, 5.5, ceilM);
    b.wall(-12 - t / 2, 20, -12 - t / 2, 34, 0, 5.5, wallM, { thick: t });
    b.wall(12 + t / 2, 20, 12 + t / 2, 34, 0, 5.5, wallM, { thick: t });
    b.wall(-12, 34 + t / 2, 12, 34 + t / 2, 0, 5.5, wallM, { thick: t });
    const counters = [['NOODLE CLOUD', '#e85a4a', -8], ['PRETZEL MOON', '#e8a03a', 0], ['SUNDAE SUNDAY', '#e87ab0', 8]];
    for (const [n, c, x] of counters) {
      b.prop(F.counter(5, 0xf2f0ea, 0xd8d0c0), x, 0, 32.4, Math.PI, { collide: true });
      texturedPlane(this, textTex(n, { w: 512, h: 96, bg: c, fg: '#fff', font: 'bold 50px sans-serif' }), x, 3.6, 33.98, 4.5, 0.85, Math.PI, { emissive: true });
      b.box(x, 0, 33.95, 5, 3, 0.06, b.mat('menuwall' + c, { color: new THREE.Color(c).lerp(new THREE.Color(0xffffff), 0.6).getHex() }), { collide: false, ao: false });
    }
    for (let i = 0; i < 4; i++) for (let k = 0; k < 3; k++) {
      const x = -8 + i * 5.3, z = 23 + k * 3;
      b.prop(F.roundTable(0xf6f6f2, 0.5), x, 0, z, 0, { collide: true });
      for (let a = 0; a < 3; a++) b.prop(F.stool(['#e85a4a', '#5ab0e8', '#f2c94c'].map((h) => parseInt(h.slice(1), 16))[a]), x + Math.cos(a * 2.1) * 0.8, 0, z + Math.sin(a * 2.1) * 0.8, 0);
    }
    for (let x = -9; x <= 9; x += 4.5) for (let z = 22; z <= 32; z += 5) fluorescent(this, x, 5.5, z, { w: 1, d: 1 });
    addNote(this, hitbox(this, 0, 0.75, 26, 1, 0.1, 1), { title: 'Receipt on a tray', text: '1 × small fries\n1 × lemonade\n1 × the afternoon you spent here with someone\n\nTOTAL: 0.00\nTHANK YOU, COME AGAIN' });

    // ============ restrooms ============
    const rt = b.mat('rtile', { map: tileTex({ tile: 0xd8e8e0, grout: 0xa8b8b0, n: 10, key: 'rest' }), texScale: [1.5, 1.5] });
    b.floor(-3, -28, 3, -20, 0, rt, { surface: 'tile' });
    b.ceiling(-3, -28, 3, -20, 3.2, ceilM);
    b.wall(-3 - t / 2, -28, -3 - t / 2, -20, 0, 3.2, rt, { thick: t, openings: [{ at: 4, w: 1.0, h: 2.12 }] });
    b.wall(3 + t / 2, -28, 3 + t / 2, -20, 0, 3.2, rt, { thick: t, openings: [{ at: 4, w: 1.0, h: 2.12 }] });
    b.wall(-3, -28 - t / 2, 3, -28 - t / 2, 0, 3.2, rt, { thick: t });
    createDoor(this, { x: -3 - t / 2, y: 0, z: -24, rotY: Math.PI / 2, kind: 'flat', color: 0xd88aa8, locked: 'Out of order. There is a sign with a drawing of a wave.' });
    createDoor(this, { x: 3 + t / 2, y: 0, z: -24, rotY: -Math.PI / 2, kind: 'flat', color: 0x7ab0d8, locked: 'Out of order. Water is running somewhere inside, very gently.' });
    texturedPlane(this, textTex('RESTROOMS', { w: 384, h: 64, bg: '#3a4a6a', fg: '#fff', font: 'bold 38px sans-serif' }), 0, 2.6, -20.1 - 0.02 + 0.2, 1.6, 0.27, 0);
    fluorescent(this, 0, 3.2, -24, { w: 0.6, d: 1.2, flicker: true });

    // ============ floor 3 (should not exist) ============
    const Y3 = UP * 2;
    b.box(-15, Y3 - 0.4, 11, 14, 0.4, 18, b.mat('f3carpet', { map: carpetTex('mall'), texScale: [3, 3] }), { surface: 'carpet', ao: false });
    b.box(-10, Y3 - 0.4, -3, 2, 0.4, 2, slabM, { collide: false, ao: false });
    const dim = b.mat('dimwall', { map: plasterTex(0xd8d4cc, 'dim'), roughness: 1, texScale: [3, 3] });
    b.wall(-22, 2 - t / 2, -8, 2 - t / 2, Y3, 4, dim, { thick: t, openings: [{ at: 12, w: 1.8, h: 3 }] });
    b.wall(-22, 20 + t / 2, -8, 20 + t / 2, Y3, 4, dim, { thick: t, openings: [{ at: 7, w: 1.0, h: 2.15 }] });
    b.wall(-8 + t / 2, 2, -8 + t / 2, 20, Y3, 4, dim, { thick: t });
    b.wall(-22 - t / 2, 2, -22 - t / 2, 20, Y3, 4, dim, { thick: t });
    b.ceiling(-22, 2, -8, 20, Y3 + 4, ceilM);
    for (let z = 4; z < 20; z += 4) for (const x of [-21.8, -8.2]) texturedPlane(this, textTex('CLOSED', { w: 256, h: 256, bg: '#9a9aa0', fg: '#5a5a60', font: 'bold 40px sans-serif' }), x, Y3 + 1.5, z, 3.2, 3, x < -15 ? Math.PI / 2 : -Math.PI / 2);
    fluorescent(this, -15, Y3 + 4, 8, { w: 0.6, d: 1.2, flicker: true, light: true });
    fluorescent(this, -15, Y3 + 4, 16, { w: 0.6, d: 1.2 });
    createDoor(this, { x: -15, y: Y3, z: 20 + t / 2, rotY: Math.PI, kind: 'flat', color: 0xb8b0a0, target: { level: 'hallways', spawn: 'default' }, glimpse: 0xfff0dc, label: 'STAFF ONLY' });
    texturedPlane(this, textTex('FLOOR 3', { w: 256, h: 64, bg: '#2a2a30', fg: '#d8d8d8', font: 'bold 36px sans-serif' }), -15, Y3 + 3, 2 - t / 2 + 0.11, 0.9, 0.22, 0);
    texturedPlane(this, textTex('THIS FLOOR IS NOT ON THE MAP', { w: 768, h: 64, bg: null, fg: '#5a5a66', font: '30px monospace' }), -21.88, Y3 + 2.6, 11, 3.6, 0.3, Math.PI / 2, { unlit: true, alpha: true });

    this.setLightZones([{ min: [-23, Y3 - 1, 1], max: [-7, Y3 + 5, 21], hemi: 0.65, exposure: 0.95 }], { hemi: 1.3, exposure: 1.0 });

    this.addSpawn('default', [0, 0, -18], yawTo(0, 1));
    this.addSpawn('from-apartments', [0, 0, -18], yawTo(0, 1));
    this.addSpawn('from-hallways', [0, UP, 17.5], yawTo(0, -1));
    this.addSpawn('from-broken', [-9.5, UP, -12], yawTo(1, 0));
  }

  store({ side, z0, f, name, color, kind }, { wallM, ceilM, glass, chrome, marble, t }) {
    const b = this.b, g = this.game;
    const y = f * UP, h = f ? 5 : 5.5, xa = side > 0 ? 12 : -22, xb = side > 0 ? 22 : -12, z1 = z0 + 10;
    const front = side > 0 ? 12 : -12;
    b.floor(xa, z0, xb, z1, y + 0.0001, kind === 'arcade' ? b.mat('arcfloor', { map: carpetTex('mall'), texScale: [3, 3] }) : marble, { surface: kind === 'arcade' ? 'carpet' : 'tile', thick: f ? 0.45 : 0.2 });
    b.ceiling(xa, z0, xb, z1, y + h, ceilM);
    // side walls between stores
    b.wall(xa, z0 + t / 2, xb, z0 + t / 2, y, h, wallM, { thick: t });
    if (z1 === 20) b.wall(xa, z1 - t / 2, xb, z1 - t / 2, y, h, wallM, { thick: t });
    // front: glass with a doorway, or a shutter
    if (kind === 'closed') {
      b.box(front, y, z0 + 5, t, h - 0.05, 9.6, b.mat('shutter', { map: textTex(['', ''], { w: 64, h: 64, bg: '#a8aab0', key: 'shutterbase' }), color: 0xb0b2b8, texScale: [0.3, 0.3] }), { tint: 0xd0d0d4 });
      for (let k = 0; k < 18; k++) b.box(front + side * 0.11, y + 0.3 * k, z0 + 5, 0.02, 0.04, 9.8, chrome, { collide: false, ao: false, tint: 0x888888 });
      return;
    }
    b.wall(front, z0, front, z1, y, h, glass, { thick: 0.06, openings: [{ at: 5, w: 2.6, h: 2.6 }] });
    b.box(front, y + 2.6, z0 + 5, 0.08, 0.06, 2.6, chrome, { collide: false, ao: false });
    // sign
    const signY = y + (f ? 4.3 : 4.5);
    texturedPlane(this, textTex(name, { w: 512, h: 96, bg: color, fg: '#ffffff', font: 'bold 52px "Trebuchet MS", sans-serif' }), front + side * -0.05, signY, z0 + 5, 4.6, 0.86, side > 0 ? -Math.PI / 2 : Math.PI / 2, { emissive: true });
    fluorescent(this, (xa + xb) / 2, y + h, z0 + 5, { w: 2, d: 2, color: 0xfffaf0 });
    const cx = (xa + xb) / 2, cz = z0 + 5, rot = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    if (kind === 'clothes') {
      for (let i = 0; i < 3; i++) {
        const rx = cx + (i - 1) * 2.8 * side;
        b.prop([[0, 0, 0, 0.05, 1.5, 0.05, 0x888888], [0, 1.45, 0, 0.04, 0.04, 2.4, 0x888888], [0, 0, 1.15, 0.05, 1.5, 0.05, 0x888888], [0, 0, -1.15, 0.05, 1.5, 0.05, 0x888888],
          ...Array.from({ length: 8 }, (_, k) => [0, 0.5, -1 + k * 0.28, 0.4, 0.9, 0.05, [0xf2b8cf, 0xb8e6cf, 0xf8e7a2, 0x8fc3f2][k % 4]])], rx, y, cz, 0, { collide: true });
      }
    } else if (kind === 'sky') {
      // a store whose inside is a sunny meadow over a city
      const gm = b.mat('skygrass', { map: grassTex(0x7ab04a, 'meadow'), texScale: [2, 2] });
      b.box(cx, y + 0.01, cz, 9.8, 0.05, 9.8, gm, { collide: false, ao: false });
      const tex = textTex([''], { w: 8, h: 8, bg: '#6ab0f0', key: 'skywall' });
      const skyWall = makeMaterial({ map: screenTex('sky', 5), vertexColors: false, emissive: 0xffffff, emissiveMap: screenTex('sky', 5), emissiveIntensity: 0.7 });
      this.disposables.push(skyWall);
      const back = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 5.2), skyWall);
      back.position.set(xb - side * 0.12 + (side > 0 ? 0 : 0.24) * 0, y + 2.7, cz); back.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
      back.position.x = side > 0 ? xb - 0.12 : xa + 0.12;
      this.group.add(back);
      grassField(this, { x0: xa + 0.4, z0: z0 + 0.4, x1: xb - 0.4, z1: z1 - 0.4, heightAt: () => y, density: 1.2, height: 0.28, color: 0x7ab04a, sway: 0.05, chunk: 10, seed: 21 });
      for (let i = 0; i < 40; i++) b.prop([[0, 0, 0, 0.08, 0.08, 0.08, 0xf2d24a, 'sphere']], xa + 0.6 + Math.random() * 8.8, y + 0.2, z0 + 0.6 + Math.random() * 8.8, 0, { blob: false });
      b.prop([[0, 0.42, 0, 0.6, 0.05, 0.6, 0xffffff], [0, 0.45, -0.28, 0.6, 0.6, 0.04, 0xffffff], [-0.27, 0, 0, 0.03, 0.44, 0.6, 0xffffff], [0.27, 0, 0, 0.03, 0.44, 0.6, 0xffffff]], cx - side * 1.5, y, cz + 1.5, rot + Math.PI * 0.2, { collide: true });
      addExamine(this, hitbox(this, cx - side * 1.5, y, cz + 1.5, 0.8, 1, 0.8), { name: 'White chair in a meadow', text: 'Sun on your face, inside a shop, inside a mall. The view never finishes loading.', notes: 'Mall · OPEN SKY', prompt: 'Sit for a moment' });
      void tex;
    } else if (kind === 'video') {
      for (let i = 0; i < 3; i++) b.prop(F.shelf(0x3a3a4a, 2.4, 1.8), cx + (i - 1) * 2.6 * side, y, z0 + 2 + i * 2.6, rot, { collide: true });
      for (let i = 0; i < 3; i++) texturedPlane(this, posterTex('mall', i + 7), xb - side * 0.02 + (side > 0 ? 0 : 0) - (side > 0 ? 0 : -0.04), y + 2, z0 + 2 + i * 3, 0.9, 1.2, side > 0 ? -Math.PI / 2 : Math.PI / 2);
    } else if (kind === 'books') {
      for (let i = 0; i < 4; i++) b.prop(F.shelf(0x8a6a4a, 2.2, 2.0), cx + (i % 2 ? 1.5 : -1.5) * side, y, z0 + 2 + (i >> 1) * 4, rot, { collide: true });
      addNote(this, hitbox(this, cx, y + 0.8, cz, 1.2, 0.3, 0.8), { title: 'An open book', text: 'Chapter 1.\nYou wake up in a field.\nThere is a house on the hill.\n\nThe rest of the pages are mirrors.' });
      b.prop(F.table(0xb08a60, 1.2, 0.8), cx, y, cz, 0, { collide: true });
    } else if (kind === 'toys') {
      for (let i = 0; i < 2; i++) b.prop(F.shelf(0xe8a040, 2.4, 1.6), cx, y, z0 + 2.5 + i * 5, rot, { collide: true });
      for (let i = 0; i < 10; i++) b.prop([[0, 0, 0, 0.3, 0.3, 0.3, [0xe85a5a, 0x5ab0e8, 0xf2d24a, 0x6ad07a, 0xc87ae8][i % 5], i % 2 ? 'sphere' : undefined]], cx + (Math.random() - 0.5) * 6, y, z0 + 1 + Math.random() * 8, i, { blob: false });
    } else if (kind === 'chairs') {
      for (let i = 0; i < 6; i++) for (let k = 0; k < 7; k++) b.prop(F.chair(0xd8d8d8, 0x9a9a9a), xa + 1 + i * 1.4, y, z0 + 1 + k * 1.3, side > 0 ? -Math.PI / 2 : Math.PI / 2);
      addExamine(this, hitbox(this, cx, y, cz, 8, 1, 8), { name: 'A shop that sells chairs', text: 'Forty-two identical chairs, all facing the same wall. There is nothing on the wall. They are waiting for something to start.', notes: 'Mall · CHAIRS' });
    } else if (kind === 'bakery') {
      b.prop(F.counter(6, 0xf2e6d0, 0xd8b080), cx, y, z0 + 2, 0, { collide: true });
      for (let i = 0; i < 8; i++) b.prop([[0, 0, 0, 0.25, 0.15, 0.25, 0xd8a060, 'sphere']], cx - 2.5 + i * 0.7, y + 0.93, z0 + 2, 0, { blob: false });
      addExamine(this, hitbox(this, cx, y + 0.8, z0 + 2, 6, 0.4, 0.8), { name: 'Warm bread', text: 'Still warm. The smell is exactly the bakery near your grandmother\'s house.', notes: 'Mall · SUNDAY BAKERY' });
    } else if (kind === 'arcade') {
      for (let i = 0; i < 5; i++) for (let k = 0; k < 2; k++) {
        const ax = xa + 2 + k * 6, az = z0 + 1 + i * 2;
        b.prop(F.arcade([0x3a2a6a, 0x6a2a3a, 0x2a5a6a][(i + k) % 3]), ax, y, az, k ? -Math.PI / 2 : Math.PI / 2, { collide: true });
        const scr = texturedPlane(this, screenTex(['desktop', 'text', 'sky', 'eye'][(i + k) % 4], i * 3 + k), ax + (k ? -0.43 : 0.43), y + 1.33, az, 0.56, 0.42, k ? -Math.PI / 2 : Math.PI / 2, { unlit: true, emissive: true });
        if (i === 2 && k === 0) addPortal(this, scr, { prompt: 'Insert a coin', target: 'broken', spawn: 'from-mall', style: 'static', before: (gm) => gm.audio.sfx('arcade') });
      }
      halo(this, cx, y + 4.5, cz, 6, '#a080ff', 0.25);
      g.audio.positional(this.group.children[this.group.children.length - 1], { kind: 'hum', base: 220, volume: 0.03, ref: 2 });
    }
  }
}
