// LEVEL 10 — Broken Reality: the weirdcore heart of the dream. Platforms in a
// void under a sky of eyes, an office full of CRTs, floating desktop windows,
// wrong signs, watching mushrooms and doors that float in the air.
import * as THREE from 'three';
import { Level } from './Level.js';
import { house, F, texturedPlane } from './common/Props.js';
import { checkerTex, carpetTex, plasterTex, dialogTex, screenTex, textTex, eyeTex, eyesPatternTex, rainbowTex, grassTex, colorBarsTex, staticTex, gridTex, rng } from '../utils/Textures.js';
import { floater, halo, shyObject } from '../environment/EnvironmentEffects.js';
import { particles } from '../environment/WeatherSystem.js';
import { createDoor } from '../interaction/Door.js';
import { addExamine, addNote, hitbox, yawTo } from '../interaction/Interactable.js';
import { zone } from '../interaction/TriggerZone.js';
import { makeMaterial } from '../core/Materials.js';

const MESSAGES = ['YOU HAVE BEEN HERE.', 'THIS ROOM IS NOT EMPTY.', 'PLEASE REMAIN WHERE YOU ARE.', 'DO YOU REMEMBER THIS PLACE?', 'THE DOOR WAS ALWAYS OPEN.'];

export default class BrokenReality extends Level {
  build() {
    this.outdoor = true;
    const b = this.b, g = this.game;
    this.neighbors = ['hallways', 'starting', 'frozen'];
    this.surface = 'tile';
    this.killY = -25;
    const chk = b.mat('bchk', { map: checkerTex(0x2b3fa8, 0xeef0ff, 4, 'weird'), roughness: 0.4, texScale: [3, 3] });
    const chk2 = b.mat('bchk2', { map: checkerTex(0xd84a8a, 0xfff0f6, 4, 'weird2'), roughness: 0.4, texScale: [2, 2] });
    const side = b.mat('bside', { map: gridTex('#0b1030', '#3a5bd9', 4), roughness: 0.6, texScale: [2, 2], emissive: 0x0a1040, emissiveIntensity: 0.5 });
    const office = b.mat('boffice', { map: plasterTex(0xd8cfb8, 'office'), texScale: [2, 2] });
    const carpet = b.mat('bcarpet', { map: carpetTex('mall'), texScale: [2, 2] });

    // ---------- platforms ----------
    const plat = (x, y, z, w, d, top = chk) => { b.box(x, y - 1.2, z, w, 1.17, d, side, { ao: false, collide: false }); b.box(x, y - 0.03, z, w - 0.04, 0.03, d - 0.04, top, { collide: false, ao: false }); this.addCollider(x - w / 2, y - 1.2, z - d / 2, x + w / 2, y, z + d / 2); };
    plat(0, 0, 0, 26, 26);
    plat(25, 0, 0, 24, 2.4);           // walkway east
    plat(46, 0, 0, 18, 18, chk2);      // garden island
    plat(0, 0, -24, 2.4, 22);          // walkway north
    plat(0, 0, -42, 14, 14);           // window island

    // ---------- the office of CRTs ----------
    const ox0 = -12, ox1 = -1, oz0 = -12, oz1 = -2;
    b.box((ox0 + ox1) / 2, 0, (oz0 + oz1) / 2, ox1 - ox0, 0.025, oz1 - oz0, carpet, { collide: false, ao: false });
    b.wall(ox0, oz0 - 0.1, ox1, oz0 - 0.1, 0, 3, office, { thick: 0.2 });
    b.wall(ox0 - 0.1, oz0, ox0 - 0.1, oz1, 0, 3, office, { thick: 0.2, openings: [{ at: 5, w: 1.8, h: 1.2, y0: 1 }] });
    b.wall(ox0, oz1 + 0.1, ox0 + 5, oz1 + 0.1, 0, 3, office, { thick: 0.2 });
    const kinds = ['desktop', 'text', 'eye', 'sky'];
    let si = 0;
    for (let i = 0; i < 3; i++) for (let k = 0; k < 4; k++) {
      const x = ox0 + 2 + k * 2.4, z = oz0 + 2.2 + i * 2.6;
      b.prop(F.desk(0xc8c0a8, 0x8a8a8a), x, 0, z, 0, { collide: true });
      b.prop(F.crt(), x, 0.75, z - 0.05, 0, { blob: false });
      b.prop(F.chair(0x3a3a4a, 0x2a2a2a), x, 0, z + 0.7, Math.PI);
      const kind = kinds[(si++) % 4];
      const scr = texturedPlane(this, screenTex(kind, si), x, 0.94, z + 0.08, 0.32, 0.25, 0, { unlit: true, emissive: true });
      if (si % 3 === 0) addExamine(this, scr, { name: 'CRT ' + si, text: MESSAGES[si % MESSAGES.length], notes: 'Broken Reality · office', prompt: 'Read the screen' });
    }
    // big screen on the back wall
    const big = texturedPlane(this, screenTex('eye', 99), (ox0 + ox1) / 2, 1.9, oz0 + 0.02, 3.2, 2.4, 0, { unlit: true, emissive: true });
    addExamine(this, big, { name: 'The big screen', text: 'An eye, filmed from very close. It is not scary. It looks like it has been waiting for you, and is relieved.', notes: 'Broken Reality · office', prompt: 'Look at it' });
    const crtHum = new THREE.Object3D(); crtHum.position.set(-6, 1, -7); this.group.add(crtHum);
    g.audio.positional(crtHum, { kind: 'static', volume: 0.05, ref: 3, filter: ['highpass', 5000] });
    // TV-headed figure (watches when you are not looking)
    const fig = new THREE.Group();
    const body = makeMaterial({ color: 0x3a4a8a, vertexColors: false }), skin = makeMaterial({ color: 0xd8c8b8, vertexColors: false }), tvM = makeMaterial({ color: 0xd8d2c0, vertexColors: false });
    this.disposables.push(body, skin, tvM);
    const add = (geo, m, x, y, z) => { const me = new THREE.Mesh(geo, m); me.position.set(x, y, z); me.castShadow = true; fig.add(me); return me; };
    add(new THREE.BoxGeometry(0.5, 0.7, 0.28), body, 0, 1.15, 0);
    add(new THREE.BoxGeometry(0.2, 0.8, 0.22), body, -0.13, 0.4, 0); add(new THREE.BoxGeometry(0.2, 0.8, 0.22), body, 0.13, 0.4, 0);
    add(new THREE.BoxGeometry(0.14, 0.62, 0.14), skin, -0.33, 1.15, 0); add(new THREE.BoxGeometry(0.14, 0.62, 0.14), skin, 0.33, 1.15, 0);
    add(new THREE.BoxGeometry(0.55, 0.45, 0.45), tvM, 0, 1.75, 0);
    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.32), new THREE.MeshBasicMaterial({ map: colorBarsTex() }));
    face.position.set(0, 1.75, 0.231); fig.add(face);
    this.disposables.push(face.material);
    fig.position.set(6, 0, -6);
    this.group.add(fig);
    shyObject(this, fig, [[6, 0, -6, 0.6], [8, 0, 4, -2.2], [-4, 0, 8, 2.8], [4, 0, -10, 0]]);
    addExamine(this, hitbox(this, 6, 0, -6, 0.8, 2, 0.6), { name: 'Someone with a television head', text: 'It does not move while you look at it. The color bars flicker a little, like a smile.', notes: 'Broken Reality', journal: true });

    // ---------- floating desktop windows ----------
    const dialogs = [
      ['Window', 'are you real?\nare you real?', ['YES', 'NO']], ['System', 'Memory not found.\nUsing a nicer one.', ['OK']], ['Dream.exe', 'Loading dream...\n99%', ['WAIT']],
      ['Message', MESSAGES[0], ['OK']], ['Message', MESSAGES[1], ['OK']], ['Message', MESSAGES[2], ['STAY']], ['Message', MESSAGES[3], ['YES']],
      ['????', '?????', ['?????']], ['Warning', 'You are about to\nremember something.', ['OK', 'LATER']], ['Notice', 'The outside is\ninside today.', ['OK']],
    ];
    const R = rng(1010);
    dialogs.forEach(([title, body, btns], i) => {
      const tex = dialogTex(title, body, { buttons: btns, key: 'dlg' + i, accent: ['#3a5bd9', '#d94a8a', '#2a9a7a', '#8a5ad9'][i % 4], icon: ['?', '!', 'i', '?'][i % 4] });
      const m = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, transparent: true, opacity: 0.96 });
      const s = 2.2 + R() * 2.5;
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(s * 1.5, s), m);
      const a = i / dialogs.length * Math.PI * 2;
      mesh.position.set(Math.cos(a) * (16 + R() * 10), 3 + R() * 9, Math.sin(a) * (16 + R() * 10) - 6);
      mesh.lookAt(0, mesh.position.y * 0.5, 0);
      mesh.castShadow = true;
      this.group.add(mesh);
      this.disposables.push(m, mesh.geometry);
      floater(this, mesh, { amp: 0.4 + R() * 0.5, speed: 0.2 + R() * 0.3, spin: 0 });
    });
    // giant cursor
    const cs = new THREE.Shape();
    [[0, 0], [0, -3], [0.7, -2.3], [1.2, -3.4], [1.7, -3.2], [1.2, -2.1], [2.2, -2.1]].forEach(([x, y], i) => (i ? cs.lineTo(x, y) : cs.moveTo(x, y)));
    cs.closePath();
    const cursor = new THREE.Mesh(new THREE.ExtrudeGeometry(cs, { depth: 0.3, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 1 }), makeMaterial({ color: 0xffffff, vertexColors: false, emissive: 0x222222 }));
    cursor.position.set(10, 9, -14); cursor.castShadow = true;
    this.group.add(cursor);
    this.disposables.push(cursor.geometry, cursor.material);
    floater(this, cursor, { amp: 0.8, speed: 0.3, spin: 0.15 });

    // ---------- wrong signs ----------
    const sign = (txt, x, z, rot, bg = '#1a7a3a') => { b.prop([[0, 0, 0, 0.08, 2.2, 0.08, 0x666666]], x, 0, z, rot, { blob: false, collide: true }); texturedPlane(this, textTex(txt, { w: 384, h: 96, bg, fg: '#fff', font: 'bold 46px sans-serif' }), x, 2.2, z, 1.2, 0.3, rot, { emissive: true }); };
    sign('EXIT →', 11, 11, -Math.PI / 4);
    sign('↑ UP', -11, 11, Math.PI / 4, '#2a4a9a');
    sign('ROOM 0', 3, -11, 0, '#7a2a6a');
    addExamine(this, hitbox(this, 11, 0, 11, 1.2, 2.5, 1.2), { name: 'EXIT sign', text: 'The arrow points at the edge of the floor. Beyond it there is only sky with eyes in it.', notes: 'Broken Reality · signs' });

    // ---------- garden island: the white house that is watched ----------
    const GX = 46, GZ = 0;
    b.box(GX, 0, GZ, 17.6, 0.03, 17.6, b.mat('bgrass', { map: grassTex(0x5aa040, 'weirdgrass'), texScale: [3, 3] }), { collide: false, ao: false, surface: 'grass' });
    house(this, { x: GX + 1, z: GZ - 4, y: 0, rotY: -Math.PI / 2, w: 5, d: 4.5, h: 4.6, floors: 2, wall: 0xf2f2f0, roof: 0x5a5a5e, sky: 0x101018 });
    const eyesWall = new THREE.Mesh(new THREE.PlaneGeometry(40, 18), new THREE.MeshBasicMaterial({ map: eyesPatternTex(), fog: false }));
    eyesWall.material.map = eyesWall.material.map.clone(); eyesWall.material.map.needsUpdate = true; eyesWall.material.map.repeat.set(3, 1.4);
    eyesWall.position.set(GX + 14, 6, GZ); eyesWall.rotation.y = -Math.PI / 2;
    this.group.add(eyesWall);
    this.disposables.push(eyesWall.geometry, eyesWall.material, eyesWall.material.map);
    addExamine(this, hitbox(this, GX + 1, 0, GZ - 4, 5, 4.6, 4.5), { name: 'The watched house', text: 'A plain white house. Every eye in the sky behind it is looking at it fondly, the way you look at a photo of home.', notes: 'Broken Reality · garden island', prompt: 'Look at the house' });
    // mushrooms with eyes
    for (const [x, z, s] of [[GX - 5, GZ + 5, 1], [GX - 3, GZ + 6.5, 0.6], [GX - 6.5, GZ + 3, 0.7], [GX + 4, GZ + 6, 0.9]]) {
      b.prop([[0, 0, 0, 0.35 * s, 0.8 * s, 0.35 * s, 0xf4efe0, 'cyl'], [0, 0.6 * s, 0, 1.6 * s, 0.9 * s, 1.6 * s, 0xd8382e, 'sphere']], x, 0, z, 0, { collide: true });
      const e = texturedPlane(this, eyeTex(), x, 1.05 * s, z, 0.6 * s, 0.36 * s, 0, { unlit: true, alpha: true });
      this.onUpdate(() => { const c = g.camera.position; e.lookAt(c.x, e.position.y, c.z); e.position.set(x + Math.sin(e.rotation.y) * 0.8 * s, 1.05 * s, z + Math.cos(e.rotation.y) * 0.8 * s); });
    }
    // rainbow arc
    const rb = new THREE.Mesh(new THREE.TorusGeometry(14, 1.4, 6, 48, Math.PI), new THREE.MeshBasicMaterial({ map: rainbowTex(), transparent: true, opacity: 0.55, depthWrite: false, fog: false }));
    rb.position.set(GX, -2, GZ - 14); this.group.add(rb);
    this.disposables.push(rb.geometry, rb.material);
    // flower-headed figure (a sunflower on a coat stand, standing like a person)
    b.prop([[0, 0, 0, 0.1, 1.5, 0.1, 0x2a2a2a, 'cyl'], [0, 0, 0, 0.6, 0.06, 0.6, 0x2a2a2a, 'cyl'], [0, 1.0, 0, 0.6, 0.55, 0.3, 0xe8a0b8]], GX - 4, 0, GZ - 2, 0, { collide: true });
    const daisy = new THREE.Group();
    for (let i = 0; i < 14; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); p.scale.set(1, 0.4, 2.2); const a = i / 14 * Math.PI * 2; p.position.set(Math.cos(a) * 0.36, Math.sin(a) * 0.36, 0); p.rotation.z = a; p.rotation.y = Math.PI / 2; daisy.add(p); this.disposables.push(p.geometry, p.material); }
    const center = new THREE.Mesh(new THREE.CircleGeometry(0.2, 16), new THREE.MeshBasicMaterial({ map: eyeTex('#f2c94c', 'eyeY') })); center.position.z = 0.05; daisy.add(center);
    this.disposables.push(center.geometry, center.material);
    daisy.position.set(GX - 4, 1.85, GZ - 2); this.group.add(daisy);
    this.onUpdate(() => { const c = g.camera.position; daisy.lookAt(c.x, daisy.position.y, c.z); });
    addExamine(this, hitbox(this, GX - 4, 0, GZ - 2, 0.8, 2.2, 0.8), { name: 'Flower person', text: 'It turns to face you. Not to watch. To be polite.', notes: 'Broken Reality · garden island' });

    // ---------- the window island: stairs into the air, floating doors ----------
    const st = b.mat('bstair', { map: checkerTex(0xffffff, 0x9a9ab0, 2, 'stairchk'), texScale: [1, 1] });
    b.stairs(0, -36, 0, 2, 20, 0.3, 0.5, '-z', st, { surface: 'tile', slab: 0.3 });
    b.box(0, 6 - 0.3, -47.6, 4, 0.3, 3.2, st, { surface: 'tile' });
    createDoor(this, { x: 0, y: 6, z: -48.8, rotY: 0, freeStanding: true, color: 0xf2f2f2, kind: 'flat', target: { level: 'hallways', spawn: 'default' }, glimpse: 0xfff4e0, label: 'Open' });
    texturedPlane(this, textTex(MESSAGES[4], { w: 768, h: 96, bg: null, fg: '#ffffff', font: 'bold 44px monospace' }), 0, 8.8, -49.2, 4, 0.5, 0, { unlit: true, alpha: true });
    createDoor(this, { x: -5, y: 0, z: -45, rotY: Math.PI / 4, freeStanding: true, color: 0xf2c94c, kind: 'panel', target: { level: 'starting', spawn: 'house' }, glimpse: 0xcfe8ff, label: 'Go home' });
    createDoor(this, { x: 5, y: 0, z: -45, rotY: -Math.PI / 4, freeStanding: true, color: 0xdfe8f6, kind: 'flat', target: { level: 'frozen', spawn: 'default' }, glimpse: 0xeef4ff, label: 'Somewhere quiet' });
    // a floating, unreachable door
    const fd = new THREE.Group();
    const fdm = makeMaterial({ color: 0xffffff, vertexColors: false });
    this.disposables.push(fdm);
    const fdo = new THREE.Mesh(new THREE.BoxGeometry(1, 2.1, 0.08), fdm); fdo.position.y = 1.05; fdo.castShadow = true; fd.add(fdo);
    fd.position.set(-14, 7, -30); fd.rotation.z = 0.3;
    this.group.add(fd);
    floater(this, fd, { amp: 0.7, speed: 0.25, spin: 0.08 });

    particles(this, { count: 260, size: 0.08, color: 0x9ab8ff, box: 50, height: 20, fall: 0, drift: 1.5, opacity: 0.8, additive: true });
    halo(this, -6, 3.5, -7, 8, '#6a8aff', 0.2);
    const pl = new THREE.PointLight(0x7a9aff, 10, 22, 1.4); pl.position.set(-6, 2.6, -7); this.group.add(pl);

    zone(this, 0, 0, 0, 26, 4, 26, { once: true, onEnter: (gm) => gm.ui.caption(MESSAGES[0], { mono: true, time: 3.5 }) });
    zone(this, 46, 0, 0, 18, 4, 18, { once: true, onEnter: (gm) => gm.ui.caption(MESSAGES[1], { mono: true, time: 3.5 }) });
    zone(this, 0, 0, -42, 14, 8, 14, { once: true, onEnter: (gm) => gm.ui.caption(MESSAGES[3], { mono: true, time: 3.5 }) });

    this.addSpawn('default', [4, 0, 6], yawTo(-1, -1));
    this.addSpawn('from-mall', [4, 0, 6], yawTo(-1, -1));
    this.onFall = () => this.game.ui.caption(MESSAGES[2], { mono: true });
  }
}
