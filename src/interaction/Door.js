// Hinged doors built from a proper frame module: casing, stops and threshold,
// a slab with bevelled edges and hardware. A door can open/close, be locked
// with a message, or act as a portal into another location.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { makeMaterial } from '../core/Materials.js';
import { doorTex, glowTex } from '../utils/Textures.js';
import { makeInteractable } from '../player/InteractionSystem.js';

export function createDoor(level, o) {
  const {
    x, y = 0, z, rotY = 0, w = 0.95, h = 2.1, t = 0.05,
    color = 0xe9e3d3, kind = 'panel', frame = true, frameColor = 0xf4f1ea,
    swing = 1, openAngle = 1.75, target = null, locked = null, label = null,
    glimpse = 0xfff6e0, onOpen = null, freeStanding = false, autoClose = false, sound = 'creak', wallDepth = 0.22,
  } = o;
  const game = level.game;
  const root = new THREE.Group();
  root.position.set(x, y, z);
  root.rotation.y = rotY;
  level.group.add(root);

  const pivot = new THREE.Group();
  pivot.position.set(-w / 2, 0, 0);
  root.add(pivot);
  const mat = makeMaterial({ map: doorTex(color, kind), color: 0xffffff, roughness: 0.55, vertexColors: false });
  level.disposables.push(mat);
  // slab: 3 mm clearance to the frame on every side so nothing is coplanar
  const sw = w - 0.006, sh = h - 0.012;
  const slabGeo = new RoundedBoxGeometry(sw, sh, t, 2, 0.008);
  const panel = new THREE.Mesh(slabGeo, mat);
  panel.position.set(w / 2, sh / 2 + 0.008, 0);
  panel.castShadow = true; panel.receiveShadow = true;
  pivot.add(panel);
  level.disposables.push(slabGeo);
  const metal = makeMaterial({ color: 0xc9b26a, roughness: 0.3, metalness: 0.8, vertexColors: false });
  level.disposables.push(metal);
  for (const side of [1, -1]) {
    const rose = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.012, 14), metal);
    rose.rotation.x = Math.PI / 2; rose.position.set(w - 0.09, h * 0.47, side * (t / 2 + 0.006));
    const lever = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.018, 0.018), metal);
    lever.position.set(w - 0.13, h * 0.47, side * (t / 2 + 0.045));
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.04, 8), metal);
    neck.rotation.x = Math.PI / 2; neck.position.set(w - 0.09, h * 0.47, side * (t / 2 + 0.025));
    pivot.add(rose, lever, neck);
    level.disposables.push(rose.geometry, lever.geometry, neck.geometry);
  }
  for (const hy of [0.25, h - 0.25]) {
    const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.09, 8), metal);
    hinge.position.set(0, hy, t / 2 * 0.2); pivot.add(hinge); level.disposables.push(hinge.geometry);
  }

  // ---- frame module (static, merged): casing + head + stops + threshold ----
  const b = level.b;
  const fm = b.mat('__doorframe' + frameColor, { color: frameColor, roughness: 0.6 });
  const fw = 0.07, fd = freeStanding ? 0.16 : wallDepth + 0.04;
  const c = Math.cos(rotY), s = Math.sin(rotY);
  const local = (lx, lz) => [x + lx * c + lz * s, z - lx * s + lz * c];
  const frameCols = [];
  if (frame) {
    const [ax, az] = local(-w / 2 - fw / 2, 0), [bx, bz] = local(w / 2 + fw / 2, 0), [hx, hz] = local(0, 0);
    b.box(ax, y, az, fw, h, fd, fm, { rotY, collide: false, aoStrength: 0.2 });
    b.box(bx, y, bz, fw, h, fd, fm, { rotY, collide: false, aoStrength: 0.2 });
    b.box(hx, y + h, hz, w + fw * 2 + 0.06, fw + 0.02, fd + 0.03, fm, { rotY, collide: false, ao: false });
    // door stops on the swing side keep the slab from looking pasted into the frame
    const stopZ = -swing * (t / 2 + 0.012);
    for (const sx of [-1, 1]) { const [px, pz] = local(sx * (w / 2 - 0.008), stopZ); b.box(px, y + 0.02, pz, 0.016, h - 0.036, 0.02, fm, { rotY, collide: false, ao: false }); }
    { const [px, pz] = local(0, stopZ); b.box(px, y + h - 0.016, pz, w + 0.03, 0.016, 0.022, fm, { rotY, collide: false, ao: false }); }
    // threshold sits 1 cm proud of the floor
    { const [px, pz] = local(0, 0); b.box(px, y, pz, w + 0.04, 0.02, fd - 0.03, b.mat('__threshold', { color: 0x9a8a72, roughness: 0.5 }), { rotY, collide: false, ao: false }); }
    if (freeStanding) {
      frameCols.push(...level.addOBB(ax, y, az, fw, h, fd, rotY), ...level.addOBB(bx, y, bz, fw, h, fd, rotY));
      b.blob(x, y, z, w + 0.7, 0.8);
    }
  }

  // glimpse of light behind portal doors
  let glow = null;
  if (target) {
    const gm = new THREE.MeshBasicMaterial({ color: glimpse, transparent: true, opacity: 0, depthWrite: false, fog: false });
    glow = new THREE.Mesh(new THREE.PlaneGeometry(w, h), gm);
    glow.position.set(0, h / 2, -0.05 * swing);
    glow.rotation.y = swing > 0 ? 0 : Math.PI;
    glow.renderOrder = 3;
    root.add(glow);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex('#ffffff'), color: glimpse, transparent: true, opacity: 0, depthWrite: false, fog: false }));
    halo.scale.set(w * 2.6, h * 1.6, 1);
    halo.position.set(0, h / 2, -0.5 * swing);
    root.add(halo);
    glow.userData.halo = halo;
    level.disposables.push(gm, glow.geometry, halo.material);
  }

  // closed-door collider: oriented, so a rotated door never blocks more than its slab
  const cdx = x + 0 * c, cdz = z;
  const doorCols = level.addOBB(cdx, y, cdz, w, h, Math.max(t, 0.08), rotY);

  const door = {
    root, pivot, panel, open: false, angle: 0, target, busy: false,
    toggle() {
      const lockMsg = typeof locked === 'function' ? locked() : locked;
      if (lockMsg) {
        game.ui.caption(lockMsg);
        game.audio.sfx('locked');
        return;
      }
      if (target && (door.busy || game.world.busy)) return;
      door.open = !door.open;
      game.audio.sfx(door.open ? sound : 'close', root.position);
      if (door.open && onOpen) onOpen(door);
      if (door.open && target) {
        door.busy = true;
        game.player.frozen = true;
        game.ui.hud.setPrompt(null);
        setTimeout(() => {
          game.world.goTo(target.level, target.spawn || 'default', { from: level.id, style: target.style || 'light', color: glimpse })
            .catch((e) => { console.error('door transition failed', e); })
            .finally(() => { door.busy = false; door.open = false; door.angle = 0; game.player.frozen = false; });
        }, 650);
      }
      if (autoClose && door.open) setTimeout(() => { if (door.open) door.toggle(); }, autoClose * 1000);
    },
  };

  const def = makeInteractable(panel, {
    prompt: () => (typeof locked === 'function' ? locked() : locked) ? (label || 'Open') : target ? (label || 'Enter') : door.open ? 'Close' : (label || 'Open'),
    use: () => door.toggle(),
    range: 2.8,
    colliders: [...doorCols, ...frameCols],
  });
  def.target = target; def.door = door; def.doorPose = { x, y, z, rotY, freeStanding };
  def.enabled = true;
  level.addInteractable(def);

  level.onUpdate((dt) => {
    const goal = door.open ? openAngle * swing : 0;
    door.angle += (goal - door.angle) * (1 - Math.exp(-5 * dt));
    pivot.rotation.y = door.angle;
    const closed = Math.abs(door.angle) < 0.35;
    for (const col of doorCols) col.enabled = closed;
    def.enabled = !door.busy;
    if (glow) {
      const a = Math.min(1, Math.abs(door.angle) / 1.2);
      glow.material.opacity = a;
      glow.userData.halo.material.opacity = a * 0.6;
    }
  });
  return door;
}
