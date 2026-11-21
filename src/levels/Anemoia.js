// LEVEL 12 — Anemoia: a pastel suburb at sunset, streetlights just coming on,
// a corner store with the lights on and, at the end of the street, a house
// with a light left on for you.
import * as THREE from 'three';
import { Level } from './Level.js';
import { house, F, streetLamp, texturedPlane, fenceAlong } from './common/Props.js';
import { grassTex, asphaltTex, tileTex, concreteTex, textTex, plasterTex, wallpaperTex, woodTex, staticTex, paintingTex, windowTex } from '../utils/Textures.js';
import { trees, grassField, halo } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { h as html } from '../ui/dom.js';
import { makeMaterial } from '../core/Materials.js';

const PASTEL = [0xf2b8c0, 0xb8e6c8, 0xf6e4a0, 0xa8d0f0, 0xd0c0f0, 0xf6c8a8, 0xf4f2ee, 0xc8e8e0];

export default class Anemoia extends Level {
  build() {
    const b = this.b, g = this.game;
    this.heightAt = () => 0;
    this.terrainSurface = 'grass';
    this.neighbors = ['starting'];

    const lawn = makeMaterial({ map: grassTex(0x6a9a48, 'lawn2'), vertexColors: false, roughness: 1 });
    lawn.map.repeat.set(140, 140);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(560, 560), lawn);
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; this.group.add(ground);
    this.disposables.push(lawn, ground.geometry);

    // streets
    const road = b.mat('aroad', { map: asphaltTex(0x5a5a62), texScale: [6, 6], roughness: 0.95 });
    const walk = b.mat('awalk', { map: tileTex({ tile: 0xd2ccc0, grout: 0xa8a294, n: 4, key: 'swalk' }), texScale: [2.4, 2.4] });
    const lineM = b.mat('aline', { color: 0xf2e2a0, roughness: 0.8 });
    b.box(0, -0.2, 0, 280, 0.21, 10, road, { surface: 'concrete', ao: false });
    b.box(0, -0.2, -45, 10, 0.21, 220, road, { surface: 'concrete', ao: false, tint: 0xf8f8f8 });
    for (let x = -136; x < 136; x += 6) if (Math.abs(x) > 8) b.box(x, 0.012, 0, 2.6, 0.01, 0.16, lineM, { collide: false, ao: false });
    for (let z = -150; z < 64; z += 6) if (Math.abs(z) > 8) b.box(0, 0.012, z, 0.16, 0.01, 2.6, lineM, { collide: false, ao: false });
    // sidewalks with curbs
    for (const s of [-1, 1]) {
      b.box(-72, -0.05, s * 6.4, 128, 0.2, 2.8, walk, { surface: 'concrete', ao: false });
      b.box(72, -0.05, s * 6.4, 128, 0.2, 2.8, walk, { surface: 'concrete', ao: false });
      b.box(s * 6.4, -0.05, -82, 2.8, 0.2, 148, walk, { surface: 'concrete', ao: false });
      b.box(s * 6.4, -0.05, 39, 2.8, 0.2, 62, walk, { surface: 'concrete', ao: false });
    }

