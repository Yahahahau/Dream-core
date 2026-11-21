// Music track list and procedurally generated audio buffers.
export const TRACKS = [
  { file: 'warm-nights.mp3', title: 'warm nights' },
  { file: 'snowfall.mp3', title: 'snowfall', artist: 'neheart' },
  { file: 'you-not-the-same.mp3', title: 'you not the same', artist: 'TileKid' },
  { file: 'the-lobotomy.mp3', title: 'The Lobotomy' },
  { file: 'numbers.mp3', title: 'Numbers' },
];

// Small seeded RNG for repeatable buffers.
function rand(seed) {
  let s = seed >>> 0 || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

export function makeBuffer(ctx, seconds, fn, channels = 1) {
  const len = Math.max(1, Math.floor(ctx.sampleRate * seconds));
  const buf = ctx.createBuffer(channels, len, ctx.sampleRate);
  for (let ch = 0; ch < channels; ch++) {
    const d = buf.getChannelData(ch);
    fn(d, ctx.sampleRate, ch);
  }
  return buf;
}

// Loopable noise colors.
export function noiseBuffer(ctx, color = 'white', seconds = 3, seed = 1) {
  return makeBuffer(ctx, seconds, (d) => {
    const r = rand(seed);
    let b0 = 0, b1 = 0, b2 = 0, last = 0;
    for (let i = 0; i < d.length; i++) {
      const w = r() * 2 - 1;
      if (color === 'white') d[i] = w;
      else if (color === 'pink') { b0 = 0.99765 * b0 + w * 0.099046; b1 = 0.963 * b1 + w * 0.2965164; b2 = 0.57 * b2 + w * 1.0526913; d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.18; }
      else { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    }
    // crossfade the loop seam
    const f = Math.floor(d.length * 0.02);
    for (let i = 0; i < f; i++) { const t = i / f; d[i] = d[i] * t + d[d.length - f + i] * (1 - t); }
  });
}

export function impulse(ctx, seconds = 2.5, decay = 3) {
  return makeBuffer(ctx, seconds, (d, sr, ch) => {
    const r = rand(17 + ch);
    for (let i = 0; i < d.length; i++) d[i] = (r() * 2 - 1) * Math.pow(1 - i / d.length, decay);
  }, 2);
}

// Electrical hum (fluorescent / transformers).
export function humBuffer(ctx, base = 120, seconds = 2) {
  return makeBuffer(ctx, seconds, (d, sr) => {
    const f = Math.round(base * seconds) / seconds; // integer cycles => seamless loop
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      d[i] = Math.sin(2 * Math.PI * f * t) * 0.5 + Math.sin(2 * Math.PI * f * 2 * t) * 0.22 + Math.sin(2 * Math.PI * f * 3 * t) * 0.08 + Math.sin(2 * Math.PI * f * 8 * t) * 0.02;
    }
  });
}

// One-shot footstep variants per surface.
export function footstepBuffers(ctx) {
  const out = {};
  const mk = (name, n, gen) => { out[name] = []; for (let v = 0; v < n; v++) out[name].push(makeBuffer(ctx, 0.35, (d, sr) => gen(d, sr, rand(100 + v * 7 + name.length * 31)))); };
  const env = (i, sr, a, dcy) => { const t = i / sr; return t < a ? t / a : Math.exp(-(t - a) / dcy); };
  mk('grass', 3, (d, sr, r) => { let lp = 0; for (let i = 0; i < d.length; i++) { lp += 0.25 * ((r() * 2 - 1) - lp); d[i] = lp * env(i, sr, 0.015, 0.06) * 1.4 * (0.6 + 0.4 * r()); } });
  mk('snow', 3, (d, sr, r) => { let lp = 0; for (let i = 0; i < d.length; i++) { const grain = r() < 0.08 ? 1 : 0.15; lp += 0.45 * ((r() * 2 - 1) * grain - lp); d[i] = lp * env(i, sr, 0.03, 0.08) * 1.6; } });
  mk('tile', 3, (d, sr, r) => { let hp = 0, prev = 0; const f = 1400 + r() * 500; for (let i = 0; i < d.length; i++) { const w = r() * 2 - 1; hp = 0.7 * (hp + w - prev); prev = w; const t = i / sr; d[i] = hp * env(i, sr, 0.001, 0.012) * 0.7 + Math.sin(2 * Math.PI * f * t) * Math.exp(-t / 0.03) * 0.25 + Math.sin(2 * Math.PI * 110 * t) * Math.exp(-t / 0.04) * 0.3; } });
  mk('concrete', 3, (d, sr, r) => { let bp = 0; for (let i = 0; i < d.length; i++) { const t = i / sr; bp += 0.35 * ((r() * 2 - 1) - bp); d[i] = bp * env(i, sr, 0.002, 0.03) + Math.sin(2 * Math.PI * 90 * t) * Math.exp(-t / 0.05) * 0.45; } });
  mk('carpet', 3, (d, sr, r) => { let lp = 0; for (let i = 0; i < d.length; i++) { const t = i / sr; lp += 0.06 * ((r() * 2 - 1) - lp); d[i] = lp * env(i, sr, 0.01, 0.05) * 2.2 + Math.sin(2 * Math.PI * 70 * t) * Math.exp(-t / 0.05) * 0.25; } });
  mk('wood', 3, (d, sr, r) => { let bp = 0; const f = 150 + r() * 40; for (let i = 0; i < d.length; i++) { const t = i / sr; bp += 0.3 * ((r() * 2 - 1) - bp); d[i] = bp * env(i, sr, 0.002, 0.025) * 0.7 + Math.sin(2 * Math.PI * f * t) * Math.exp(-t / 0.07) * 0.5; } });
  mk('metal', 2, (d, sr, r) => { for (let i = 0; i < d.length; i++) { const t = i / sr; d[i] = (Math.sin(2 * Math.PI * 520 * t) * 0.3 + Math.sin(2 * Math.PI * 1310 * t) * 0.2) * Math.exp(-t / 0.09) + (r() * 2 - 1) * env(i, sr, 0.001, 0.01) * 0.5; } });
  mk('water', 3, (d, sr, r) => { let lp = 0; for (let i = 0; i < d.length; i++) { const t = i / sr; lp += 0.12 * ((r() * 2 - 1) - lp); d[i] = lp * env(i, sr, 0.03, 0.12) * 2 * (0.8 + 0.2 * Math.sin(t * 90)); } });
  mk('sand', 2, (d, sr, r) => { let lp = 0; for (let i = 0; i < d.length; i++) { lp += 0.3 * ((r() * 2 - 1) - lp); d[i] = lp * env(i, sr, 0.02, 0.07) * 1.3; } });
  return out;
}
