// Base class every location extends.
import * as THREE from 'three';
import { LevelBuilder } from '../core/LevelBuilder.js';

export class Level {
  constructor(game, def) {
    this.game = game;
    this.def = def;
    this.id = def.id;
    this.group = new THREE.Group();
    this.group.name = def.id;
    this.colliders = [];
    this.ramps = [];
    this.interactables = [];
    this.triggers = [];
    this.updaters = [];
    this.disposables = [];
    this.positional = [];
    this.lights = [];
    this.spawns = { default: { pos: [0, 0, 0], yaw: 0 } };
    this.heightAt = null;          // optional terrain function (x,z) => y
    this.terrainSurface = 'grass';
    this.surface = 'concrete';     // default footstep surface
    this.killY = -40;
    this.water = [];               // [{x0,z0,x1,z1,y,color}] for underwater tint
    this.b = new LevelBuilder(this);
  }

  // Override.
  build() {}
  // Lighting/atmosphere preset (see environment/LightingPresets.js)
  get preset() { return this.def.preset; }

  addCollider(x0, y0, z0, x1, y1, z1, surface) {
    const c = { min: [x0, y0, z0], max: [x1, y1, z1], surface: surface || null, enabled: true };
    this.colliders.push(c);
    return c;
  }

  addRamp(x0, z0, x1, z1, axis, yA, yB, surface) {
    this.ramps.push({ x0, z0, x1, z1, axis, yA, yB, surface: surface || null });
  }

  addInteractable(it) { this.interactables.push(it); return it; }
  addTrigger(t) { this.triggers.push({ inside: false, once: false, fired: false, ...t }); }
  onUpdate(fn) { this.updaters.push(fn); }
  addSpawn(name, pos, yaw = 0) { this.spawns[name] = { pos, yaw }; }

  // Areas with their own ambient brightness: [{min:[x,y,z], max:[x,y,z], hemi, exposure}]
  setLightZones(zones, base) { this.lz = zones; this.lzBase = base; }

  update(dt, t) {
    for (const u of this.updaters) u(dt, t);
    if (this.lz) {
      const p = this.game.player.pos, L = this.game.lighting;
      let target = this.lzBase;
      for (const z of this.lz) {
        if (p.x >= z.min[0] && p.x <= z.max[0] && p.y >= z.min[1] && p.y <= z.max[1] && p.z >= z.min[2] && p.z <= z.max[2]) { target = z; break; }
      }
      const k = Math.min(1, dt * 1.5);
      L.hemi.intensity += (target.hemi - L.hemi.intensity) * k;
      const r = this.game.renderer.r;
      r.toneMappingExposure += ((target.exposure ?? this.lzBase.exposure ?? 1) - r.toneMappingExposure) * k;
    }
  }

  dispose() {
    this.group.traverse((o) => {
      if (o.isMesh || o.isPoints || o.isSprite) {
        o.geometry?.dispose?.();
        const m = o.material;
        if (Array.isArray(m)) m.forEach((x) => x.dispose()); else m?.dispose?.();
      }
      if (o.isAudio) { try { o.stop(); } catch (e) { /* not started */ } o.disconnect?.(); }
    });
    this.disposables.forEach((d) => d.dispose?.());
    this.group.removeFromParent();
  }
}