    // houses along the main street
    const conc = b.mat('adrive', { map: concreteTex(0xc8c2b6), texScale: [2, 2] });
    let k = 0;
    const lots = [];
    for (let x = -110; x <= 110; x += 22) {
      if (Math.abs(x) < 12) continue;
      for (const s of [-1, 1]) lots.push([x, s * 22, s > 0 ? Math.PI : 0]);
    }
    for (let z = -60; z >= -130; z -= 22) for (const s of [-1, 1]) lots.push([s * 22, z, s > 0 ? -Math.PI / 2 : Math.PI / 2]);
    for (const [x, z, r] of lots) {
      if (Math.abs(x - 18) < 12 && Math.abs(z + 18) < 12) continue;
      const col = PASTEL[k % PASTEL.length], two = k % 5 === 2;
      house(this, { x, z, y: 0, rotY: r, w: two ? 8 : 10, d: 7, h: two ? 5.4 : 3.1, floors: two ? 2 : 1, wall: col, roof: [0x8a6a5a, 0x6a6a7a, 0x9a7a6a][k % 3], trim: 0xffffff, sky: k % 3 === 0 ? 0xffd090 : 0x5a6a88, garage: !two, porch: true, chimney: k % 4 === 0 });
      const c = Math.cos(r), sn = Math.sin(r);
      const dx = x + (10 / 2 + 2) * c + 3.5 * sn, dz = z - (10 / 2 + 2) * sn + 3.5 * c;
      b.box(dx + (6 * sn), -0.04, dz + (6 * c), Math.abs(c) > 0.5 ? 3 : 10, 0.06, Math.abs(c) > 0.5 ? 10 : 3, conc, { collide: false, ao: false });
      const mbx = x + 3 * c + 10.5 * sn, mbz = z - 3 * sn + 10.5 * c;
      b.prop([[0, 0, 0, 0.08, 1.0, 0.08, 0x6a5a4a], [0, 1.0, 0, 0.26, 0.24, 0.46, [0x4a6a9a, 0x9a4a4a, 0x4a8a5a][k % 3]]], mbx, 0, mbz, r, { collide: true });
      if (k % 3 === 0) halo(this, x + 4.2 * sn, 1.6, z + 4.2 * c, 2.6, '#ffcf80', 0.32);
      k++;
    }
    // trees + streetlights along the sidewalks
    const tl = [];
    for (let x = -120; x <= 120; x += 16) for (const s of [-1, 1]) if (Math.abs(x) > 12) tl.push([x + 5, 0, s * 9.4, x, 0.9 + ((x / 16) % 3) * 0.12]);
    for (let z = -120; z <= 50; z += 16) for (const s of [-1, 1]) if (Math.abs(z) > 12) tl.push([s * 9.4, 0, z + 5, z, 0.95]);
    trees(this, tl, { kind: 'round', leaf: 0x5a7a40 });
    for (let x = -112; x <= 112; x += 32) for (const s of [-1, 1]) streetLamp(this, x, 0.15, s * 7.6, s > 0 ? Math.PI / 2 : -Math.PI / 2, { on: true, light: Math.abs(x) < 40 && s > 0 });
    for (let z = -100; z <= 50; z += 30) streetLamp(this, 7.6, 0.15, z, Math.PI, { on: true });
    // parked cars, hydrant, hoop
    const car = (x, z, r, col) => b.prop([[0, 0.3, 0, 1.8, 0.7, 4.2, col], [0, 1.0, -0.2, 1.6, 0.6, 2.2, col], [0, 1.0, -0.2, 1.62, 0.45, 2.0, 0x2a3442], [-0.85, 0, 1.3, 0.25, 0.62, 0.62, 0x222222, 'cyl'], [0.85, 0, 1.3, 0.25, 0.62, 0.62, 0x222222, 'cyl'], [-0.85, 0, -1.3, 0.25, 0.62, 0.62, 0x222222, 'cyl'], [0.85, 0, -1.3, 0.25, 0.62, 0.62, 0x222222, 'cyl']], x, 0, z, r, { collide: true });
    car(-40, 3.6, Math.PI / 2, 0xd8e0e8); car(58, -3.6, -Math.PI / 2, 0xc85a4a); car(3.6, -70, Math.PI, 0x8ab0d0);
    b.prop([[0, 0, 0, 0.3, 0.6, 0.3, 0xd83a3a, 'cyl'], [0, 0.6, 0, 0.34, 0.22, 0.34, 0xd83a3a, 'sphere']], 16, 0.15, 7.6, 0, { collide: true });
    b.prop([[0, 0, 0, 0.12, 3.05, 0.12, 0x6a6a6a, 'cyl'], [0, 2.9, 0.3, 1.2, 0.8, 0.06, 0xf2f2f2], [0, 2.95, 0.65, 0.48, 0.03, 0.48, 0xe8702a, 'cyl']], -66 + 3, 0, -22 + 10, Math.PI, { collide: true });

