// UI root: responsive scaling for portrait + landscape, modal stack and small
// transient messages.
import { HUD } from './HUD.js';
import { MainMenu } from './MainMenu.js';
import { PauseMenu } from './PauseMenu.js';
import { h, esc } from './dom.js';

export class UI {
  constructor(game) {
    this.game = game;
    this.scale = 1;
    this.escStack = [];
    this.hud = new HUD(game);
    this.main = new MainMenu(game);
    this.pause = new PauseMenu(game);
    this.toastEl = document.getElementById('update-toast');
    this.np = document.getElementById('now-playing');
    if (game.input.isTouch) document.body.classList.add('touch');
    this.resize();
  }

  // UI size follows the viewport: 430x870 portrait / 870x430 landscape = 1.0
  resize() {
    const w = innerWidth, hgt = innerHeight;
    const portrait = hgt >= w;
    const s = portrait ? Math.min(w / 430, hgt / 870) : Math.min(w / 870, hgt / 430);
    this.scale = Math.max(0.72, Math.min(1.45, s));
    document.documentElement.style.setProperty('--u', this.scale.toFixed(3));
    document.body.classList.toggle('portrait', portrait);
    document.body.classList.toggle('landscape', !portrait);
  }

  pushEsc(fn) { this.escStack.push(fn); }
  popEsc(fn) { const i = this.escStack.lastIndexOf(fn); if (i >= 0) this.escStack.splice(i, 1); }
  handleEsc() {
    const fn = this.escStack[this.escStack.length - 1];
    if (fn) { fn(); return true; }
    return false;
  }
  get modalOpen() { return this.escStack.length > 0; }

  caption(text, opts) { this.hud.setCaption(text, opts); }

  toast(text, ms = 2600) {
    const t = this.toastEl;
    t.textContent = text;
    t.classList.remove('hidden');
    t.style.animation = 'none'; void t.offsetWidth; t.style.animation = '';
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => t.classList.add('hidden'), ms);
  }

  nowPlaying(tr) {
    this.np.querySelector('.np-text').textContent = `♪ ${tr.title}${tr.artist ? ' — ' + tr.artist : ''}`;
    this.np.classList.add('show');
    clearTimeout(this._npT);
    this._npT = setTimeout(() => this.np.classList.remove('show'), 5000);
  }

  loading(v) { document.getElementById('loading').classList.toggle('hidden', !v); }

  // Modal handwritten note.
  note(title, text) {
    const g = this.game;
    g.setModal(true);
    g.audio.sfx('page');
    const el = h(`<div class="screen dim"><div class="note-paper"><h3>${esc(title)}</h3><p>${esc(text)}</p><button class="menu-btn">Put it down</button></div></div>`);
    document.getElementById('menu-root').appendChild(el);
    const close = () => { el.remove(); this.popEsc(close); g.setModal(false); };
    el.querySelector('button').onclick = close;
    el.addEventListener('pointerdown', (e) => { if (e.target === el) close(); });
    this.pushEsc(close);
  }

  // Simple vertical choice list; resolves to index or -1.
  choice(title, options) {
    const g = this.game;
    g.setModal(true);
    return new Promise((res) => {
      const el = h(`<div class="screen dim"><div class="choice"><h3>${esc(title)}</h3><div class="menu-list">${options.map((o, i) => `<button class="menu-btn" data-i="${i}">${esc(o)}</button>`).join('')}<button class="menu-btn" data-i="-1" style="opacity:.7">Cancel</button></div></div></div>`);
      document.getElementById('menu-root').appendChild(el);
      const done = (i) => { el.remove(); this.popEsc(cancel); g.setModal(false); res(i); };
      const cancel = () => done(-1);
      el.addEventListener('click', (e) => { const b = e.target.closest('[data-i]'); if (b) { g.audio.ui('click'); done(+b.dataset.i); } });
      this.pushEsc(cancel);
    });
  }

  tapToContinue(big, small) {
    return new Promise((res) => {
      const el = h(`<div class="tap-overlay"><div><div class="big">${esc(big)}</div><div class="small">${esc(small)}</div></div></div>`);
      document.getElementById('menu-root').appendChild(el);
      el.addEventListener('pointerdown', () => { el.remove(); res(); }, { once: true });
    });
  }
}
