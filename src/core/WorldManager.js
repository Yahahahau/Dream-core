// Loads, swaps and streams locations; handles transitions, triggers, falls,
// underwater state and discovery.
import * as THREE from 'three';
import { LEVELS, LEVEL_BY_ID } from '../levels/LevelRegistry.js';
import { PRESETS } from '../environment/LightingPresets.js';
import { disposeLevelTextures } from '../utils/Textures.js';
import { updateTriggers } from '../interaction/TriggerZone.js';

const FADE_COLORS = { light: 0xfffbf0, dark: 0x050505, static: 0x9aa0a8, white: 0xffffff };

export class WorldManager {
  constructor(game) {
    this.game = game;
    this.level = null;
    this.busy = false;
    this.modules = new Map();
    this.underwater = false;
    this.fallCount = 0;
  }

  async loadModule(id) {
    if (this.modules.has(id)) return this.modules.get(id);
    const def = LEVEL_BY_ID[id];
    const p = def.load().then((m) => m.default);
    this.modules.set(id, p);
    return p;
  }

  // Background-fetch code for neighbouring locations.
  prefetch(ids) {
    const run = () => ids.forEach((id) => { if (LEVEL_BY_ID[id]) this.loadModule(id).catch(() => this.modules.delete(id)); });
    (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(run);
  }

  async fade(to, dur, color) {
    const r = this.game.renderer;
    if (color !== undefined) r.grade.uniforms.fadeColor.value.set(color);
    const from = r.fade, t0 = performance.now();
    return new Promise((res) => {
      const step = () => {
        const k = Math.min(1, (performance.now() - t0) / (dur * 1000));
        r.fade = from + (to - from) * (k * k * (3 - 2 * k));
        if (k < 1) requestAnimationFrame(step); else res();
      };
      step();
    });
  }

  async goTo(id, spawnName = 'default', opts = {}) {
    if (this.busy) return;
    this.busy = true;
    const game = this.game;
    const style = opts.style || 'light';
    const color = opts.instant ? FADE_COLORS.light : (style === 'light' && opts.color ? opts.color : FADE_COLORS[style] ?? FADE_COLORS.light);
    game.player.frozen = true;
    game.input.releaseJoy();
    if (!opts.instant) {
      if (style === 'static') game.audio.sfx('static');
      await this.fade(1, style === 'dark' ? 0.6 : 0.9, color);
    } else { game.renderer.fade = 1; game.renderer.grade.uniforms.fadeColor.value.set(color); }

    const same = this.level && this.level.id === id;
    if (!same) {
      const slow = setTimeout(() => game.ui.loading(true), 350);
      try {
        const Cls = await this.loadModule(id);
        if (this.level) { this.level.dispose(); disposeLevelTextures(); }
        game.renderer.r.renderLists.dispose();
        const def = LEVEL_BY_ID[id];
        const lvl = new Cls(game, def);
        lvl.surface = def.surface;
        await lvl.build();
        lvl.b.finalize();
        game.scene.add(lvl.group);
        this.level = lvl;
        game.collision.load(lvl);
        game.lighting.apply(PRESETS[def.preset]);
        game.audio.setAmbience(def.ambience, { reverb: def.reverb });
        game.renderer.r.compile(game.scene, game.camera);
        // flush deferred positional sounds created while audio was locked
        if (game.audio.unlocked) game.audio.flushPending();
        this.prefetch(lvl.neighbors || []);
      } catch (e) {
        console.error('Failed to load location', id, e);
        clearTimeout(slow); game.ui.loading(false);
        this.busy = false; game.player.frozen = false;
        await this.fade(0, 0.5);
        game.ui.caption('The way is blocked for now.');
        return;
      }
      clearTimeout(slow);
      game.ui.loading(false);
    }

    const lvl = this.level;
    const sp = lvl.spawns[spawnName] || lvl.spawns.default;
    const pos = opts.pos || sp.pos;
    game.player.teleport(pos, opts.yaw ?? sp.yaw);
    game.cam.setPitch(0);
    this.fallCount = 0;
    sp.onArrive?.();
    game.state === 'play' && (game.player.frozen = false);
    if (game.state === 'play' || game.state === 'paused') game.save.setLocation(id, spawnName);
    // a frame to settle before revealing
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const firstVisit = !game.save.data.discovered.includes(id) && game.state === 'play';
    if (!opts.silent) game.ui.hud.showLocation(LEVEL_BY_ID[id]);
    await this.fade(0, opts.instant ? 1.2 : 1.4);
    this.busy = false;
    if (game.state === 'play') game.player.frozen = false;
    if (firstVisit && game.state !== 'menu') {
      setTimeout(() => game.journal.discoverLocation(id), 1600);
    }
    if (!same) lvl.onEnter?.(spawnName);
  }

  async respawnFall() {
    if (this.busy) return;
    this.busy = true;
    const game = this.game;
    game.player.frozen = true;
    await this.fade(1, 0.5, 0xffffff);
    this.fallCount++;
    const lvl = this.level;
    const useSpawn = this.fallCount > 1 || !game.player.safe || game.player.safe.y < lvl.killY + 1;
    const p = useSpawn ? lvl.spawns.default.pos : [game.player.safe.x, game.player.safe.y + 0.05, game.player.safe.z];
    game.player.teleport(p);
    lvl.onFall?.();
    await this.fade(0, 0.8);
    this.busy = false;
    game.player.frozen = false;
  }

  update(dt, t) {
    const lvl = this.level;
    if (!lvl) return;
    lvl.update(dt, t);
    const game = this.game;
    if (game.state === 'play') updateTriggers(lvl, game.player.pos, game);
    // underwater check
    const c = game.camera.position;
    let under = false;
    for (const w of lvl.water) if (c.x > w.x0 && c.x < w.x1 && c.z > w.z0 && c.z < w.z1 && c.y < w.y) { under = true; break; }
    if (under !== this.underwater) {
      this.underwater = under;
      game.audio.setMuffle(under);
      if (under) game.audio.sfx('splash');
      const fog = game.scene.fog, base = game.atmosphere.baseFog;
      if (fog && base && fog.isFog) {
        if (under) { fog.color.set(0x2a8f96); fog.near = 0.5; fog.far = 16; }
        else { fog.color.copy(base.color); fog.near = base.near; fog.far = base.far; }
      }
    }
    const u = game.renderer.grade?.uniforms;
    if (u) u.underwater.value += ((under ? 1 : 0) - u.underwater.value) * Math.min(1, dt * 6);
  }

  allLevels() { return LEVELS; }
}

export { THREE };
