// Procedural canvas textures. Every surface in DREAMSCAPE is generated here,
// so the game has no dependency on external texture hosts.
import * as THREE from 'three';

let anisotropy = 4;
const cache = new Map();
const levelOwned = new Set();

export function setAnisotropy(a) { anisotropy = a; }

// Seeded RNG so textures are identical between sessions.
export function rng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTex(c, { repeat = true, srgb = true, filter = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = anisotropy;
  if (!filter) { t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; }
  return t;
}

// cached(key, fn, persistent) — persistent textures survive level unloads.
function cached(key, fn, persistent = false) {
  if (cache.has(key)) return cache.get(key);
  const t = fn();
  t.userData.key = key;
  cache.set(key, t);
  if (!persistent) levelOwned.add(key);
  return t;
}

export function disposeLevelTextures(keep = []) {
  for (const k of levelOwned) {
    if (keep.includes(k)) continue;
    const t = cache.get(k);
    if (t) t.dispose();
    cache.delete(k);
  }
  levelOwned.clear();
}

const hex = (n) => '#' + n.toString(16).padStart(6, '0');
function shade(color, amt) {
  const c = new THREE.Color(color);
  c.offsetHSL(0, 0, amt);
  return '#' + c.getHexString();
}

function speckle(ctx, w, h, r, count, colors, alpha = 0.15, size = 1.5) {
  ctx.globalAlpha = alpha;
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = colors[(r() * colors.length) | 0];
    const s = size * (0.5 + r());
    ctx.fillRect(r() * w, r() * h, s, s);
  }
  ctx.globalAlpha = 1;
}

// Tileable value noise painted as soft blotches.
function blotches(ctx, w, h, r, count, colors, alpha = 0.08, min = 8, max = 40) {
  for (let i = 0; i < count; i++) {
    const x = r() * w, y = r() * h, rad = min + r() * (max - min);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = colors[(r() * colors.length) | 0];
    for (const ox of [-w, 0, w]) for (const oy of [-h, 0, h]) {
      ctx.beginPath(); ctx.arc(x + ox, y + oy, rad, 0, Math.PI * 2); ctx.fill();
    }
  }
  ctx.globalAlpha = 1;
}

// ---------- natural surfaces ----------
export function grassTex(base = 0x5f8f3e, key = 'grass') {
  return cached(key + base, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(11);
    x.fillStyle = hex(base); x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 60, [shade(base, 0.06), shade(base, -0.06), shade(base, 0.03)], 0.12, 10, 40);
    x.lineWidth = 1;
    for (let i = 0; i < 3200; i++) {
      const px = r() * 256, py = r() * 256, l = 1.5 + r() * 3;
      x.strokeStyle = r() < 0.5 ? shade(base, 0.08 + r() * 0.08) : shade(base, -0.08 - r() * 0.05);
      x.globalAlpha = 0.5;
      x.beginPath(); x.moveTo(px, py); x.lineTo(px + (r() - 0.5) * 3, py - l); x.stroke();
    }
    x.globalAlpha = 1;
    return toTex(c);
  });
}

export function dirtTex(base = 0x9a8162) {
  return cached('dirt' + base, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(21);
    x.fillStyle = hex(base); x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 80, [shade(base, 0.05), shade(base, -0.07)], 0.15, 6, 30);
    speckle(x, 256, 256, r, 5000, [shade(base, -0.2), shade(base, 0.15)], 0.35, 1.4);
    return toTex(c);
  });
}

export function asphaltTex(base = 0x55575c, line = null) {
  return cached('asphalt' + base + line, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(31);
    x.fillStyle = hex(base); x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 40, [shade(base, 0.04), shade(base, -0.05)], 0.2, 10, 50);
    speckle(x, 256, 256, r, 9000, ['#222', '#888', '#6a6a6a'], 0.35, 1.2);
    if (line) {
      x.fillStyle = line; x.globalAlpha = 0.85;
      x.fillRect(124, 0, 8, 150);
      x.globalAlpha = 1;
    }
    return toTex(c);
  });
}

export function snowTex() {
  return cached('snow', () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(41);
    x.fillStyle = '#eef3fa'; x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 70, ['#dfe7f3', '#ffffff', '#d7e1f0'], 0.25, 10, 45);
    speckle(x, 256, 256, r, 3000, ['#ffffff', '#c9d6ea'], 0.5, 1.2);
    return toTex(c);
  });
}

export function iceTex() {
  return cached('ice', () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(42);
    x.fillStyle = '#a9c6dc'; x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 40, ['#c4dbec', '#8fb1cc'], 0.25, 20, 60);
    x.strokeStyle = '#e6f2fb'; x.globalAlpha = 0.5;
    for (let i = 0; i < 40; i++) {
      x.beginPath(); let px = r() * 256, py = r() * 256; x.moveTo(px, py);
      for (let k = 0; k < 5; k++) { px += (r() - 0.5) * 50; py += (r() - 0.5) * 50; x.lineTo(px, py); }
      x.stroke();
    }
    x.globalAlpha = 1;
    return toTex(c);
  });
}

export function hedgeTex() {
  return cached('hedge', () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(51);
    x.fillStyle = '#2f5a2a'; x.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 2200; i++) {
      const px = r() * 256, py = r() * 256, s = 3 + r() * 5;
      x.fillStyle = ['#3d7235', '#28502a', '#4a8240', '#335f2d', '#5a9449'][(r() * 5) | 0];
      x.globalAlpha = 0.9;
      x.beginPath(); x.ellipse(px, py, s, s * 0.6, r() * 3, 0, Math.PI * 2); x.fill();
    }
    x.globalAlpha = 1;
    return toTex(c);
  });
}

export function leafTex(base = 0x4f7f3a) {
  return cached('leaf' + base, () => {
    const c = canvas(128, 128), x = c.getContext('2d'), r = rng(52);
    x.fillStyle = hex(base); x.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 700; i++) {
      x.fillStyle = r() < 0.5 ? shade(base, 0.1) : shade(base, -0.1);
      x.globalAlpha = 0.8;
      x.beginPath(); x.arc(r() * 128, r() * 128, 2 + r() * 3, 0, 7); x.fill();
    }
    x.globalAlpha = 1;
    return toTex(c);
  });
}

