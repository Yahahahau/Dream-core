// LocalStorage persistence for progress and settings.
const SAVE_KEY = 'dreamscape.save.v1';
const SET_KEY = 'dreamscape.settings.v1';

export const DEFAULT_SETTINGS = {
  quality: 'low',
  qualityChosen: false,
  musicVolume: 0.8,
  ambienceVolume: 0.9,
  sfxVolume: 0.9,
  sensitivity: 1,
  fov: 68,
  headBob: true,
  invertY: false,
  vignette: true,
  grain: true,
  showFps: false,
  alwaysRun: false,
  muted: false,
};

export class Settings {
  constructor() {
    let d = {};
    try { d = JSON.parse(localStorage.getItem(SET_KEY)) || {}; } catch (e) { /* */ }
    this.data = { ...DEFAULT_SETTINGS, ...d };
    // first launch (or a tier picked automatically by v1.0) always starts on LOW
    if (!this.data.qualityChosen) this.data.quality = 'low';
    if (!['low', 'medium', 'high'].includes(this.data.quality)) this.data.quality = 'low';
  }
  set(k, v) { this.data[k] = v; this.persist(); }
  persist() { try { localStorage.setItem(SET_KEY, JSON.stringify(this.data)); } catch (e) { /* */ } }
}

export class SaveSystem {
  constructor() {
    this.data = this.fresh();
    try {
      const d = JSON.parse(localStorage.getItem(SAVE_KEY));
      if (d && d.version === 1) { this.data = { ...this.fresh(), ...d }; this.exists = !!d.location; }
    } catch (e) { /* */ }
  }
  fresh() { return { version: 1, location: null, pos: null, yaw: 0, discovered: [], journal: [], seq: 0, visits: {}, flags: {}, playTime: 0 }; }
  setLocation(id, spawn) {
    this.data.location = { id, spawn };
    this.data.visits[id] = (this.data.visits[id] || 0) + 1;
    this.persist();
  }
  setPose(pos, yaw) { this.data.pos = [+pos.x.toFixed(2), +pos.y.toFixed(2), +pos.z.toFixed(2)]; this.data.yaw = +yaw.toFixed(3); }
  flag(k, v) { if (v === undefined) return this.data.flags[k]; this.data.flags[k] = v; this.persist(); return v; }
  reset() { this.data = this.fresh(); this.exists = false; this.persist(); }
  persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.data)); }
    catch (e) {
      // storage full: drop the oldest thumbnails and retry once
      this.data.journal.forEach((j, i) => { if (i < this.data.journal.length - 6) j.thumb = null; });
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.data)); } catch (e2) { /* give up silently */ }
    }
  }
}
