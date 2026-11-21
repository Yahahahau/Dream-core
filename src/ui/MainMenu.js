// Title screen over the live Starting Zone, plus Locations and Credits panels.
import { h, panel, esc } from './dom.js';
import { LEVELS } from '../levels/LevelRegistry.js';
import { openSettings } from './SettingsMenu.js';
import { TRACKS } from '../audio/SoundLibrary.js';

export class MainMenu {
  constructor(game) { this.game = game; this.el = null; }

  show() {
    const g = this.game;
    this.hide();
    const hasSave = !!g.save.data.location;
    this.el = h(`<div class="screen menu-screen">
      <div class="title-wrap">
        <div class="game-title">DREAMSCAPE</div>
        <div class="game-sub">places you almost remember</div>
        <div class="version">v${esc(g.version)}</div>
      </div>
      <div class="menu-list">
        <button class="menu-btn primary" data-a="begin">${hasSave ? 'Begin Again' : 'Begin Exploration'}</button>
        <button class="menu-btn" data-a="continue" ${hasSave ? '' : 'disabled'}>Continue</button>
        <button class="menu-btn" data-a="locations">Locations</button>
        <button class="menu-btn" data-a="settings">Settings</button>
        <button class="menu-btn" data-a="credits">Credits</button>
      </div>
      <div class="menu-foot">${g.input.isTouch ? 'left thumb walks · right thumb looks' : 'best with headphones'}</div>
    </div>`);
    document.getElementById('menu-root').appendChild(this.el);
    this.el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-a]');
      if (!b) return;
      g.audio.unlock();
      g.audio.startMusic();
      g.audio.ui('click');
      const a = b.dataset.a;
      if (a === 'begin') {
        if (hasSave && !b.dataset.confirm) { b.dataset.confirm = '1'; b.textContent = 'Start over? Tap again'; return; }
        g.newGame();
      } else if (a === 'continue') g.continueGame();
      else if (a === 'locations') openLocations(g, null);
      else if (a === 'settings') openSettings(g);
      else if (a === 'credits') openCredits(g);
    });
  }

  hide() { this.el?.remove(); this.el = null; }
}

export function openLocations(game, onClose) {
  const disc = game.save.data.discovered;
  const { body, close } = panel(game, 'Locations', `${disc.length} of ${LEVELS.length} discovered`, onClose);
  const thumbs = {};
  for (const e of game.save.data.journal) if (e.type === 'location' && e.thumb) thumbs[e.level] = e.thumb;
  const cur = game.world.level?.id;
  body.innerHTML = `<div class="loc-grid">${LEVELS.map((l) => {
    const known = disc.includes(l.id) || l.id === 'starting';
    return `<button class="loc ${known ? '' : 'locked'} ${cur === l.id && game.state !== 'menu' ? 'current' : ''}" data-id="${l.id}">
      ${known && thumbs[l.id] ? `<div class="img" style="background-image:url(${thumbs[l.id]})"></div>` : ''}
      <div class="cap"><small>LEVEL ${l.num}</small><b>${known ? esc(l.name) : '? ? ?'}</b></div></button>`;
  }).join('')}</div>`;
  body.addEventListener('click', (e) => {
    const b = e.target.closest('.loc');
    if (!b || b.classList.contains('locked')) return;
    close();
    game.travelTo(b.dataset.id);
  });
  return close;
}

export function openCredits(game) {
  const { body } = panel(game, 'Credits', 'DREAMSCAPE v' + game.version);
  body.innerHTML = `<div class="prose">
    <p>A first-person exploration of dreamcore and weirdcore places. There is nothing to win. Wander.</p>
    <h4>Music</h4><ul>${TRACKS.map((t) => `<li>${esc(t.title)}${t.artist ? ' — ' + esc(t.artist) : ''}</li>`).join('')}</ul>
    <p style="font-size:.75rem">Tracks supplied by the project owner. All rights belong to their respective artists.</p>
    <h4>World</h4><ul>
      <li>Rendering: three.js (MIT)</li>
      <li>All textures, geometry, skies, water and interface art are generated procedurally in code for this project.</li>
      <li>All ambience, footsteps and sound effects are synthesized live with the Web Audio API.</li>
    </ul>
    <h4>Thanks</h4><p>To everyone who remembers a place they have never been.</p></div>`;
}