export function barkTex() {
  return cached('bark', () => {
    const c = canvas(128, 256), x = c.getContext('2d'), r = rng(53);
    x.fillStyle = '#5b4636'; x.fillRect(0, 0, 128, 256);
    for (let i = 0; i < 90; i++) {
      x.strokeStyle = r() < 0.5 ? '#3f2f24' : '#6f5a48'; x.lineWidth = 1 + r() * 2;
      const px = r() * 128; x.beginPath(); x.moveTo(px, 0);
      x.bezierCurveTo(px + (r() - 0.5) * 10, 80, px + (r() - 0.5) * 10, 170, px, 256); x.stroke();
    }
    return toTex(c);
  });
}

export function rockTex() {
  return cached('rock', () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(54);
    x.fillStyle = '#8b8a86'; x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 90, ['#a09f99', '#6f6e6a', '#7e7b74'], 0.2, 8, 40);
    speckle(x, 256, 256, r, 5000, ['#555', '#bbb'], 0.25, 1.3);
    return toTex(c);
  });
}

export function sandTex() {
  return cached('sand', () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(55);
    x.fillStyle = '#d9c9a3'; x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 50, ['#e6d8b5', '#c8b58c'], 0.2, 10, 40);
    speckle(x, 256, 256, r, 8000, ['#b5a37c', '#f2e8cf'], 0.4, 1);
    return toTex(c);
  });
}

// ---------- architectural surfaces ----------
export function tileTex({ tile = 0xf2f5f6, grout = 0xb8c4c8, n = 8, vary = 0.03, seed = 61, key = '' } = {}) {
  return cached(`tile${tile}-${grout}-${n}-${key}`, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(seed);
    x.fillStyle = hex(grout); x.fillRect(0, 0, S, S);
    const t = S / n, g = Math.max(1.5, t * 0.07);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      x.fillStyle = shade(tile, (r() - 0.5) * vary * 2);
      x.fillRect(i * t + g / 2, j * t + g / 2, t - g, t - g);
      x.fillStyle = 'rgba(255,255,255,0.18)';
      x.fillRect(i * t + g / 2, j * t + g / 2, t - g, (t - g) * 0.18);
    }
    speckle(x, S, S, r, 800, ['#000'], 0.04, 1.5);
    return toTex(c);
  });
}

export function checkerTex(a = 0xe8e2cf, b = 0x8fa394, n = 4, key = 'chk') {
  return cached(`${key}${a}-${b}-${n}`, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(71);
    const t = S / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      x.fillStyle = shade((i + j) % 2 ? a : b, (r() - 0.5) * 0.03);
      x.fillRect(i * t, j * t, t, t);
    }
    x.strokeStyle = 'rgba(0,0,0,0.12)';
    for (let i = 0; i <= n; i++) { x.beginPath(); x.moveTo(i * t, 0); x.lineTo(i * t, S); x.moveTo(0, i * t); x.lineTo(S, i * t); x.stroke(); }
    blotches(x, S, S, r, 30, ['#fff', '#000'], 0.025, 10, 50);
    return toTex(c);
  });
}

export function plasterTex(base = 0xe9e4d8, key = 'plaster') {
  return cached(key + base, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(81);
    x.fillStyle = hex(base); x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 60, [shade(base, 0.03), shade(base, -0.035)], 0.15, 15, 60);
    speckle(x, 256, 256, r, 3000, [shade(base, -0.12)], 0.12, 1);
    return toTex(c);
  });
}

export function concreteTex(base = 0xa5a39e) {
  return cached('concrete' + base, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(82);
    x.fillStyle = hex(base); x.fillRect(0, 0, 256, 256);
    blotches(x, 256, 256, r, 90, [shade(base, 0.05), shade(base, -0.06)], 0.15, 8, 50);
    speckle(x, 256, 256, r, 7000, [shade(base, -0.2), shade(base, 0.12)], 0.25, 1.2);
    return toTex(c);
  });
}

export function brickTex(base = 0x9a5544, mortar = 0xcfc6b8) {
  return cached('brick' + base + mortar, () => {
    const c = canvas(256, 256), x = c.getContext('2d'), r = rng(83);
    x.fillStyle = hex(mortar); x.fillRect(0, 0, 256, 256);
    const bh = 256 / 8, bw = 256 / 4;
    for (let row = 0; row < 8; row++) {
      const off = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < 5; col++) {
        x.fillStyle = shade(base, (r() - 0.5) * 0.12);
        x.fillRect(col * bw + off + 2, row * bh + 2, bw - 4, bh - 4);
      }
    }
    speckle(x, 256, 256, r, 3000, ['#000', '#fff'], 0.08, 1.4);
    return toTex(c);
  });
}

export function sidingTex(base = 0xe7dcc4) {
  return cached('siding' + base, () => {
    const c = canvas(128, 128), x = c.getContext('2d'), r = rng(84);
    x.fillStyle = hex(base); x.fillRect(0, 0, 128, 128);
    for (let i = 0; i < 8; i++) {
      const y = i * 16;
      const g = x.createLinearGradient(0, y, 0, y + 16);
      g.addColorStop(0, shade(base, 0.04)); g.addColorStop(0.85, shade(base, -0.03)); g.addColorStop(1, shade(base, -0.14));
      x.fillStyle = g; x.fillRect(0, y, 128, 16);
    }
    speckle(x, 128, 128, r, 400, ['#000'], 0.05, 1);
    return toTex(c);
  });
}

