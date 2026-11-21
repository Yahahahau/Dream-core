// Elevator car with sliding doors, call button and a floor panel.
import * as THREE from 'three';
import { makeMaterial } from '../core/Materials.js';
import { makeInteractable } from '../player/InteractionSystem.js';
import { concreteTex, textTex } from '../utils/Textures.js';

export function createElevator(level, o) {
  const { id, x, y = 0, z, rotY = 0, destinations = [], label = '', wallColor = 0xb9b4a8, doorColor = 0x9da3a6, inside = 'metal' } = o;
  const game = level.game, b = level.b;
  const c = Math.cos(rotY), s = Math.sin(rotY);
  const L = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  const W = 2.2, D = 2.2, H = 2.6;
  const wallM = b.mat('__elev_wall' + wallColor, { map: concreteTex(wallColor), color: 0xffffff, roughness: 0.35, metalness: inside === 'metal' ? 0.12 : 0, texScale: [1.5, 1.5] });
  const floorM = b.mat('__elev_floor', { map: concreteTex(0x6d6a66), roughness: 0.6, texScale: [1, 1] });
  // shell
  let p;
  p = L(0, 0); b.box(p[0], y - 0.2, p[1], W + 0.4, 0.2, D + 0.36, floorM, { rotY, surface: 'metal', ao: false });
  p = L(0, -D / 2 - 0.1); b.box(p[0], y, p[1], W + 0.4, H, 0.2, wallM, { rotY, floorY: y, ceilY: y + H });
  p = L(-W / 2 - 0.1, 0); b.box(p[0], y, p[1], 0.2, H, D, wallM, { rotY, floorY: y, ceilY: y + H });
  p = L(W / 2 + 0.1, 0); b.box(p[0], y, p[1], 0.2, H, D, wallM, { rotY, floorY: y, ceilY: y + H });
  p = L(0, 0); b.box(p[0], y + H, p[1], W + 0.4, 0.15, D + 0.2, wallM, { rotY, collide: false, ao: false });
  // front pieces around the 1.2m opening
  for (const side of [-1, 1]) { p = L(side * 0.85, D / 2 + 0.1); b.box(p[0], y, p[1], 0.5, H, 0.2, wallM, { rotY }); }
  p = L(0, D / 2 + 0.1); b.box(p[0], y + 2.25, p[1], 1.2, H - 2.25, 0.2, wallM, { rotY, collide: false });

  const root = new THREE.Group();
  root.position.set(x, y, z); root.rotation.y = rotY;
  level.group.add(root);
  // ceiling light
  const lightM = new THREE.MeshBasicMaterial({ color: 0xfff3dc });
  const lp = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.2), lightM);
  lp.rotation.x = Math.PI / 2; lp.position.set(0, H - 0.01, 0); root.add(lp);
  level.disposables.push(lightM, lp.geometry);

  // doors
  const dm = makeMaterial({ color: doorColor, roughness: 0.3, metalness: 0.6, vertexColors: false });
  level.disposables.push(dm);
  const doors = [-1, 1].map((side) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.62, 2.25, 0.05), dm);
    m.position.set(side * 0.3, 1.125, D / 2 + 0.02);
    root.add(m); return m;
  });
  const dc = L(0, D / 2 + 0.05);
  const col = level.addCollider(dc[0] - 0.65, y, dc[1] - 0.65, dc[0] + 0.65, y + 2.25, dc[1] + 0.65);
  // shrink collider to the door plane along the facing axis
  if (Math.abs(c) > 0.5) { col.min[2] = dc[1] - 0.06; col.max[2] = dc[1] + 0.06; } else { col.min[0] = dc[0] - 0.06; col.max[0] = dc[0] + 0.06; }

  // indicator above door (outside)
  const ind = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.18), new THREE.MeshBasicMaterial({ map: textTex(label || '▲▼', { w: 256, h: 96, bg: '#1b1208', fg: '#ffb347', font: 'bold 60px monospace' }) }));
  ind.position.set(0, 2.42, D / 2 + 0.21); root.add(ind);
  level.disposables.push(ind.material, ind.geometry);

  const btnM = new THREE.MeshBasicMaterial({ color: 0xffd27a });
  level.disposables.push(btnM);
  const callBtn = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.2, 0.04), btnM);
  callBtn.position.set(0.85, 1.15, D / 2 + 0.22); root.add(callBtn);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.5, 0.25), new THREE.MeshStandardMaterial({ color: 0x9a9a9a, metalness: 0.7, roughness: 0.3, emissive: 0x332200, emissiveIntensity: 0.3 }));
  panel.position.set(W / 2 - 0.03, 1.2, D / 2 - 0.45); root.add(panel);
  level.disposables.push(panel.material);

  const el = {
    id, root, open: false, amount: 0, riding: false,
    setOpen(v) { if (el.open !== v) { el.open = v; game.audio.sfx(v ? 'elevOpen' : 'elevClose', root.position); } },
    arrive() { el.amount = 0; el.open = false; setTimeout(() => { game.audio.sfx('ding', root.position); el.setOpen(true); }, 700); },
    async choose() {
      if (el.riding) return;
      const opts = destinations.map((d) => d.label);
      const pick = await game.ui.choice(label ? `ELEVATOR — ${label}` : 'ELEVATOR', opts);
      if (pick < 0) return;
      const d = destinations[pick];
      el.riding = true;
      el.setOpen(false);
      game.player.frozen = true;
      setTimeout(() => { game.audio.sfx('elevHum'); game.cam.shake = 0.6; }, 900);
      setTimeout(() => {
        el.riding = false;
        game.world.goTo(d.level || level.id, d.spawn, { from: level.id, style: 'dark' });
      }, 2800);
    },
  };
  makeInteractable(callBtn, { prompt: 'Call elevator', use: () => { game.audio.sfx('ding', root.position); el.setOpen(true); }, range: 2.4 });
  makeInteractable(panel, { prompt: 'Choose floor', use: () => el.choose(), range: 2.6 });
  level.addInteractable(callBtn.userData.interactable);
  level.addInteractable(panel.userData.interactable);

  level.onUpdate((dt) => {
    el.amount += ((el.open ? 1 : 0) - el.amount) * (1 - Math.exp(-4 * dt));
    doors[0].position.x = -0.3 - el.amount * 0.56;
    doors[1].position.x = 0.3 + el.amount * 0.56;
    col.enabled = el.amount < 0.7;
  });
  level.elevators ||= {};
  level.elevators[id] = el;
  // spawn point just inside, facing the doors
  const sp = L(0, -0.2);
  level.addSpawn(`elev-${id}`, [sp[0], y + 0.02, sp[1]], rotY + Math.PI);
  level.spawns[`elev-${id}`].onArrive = () => el.arrive();
  return el;
}
