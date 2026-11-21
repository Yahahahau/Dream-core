// Exploration journal: records discovered locations and strange objects,
// each with a small photograph taken at the moment of discovery.
import { LEVEL_BY_ID } from '../levels/LevelRegistry.js';
import { panel, esc } from './dom.js';

export class Journal {
  constructor(game) { this.game = game; this.tab = 'all'; }

  get entries() { return this.game.save.data.journal; }

  discoverLocation(id) {
    const save = this.game.save.data;
    if (save.discovered.includes(id)) return;
    save.discovered.push(id);
    const def = LEVEL_BY_ID[id];
    this.push({ type: 'location', level: id, name: def.name, desc: def.desc, notes: def.notes });
    this.game.audio.sfx('discover');
    this.game.ui.toast('Journal updated · ' + def.name);
  }

  addObject(levelId, name, desc, notes = '') {
    if (this.entries.some((e) => e.type === 'object' && e.name === name && e.level === levelId)) return;
    this.push({ type: 'object', level: levelId, name, desc, notes });
    this.game.ui.toast('Journal · ' + name);
  }

  push(e) {
    const save = this.game.save.data;
    save.seq += 1;
    e.seq = save.seq;
    e.time = Date.now();
    e.thumb = this.game.captureThumb();
    save.journal.push(e);
    this.game.save.persist();
  }

  open(onClose) {
    const g = this.game;
    const render = () => {
      const list = this.entries.filter((e) => this.tab === 'all' || e.type === this.tab).slice().reverse();
      body.innerHTML = list.length ? `<div class="entries">${list.map((e, i) => {
        const lv = LEVEL_BY_ID[e.level];
        const date = new Date(e.time);
        return `<div class="entry" style="animation-delay:${Math.min(i, 8) * 40}ms">
          <div class="thumb" style="${e.thumb ? `background-image:url(${e.thumb})` : ''}"></div>
          <div><div class="meta">#${String(e.seq).padStart(3, '0')} · ${e.type === 'location' ? 'LOCATION' : 'OBJECT'} · ${esc(lv ? 'LEVEL ' + lv.num : '')} · ${date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} ${date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</div>
          <h3>${esc(e.name)}</h3><p>${esc(e.desc)}</p>${e.notes ? `<div class="notes">${esc(e.notes)}</div>` : ''}</div></div>`;
      }).join('')}</div>` : '<div class="empty">Nothing written yet.<br/>Walk somewhere. Look closely at things.</div>';
      tabs.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === this.tab));
    };
    const { el, body, close } = panel(g, 'Journal', `${this.entries.length} entries · ${g.save.data.discovered.length}/13 places`, onClose);
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    tabs.innerHTML = '<button class="tab" data-tab="all">All</button><button class="tab" data-tab="location">Places</button><button class="tab" data-tab="object">Objects</button>';
    tabs.onclick = (e) => { const t = e.target.closest('.tab'); if (t) { this.tab = t.dataset.tab; g.audio.ui('click'); render(); } };
    el.querySelector('.panel').insertBefore(tabs, body);
    render();
    return close;
  }
}
