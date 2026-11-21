// LEVEL 01 — Almond Fields: golden grass to the waist, repeated structures,
// strange objects left in the open, and small places to find.
import * as THREE from 'three';
import { Level } from './Level.js';
import { terrain, vnoise } from './common/Terrain.js';
import { curvePoints, ribbon, distToPath, telephonePole, wires, F, texturedPlane, gableRoofGeo } from './common/Props.js';
import { grassTex, dirtTex, woodTex, textTex, colorBarsTex, eyeTex, plasterTex, roofTex, concreteTex } from '../utils/Textures.js';
import { grassField, trees } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, addPortal, hitbox, yawTo } from '../interaction/Interactable.js';
import { makeMaterial } from '../core/Materials.js';

const fieldH = (x, z) => Math.sin(x * 0.012) * Math.cos(z * 0.01) * 3 + Math.sin(x * 0.04 + z * 0.02) * 0.8 + vnoise(x * 0.03, z * 0.03, 5) * 1.5;

export default class AlmondFields extends Level {
  build() {
    const b = this.b, H = fieldH;
    this.heightAt = H;
    this.terrainSurface = 'grass';
    this.neighbors = ['maze', 'apartments', 'pool', 'starting'];

    const gm = makeMaterial({ map: grassTex(0xc9a457, 'dry'), vertexColors: true, roughness: 1 });
    this.disposables.push(gm);
    terrain(this, { size: 900, heightAt: H, mat: gm, uvScale: 4, colorAt: (x, z) => { const n = vnoise(x * 0.015, z * 0.015, 3); return [1, 0.92 + n * 0.1, 0.78 + n * 0.12]; } });

    // paths
    const dm = makeMaterial({ map: dirtTex(0xa58a62), vertexColors: false, roughness: 1 });
    this.disposables.push(dm);
    const main = curvePoints([[0, 20], [2, -20], [-4, -60], [3, -100], [0, -150], [0, -190]], 2);
    const toShed = curvePoints([[-2, -40], [-25, -55], [-48, -70], [-60, -72]], 2);
    const toBus = curvePoints([[2, -80], [30, -86], [62, -90], [80, -92]], 2);
    const toChair = curvePoints([[0, -120], [-30, -130], [-62, -150]], 2);
    const toStairs = curvePoints([[3, -30], [30, -20], [56, -16]], 2);
    const paths = [main, toShed, toBus, toChair, toStairs];
    paths.forEach((p) => ribbon(this, p, 2.2, H, dm, { lift: 0.06, uvScale: 3 }));

    // tall golden grass everywhere except the paths
    grassField(this, {
      x0: -140, z0: -230, x1: 140, z1: 50, heightAt: H, density: 0.55, height: 1.05, width: 0.07, color: 0xd8b25a, tint: [0.8, 1.2], sway: 0.22, chunk: 28, seed: 8,
      avoid: (x, z) => paths.some((p) => distToPath(x, z, p) < 1.6) || (Math.abs(x + 60) < 5 && Math.abs(z + 74) < 5),
    });
    particles(this, { count: 300, size: 0.05, color: 0xfff0c0, box: 36, height: 8, fall: 0.03, drift: 1.2, opacity: 0.8 });

    // repeated telephone poles marching to the horizon
    const poles = [];
    for (let i = 0; i < 24; i++) { const x = -260 + i * 24, z = -40 - i * 2.5; poles.push([x, H(x, z), z, 0.1]); telephonePole(this, x, H(x, z), z, 0.1); }
    wires(this, poles, 1.1);

    // repeated silos & barns in the distance (identical, evenly spaced)
    const silo = [[0, 0, 0, 4, 12, 4, 0xb9b4a6, 'cyl'], [0, 12, 0, 4.3, 2.2, 4.3, 0x8a8478, 'cone']];
    for (let i = 0; i < 6; i++) b.prop(silo, -180 + i * 70, H(-180 + i * 70, -300) - 1, -300, 0, { blob: false });
    const barn = (x, z, r) => {
      const y = H(x, z);
      b.box(x, y - 1, z, 9, 6, 12, b.mat('barn', { map: woodTex(0xa8463a, 6, 'barnwood'), texScale: [3, 3] }), { rotY: r });
      b.add(gableRoofGeo(9, 12, 3.4, 0.4), b.mat('barnroof', { map: roofTex(0x5d5550) }), { x, y: y + 5, z, rotY: r });
    };
    barn(170, -160, 0.4); barn(-200, -90, -0.3);
    // distant tree lines & building silhouettes
    const tl = [];
    for (let i = 0; i < 40; i++) { const x = -300 + i * 15, z = -360 + Math.sin(i) * 6; tl.push([x, H(x, z), z, 0, 1.2 + (i % 3) * 0.2]); }
    for (let i = 0; i < 20; i++) { const x = 220 + Math.sin(i) * 5, z = -250 + i * 16; tl.push([x, H(x, z), z, 0, 1.3]); }
    trees(this, tl, { kind: 'poplar', leaf: 0x6a7a3a, cast: false });
    const sil = b.mat('sil', { color: 0x9a8a7a, roughness: 1 });
    for (let i = 0; i < 7; i++) b.box(-260 + i * 90, -2, 380, 14 + (i % 3) * 8, 18 + (i % 4) * 10, 10, sil, { collide: false, ao: false });

    // ---------- small discoverable structures ----------
    // shed with a trapdoor
    const sx = -66, sz = -74, sy = H(sx, sz);
    const wood = b.mat('shed', { map: woodTex(0x9a7a5a, 5), texScale: [2, 2] });
    b.box(sx, sy - 0.5, sz, 5.2, 0.5, 4.2, wood, { surface: 'wood', ao: false });
    b.room(sx - 2.5, sz - 2, sx + 2.5, sz + 2, sy, 2.6, { wall: wood, thick: 0.15, openings: { e: [{ at: 2, w: 1.0, h: 2.05 }] } });
    b.add(gableRoofGeo(5.3, 4.3, 1.4, 0.3), b.mat('shedroof', { map: roofTex(0x5a4a40) }), { x: sx, y: sy + 2.6, z: sz, rotY: Math.PI / 2 });
    createDoor(this, { x: sx + 2.5 + 0.075, y: sy, z: sz, rotY: Math.PI / 2, color: 0x8a6a4a, kind: 'flat', w: 0.95 });
    b.prop(F.shelf(0x7a5a3a, 1.2, 1.6), sx - 2.3, sy, sz + 0.5, Math.PI / 2, { collide: true });
    b.prop([[0, 0, 0, 0.7, 0.7, 0.5, 0x6a7f8a]], sx - 1.6, sy, sz - 1.5, 0.3, { collide: true });
    const trap = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.04, 1.1), makeMaterial({ map: woodTex(0x7a5a3a, 3, 'trap'), vertexColors: false }));
    trap.position.set(sx + 0.3, sy + 0.02, sz + 0.6);
    this.group.add(trap);
    addPortal(this, trap, { prompt: 'Open the trapdoor', target: 'pool', spawn: 'from-shed', style: 'light', color: 0xcff6f6 });
    texturedPlane(this, textTex(['it smells like', 'chlorine down there'], { w: 256, h: 128, bg: '#efe6d0', fg: '#3a3a4a', font: '26px "Comic Sans MS", cursive' }), sx - 2.42, sy + 1.6, sz - 1.0, 0.6, 0.3, Math.PI / 2);

    // bus stop
    const bx = 84, bz = -94, by = H(bx, bz);
    const metal = b.mat('busmetal', { color: 0x6f8aa0, roughness: 0.5, metalness: 0.3 });
    b.box(bx, by - 0.3, bz, 5, 0.32, 2.4, b.mat('busslab', { map: concreteTex(0xb5b1a8) }), { ao: false, surface: 'concrete' });
    b.box(bx, by, bz - 1.1, 4.4, 2.4, 0.08, b.mat('busglass', { color: 0xcfe6f2, transparent: true, opacity: 0.35, roughness: 0.1 }), {});
    for (const ox of [-2.2, 2.2]) b.box(bx + ox, by, bz - 1.1, 0.1, 2.5, 0.1, metal, { collide: false });
    b.box(bx, by + 2.5, bz - 0.5, 4.8, 0.1, 1.6, metal, { collide: false, ao: false });
    b.prop(F.bench(0x8a6a4a, 0x555555), bx, by, bz - 0.7, 0, { collide: true });
    b.prop([[0, 0, 0, 0.08, 2.6, 0.08, 0x777777], [0, 2.2, 0, 0.6, 0.6, 0.04, 0x2f6ab0]], bx + 3, by, bz, 0, { collide: true });
    texturedPlane(this, textTex(['BUS', 'ROUTE 0'], { w: 256, h: 256, bg: '#2f6ab0', fg: '#ffffff', font: 'bold 64px sans-serif' }), bx + 3, by + 2.5, bz + 0.03, 0.56, 0.56);
    const stop = hitbox(this, bx, by, bz - 0.7, 2, 1.2, 1);
    let waiting = false;
    this.addInteractable({
      mesh: stop, prompt: 'Wait for the bus',
      use: async (game) => {
        if (waiting) return;
        waiting = true;
        game.ui.caption('You sit down and wait. The wind moves the grass in one direction.', { time: 3.5 });
        game.player.frozen = true;
        setTimeout(() => game.audio.sfx('elevHum'), 2200);
        setTimeout(() => { waiting = false; game.world.goTo('apartments', 'from-bus', { from: this.id, style: 'light', color: 0xffe2c0 }); }, 3800);
      },
    });
    stop.userData.interactable = this.interactables[this.interactables.length - 1];

    // the giant chair
    const cx = -70, cz = -156;
    b.prop(F.chair(0xe8e0d0, 0xc8b8a0).map((p) => p.map((v, i) => (i < 6 ? v * 9 : v))), cx, H(cx, cz) - 0.1, cz, 0.6, { collide: true });
    addExamine(this, hitbox(this, cx, H(cx, cz), cz, 4, 5, 4), { name: 'A very large chair', text: 'A chair big enough for someone you have never met. It faces the house you came from.', notes: 'Almond Fields · west' });

    // staircase that leads nowhere (climbable)
    const stx = 58, stz = -14, sty = H(stx, stz);
    const conc = b.mat('stairs', { map: concreteTex(0xd8d2c4), texScale: [1, 1] });
    b.stairs(stx, stz, sty, 1.6, 12, 0.25, 0.4, '+x', conc, { surface: 'concrete' });
    b.box(stx + 4.8 + 0.8, sty, stz, 1.6, 3.0, 1.6, conc, { surface: 'concrete' });
    for (const s of [-1, 1]) b.box(stx + 2.4, sty, stz + s * 0.85, 4.8, 0.1, 0.06, conc, { collide: false, ao: false });
    addExamine(this, hitbox(this, stx + 5.6, sty + 3, stz, 1.6, 0.6, 1.6), { name: 'Stairs to nowhere', text: 'From up here you can see the poles go on forever. Something small is waving from very far away.', notes: 'Almond Fields · east', prompt: 'Look around' });

    // TV in the grass, showing color bars
    const tx = 22, tz = -62, ty = H(tx, tz);
    b.prop(F.tvOld(), tx, ty, tz, -0.5, { collide: true });
    const scr = texturedPlane(this, colorBarsTex(), tx + 0.28 * Math.sin(-0.5) * -1, ty + 0.78, tz + 0.29 * Math.cos(-0.5), 0.6, 0.45, -0.5, { unlit: true, emissive: true });
    scr.position.set(tx + Math.sin(-0.5) * 0.29, ty + 0.78, tz + Math.cos(-0.5) * 0.29);
    this.game.audio.positional(scr, { kind: 'hum', base: 60, volume: 0.25, ref: 1.5 });
    addExamine(this, scr, { name: 'Television in the field', text: 'It is plugged into nothing. The picture is perfectly clear.', notes: 'Almond Fields' });

    // mushroom with an eye
    const mx = -18, mz = -96, my = H(mx, mz);
    b.prop([[0, 0, 0, 0.35, 0.8, 0.35, 0xf4efe0, 'cyl'], [0, 0.6, 0, 1.6, 0.9, 1.6, 0xd8382e, 'sphere']], mx, my, mz, 0, { collide: true });
    const eye = texturedPlane(this, eyeTex(), mx, my + 1.05, mz + 0.79, 0.6, 0.36, 0, { unlit: true, alpha: true });
    this.onUpdate(() => { const c = this.game.camera.position; eye.lookAt(c.x, eye.position.y, c.z); });
    addExamine(this, hitbox(this, mx, my, mz, 1.6, 1.6, 1.6), { name: 'Mushroom that watches', text: 'It blinks slowly, the way a cat does when it trusts you.', notes: 'Almond Fields · the first odd thing' });

    // well with a note
    const wx = -30, wz = 10, wy = H(wx, wz);
    b.prop([[0, 0, 0, 1.8, 0.9, 1.8, 0x9a958a, 'cyl'], [-0.8, 0.9, 0, 0.1, 1.4, 0.1, 0x6a4a30], [0.8, 0.9, 0, 0.1, 1.4, 0.1, 0x6a4a30], [0, 2.2, 0, 2.0, 0.5, 1.2, 0x7a4a3a]], wx, wy, wz, 0, { collide: true });
    addNote(this, hitbox(this, wx, wy + 0.8, wz, 1.9, 0.4, 1.9), { title: 'Scratched on the well', text: 'I dropped a coin in here when I was small.\nI never heard it land.\nI think it is still falling.', prompt: 'Look into the well' });

    // door back to the starting zone (a frame standing in the grass)
    const fx = 6, fz = 30;
    createDoor(this, { x: fx, y: H(fx, fz) - 0.02, z: fz, rotY: Math.PI, freeStanding: true, target: { level: 'starting', spawn: 'door' }, glimpse: 0xd6ecff, label: 'Go back', kind: 'flat' });

    // hedge maze gate at the far end of the main path
    const gx = 0, gz = -196, gy = H(gx, gz);
    const stone = b.mat('gatestone', { map: plasterTex(0xd9d2c2, 'stone'), texScale: [1.5, 1.5] });
    b.box(gx - 2.1, gy - 0.3, gz, 1, 3.6, 1, stone);
    b.box(gx + 2.1, gy - 0.3, gz, 1, 3.6, 1, stone);
    b.box(gx, gy + 3.3, gz, 5.2, 0.5, 1, stone, { collide: false });
    const hedgeM = b.mat('gatehedge', { color: 0x3f6a34, roughness: 1 });
    b.box(gx - 10, gy - 0.3, gz, 14, 3.2, 1.4, hedgeM);
    b.box(gx + 10, gy - 0.3, gz, 14, 3.2, 1.4, hedgeM);
    createDoor(this, { x: gx, y: gy, z: gz, rotY: 0, w: 3.1, h: 2.9, frame: false, color: 0x2e3a2e, kind: 'flat', target: { level: 'maze', spawn: 'default' }, glimpse: 0xdfffd8, label: 'Enter the garden' });

    // spawns
    this.addSpawn('default', [0, H(0, 18), 18], yawTo(0, -1));
    this.addSpawn('from-maze', [0, H(0, -190), -190], yawTo(0, 1));
  }
}
