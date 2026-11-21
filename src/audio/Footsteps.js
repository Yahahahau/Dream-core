// Footsteps from recorded samples, chosen by the surface under the player and
// fired on every foot plant (the camera's stride phase). Left/right feet are
// panned slightly apart, samples never repeat back-to-back, and each step gets a
// small pitch/level variation. Synthesised steps are used until samples load and
// for surfaces without recordings (water).
import { footstepBuffers } from './SoundLibrary.js';

const SETS = { concrete: 4, dirt: 3, wood: 4, grass: 4 };
// surface → [sample set, filter cutoff Hz | null, gain, playbackRate]
const MAP = {
  concrete: ['concrete', null, 0.55, 1], asphalt: ['concrete', 5200, 0.55, 0.96], tile: ['concrete', null, 0.5, 1.08], marble: ['concrete', null, 0.5, 1.1],
  metal: ['concrete', null, 0.45, 1.25], ice: ['concrete', 6000, 0.42, 1.15],
  dirt: ['dirt', null, 0.55, 1], sand: ['dirt', 3200, 0.5, 0.92], snow: ['dirt', 2200, 0.62, 0.82], gravel: ['dirt', null, 0.6, 1.08],
  wood: ['wood', null, 0.5, 1], carpet: ['wood', 700, 0.42, 0.85], rug: ['wood', 700, 0.42, 0.85],
  grass: ['grass', null, 0.55, 1], field: ['grass', null, 0.6, 0.95], leaves: ['grass', null, 0.6, 1.05],
};

export class Footsteps {
  constructor(am) {
    this.am = am;
    this.synth = footstepBuffers(am.ctx);
    this.sets = {};
    this.last = {};
    this.foot = 1;
    this.load();
  }

  async load() {
    const base = `${import.meta.env.BASE_URL}assets/audio/sfx/`;
    await Promise.all(Object.entries(SETS).map(async ([name, n]) => {
      const bufs = await Promise.all(Array.from({ length: n }, (_, i) => this.am.loadBuffer(`${base}${name}${i + 1}.mp3`)));
      this.sets[name] = bufs.filter(Boolean);
    }));
  }

  pick(list, key) {
    let i = (Math.random() * list.length) | 0;
    if (list.length > 1 && i === this.last[key]) i = (i + 1 + ((Math.random() * (list.length - 1)) | 0)) % list.length;
    this.last[key] = i;
    return list[i];
  }

  play(surface, intensity = 1, running = false) {
    const am = this.am, ctx = am.ctx;
    this.foot = -this.foot;
    const m = MAP[surface] || MAP.concrete;
    const set = this.sets[m[0]];
    const s = ctx.createBufferSource();
    let gainV, out = null;
    if (set && set.length && surface !== 'water') {
      s.buffer = this.pick(set, m[0]);
      s.playbackRate.value = m[3] * (0.94 + Math.random() * 0.12) * (running ? 1.06 : 1);
      gainV = m[2] * (0.75 + 0.25 * intensity) * (running ? 1.15 : 0.9) * (0.88 + Math.random() * 0.24);
      if (m[1]) { out = ctx.createBiquadFilter(); out.type = 'lowpass'; out.frequency.value = m[1]; }
    } else {
      const list = this.synth[surface === 'water' ? 'water' : 'concrete'];
      s.buffer = this.pick(list, 'synth' + surface);
      s.playbackRate.value = 0.9 + Math.random() * 0.2;
      gainV = 0.35 * (0.7 + 0.3 * intensity);
    }
    const g = ctx.createGain(); g.gain.value = gainV;
    const p = ctx.createStereoPanner(); p.pan.value = this.foot * 0.12;
    if (out) { s.connect(out); out.connect(g); } else s.connect(g);
    g.connect(p); p.connect(am.sfxBus);
    const send = ctx.createGain(); send.gain.value = am.reverbAmount * 0.8; p.connect(send); send.connect(am.reverb);
    s.start();
  }
}
