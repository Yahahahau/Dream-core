// Center-screen interaction: finds the usable object under the reticle.
import * as THREE from 'three';

export class InteractionSystem {
  constructor(game) {
    this.game = game;
    this.ray = new THREE.Raycaster();
    this.ray.far = 3.2;
    this.focus = null;
    this.center = new THREE.Vector2(0, 0);
    this.cooldown = 0;
  }

  update(dt) {
    const level = this.game.world.level;
    this.cooldown = Math.max(0, this.cooldown - dt);
    let found = null;
    if (level && this.game.state === 'play') {
      const cam = this.game.camera;
      this.ray.setFromCamera(this.center, cam);
      const meshes = [];
      for (const it of level.interactables) if (it.enabled !== false && it.mesh) meshes.push(it.mesh);
      const hits = this.ray.intersectObjects(meshes, true);
      for (const h of hits) {
        let o = h.object;
        while (o && !o.userData.interactable) o = o.parent;
        if (!o) continue;
        const it = o.userData.interactable;
        if (h.distance > (it.range ?? 2.8)) continue;
        const p = h.point, c = cam.position;
        if (this.game.collision.segmentBlocked(c.x, c.y, c.z, p.x, p.y, p.z)) break;
        found = it; break;
      }
    }
    if (found !== this.focus) {
      this.focus = found;
      this.game.ui.hud.setPrompt(found ? (typeof found.prompt === 'function' ? found.prompt() : found.prompt) : null);
    }
    const input = this.game.input;
    const pressed = input.edge('interact') || (input.isTouch && input.edge('tap') && !!this.focus);
    if (pressed && this.focus && this.cooldown <= 0) {
      this.cooldown = 0.35;
      this.game.audio.ui('use');
      this.focus.use(this.game);
      // prompt may change after use (door open/close)
      const f = this.focus;
      this.game.ui.hud.setPrompt(f && f.enabled !== false ? (typeof f.prompt === 'function' ? f.prompt() : f.prompt) : null);
    }
  }

  triggerFocused() {
    if (this.focus && this.cooldown <= 0) { this.game.input.edges.add('interact'); }
  }
}

// Helper: tag an Object3D as interactable.
export function makeInteractable(obj, def) {
  def.mesh = obj;
  obj.userData.interactable = def;
  return def;
}
