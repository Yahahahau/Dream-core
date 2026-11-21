// Settings panel: graphics tier, audio levels, controls, comfort options.
import { panel } from './dom.js';

export function openSettings(game, onClose) {
  const s = game.settings;
  const { body, close } = panel(game, 'Settings', 'saved automatically', onClose);
  const row = (label, hint, control) => `<div class="set-row"><label>${label}${hint ? `<small>${hint}</small>` : ''}</label>${control}</div>`;
  const seg = (key, opts) => `<div class="seg" data-key="${key}">${opts.map(([v, l]) => `<button data-v="${v}" class="${s.data[key] === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  const slider = (key, min, max, step) => `<input type="range" data-key="${key}" min="${min}" max="${max}" step="${step}" value="${s.data[key]}" />`;
  const tog = (key) => `<button class="toggle ${s.data[key] ? 'on' : ''}" data-toggle="${key}" aria-label="${key}"></button>`;
  body.innerHTML = [
    row('Graphics', 'Low (default) is fastest · Medium adds soft shadows & reflections · High adds bloom & sharper shadows', seg('quality', [['low', 'Low'], ['medium', 'Medium'], ['high', 'High']])),
    row('Music', 'Dreamcore playlist, shuffled', slider('musicVolume', 0, 1, 0.05)),
    row('Ambience', 'Wind, water, hum', slider('ambienceVolume', 0, 1, 0.05)),
    row('Effects', 'Footsteps, doors', slider('sfxVolume', 0, 1, 0.05)),
    row('Look sensitivity', '', slider('sensitivity', 0.3, 2.5, 0.05)),
    row('Field of view', '', slider('fov', 55, 90, 1)),
    row('Head bob', 'Camera sway while walking', tog('headBob')),
    row('Always run', '', tog('alwaysRun')),
    row('Invert look', '', tog('invertY')),
    row('Vignette', '', tog('vignette')),
    row('Film grain', '', tog('grain')),
    row('Show FPS', '', tog('showFps')),
    `<div class="set-row"><label>Next song<small>Skip to another track</small></label><button class="menu-btn" data-act="skip" style="padding:.45rem .9rem;font-size:.8rem">Skip ▸</button></div>`,
    `<div class="set-row"><label>Erase dream<small>Clears progress and journal</small></label><button class="menu-btn" data-act="reset" style="padding:.45rem .9rem;font-size:.8rem">Erase</button></div>`,
  ].join('');

  body.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    const segEl = b.closest('.seg');
    if (segEl) {
      const key = segEl.dataset.key, v = b.dataset.v;
      segEl.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x === b));
      s.set(key, v);
      if (key === 'quality') s.set('qualityChosen', true);
      game.applySettings(key);
      game.audio.ui('click');
    } else if (b.dataset.toggle) {
      const key = b.dataset.toggle;
      s.set(key, !s.data[key]);
      b.classList.toggle('on', s.data[key]);
      game.applySettings(key);
      game.audio.ui('click');
    } else if (b.dataset.act === 'skip') {
      game.audio.startMusic();
      game.audio.skipTrack();
    } else if (b.dataset.act === 'reset') {
      if (b.dataset.confirm) { game.save.reset(); b.textContent = 'Erased'; b.disabled = true; game.ui.toast('The dream was erased.'); }
      else { b.dataset.confirm = '1'; b.textContent = 'Sure?'; }
    }
  });
  body.addEventListener('input', (e) => {
    const i = e.target;
    if (i.type !== 'range') return;
    s.set(i.dataset.key, parseFloat(i.value));
    game.applySettings(i.dataset.key);
  });
  return close;
}