export function roofTex(base = 0x7a4a3a) {
  return cached('roof' + base, () => {
    const c = canvas(128, 128), x = c.getContext('2d'), r = rng(85);
    x.fillStyle = hex(base); x.fillRect(0, 0, 128, 128);
    for (let row = 0; row < 8; row++) {
      const off = row % 2 ? 8 : 0;
      for (let col = -1; col < 9; col++) {
        x.fillStyle = shade(base, (r() - 0.5) * 0.1);
        x.fillRect(col * 16 + off + 1, row * 16 + 1, 14, 15);
        x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(col * 16 + off, row * 16 + 14, 16, 2);
      }
    }
    return toTex(c);
  });
}

export function woodTex(base = 0x9b7653, planks = 4, key = 'wood') {
  return cached(key + base + planks, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(86);
    const pw = S / planks;
    for (let i = 0; i < planks; i++) {
      x.fillStyle = shade(base, (r() - 0.5) * 0.08); x.fillRect(i * pw, 0, pw, S);
      for (let k = 0; k < 14; k++) {
        x.strokeStyle = r() < 0.5 ? shade(base, -0.1) : shade(base, 0.06); x.globalAlpha = 0.35;
        const px = i * pw + r() * pw; x.beginPath(); x.moveTo(px, 0);
        x.bezierCurveTo(px + (r() - 0.5) * 6, S / 3, px + (r() - 0.5) * 6, S * 2 / 3, px, S); x.stroke();
      }
      x.globalAlpha = 1;
      x.fillStyle = 'rgba(0,0,0,0.35)'; x.fillRect(i * pw, 0, 1.5, S);
      const cut = r() * S; x.fillRect(i * pw, cut, pw, 1.5);
    }
    return toTex(c);
  });
}

export function carpetTex(kind = 'hotel') {
  return cached('carpet' + kind, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(87);
    if (kind === 'hotel') {
      x.fillStyle = '#7a2230'; x.fillRect(0, 0, S, S);
      // repeating medallion / diamond lattice
      for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
        const cx = i * 128 + 64, cy = j * 128 + 64;
        x.strokeStyle = '#d4a649'; x.lineWidth = 4;
        x.beginPath(); x.moveTo(cx, cy - 58); x.lineTo(cx + 58, cy); x.lineTo(cx, cy + 58); x.lineTo(cx - 58, cy); x.closePath(); x.stroke();
        x.fillStyle = '#2f4f63'; x.beginPath(); x.arc(cx, cy, 22, 0, 7); x.fill();
        x.strokeStyle = '#e6c37a'; x.lineWidth = 2; x.beginPath(); x.arc(cx, cy, 30, 0, 7); x.stroke();
        for (let k = 0; k < 8; k++) {
          const a = k * Math.PI / 4;
          x.fillStyle = '#c98a3b'; x.beginPath(); x.ellipse(cx + Math.cos(a) * 40, cy + Math.sin(a) * 40, 7, 3, a, 0, 7); x.fill();
        }
        x.fillStyle = '#b13b45';
        for (const [dx, dy] of [[0, -64], [64, 0], [0, 64], [-64, 0]]) { x.beginPath(); x.arc(cx + dx, cy + dy, 9, 0, 7); x.fill(); }
      }
    } else if (kind === 'mall') {
      x.fillStyle = '#4b5a78'; x.fillRect(0, 0, S, S);
      x.fillStyle = '#6a7aa0';
      for (let i = 0; i < 16; i++) x.fillRect(r() * S, r() * S, 20 + r() * 30, 4);
      x.fillStyle = '#d68fb0';
      for (let i = 0; i < 12; i++) { x.beginPath(); x.arc(r() * S, r() * S, 4 + r() * 6, 0, 7); x.fill(); }
      x.fillStyle = '#e8d46a';
      for (let i = 0; i < 10; i++) { x.save(); x.translate(r() * S, r() * S); x.rotate(r() * 3); x.fillRect(-10, -2, 20, 4); x.restore(); }
    } else { // home rug-ish
      x.fillStyle = '#8b9b7a'; x.fillRect(0, 0, S, S);
    }
    speckle(x, S, S, r, 12000, ['#000', '#fff'], 0.07, 1);
    return toTex(c);
  });
}

export function wallpaperTex(base = 0xe9dcc0, accent = 0xb48c7a, kind = 'floral') {
  return cached('wp' + base + accent + kind, () => {
    const S = 128, c = canvas(S, S), x = c.getContext('2d'), r = rng(88);
    x.fillStyle = hex(base); x.fillRect(0, 0, S, S);
    if (kind === 'stripe') {
      for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? shade(base, -0.05) : hex(base); x.fillRect(i * 16, 0, 16, S); }
      x.fillStyle = hex(accent); x.globalAlpha = 0.5; for (let i = 0; i < 4; i++) x.fillRect(i * 32 + 15, 0, 2, S); x.globalAlpha = 1;
    } else {
      x.fillStyle = hex(accent); x.globalAlpha = 0.55;
      for (const [cx, cy] of [[32, 32], [96, 96]]) {
        for (let k = 0; k < 5; k++) { const a = k * 1.2566; x.beginPath(); x.ellipse(cx + Math.cos(a) * 7, cy + Math.sin(a) * 7, 6, 3.5, a, 0, 7); x.fill(); }
        x.beginPath(); x.arc(cx, cy, 3, 0, 7); x.fill();
      }
      x.strokeStyle = shade(accent, 0.1); x.lineWidth = 1.5;
      x.beginPath(); x.moveTo(0, 64); x.bezierCurveTo(30, 40, 60, 90, 128, 64); x.stroke();
      x.globalAlpha = 1;
    }
    speckle(x, S, S, r, 300, ['#000'], 0.05, 1);
    return toTex(c);
  });
}

export function marbleTex(base = 0xeae6df) {
  return cached('marble' + base, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(89);
    x.fillStyle = hex(base); x.fillRect(0, 0, S, S);
    blotches(x, S, S, r, 40, [shade(base, -0.04), shade(base, 0.03)], 0.2, 20, 70);
    x.strokeStyle = shade(base, -0.25); x.globalAlpha = 0.25;
    for (let i = 0; i < 12; i++) {
      x.lineWidth = 0.5 + r() * 1.5; x.beginPath(); let px = r() * S, py = 0; x.moveTo(px, py);
      while (py < S) { px += (r() - 0.5) * 30; py += 10 + r() * 25; x.lineTo(px, py); }
      x.stroke();
    }
    x.globalAlpha = 1;
    x.strokeStyle = 'rgba(0,0,0,0.15)'; x.lineWidth = 2; x.strokeRect(0, 0, S, S);
    return toTex(c);
  });
}

