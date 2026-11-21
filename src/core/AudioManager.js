// Audio graph: music (shuffle without repeats), ambience crossfades,
// positional 3D sources, footsteps and UI/world sound effects.
import * as THREE from 'three';
import { TRACKS, noiseBuffer, impulse, humBuffer } from '../audio/SoundLibrary.js';
import { buildAmbience } from '../audio/AmbientZones.js';
import { Footsteps } from '../audio/Footsteps.js';

const BAG_KEY = 'dreamscape.musicBag.v1';

export class AudioManager {
  constructor(game) {
    this.game = game;
    this.listener = new THREE.AudioListener();
    game.camera.add(this.listener);
    const ctx = this.ctx = this.listener.context;
    this.master = ctx.createGain();
    this.master.connect(ctx.destination);
    this.musicBus = ctx.createGain();
    this.ambBus = ctx.createGain();
    this.sfxBus = ctx.createGain();
    this.musicBus.connect(this.master); this.ambBus.connect(this.master); this.sfxBus.connect(this.master);
    // route THREE positional audio through the ambience bus
    this.listener.gain.disconnect();
    this.listener.gain.connect(this.ambBus);
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = impulse(ctx, 3, 2.6);
    this.reverbOut = ctx.createGain(); this.reverbOut.gain.value = 0.5;
    this.reverb.connect(this.reverbOut); this.reverbOut.connect(this.master);
    this.reverbAmount = 0.15;
    // underwater / transition muffle on the world buses
    this.noise = { white: noiseBuffer(ctx, 'white', 3, 1), pink: noiseBuffer(ctx, 'pink', 4, 2), brown: noiseBuffer(ctx, 'brown', 5, 3) };
    this.hums = new Map();
    this.ambience = null;
    this.ambName = null;
    this.unlocked = false;
    this.steps = new Footsteps(this);
    this.applyVolumes();
    // music
    this.musicEl = new Audio();
    this.musicEl.preload = 'auto';
    this.musicEl.crossOrigin = 'anonymous';
    this.musicSrc = null;
    this.musicGain = ctx.createGain();
    this.musicGain.gain.value = 0;
    this.musicGain.connect(this.musicBus);
    this.musicEl.addEventListener('ended', () => this.scheduleNext(2.5 + Math.random() * 3));
    this.musicEl.addEventListener('error', () => this.scheduleNext(1.5));
    this.current = null;
    this.musicStarted = false;
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { this.ctx.suspend?.(); this.musicEl.pause(); }
      else if (this.unlocked) { this.ctx.resume?.(); if (this.musicStarted && this.musicEl.src && !this.musicEl.ended) this.musicEl.play().catch(() => {}); }
    });
  }

  hum(base) {
    if (!this.hums.has(base)) this.hums.set(base, humBuffer(this.ctx, base));
    return this.hums.get(base);
  }

  unlock() {
    if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
    if (this.unlocked) return;
    this.unlocked = true;
    // iOS needs a sound started inside the gesture
    const s = this.ctx.createBufferSource(); s.buffer = this.ctx.createBuffer(1, 1, 22050); s.connect(this.master); s.start();
    if (!this.musicSrc) {
      try { this.musicSrc = this.ctx.createMediaElementSource(this.musicEl); this.musicSrc.connect(this.musicGain); } catch (e) { console.warn('music routing', e); }
    }
  }

  applyVolumes() {
    const s = this.game.settings.data;
    const t = this.ctx.currentTime;
    // Music sits low under the world: audible but never in front of it.
    this.musicBus.gain.setTargetAtTime(s.musicVolume * 0.42, t, 0.1);
    this.ambBus.gain.setTargetAtTime(s.ambienceVolume * 1.0, t, 0.1);
    this.sfxBus.gain.setTargetAtTime(s.sfxVolume * 0.9, t, 0.1);
    this.master.gain.setTargetAtTime(s.muted ? 0 : 1, t, 0.05);
  }

  // ---------- music ----------
  loadBag() {
    try { const b = JSON.parse(localStorage.getItem(BAG_KEY)); if (b && Array.isArray(b.remaining)) return b; } catch (e) { /* */ }
    return { remaining: [], last: -1 };
  }
  saveBag(b) { try { localStorage.setItem(BAG_KEY, JSON.stringify(b)); } catch (e) { /* */ } }

  // Shuffle bag: every track plays once before any repeats, and a new cycle
  // never starts with the track that just ended.
  nextTrackIndex() {
    const b = this.loadBag();
    b.remaining = b.remaining.filter((i) => i >= 0 && i < TRACKS.length);
    if (!b.remaining.length) {
      const all = TRACKS.map((_, i) => i);
      for (let i = all.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [all[i], all[j]] = [all[j], all[i]]; }
      if (all.length > 1 && all[0] === b.last) { const j = 1 + ((Math.random() * (all.length - 1)) | 0); [all[0], all[j]] = [all[j], all[0]]; }
      b.remaining = all;
    }
    const idx = b.remaining.shift();
    b.last = idx;
    this.saveBag(b);
    return idx;
  }

  startMusic() {
    if (this.musicStarted) return;
    this.musicStarted = true;
    this.playNext();
  }

  scheduleNext(delay) {
    clearTimeout(this._nextT);
    this._nextT = setTimeout(() => this.playNext(), delay * 1000);
  }

  playNext() {
    const idx = this.nextTrackIndex();
    const tr = TRACKS[idx];
    this.current = tr;
    this.musicEl.src = `${import.meta.env.BASE_URL}assets/audio/music/${tr.file}`;
    const t = this.ctx.currentTime;
    this.musicGain.gain.cancelScheduledValues(t);
    this.musicGain.gain.setValueAtTime(0, t);
    this.musicGain.gain.linearRampToValueAtTime(1, t + 4);
    const p = this.musicEl.play();
    if (p) p.then(() => this.game.ui?.nowPlaying(tr)).catch(() => { this.musicStarted = false; });
  }

  skipTrack() {
    const t = this.ctx.currentTime;
    this.musicGain.gain.setTargetAtTime(0, t, 0.3);
    setTimeout(() => { this.musicEl.pause(); this.playNext(); }, 900);
  }

  // ---------- ambience ----------
  setAmbience(name, { reverb = 0.15 } = {}) {
    this.reverbAmount = reverb;
    this.reverbOut.gain.setTargetAtTime(0.35 + reverb, this.ctx.currentTime, 0.5);
    if (name === this.ambName) return;
    this.ambience?.stop(2.5);
    this.ambName = name;
    this.ambience = buildAmbience(this, name);
    this.ambience.fadeIn(3);
  }

  setMuffle(on) {
    const f = this._muffle ||= (() => {
      const b = this.ctx.createBiquadFilter(); b.type = 'lowpass'; b.frequency.value = 20000;
      this.ambBus.disconnect(); this.sfxBus.disconnect();
      this.ambBus.connect(b); this.sfxBus.connect(b); b.connect(this.master);
      return b;
    })();
    f.frequency.setTargetAtTime(on ? 500 : 20000, this.ctx.currentTime, 0.15);
  }

  // Looping 3D source attached to an object.
  positional(obj, { buffer, kind = 'hum', base = 120, volume = 0.3, ref = 2, rolloff = 1.4, max = 40, filter = null }) {
    const pa = new THREE.PositionalAudio(this.listener);
    let buf = buffer;
    if (!buf) {
      if (kind === 'hum') buf = this.hum(base);
      else if (kind === 'static') buf = this.noise.white;
      else if (kind === 'water') buf = this.noise.pink;
      else buf = this.noise.brown;
    }
    pa.setBuffer(buf);
    pa.setLoop(true);
    pa.setRefDistance(ref);
    pa.setRolloffFactor(rolloff);
    pa.setMaxDistance(max);
    pa.setDistanceModel('inverse');
    pa.setVolume(volume);
    if (filter) {
      const f = this.ctx.createBiquadFilter(); f.type = filter[0]; f.frequency.value = filter[1];
      pa.setFilter(f);
    }
    obj.add(pa);
    if (this.unlocked) { try { pa.play(Math.random()); } catch (e) { /* */ } }
    else (this.pending ||= []).push(pa);
    return pa;
  }

  flushPending() {
    for (const pa of this.pending || []) { try { if (pa.parent) pa.play(); } catch (e) { /* */ } }
    this.pending = [];
  }

  footstep(surface, intensity) { if (this.unlocked) this.steps.play(surface, intensity); }

  // ---------- one-shots ----------
  _out(pos, gain) {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = gain;
    if (pos) {
      const p = ctx.createPanner(); p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 2; p.rolloffFactor = 1.2;
      p.positionX.value = pos.x; p.positionY.value = pos.y + 1; p.positionZ.value = pos.z;
      g.connect(p); p.connect(this.sfxBus);
      const s = ctx.createGain(); s.gain.value = this.reverbAmount; p.connect(s); s.connect(this.reverb);
    } else g.connect(this.sfxBus);
    return g;
  }

  tone(freq, dur, gain, { type = 'sine', glide = 0, pos = null, when = 0, attack = 0.01 } = {}) {
    if (!this.unlocked) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + glide), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this._out(pos, 1)); o.start(t); o.stop(t + dur + 0.05);
  }

  noiseShot(dur, gain, freq, { type = 'bandpass', q = 1, pos = null, sweep = 0, attack = 0.005, when = 0 } = {}) {
    if (!this.unlocked) return;
    const ctx = this.ctx, t = ctx.currentTime + when;
    const s = ctx.createBufferSource(); s.buffer = this.noise.white;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq + sweep), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this._out(pos, 1)); s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  }

  sfx(name, pos = null) {
    switch (name) {
      case 'creak': this.noiseShot(0.7, 0.12, 300, { q: 6, sweep: 500, pos, attack: 0.1 }); this.tone(140, 0.6, 0.05, { type: 'triangle', glide: 60, pos }); break;
      case 'close': this.noiseShot(0.12, 0.3, 200, { type: 'lowpass', pos }); this.tone(80, 0.2, 0.2, { pos }); break;
      case 'locked': this.noiseShot(0.06, 0.25, 1800, { q: 3, pos }); this.noiseShot(0.06, 0.25, 1600, { q: 3, pos, when: 0.12 }); break;
      case 'click': this.noiseShot(0.03, 0.25, 3000, { q: 2, pos }); break;
      case 'ding': this.tone(1318.5, 1.6, 0.12, { pos }); this.tone(1046.5, 1.8, 0.1, { pos, when: 0.35 }); break;
      case 'elevOpen': case 'elevClose': this.noiseShot(1.0, 0.06, 500, { type: 'lowpass', pos, attack: 0.2 }); break;
      case 'elevHum': this.tone(70, 2.2, 0.12, { type: 'sawtooth', attack: 0.5 }); this.noiseShot(2.2, 0.05, 200, { type: 'lowpass', attack: 0.5 }); break;
      case 'static': this.noiseShot(0.6, 0.18, 4000, { type: 'highpass', attack: 0.01 }); break;
      case 'whoosh': this.noiseShot(1.2, 0.12, 300, { q: 2, sweep: 2500, attack: 0.4 }); break;
      case 'discover': [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => this.tone(f, 1.6, 0.05, { when: i * 0.12 })); break;
      case 'use': this.tone(880, 0.08, 0.04, {}); break;
      case 'page': this.noiseShot(0.25, 0.08, 2500, { q: 0.8, sweep: -1500 }); break;
      case 'splash': this.noiseShot(0.5, 0.25, 900, { type: 'lowpass', pos }); break;
      case 'arcade': [440, 660, 880, 1320].forEach((f, i) => this.tone(f, 0.09, 0.05, { type: 'square', when: i * 0.08, pos })); break;
      case 'tv': this.noiseShot(1.5, 0.08, 5000, { type: 'highpass', pos }); break;
      case 'bell': [880, 1108.7, 1318.5].forEach((f, i) => this.tone(f, 2.4, 0.05, { when: i * 0.02, pos })); break;
      default: break;
    }
  }

  ui(name) {
    if (name === 'hover') this.tone(1200, 0.05, 0.015);
    else if (name === 'open') this.tone(660, 0.12, 0.03, { glide: 200 });
    else if (name === 'close') this.tone(660, 0.12, 0.03, { glide: -200 });
    else this.tone(980, 0.06, 0.03);
  }
}
