// Procedural ambience recipes, one per location. Built entirely with Web Audio.
export function buildAmbience(am, name) {
  const ctx = am.ctx;
  const out = ctx.createGain();
  out.gain.value = 0;
  out.connect(am.ambBus);
  const nodes = [];
  const timers = [];
  let alive = true;
  const keep = (...n) => { nodes.push(...n); return n[0]; };

  const loop = (buf, gain, filter) => {
    const s = keep(ctx.createBufferSource()); s.buffer = buf; s.loop = true;
    s.loopStart = 0; s.playbackRate.value = 1;
    const g = keep(ctx.createGain()); g.gain.value = gain;
    if (filter) { s.connect(filter); filter.connect(g); } else s.connect(g);
    s.start(ctx.currentTime + Math.random() * 0.1, Math.random() * buf.duration);
    g.connect(out);
    return { s, g };
  };
  const filt = (type, f, q = 0.7) => { const b = keep(ctx.createBiquadFilter()); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };
  const lfo = (param, rate, depth) => {
    const o = keep(ctx.createOscillator()); o.frequency.value = rate;
    const g = keep(ctx.createGain()); g.gain.value = depth;
    o.connect(g); g.connect(param); o.start();
  };
  const every = (min, max, fn) => {
    const tick = () => { if (!alive) return; fn(); timers.push(setTimeout(tick, (min + Math.random() * (max - min)) * 1000)); };
    timers.push(setTimeout(tick, (min * 0.5 + Math.random() * max * 0.5) * 1000));
  };
  const toneAt = (freq, dur, gain, { type = 'sine', glide = 0, pan = 0, attack = 0.01, rev = 0.5, when = 0 } = {}) => {
    const t = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + glide), t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    o.connect(g); g.connect(p); p.connect(out);
    if (rev > 0) { const s = ctx.createGain(); s.gain.value = rev; p.connect(s); s.connect(am.reverb); }
    o.start(t); o.stop(t + dur + 0.05);
  };
  const noiseHit = (dur, gain, freq, { type = 'bandpass', q = 1, pan = 0, rev = 0.3, attack = 0.005 } = {}) => {
    const t = ctx.currentTime;
    const s = ctx.createBufferSource(); s.buffer = am.noise.white;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner(); p.pan.value = pan;
    s.connect(f); f.connect(g); g.connect(p); p.connect(out);
    if (rev > 0) { const sg = ctx.createGain(); sg.gain.value = rev; p.connect(sg); sg.connect(am.reverb); }
    s.start(t, Math.random() * 2); s.stop(t + dur + 0.05);
  };

  // --- building blocks ---
  const wind = (gain = 0.25, cutoff = 500, rate = 0.07) => {
    const f = filt('lowpass', cutoff, 0.8);
    const { g } = loop(am.noise.brown, gain, f);
    lfo(f.frequency, rate, cutoff * 0.5);
    lfo(g.gain, rate * 0.6, gain * 0.45);
  };
  const birds = (min = 3, max = 9, gain = 0.05) => every(min, max, () => {
    const base = 2400 + Math.random() * 1800, pan = Math.random() * 1.6 - 0.8;
    const n = 2 + (Math.random() * 4 | 0);
    for (let i = 0; i < n; i++) toneAt(base * (0.9 + Math.random() * 0.25), 0.09 + Math.random() * 0.06, gain, { glide: (Math.random() - 0.3) * 1200, pan, when: i * (0.11 + Math.random() * 0.06), rev: 0.25 });
  });
  const chimes = (min, max, gain = 0.03) => every(min, max, () => {
    const scale = [523.25, 587.33, 659.25, 783.99, 880, 1046.5];
    const pan = Math.random() * 1.4 - 0.7;
    for (let i = 0; i < 3; i++) toneAt(scale[(Math.random() * scale.length) | 0], 2.6, gain, { pan, when: i * 0.35 + Math.random() * 0.2, attack: 0.005, rev: 0.9 });
  });
  const hum = (gain = 0.04, base = 120) => {
    const f = filt('lowpass', 900);
    loop(am.hum(base), gain, f);
  };
  const roomTone = (gain = 0.12, cutoff = 260) => { loop(am.noise.brown, gain, filt('lowpass', cutoff)); };
  const drips = (min, max, gain = 0.06) => every(min, max, () => toneAt(900 + Math.random() * 900, 0.18, gain, { glide: -500, pan: Math.random() * 1.6 - 0.8, rev: 1.2, attack: 0.002 }));
  const water = (gain = 0.08, cutoff = 600) => {
    const f = filt('lowpass', cutoff);
    const { g } = loop(am.noise.pink, gain, f);
    lfo(g.gain, 0.21, gain * 0.35);
  };
  const ocean = (gain = 0.35) => {
    const f = filt('lowpass', 700);
    const { g } = loop(am.noise.pink, gain, f);
    lfo(g.gain, 0.11, gain * 0.7);
    lfo(f.frequency, 0.11, 350);
  };
  const crickets = (gain = 0.02) => every(0.6, 1.8, () => {
    const pan = Math.random() * 1.8 - 0.9, f = 4300 + Math.random() * 600;
    for (let i = 0; i < 3; i++) toneAt(f, 0.05, gain, { pan, when: i * 0.07, rev: 0.2, attack: 0.004 });
  });
  const drone = (gain = 0.05, f1 = 55, f2 = 55.7) => {
    for (const f of [f1, f2, f1 * 1.5]) {
      const o = keep(ctx.createOscillator()); o.type = 'sine'; o.frequency.value = f;
      const g = keep(ctx.createGain()); g.gain.value = gain / 3;
      o.connect(g); g.connect(out); o.start();
    }
  };
  const statics = (min, max, gain = 0.02) => every(min, max, () => noiseHit(0.05 + Math.random() * 0.4, gain, 3000 + Math.random() * 4000, { type: 'highpass', pan: Math.random() * 1.6 - 0.8, rev: 0.2 }));
  const glitch = (min, max, gain = 0.025) => every(min, max, () => {
    const n = 3 + (Math.random() * 6 | 0), pan = Math.random() * 1.6 - 0.8;
    for (let i = 0; i < n; i++) toneAt(200 + Math.random() * 2400, 0.04, gain, { type: 'square', pan, when: i * 0.045, rev: 0.15, attack: 0.002 });
  });
  const chime3 = (min, max, gain = 0.03) => every(min, max, () => [659.25, 523.25, 392].forEach((f, i) => toneAt(f, 1.8, gain, { when: i * 0.55, rev: 1.3, attack: 0.01 })));
  const ding = (min, max, gain = 0.015) => every(min, max, () => toneAt(1318.5, 2.2, gain, { pan: Math.random() * 1.4 - 0.7, rev: 1.2 }));
  const tick = (gain = 0.012) => every(0.98, 1.02, () => noiseHit(0.02, gain, 3500, { q: 4, rev: 0.4 }));
  const creak = (min, max, gain = 0.03) => every(min, max, () => toneAt(70 + Math.random() * 60, 1.2, gain, { type: 'triangle', glide: -20, pan: Math.random() * 1.6 - 0.8, rev: 0.8, attack: 0.2 }));
  const carPass = (min, max, gain = 0.04) => every(min, max, () => {
    const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = am.noise.pink;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 2.5); g.gain.exponentialRampToValueAtTime(0.0001, t + 5.5);
    const p = ctx.createStereoPanner(); p.pan.setValueAtTime(-0.9, t); p.pan.linearRampToValueAtTime(0.9, t + 5.5);
    s.connect(f); f.connect(g); g.connect(p); p.connect(out); s.start(t); s.stop(t + 6);
  });
  const gulls = (min, max, gain = 0.02) => every(min, max, () => { const pan = Math.random() * 1.6 - 0.8; for (let i = 0; i < 2; i++) toneAt(1500 + Math.random() * 300, 0.35, gain, { type: 'triangle', glide: -700, pan, when: i * 0.4, rev: 0.6, attack: 0.03 }); });

  switch (name) {
    case 'starting': wind(0.22, 420, 0.06); birds(4, 11, 0.035); chimes(18, 40, 0.018); break;
    case 'almond': wind(0.32, 700, 0.09); loop(am.noise.pink, 0.03, filt('highpass', 3500)); birds(8, 20, 0.025); break;
    case 'school': roomTone(0.1, 220); hum(0.035, 120); ding(40, 90, 0.008); tick(0.006); break;
    case 'pool': roomTone(0.08, 300); water(0.09, 900); drips(1.2, 4, 0.05); break;
    case 'hotel': roomTone(0.13, 180); hum(0.015, 60); ding(25, 60, 0.012); creak(20, 50, 0.015); break;
    case 'apartments': roomTone(0.07, 240); tick(0.01); carPass(14, 35, 0.03); hum(0.01, 100); break;
    case 'mall': roomTone(0.14, 300); water(0.04, 1400); chime3(35, 80, 0.02); break;
    case 'maze': wind(0.18, 520, 0.08); birds(3, 8, 0.04); break;
    case 'hallways': roomTone(0.11, 200); drone(0.025, 49, 49.6); tick(0.008); creak(14, 30, 0.02); break;
    case 'edge': ocean(0.32); wind(0.12, 900, 0.05); gulls(14, 35, 0.015); break;
    case 'broken': drone(0.05, 41, 41.8); statics(0.6, 3, 0.02); glitch(5, 14, 0.015); { const o = keep(ctx.createOscillator()); o.frequency.value = 7800; const g = keep(ctx.createGain()); g.gain.value = 0.0018; o.connect(g); g.connect(out); o.start(); } break;
    case 'frozen': wind(0.16, 1100, 0.05); creak(20, 45, 0.02); break;
    case 'anemoia': wind(0.08, 400, 0.05); crickets(0.012); carPass(25, 60, 0.02); chimes(30, 60, 0.012); break;
    case 'menu': wind(0.18, 380, 0.05); chimes(10, 25, 0.015); break;
    default: roomTone(0.08, 250);
  }

  return {
    out,
    fadeIn(t = 2) { out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setValueAtTime(out.gain.value, ctx.currentTime); out.gain.linearRampToValueAtTime(1, ctx.currentTime + t); },
    stop(t = 2) {
      alive = false;
      timers.forEach(clearTimeout);
      out.gain.cancelScheduledValues(ctx.currentTime); out.gain.setValueAtTime(out.gain.value, ctx.currentTime); out.gain.linearRampToValueAtTime(0, ctx.currentTime + t);
      setTimeout(() => { nodes.forEach((n) => { try { n.stop?.(); } catch (e) { /* */ } try { n.disconnect(); } catch (e) { /* */ } }); out.disconnect(); }, t * 1000 + 200);
    },
  };
}