export function ceilingTileTex() {
  return cached('ceil', () => {
    const S = 128, c = canvas(S, S), x = c.getContext('2d'), r = rng(90);
    x.fillStyle = '#eeece6'; x.fillRect(0, 0, S, S);
    speckle(x, S, S, r, 2500, ['#bdbab0', '#d3d0c7'], 0.6, 1.2);
    x.fillStyle = '#c9c6bd'; x.fillRect(0, 0, S, 3); x.fillRect(0, 0, 3, S);
    return toTex(c);
  });
}

export function lockerTex(color = 0x5f86a6) {
  return cached('locker' + color, () => {
    const W = 64, H = 256, c = canvas(W, H), x = c.getContext('2d');
    x.fillStyle = hex(color); x.fillRect(0, 0, W, H);
    x.fillStyle = shade(color, -0.15); x.fillRect(0, 0, 2, H); x.fillRect(W - 2, 0, 2, H);
    x.fillStyle = shade(color, -0.2);
    for (let i = 0; i < 5; i++) x.fillRect(16, 14 + i * 6, 32, 2.5);
    for (let i = 0; i < 5; i++) x.fillRect(16, 200 + i * 6, 32, 2.5);
    x.fillStyle = '#c9c9c9'; x.fillRect(48, 118, 6, 22);
    x.fillStyle = '#333'; x.fillRect(24, 100, 16, 8);
    x.fillStyle = 'rgba(255,255,255,0.12)'; x.fillRect(4, 0, 4, H);
    return toTex(c, { repeat: true });
  });
}

export function doorTex(color = 0xe9e3d3, kind = 'panel') {
  return cached('door' + color + kind, () => {
    const W = 128, H = 256, c = canvas(W, H), x = c.getContext('2d');
    x.fillStyle = hex(color); x.fillRect(0, 0, W, H);
    const dk = shade(color, -0.12), lt = shade(color, 0.06);
    if (kind === 'panel') {
      for (const [px, py, pw, ph] of [[16, 16, 40, 100], [72, 16, 40, 100], [16, 136, 40, 104], [72, 136, 40, 104]]) {
        x.fillStyle = dk; x.fillRect(px, py, pw, ph);
        x.fillStyle = lt; x.fillRect(px + 4, py + 4, pw - 8, ph - 8);
        x.fillStyle = hex(color); x.fillRect(px + 7, py + 7, pw - 14, ph - 14);
      }
    } else if (kind === 'school') {
      x.fillStyle = '#20262b'; x.fillRect(30, 30, 40, 70);
      x.fillStyle = '#9fb8c8'; x.fillRect(33, 33, 34, 64);
      x.fillStyle = 'rgba(255,255,255,0.35)'; x.fillRect(35, 35, 8, 60);
      x.fillStyle = '#c0c0c0'; x.fillRect(W - 24, 130, 14, 6);
    } else if (kind === 'hotel') {
      x.strokeStyle = dk; x.lineWidth = 3; x.strokeRect(14, 14, W - 28, H - 28);
      x.strokeRect(22, 22, W - 44, H - 44);
    } else if (kind === 'flat') {
      x.strokeStyle = dk; x.lineWidth = 2; x.strokeRect(2, 2, W - 4, H - 4);
    }
    x.fillStyle = 'rgba(0,0,0,0.12)'; x.fillRect(0, H - 6, W, 6);
    return toTex(c, { repeat: false });
  });
}

export function windowTex(frame = 0xffffff, sky = 0x9cc9f0, panes = 2) {
  return cached('win' + frame + sky + panes, () => {
    const S = 128, c = canvas(S, S), x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, S); g.addColorStop(0, shade(sky, 0.1)); g.addColorStop(1, shade(sky, -0.12));
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    x.fillStyle = 'rgba(255,255,255,0.25)'; x.beginPath(); x.moveTo(10, S); x.lineTo(50, 0); x.lineTo(70, 0); x.lineTo(30, S); x.fill();
    x.fillStyle = hex(frame); x.fillRect(0, 0, S, 8); x.fillRect(0, S - 8, S, 8); x.fillRect(0, 0, 8, S); x.fillRect(S - 8, 0, 8, S);
    if (panes >= 2) x.fillRect(S / 2 - 3, 0, 6, S);
    if (panes >= 4) x.fillRect(0, S / 2 - 3, S, 6);
    return toTex(c, { repeat: false });
  });
}

export function panelLightTex() {
  return cached('panel-light', () => {
    const c = canvas(64, 128), x = c.getContext('2d');
    x.fillStyle = '#f4fbff'; x.fillRect(0, 0, 64, 128);
    x.strokeStyle = '#c9d6dc'; x.lineWidth = 2;
    for (let i = 1; i < 8; i++) { x.beginPath(); x.moveTo(0, i * 16); x.lineTo(64, i * 16); x.stroke(); }
    x.strokeStyle = '#aab'; x.lineWidth = 4; x.strokeRect(0, 0, 64, 128);
    return toTex(c, { repeat: false });
  }, true);
}

