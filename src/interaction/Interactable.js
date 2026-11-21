// Generic interactables: notes, examinable objects, switches, screen portals.
import * as THREE from 'three';
import { makeInteractable } from '../player/InteractionSystem.js';

// Yaw that makes the camera look along (dx, dz).
export const yawTo = (dx, dz) => Math.atan2(-dx, -dz);

// Invisible hitbox for objects that are part of merged static geometry.
export function hitbox(level, x, y, z, w, h, d) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ visible: false }));
  m.position.set(x, y + h / 2, z);
  level.group.add(m);
  return m;
}

export function addNote(level, mesh, { title = 'A note', text, prompt = 'Read' }) {
  const def = makeInteractable(mesh, {
    prompt,
    use: (game) => {
      game.ui.note(title, text);
      game.journal.addObject(level.id, title, text.split('\n')[0], 'note');
    },
  });
  level.addInteractable(def);
  return def;
}

export function addExamine(level, mesh, { name, text, prompt = 'Examine', notes = '', onUse = null, journal = true }) {
  const def = makeInteractable(mesh, {
    prompt,
    use: (game) => {
      game.ui.caption(text);
      if (journal) game.journal.addObject(level.id, name, text, notes || 'object');
      onUse?.(game);
    },
  });
  level.addInteractable(def);
  return def;
}

export function addSwitch(level, mesh, { prompt = 'Use switch', onToggle, sound = 'click' }) {
  let on = false;
  const def = makeInteractable(mesh, {
    prompt: typeof prompt === 'function' ? prompt : () => prompt,
    use: (game) => { on = !on; game.audio.sfx(sound, mesh.getWorldPosition(new THREE.Vector3())); onToggle(on, game); },
  });
  level.addInteractable(def);
  return def;
}

// A screen, cabinet or painting that pulls the player into another place.
export function addPortal(level, mesh, { prompt = 'Look closer', target, spawn = 'default', style = 'static', color = 0xffffff, before = null }) {
  const def = makeInteractable(mesh, {
    prompt,
    use: (game) => {
      before?.(game);
      game.player.frozen = true;
      game.audio.sfx(style === 'static' ? 'static' : 'whoosh');
      setTimeout(() => game.world.goTo(target, spawn, { from: level.id, style, color }), 350);
    },
  });
  level.addInteractable(def);
  return def;
}
