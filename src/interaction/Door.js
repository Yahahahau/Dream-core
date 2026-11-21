// Hinged doors. A door can simply open/close, be locked with a message, or act
// as a portal into another location (with a glimpse of light behind it).
import * as THREE from 'three';
import { makeMaterial } from '../core/Materials.js';
import { doorTex, glowTex } from '../utils/Textures.js';
import { makeInteractable } from '../player/InteractionSystem.js';

const _box = new THREE.Box3();

export function createDoor(level, o) {
  const {
    x, y = 0, z, rotY = 0, w = 0.95, h = 2.1, t = 0.06,
    color = 0xe9e3d3, kind = 'panel', frame = true, frameColor = 0xf4f1ea,
    swing = 1, openAngle = 1.75, target = null, locked = null, label = null,
    glimpse = 0xfff6e0, onOpen = null, freeStanding = false, autoClose = false, sound = 'creak',
  } = o;
  const game = level.game;
  const root = new THREE.Group();
  root.position.set(x, y, z);
  root.rotation.y = rotY;
  level.group.add(root);

  const pivot = new THREE.Group();
  pivot.position.set(-w / 2, 0, 0);
  root.add(pivot);
  const mat = makeMaterial({ map: doorTex(color === 0xe9e3d3 ? color : color, kind), color: 0xffffff, roughness: 0.6, vertexColors: false });
  level.disposables.push(mat);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(w - 0.02, h - 0.02, t), mat);
  panel.position.set(w / 2, h / 2, 0);
  panel.castShadow = true; panel.receiveShadow = true;
  pivot.add(panel);
  const knobMat = makeMaterial({ color: 0xc9b26a, roughness: 0.3, metalness: 0.8, vertexColors: false });
  level.disposables.push(knobMat);
  for (const side of [1, -1]) {
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), knobMat);
    knob.position.set(w - 0.12, h * 0.47, side * (t / 2 + 0.03));
    pivot.add(knob);
  }

  // frame (static, merged)
  const b = level.b;
  const fm = b.mat('__doorframe' + frameColor, { color: frameColor, roughness: 0.7, vertexColors: true });
  const fw = 0.08, fd = freeStanding ? 0.16 : 0.26;
  const c = Math.cos(rotY), s = Math.sin(rotY);
  const local = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  if (frame) {
    const [ax, az] = local(-w / 2 - fw / 2, 0), [bx, bz] = local(w / 2 + fw / 2, 0), [hx, hz] = local(0, 0);
    b.box(ax, y, az, fw, h + fw, fd, fm, { rotY, collide: freeStanding });
    b.box(bx, y, bz, fw, h + fw, fd, fm, { rotY, collide: freeStanding });
    b.box(hx, y + h, hz, w + fw * 2, fw, fd, fm, { rotY, collide: false, ao: false });
    if (freeStanding) b.blob(x, y, z, w + 0.6, 0.7);
  }

  // glimpse of light behind portal doors
  let glow = null;
  if (target) {
    const gm = new THREE.MeshBasicMaterial({ color: glimpse, transparent: true, opacity: 0, depthWrite: false, fog: false });
    glow = new THREE.Mesh(new THREE.PlaneGeometry(w, h), gm);
    glow.position.set(0, h / 2, -0.04 * swing);
    glow.rotation.y = swing > 0 ? 0 : Math.PI;
    root.add(glow);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex('#ffffff'), color: glimpse, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    halo.scale.set(w * 3, h * 1.8, 1);
    halo.position.set(0, h / 2, -0.4 * swing);
    root.add(halo);
    glow.userData.halo = halo;
    level.disposables.push(gm, glow.geometry, halo.material);
  }

  // closed-door collider
  root.updateMatrixWorld(true);
  _box.setFromObject(panel);
  const col = level.addCollider(_box.min.x, _box.min.y, _box.min.z, _box.max.x, _box.max.y, _box.max.z, null);

  const door = {
    root, pivot, panel, open: false, angle: 0, target, busy: false,
    toggle() {
      const lockMsg = typeof locked === 'function' ? locked() : locked;
      if (lockMsg) {
        game.ui.caption(lockMsg);
        game.audio.sfx('locked');
        return;
      }
      if (target && door.busy) return;
      door.open = !door.open;
      game.audio.sfx(door.open ? sound : 'close', root.position);
      if (door.open && onOpen) onOpen(door);
      if (door.open && target) {
        door.busy = true;
        game.player.frozen = true;
        setTimeout(() => {
          game.world.goTo(target.level, target.spawn || 'default', { from: level.id, style: target.style || 'light', color: glimpse })
            .then(() => { door.busy = false; door.open = false; door.angle = 0; });
        }, 650);
      }
      if (autoClose && door.open) setTimeout(() => { if (door.open) door.toggle(); }, autoClose * 1000);
    },
  };

  makeInteractable(panel, {
    prompt: () => (typeof locked === 'function' ? locked() : locked) ? (label || 'Open') : target ? (label || 'Enter') : door.open ? 'Close' : (label || 'Open'),
    use: () => door.toggle(),
    range: 2.6,
  });
  level.addInteractable(panel.userData.interactable);

  level.onUpdate((dt) => {
    const goal = door.open ? openAngle * swing : 0;
    door.angle += (goal - door.angle) * (1 - Math.exp(-5 * dt));
    pivot.rotation.y = door.angle;
    col.enabled = Math.abs(door.angle) < 0.35;
    if (glow) {
      const a = Math.min(1, Math.abs(door.angle) / 1.2);
      glow.material.opacity = a;
      glow.userData.halo.material.opacity = a * 0.7;
    }
  });
  return door;
}
