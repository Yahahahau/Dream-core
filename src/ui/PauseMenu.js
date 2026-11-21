// Pause menu shown over the frozen world.
import { h } from './dom.js';
import { LEVEL_BY_ID } from '../levels/LevelRegistry.js';
import { openSettings } from './SettingsMenu.js';
import { openLocations } from './MainMenu.js';

export class PauseMenu {
  constructor(game) { this.game = game; this.el = null; }

  show() {
    const g = this.game;
    this.hide();
    const lv = LEVEL_BY_ID[g.world.level?.id];
    this.el = h(`<div class="screen dim menu-screen">
      <div class="title-wrap"><div class="game-sub" style="letter-spacing:.4em">PAUSED</div>
      <div class="game-title" style="font-size:1.9rem;letter-spacing:.08em;margin-right:0;margin-top:.6rem;font-style:italic">${lv ? lv.name : ''}</div></div>
      <div class="menu-list">
        <button class="menu-btn primary" data-a="resume">Resume</button>
        <button class="menu-btn" data-a="journal">Journal</button>
        <button class="menu-btn" data-a="locations">Locations</button>
        <button class="menu-btn" data-a="settings">Settings</button>
        <button class="menu-btn" data-a="menu">Main Menu</button>
      </div></div>`);
    document.getElementById('menu-root').appendChild(this.el);
    this.el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-a]');
      if (!b) return;
      g.audio.ui('click');
      const a = b.dataset.a;
      if (a === 'resume') g.resume();
      else if (a === 'journal') g.journal.open();
      else if (a === 'locations') openLocations(g);
      else if (a === 'settings') openSettings(g);
      else if (a === 'menu') g.toMenu();
    });
  }

  hide() { this.el?.remove(); this.el = null; }
}