// ---------- signage & graphics ----------
export function textTex(lines, { w = 512, h = 128, bg = '#ffffff', fg = '#222', font = 'bold 56px "Trebuchet MS", sans-serif', align = 'center', border = null, key = null, padding = 20, lineHeight = 1.15, shadow = null } = {}) {
  const arr = Array.isArray(lines) ? lines : [lines];
  const k = key || 'txt:' + arr.join('|') + w + h + bg + fg + font + border;
  return cached(k, () => {
    const c = canvas(w, h), x = c.getContext('2d');
    if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); } else x.clearRect(0, 0, w, h);
    if (border) { x.strokeStyle = border; x.lineWidth = 8; x.strokeRect(4, 4, w - 8, h - 8); }
    x.font = font; x.fillStyle = fg; x.textAlign = align; x.textBaseline = 'middle';
    if (shadow) { x.shadowColor = shadow; x.shadowBlur = 12; }
    const size = parseInt(font.match(/(\d+)px/)?.[1] || 40, 10) * lineHeight;
    const total = size * arr.length;
    arr.forEach((ln, i) => {
      const px = align === 'center' ? w / 2 : align === 'left' ? padding : w - padding;
      x.fillText(ln, px, h / 2 - total / 2 + size * (i + 0.5));
    });
    const t = toTex(c, { repeat: false });
    return t;
  });
}

export function posterTex(kind, seed = 1) {
  return cached('poster' + kind + seed, () => {
    const W = 192, H = 256, c = canvas(W, H), x = c.getContext('2d'), r = rng(100 + seed);
    const palettes = [['#fff4c2', '#e0574a', '#2d5d8a'], ['#d9f2e4', '#3b8a63', '#f2a93b'], ['#f6e1ef', '#9c4f8c', '#3a7cc2'], ['#e3ecff', '#4466cc', '#ffb347']];
    const [bg, a, b] = palettes[seed % palettes.length];
    x.fillStyle = bg; x.fillRect(0, 0, W, H);
    x.fillStyle = a; x.font = 'bold 22px "Trebuchet MS", sans-serif'; x.textAlign = 'center';
    const titles = {
      school: ['READ EVERY DAY', 'WASH YOUR HANDS', 'BE KIND', 'THE WATER CYCLE', 'COUNT TO TEN', 'WHERE DO YOU GO?'],
      weird: ['DID YOU SLEEP?', 'THIS IS FINE', 'ARE YOU REAL?', 'SMILE ALWAYS', 'NO EXIT HERE', 'YOU WERE HERE'],
      mall: ['SALE', 'NEW ARRIVALS', 'OPEN 24H', 'COME BACK SOON'],
    }[kind] || ['HELLO'];
    const t = titles[seed % titles.length];
    x.fillText(t, W / 2, 34);
    // simple friendly figure / shapes
    x.fillStyle = b; x.beginPath(); x.arc(W / 2, 120, 42, 0, 7); x.fill();
    x.fillStyle = bg; x.beginPath(); x.arc(W / 2 - 14, 110, 6, 0, 7); x.arc(W / 2 + 14, 110, 6, 0, 7); x.fill();
    x.strokeStyle = bg; x.lineWidth = 4; x.beginPath(); x.arc(W / 2, 124, 18, 0.2, Math.PI - 0.2); x.stroke();
    for (let i = 0; i < 4; i++) { x.fillStyle = [a, b][i % 2]; x.fillRect(20 + i * 40, 190, 28, 28 + r() * 20); }
    x.strokeStyle = a; x.lineWidth = 6; x.strokeRect(3, 3, W - 6, H - 6);
    return toTex(c, { repeat: false });
  });
}

export function chalkboardTex(lines) {
  return cached('chalk' + lines.join('|'), () => {
    const W = 512, H = 256, c = canvas(W, H), x = c.getContext('2d'), r = rng(9);
    x.fillStyle = '#2f4a3c'; x.fillRect(0, 0, W, H);
    blotches(x, W, H, r, 40, ['#3d5a4a', '#ffffff'], 0.05, 20, 80);
    x.fillStyle = 'rgba(240,240,230,0.85)'; x.font = '30px "Comic Sans MS", "Chalkboard SE", cursive'; x.textAlign = 'left';
    lines.forEach((l, i) => x.fillText(l, 30, 54 + i * 44));
    x.strokeStyle = '#7a5a3a'; x.lineWidth = 14; x.strokeRect(0, 0, W, H);
    return toTex(c, { repeat: false });
  });
}

// Retro desktop window — original design, not a copy of any OS.
export function dialogTex(title, body, { w = 384, h = 256, accent = '#3a5bd9', buttons = ['OK'], key = null, icon = '?' } = {}) {
  return cached(key || 'dlg' + title + body + accent, () => {
    const c = canvas(w, h), x = c.getContext('2d');
    x.fillStyle = '#d6d2c8'; x.fillRect(0, 0, w, h);
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, w, 3); x.fillRect(0, 0, 3, h);
    x.fillStyle = '#6d6a63'; x.fillRect(0, h - 3, w, 3); x.fillRect(w - 3, 0, 3, h);
    const g = x.createLinearGradient(0, 0, w, 0); g.addColorStop(0, accent); g.addColorStop(1, '#9fb4ff');
    x.fillStyle = g; x.fillRect(6, 6, w - 12, 30);
    x.fillStyle = '#fff'; x.font = 'bold 18px Tahoma, Verdana, sans-serif'; x.textBaseline = 'middle'; x.fillText(title, 14, 21);
    for (let i = 0; i < 3; i++) { x.fillStyle = '#d6d2c8'; x.fillRect(w - 30 - i * 26, 10, 22, 20); x.fillStyle = '#222'; x.fillRect(w - 24 - i * 26, 22, 10, 3); }
    x.fillStyle = '#f7d54a'; x.beginPath(); x.arc(46, 92, 22, 0, 7); x.fill();
    x.fillStyle = '#222'; x.font = 'bold 26px Tahoma, sans-serif'; x.textAlign = 'center'; x.fillText(icon, 46, 93);
    x.textAlign = 'left'; x.font = '18px Tahoma, Verdana, sans-serif'; x.fillStyle = '#111';
    body.split('\n').forEach((l, i) => x.fillText(l, 84, 84 + i * 24));
    buttons.forEach((b, i) => {
      const bx = w / 2 - buttons.length * 50 + i * 100 + 6, by = h - 52;
      x.fillStyle = '#d6d2c8'; x.fillRect(bx, by, 88, 32);
      x.strokeStyle = '#222'; x.lineWidth = 2; x.strokeRect(bx, by, 88, 32);
      x.fillStyle = '#fff'; x.fillRect(bx + 2, by + 2, 84, 2);
      x.fillStyle = '#111'; x.textAlign = 'center'; x.fillText(b, bx + 44, by + 17); x.textAlign = 'left';
    });
    return toTex(c, { repeat: false });
  });
}

