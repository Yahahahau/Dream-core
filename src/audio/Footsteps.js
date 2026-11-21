// Surface-aware footsteps with slight pitch/volume variation.
import { footstepBuffers } from './SoundLibrary.js';

const ALIAS = { grass: 'grass', dirt: 'grass', leaves: 'grass', field: 'grass', snow: 'snow', ice: 'tile', tile: 'tile', marble: 'tile', concrete: 'concrete', asphalt: 'concrete', carpet: 'carpet', rug: 'carpet', wood: 'wood', metal: 'metal', water: 'water', sand: 'sand' };
const GAIN = { grass: 0.35, snow: 0.45, tile: 0.32, concrete: 0.35, carpet: 0.35, wood: 0.4, metal: 0.22, water: 0.4, sand: 0.35 };

export class Footsteps {
  constructor(am) {
    this.am = am;
    this.bufs = footstepBuffers(am.ctx);
    this.last = -1;
  }

  play(surface, intensity = 1) {
    const am = this.am, ctx = am.ctx;
    const key = ALIAS[surface] || 'concrete';
    const list = this.bufs[key];
    let i = (Math.random() * list.length) | 0;
    if (i === this.last && list.length > 1) i = (i + 1) % list.length;
    this.last = i;
    const s = ctx.createBufferSource();
    s.buffer = list[i];
    s.playbackRate.value = 0.9 + Math.random() * 0.2;
    const g = ctx.createGain();
    g.gain.value = (GAIN[key] ?? 0.3) * (0.7 + 0.3 * intensity) * (0.85 + Math.random() * 0.3);
    s.connect(g); g.connect(am.sfxBus);
    const send = ctx.createGain(); send.gain.value = am.reverbAmount; g.connect(send); send.connect(am.reverb);
    s.start();
  }
}