    // ---------- corner store ----------
    const SX = 18, SZ = -18;
    const storeW = b.mat('storewall', { map: plasterTex(0xf2e6d0, 'store'), texScale: [2, 2] });
    const sf = b.mat('storefloor', { map: tileTex({ tile: 0xf0f0ea, grout: 0xc0c0b8, n: 4, key: 'store' }), texScale: [1.6, 1.6] });
    b.room(SX - 5, SZ - 4, SX + 5, SZ + 4, 0, 3.4, { wall: storeW, thick: 0.25, floor: sf, surface: 'tile', ceil: b.mat('storeceil', { color: 0xf8f6f0 }), openings: { w: [{ at: 4, w: 1.1, h: 2.2 }, { at: 1.6, w: 1.8, h: 1.8, y0: 0.8 }, { at: 6.4, w: 1.8, h: 1.8, y0: 0.8 }] } });
    const glassM = b.mat('storeglass', { color: 0xfff2d8, transparent: true, opacity: 0.25, roughness: 0.05 });
    for (const z of [SZ - 2.4, SZ + 2.4]) b.box(SX - 5 - 0.125, 0.8, z, 0.04, 1.8, 1.8, glassM, { ao: false });
    texturedPlane(this, textTex('CORNER MART', { w: 512, h: 96, bg: '#2a6a9a', fg: '#fff6e0', font: 'bold 54px sans-serif' }), SX - 5.14, 2.9, SZ, 3.6, 0.68, -Math.PI / 2, { emissive: true });
    texturedPlane(this, textTex('OPEN', { w: 256, h: 96, bg: '#1a1a1a', fg: '#ff6a8a', font: 'bold 64px sans-serif' }), SX - 5.11, 1.9, SZ - 2.4, 0.6, 0.22, -Math.PI / 2, { unlit: true, emissive: true });
    createDoor(this, { x: SX - 5 - 0.125, y: 0, z: SZ, rotY: -Math.PI / 2, color: 0xd8e8f0, kind: 'school' });
    for (let i = 0; i < 3; i++) b.prop(F.shelf(0xe8e8e0, 2.8, 1.6), SX - 1 + i * 2, 0, SZ - 0.3, Math.PI / 2, { collide: true });
    b.prop(F.counter(2.4, 0xd8c8a8, 0x8a7a60), SX - 3, 0, SZ + 3.2, 0, { collide: true });
    b.prop([[0, 0, 0, 1.0, 2.0, 0.7, 0xf2f2f2], [0, 0.2, 0.36, 0.9, 1.6, 0.02, 0xbfefff]], SX + 4.4, 0, SZ - 2.5, -Math.PI / 2, { collide: true });
    halo(this, SX + 4.1, 1.2, SZ - 2.5, 2.2, '#c8f4ff', 0.4);
    for (const z of [SZ - 2, SZ + 2]) { b.prop([[0, 0, 0, 0.6, 0.04, 1.2, 0xf8fbff]], SX, 3.36, z, 0, { blob: false }); halo(this, SX, 3.2, z, 1.6, '#f2fbff', 0.5); }
    const storeLight = new THREE.PointLight(0xf6fbff, 8, 12, 1.5); storeLight.position.set(SX, 3, SZ); this.group.add(storeLight);
    addNote(this, hitbox(this, SX - 3, 0.9, SZ + 3.2, 2.4, 0.1, 0.6), { title: 'Sticky note on the register', text: 'Back in a minute!\n\nTake whatever you like.\nIt was always free for you.' });
    addExamine(this, hitbox(this, SX + 1, 0.4, SZ - 0.3, 6, 1.4, 1), { name: 'Shelves of the corner store', text: 'Candy you have not seen since you were small. The prices are in a currency that does not exist anymore.', notes: 'Anemoia · Corner Mart' });