export function eyeTex(bg = 'transparent', key = 'eye') {
  return cached(key + bg, () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d');
    if (bg !== 'transparent') { x.fillStyle = bg; x.fillRect(0, 0, S, S); }
    x.save(); x.translate(S / 2, S / 2);
    x.beginPath(); x.ellipse(0, 0, 118, 70, 0, 0, Math.PI * 2);
    const g = x.createRadialGradient(0, 0, 20, 0, 0, 120); g.addColorStop(0, '#ffffff'); g.addColorStop(0.75, '#e4e1dc'); g.addColorStop(1, '#9c958d');
    x.fillStyle = g; x.fill();
    x.clip();
    const ig = x.createRadialGradient(0, 0, 8, 0, 0, 52); ig.addColorStop(0, '#2a1a10'); ig.addColorStop(0.5, '#6b4a2c'); ig.addColorStop(1, '#2b1d14');
    x.fillStyle = ig; x.beginPath(); x.arc(0, 0, 52, 0, 7); x.fill();
    x.fillStyle = '#050505'; x.beginPath(); x.arc(0, 0, 26, 0, 7); x.fill();
    x.fillStyle = '#fff'; x.beginPath(); x.arc(-14, -16, 8, 0, 7); x.fill(); x.beginPath(); x.arc(8, -20, 4, 0, 7); x.fill();
    x.restore();
    x.strokeStyle = '#3a2a22'; x.lineWidth = 5; x.beginPath(); x.ellipse(S / 2, S / 2, 118, 70, 0, 0, Math.PI * 2); x.stroke();
    return toTex(c, { repeat: false });
  });
}

export function eyesPatternTex() {
  return cached('eyes-pattern', () => {
    const S = 512, c = canvas(S, S), x = c.getContext('2d'), r = rng(666);
    x.fillStyle = '#030303'; x.fillRect(0, 0, S, S);
    const eye = eyeTex();
    const img = eye.image;
    for (let i = 0; i < 34; i++) {
      const s = 50 + r() * 70, px = r() * S, py = r() * S;
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
        x.globalAlpha = 0.85; x.drawImage(img, px + ox - s / 2, py + oy - s * 0.3, s, s * 0.6);
      }
    }
    x.globalAlpha = 1;
    return toTex(c);
  });
}

export function cloudSpriteTex(seed = 1, tint = '#ffffff') {
  return cached('cloud' + seed + tint, () => {
    const W = 256, H = 160, c = canvas(W, H), x = c.getContext('2d'), r = rng(300 + seed);
    for (let i = 0; i < 26; i++) {
      const px = 50 + r() * 156, py = 70 + (r() - 0.3) * 40 - Math.sin((px - 50) / 156 * Math.PI) * 26;
      const rad = 18 + r() * 34 * Math.sin((px - 30) / 196 * Math.PI);
      const g = x.createRadialGradient(px, py - rad * 0.3, rad * 0.1, px, py, rad);
      g.addColorStop(0, tint); g.addColorStop(0.6, tint); g.addColorStop(1, 'rgba(255,255,255,0)');
      x.globalAlpha = 0.85; x.fillStyle = g; x.beginPath(); x.arc(px, py, rad, 0, 7); x.fill();
    }
    // slightly darker bottom
    x.globalCompositeOperation = 'source-atop';
    const sh = x.createLinearGradient(0, 40, 0, 130); sh.addColorStop(0, 'rgba(0,0,0,0)'); sh.addColorStop(1, 'rgba(70,90,130,0.25)');
    x.fillStyle = sh; x.fillRect(0, 0, W, H);
    x.globalCompositeOperation = 'source-over';
    return toTex(c, { repeat: false });
  });
}

export function blobShadowTex() {
  return cached('blob', () => {
    const S = 64, c = canvas(S, S), x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 2, 32, 32, 32);
    g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(0.6, 'rgba(0,0,0,0.2)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    return toTex(c, { repeat: false, srgb: false });
  }, true);
}

export function glowTex(color = '#ffffff') {
  return cached('glow' + color, () => {
    const S = 64, c = canvas(S, S), x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, color); g.addColorStop(0.3, color); g.addColorStop(1, 'rgba(0,0,0,0)');
    x.globalAlpha = 0.9; x.fillStyle = g; x.fillRect(0, 0, S, S);
    return toTex(c, { repeat: false });
  }, true);
}

export function staticTex() {
  // Animated by the caller via offset jitter.
  return cached('static', () => {
    const S = 128, c = canvas(S, S), x = c.getContext('2d'), r = rng(5);
    const id = x.createImageData(S, S);
    for (let i = 0; i < S * S; i++) { const v = (r() * 255) | 0; id.data[i * 4] = v; id.data[i * 4 + 1] = v; id.data[i * 4 + 2] = v; id.data[i * 4 + 3] = 255; }
    x.putImageData(id, 0, 0);
    return toTex(c, { filter: false });
  });
}

export function colorBarsTex() {
  return cached('bars', () => {
    const W = 128, H = 96, c = canvas(W, H), x = c.getContext('2d');
    const cols = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
    cols.forEach((col, i) => { x.fillStyle = col; x.fillRect(i * W / 7, 0, W / 7 + 1, H * 0.7); });
    x.fillStyle = '#111'; x.fillRect(0, H * 0.7, W, H * 0.3);
    x.fillStyle = '#fff'; x.fillRect(W * 0.6, H * 0.75, W * 0.2, H * 0.2);
    return toTex(c, { repeat: false, filter: false });
  });
}