    // ---------- home, at the end of the street ----------
    const HX = 0, HZ = 72;
    const wall = b.mat('homewall', { map: plasterTex(0xf6e0c8, 'home'), texScale: [2, 2] });
    const inner = b.mat('homein', { map: wallpaperTex(0xf2e6cc, 0xd8a08a), texScale: [1, 1] });
    b.box(HX, -0.3, HZ, 9, 0.3, 7, b.mat('homefloor', { map: woodTex(0xb08a60, 5), texScale: [2, 2] }), { surface: 'wood', ao: false });
    b.room(HX - 4.5, HZ - 3.5, HX + 4.5, HZ + 3.5, 0, 3, { wall, thick: 0.22, ceil: b.mat('homeceil', { color: 0xf8f2e8 }), openings: { s: [{ at: 4.5, w: 1.0, h: 2.15 }, { at: 1.8, w: 1.6, h: 1.3, y0: 0.9 }, { at: 7.2, w: 1.6, h: 1.3, y0: 0.9 }] } });
    b.room(HX - 4.45, HZ - 3.45, HX + 4.45, HZ + 3.45, 0, 3, { wall: inner, thick: 0.02, wallOpts: { collide: false }, openings: { s: [{ at: 4.45, w: 1.0, h: 2.15 }, { at: 1.75, w: 1.6, h: 1.3, y0: 0.9 }, { at: 7.15, w: 1.6, h: 1.3, y0: 0.9 }] } });
    const warmWin = b.mat('warmwin', { map: windowTex(0xffffff, 0xffd090, 4), emissive: 0xffc070, emissiveIntensity: 0.9 });
    for (const x of [HX - 2.7, HX + 2.7]) b.box(x, 0.9, HZ - 3.5 - 0.11, 1.6, 1.3, 0.04, warmWin, { collide: false, stretch: true, ao: false });
    b.add(new THREE.ConeGeometry(6.6, 2.6, 4, 1), b.mat('homeroof', { color: 0x8a6a5a }), { x: HX, y: 3 + 1.3, z: HZ, rotY: Math.PI / 4 });
    const homeDoor = createDoor(this, { x: HX, y: 0, z: HZ - 3.5 - 0.11, rotY: 0, color: 0xf6f0e6, kind: 'panel' });
    homeDoor.open = true;
    b.box(HX, -0.3, HZ - 4.4, 2.4, 0.3, 1.4, conc, { surface: 'concrete', ao: false });
    halo(this, HX, 2.4, HZ - 4, 1.4, '#ffd8a0', 0.7);
    for (const x of [HX - 2.7, HX + 2.7]) halo(this, x, 1.5, HZ - 3.9, 3, '#ffc070', 0.45);
    const homeLight = new THREE.PointLight(0xffc890, 9, 12, 1.5); homeLight.position.set(HX, 2.4, HZ); this.group.add(homeLight);
    b.prop(F.sofa(0xd8a0a8), HX, 0, HZ + 2.4, Math.PI, { collide: true });
    b.prop(F.tvOld(), HX, 0, HZ - 2.2, 0, { collide: true });
    const tv = texturedPlane(this, staticTex(), HX, 0.78, HZ - 1.9, 0.58, 0.44, 0, { unlit: true });
    tv.material.map = tv.material.map.clone(); tv.material.map.needsUpdate = true; tv.material.opacity = 0.75; tv.material.transparent = true;
    this.disposables.push(tv.material.map);
    this.onUpdate(() => tv.material.map.offset.set(Math.random(), Math.random()));
    g.audio.positional(tv, { kind: 'static', volume: 0.03, ref: 1.2, filter: ['lowpass', 1800] });
    b.prop(F.lamp(0xffe0b0), HX + 3.6, 0, HZ + 2.8, 0);
    b.prop(F.rug(0xc89a8a, 3, 2), HX, 0, HZ + 0.6, 0, { blob: false });
    texturedPlane(this, paintingTex(0), HX - 4.42, 1.6, HZ, 1.0, 0.75, Math.PI / 2);
    addNote(this, hitbox(this, HX + 1.2, 0.5, HZ + 2.4, 0.4, 0.1, 0.4), { title: 'A note on the cushion', text: 'Welcome home.\n\nYou have been gone a long time,\nor no time at all.\nSit down. Rest your eyes.' });
    const sofaHit = hitbox(this, HX, 0, HZ + 2.4, 2, 0.9, 0.9);
    this.addInteractable({ mesh: sofaHit, prompt: 'Sit down and rest', use: (gm) => this.ending(gm) });
    sofaHit.userData.interactable = this.interactables[this.interactables.length - 1];

    grassField(this, { x0: -60, z0: 9, x1: 60, z1: 45, heightAt: () => 0, density: 0.45, height: 0.22, color: 0x6a9a48, sway: 0.05, seed: 50, avoid: (x, z) => Math.abs(x) < 9 });
    particles(this, { count: 160, size: 0.07, color: 0xfff0a0, box: 40, height: 6, fall: 0, drift: 1.2, opacity: 0.9, additive: true });

    this.addSpawn('default', [-60, 0.15, 6.4], yawTo(1, 0));
    this.addSpawn('from-frozen', [-60, 0.15, 6.4], yawTo(1, 0));
  }

  ending(gm) {
    if (this.ended) return;
    this.ended = true;
    gm.player.frozen = true;
    gm.input.enabled = false;
    gm.journal.addObject(this.id, 'Home', 'You sat down on the sofa in the house at the end of the street, and rested.', 'Anemoia · the end, or the beginning');
    gm.save.flag('ending', (gm.save.flag('ending') || 0) + 1);
    gm.world.fade(1, 3, 0xfff6ec).then(() => {
      const lines = ['You close your eyes.', 'The streetlights hum.', 'Somewhere, a field of green hills is waiting,', 'with a small house, and a cloud that stays.', '', 'Thank you for dreaming.'];
      const el = html(`<div class="screen" style="background:#fff6ec;color:#4a4a5a;text-align:center;font:300 1.2rem/2 Georgia,serif;font-style:italic"><div>${lines.map((l, i) => `<div style="opacity:0;animation:fadeIn 1.6s ${0.6 + i * 1.6}s forwards">${l || '&nbsp;'}</div>`).join('')}</div></div>`);
      el.querySelectorAll('div > div').forEach((d) => { d.style.animationFillMode = 'forwards'; });
      const style = document.createElement('style'); style.textContent = '@keyframes fadeIn{to{opacity:1}}'; el.appendChild(style);
      document.getElementById('menu-root').appendChild(el);
      setTimeout(() => {
        el.style.transition = 'opacity 2s'; el.style.opacity = '0';
        setTimeout(() => el.remove(), 2100);
        gm.input.enabled = true;
        this.ended = false;
        gm.world.goTo('starting', 'default', { style: 'white' });
      }, 0.6e3 + lines.length * 1600 + 2600);
    });
  }
}