export function screenTex(kind = 'desktop', seed = 1) {
  return cached('screen' + kind + seed, () => {
    const W = 256, H = 192, c = canvas(W, H), x = c.getContext('2d'), r = rng(seed);
    if (kind === 'desktop') {
      const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#4f8fd8'); g.addColorStop(0.62, '#a9d2f5'); g.addColorStop(0.62, '#5aa34a'); g.addColorStop(1, '#3f7d35');
      x.fillStyle = g; x.fillRect(0, 0, W, H);
      x.fillStyle = 'rgba(255,255,255,0.9)';
      for (let i = 0; i < 4; i++) { x.beginPath(); x.arc(30 + i * 60 + r() * 20, 30 + r() * 30, 14, 0, 7); x.arc(44 + i * 60 + r() * 20, 34 + r() * 20, 12, 0, 7); x.fill(); }
      for (let i = 0; i < 4; i++) { x.fillStyle = ['#f2d24b', '#fff', '#e8a', '#9cf'][i]; x.fillRect(10, 12 + i * 34, 20, 18); x.fillStyle = '#fff'; x.fillRect(8, 33 + i * 34, 24, 4); }
      x.fillStyle = '#c9c5bb'; x.fillRect(0, H - 16, W, 16); x.fillStyle = '#3c8a3c'; x.fillRect(2, H - 14, 40, 12);
    } else if (kind === 'text') {
      x.fillStyle = '#071a0c'; x.fillRect(0, 0, W, H);
      x.fillStyle = '#5cff8a'; x.font = '13px monospace';
      const lines = ['C:\\DREAMS\\> dir', ' HOUSE.EXE   SCHOOL.DAT', ' POOL.TMP    YOU.???', 'C:\\DREAMS\\> run you', 'ERROR: you are already', '       running.', 'C:\\DREAMS\\> _'];
      lines.forEach((l, i) => x.fillText(l, 8, 20 + i * 18));
    } else if (kind === 'eye') {
      x.fillStyle = '#111'; x.fillRect(0, 0, W, H);
      x.drawImage(eyeTex().image, 28, 40, 200, 120);
    } else if (kind === 'sky') {
      const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#5aa0e6'); g.addColorStop(1, '#d5ecff');
      x.fillStyle = g; x.fillRect(0, 0, W, H);
      x.fillStyle = '#fff'; x.beginPath(); x.arc(90, 90, 26, 0, 7); x.arc(120, 80, 30, 0, 7); x.arc(150, 92, 22, 0, 7); x.fill();
    }
    // scanlines
    x.fillStyle = 'rgba(0,0,0,0.18)';
    for (let i = 0; i < H; i += 3) x.fillRect(0, i, W, 1);
    return toTex(c, { repeat: false });
  });
}

export function fenceTex() {
  return cached('fence', () => {
    const W = 128, H = 64, c = canvas(W, H), x = c.getContext('2d');
    x.clearRect(0, 0, W, H);
    x.fillStyle = '#f4f1ea';
    for (let i = 0; i < 8; i++) {
      x.beginPath(); x.moveTo(i * 16 + 3, H); x.lineTo(i * 16 + 3, 10); x.lineTo(i * 16 + 8, 2); x.lineTo(i * 16 + 13, 10); x.lineTo(i * 16 + 13, H); x.fill();
    }
    x.fillRect(0, 18, W, 6); x.fillRect(0, 46, W, 6);
    x.fillStyle = 'rgba(0,0,0,0.12)'; for (let i = 0; i < 8; i++) x.fillRect(i * 16 + 11, 10, 2, H);
    const t = toTex(c);
    t.generateMipmaps = false; t.minFilter = THREE.LinearFilter;
    return t;
  });
}

export function railingTex() {
  return cached('railing', () => {
    const W = 128, H = 64, c = canvas(W, H), x = c.getContext('2d');
    x.clearRect(0, 0, W, H);
    x.fillStyle = '#2b2b2b';
    x.fillRect(0, 0, W, 5); x.fillRect(0, H - 4, W, 4);
    for (let i = 0; i < 8; i++) x.fillRect(i * 16 + 7, 0, 3, H);
    return toTex(c);
  });
}

export function causticsTex() {
  return cached('caustics', () => {
    const S = 256, c = canvas(S, S), x = c.getContext('2d'), r = rng(77);
    x.fillStyle = '#000'; x.fillRect(0, 0, S, S);
    x.strokeStyle = '#fff'; x.lineCap = 'round';
    for (let i = 0; i < 120; i++) {
      x.globalAlpha = 0.25 + r() * 0.4; x.lineWidth = 1 + r() * 2.5;
      const px = r() * S, py = r() * S;
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
        x.beginPath(); x.moveTo(px + ox, py + oy);
        x.bezierCurveTo(px + ox + 20, py + oy - 10 + r() * 5, px + ox + 30, py + oy + 12, px + ox + 44, py + oy + 2); x.stroke();
      }
    }
    x.globalAlpha = 1;
    return toTex(c, { srgb: false });
  });
}

export function paintingTex(seed) {
  return cached('painting' + seed, () => {
    const W = 192, H = 144, c = canvas(W, H), x = c.getContext('2d'), r = rng(400 + seed);
    const skies = [['#8ec5f0', '#f7e6c4'], ['#f2a37a', '#fbe2b4'], ['#6c7fb8', '#c6c0e0'], ['#a8d8c8', '#f0f0d0']];
    const [s1, s2] = skies[seed % skies.length];
    const g = x.createLinearGradient(0, 0, 0, H); g.addColorStop(0, s1); g.addColorStop(1, s2);
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.fillStyle = ['#6c9a4f', '#9a8a5a', '#4f6f8f', '#7aa060'][seed % 4];
    x.beginPath(); x.moveTo(0, H); for (let i = 0; i <= 8; i++) x.lineTo(i * W / 8, H * 0.6 + Math.sin(i * 1.3 + seed) * 12); x.lineTo(W, H); x.fill();
    if (seed % 3 === 0) { x.fillStyle = '#fff'; x.fillRect(W * 0.6, H * 0.45, 22, 18); x.fillStyle = '#b66'; x.beginPath(); x.moveTo(W * 0.6 - 3, H * 0.45); x.lineTo(W * 0.6 + 11, H * 0.36); x.lineTo(W * 0.6 + 25, H * 0.45); x.fill(); }
    if (seed % 3 === 1) { x.fillStyle = '#fff'; x.fillRect(W * 0.45, H * 0.4, 10, 22); }
    x.strokeStyle = '#6b4b2a'; x.lineWidth = 10; x.strokeRect(0, 0, W, H);
    return toTex(c, { repeat: false });
  });
}

export { shade, hex };

// Two-tone painted wall with a wainscot band, mapped so v=0..1 spans `height`.
export function wainscotTex(lower = 0x8fa79a, upper = 0xece6d4, stripe = 0x5e7a6c, split = 0.38, kind = 'paint') {
  return cached('wains' + lower + upper + stripe + split + kind, () => {
    const W = 128, H = 512, c = canvas(W, H), x = c.getContext('2d'), r = rng(91);
    const sy = H * (1 - split);
    if (kind === 'wallpaper') {
      x.fillStyle = hex(upper); x.fillRect(0, 0, W, sy);
      for (let i = 0; i < 8; i++) { x.fillStyle = i % 2 ? shade(upper, -0.04) : hex(upper); x.fillRect(i * 16, 0, 16, sy); }
      x.fillStyle = hex(lower); x.fillRect(0, sy, W, H - sy);
      for (let i = 0; i < 4; i++) { x.strokeStyle = shade(lower, -0.15); x.lineWidth = 2; x.strokeRect(i * 32 + 4, sy + 14, 24, H - sy - 30); }
    } else {
      x.fillStyle = hex(upper); x.fillRect(0, 0, W, sy);
      x.fillStyle = hex(lower); x.fillRect(0, sy, W, H - sy);
      blotches(x, W, H, r, 30, [shade(upper, -0.02), shade(lower, 0.02)], 0.05, 10, 40);
    }
    x.fillStyle = hex(stripe); x.fillRect(0, sy - 6, W, 10);
    x.fillStyle = 'rgba(255,255,255,0.25)'; x.fillRect(0, sy - 6, W, 2);
    x.fillStyle = shade(lower, -0.2); x.fillRect(0, H - 16, W, 16);
    return toTex(c);
  });
}

export function corkTex() {
  return cached('cork', () => {
    const c = canvas(256, 128), x = c.getContext('2d'), r = rng(92);
    x.fillStyle = '#b8875a'; x.fillRect(0, 0, 256, 128);
    speckle(x, 256, 128, r, 4000, ['#8a5f3a', '#d6a878', '#a07048'], 0.6, 1.6);
    const cols = ['#fffbe8', '#ffd8e4', '#d8f0ff', '#fff2a8', '#d9f5d0'];
    for (let i = 0; i < 9; i++) {
      x.save(); x.translate(20 + r() * 216, 15 + r() * 90); x.rotate((r() - 0.5) * 0.3);
      x.fillStyle = cols[i % 5]; x.fillRect(-18, -14, 36 + r() * 10, 28 + r() * 8);
      x.fillStyle = 'rgba(60,60,90,0.5)'; for (let k = 0; k < 4; k++) x.fillRect(-14, -8 + k * 6, 20 + r() * 10, 1.5);
      x.fillStyle = '#d33'; x.beginPath(); x.arc(0, -12, 2.5, 0, 7); x.fill();
      x.restore();
    }
    x.strokeStyle = '#7a5a3a'; x.lineWidth = 8; x.strokeRect(0, 0, 256, 128);
    return toTex(c, { repeat: false });
  });
}

export function cloudSeaTex() {
  return cached('cloudsea', () => {
    const S = 512, c = canvas(S, S), x = c.getContext('2d'), r = rng(93);
    x.fillStyle = '#e9eef6'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 260; i++) {
      const px = r() * S, py = r() * S, rad = 20 + r() * 60;
      for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) {
        const g = x.createRadialGradient(px + ox, py + oy - rad * 0.3, rad * 0.1, px + ox, py + oy, rad);
        g.addColorStop(0, '#ffffff'); g.addColorStop(0.7, 'rgba(255,255,255,0.6)'); g.addColorStop(1, 'rgba(220,228,240,0)');
        x.fillStyle = g; x.beginPath(); x.arc(px + ox, py + oy, rad, 0, 7); x.fill();
      }
    }
    return toTex(c);
  });
}

export function stepsTex() {
  return cached('steps', () => {
    const c = canvas(64, 64), x = c.getContext('2d');
    x.fillStyle = '#6d7076'; x.fillRect(0, 0, 64, 64);
    x.fillStyle = '#8d9096'; for (let i = 0; i < 8; i++) x.fillRect(i * 8, 0, 4, 64);
    x.fillStyle = '#e8c84a'; x.fillRect(0, 0, 64, 4);
    return toTex(c);
  });
}

export function rainbowTex() {
  return cached('rainbow', () => {
    const c = canvas(8, 64), x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, 64);
    ['#ff4d4d', '#ff9f43', '#ffe14d', '#5ce07a', '#4db8ff', '#6a5cff', '#c45cff'].forEach((col, i) => g.addColorStop(i / 6, col));
    x.fillStyle = g; x.fillRect(0, 0, 8, 64);
    return toTex(c, { repeat: false });
  });
}

export function gridTex(bg = '#101828', line = '#3a5bd9', n = 8) {
  return cached('grid' + bg + line + n, () => {
    const S = 128, c = canvas(S, S), x = c.getContext('2d');
    x.fillStyle = bg; x.fillRect(0, 0, S, S);
    x.strokeStyle = line; x.lineWidth = 2;
    for (let i = 0; i <= n; i++) { x.beginPath(); x.moveTo(i * S / n, 0); x.lineTo(i * S / n, S); x.moveTo(0, i * S / n); x.lineTo(S, i * S / n); x.stroke(); }
    return toTex(c);
  });
}
