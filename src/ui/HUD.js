// Minimal in-game overlay: reticle, contextual prompt, location title, captions.
export class HUD {
  constructor(game) {
    this.game = game;
    this.root = document.getElementById('hud');
    this.reticle = document.getElementById('reticle');
    this.prompt = document.getElementById('prompt');
    this.promptText = document.getElementById('prompt-text');
    this.useBtn = document.getElementById('btn-use');
    this.useLabel = document.getElementById('btn-use-label');
    this.title = document.getElementById('location-title');
    this.caption = document.getElementById('caption');
    this.fps = document.getElementById('fps');
    this.lockHint = document.getElementById('lock-hint');
    this.useBtn.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); game.input.edges.add('interact'); });
    document.getElementById('btn-pause').addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); game.pause(); });
    document.getElementById('btn-journal').addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); game.openJournal(); });
    this.captionTimer = 0;
    this.titleTimer = 0;
  }

  show(v) { this.root.classList.toggle('hidden', !v); }

  setPrompt(text) {
    this.reticle.classList.toggle('focus', !!text);
    if (text) {
      this.promptText.textContent = text;
      this.prompt.classList.remove('hidden');
      this.useLabel.textContent = text;
      this.useBtn.classList.remove('hidden');
    } else {
      this.prompt.classList.add('hidden');
      this.useBtn.classList.add('hidden');
    }
  }

  showLocation(def) {
    if (!def) return;
    this.title.querySelector('.lt-num').textContent = `LEVEL ${def.num}`;
    this.title.querySelector('.lt-name').textContent = def.name;
    this.title.classList.toggle('weird', def.style === 'weird');
    this.title.classList.add('show');
    clearTimeout(this.titleTimer);
    this.titleTimer = setTimeout(() => this.title.classList.remove('show'), 4200);
  }

  setCaption(text, { mono = false, time = 4.5 } = {}) {
    this.caption.textContent = text;
    this.caption.classList.toggle('mono', mono);
    this.caption.classList.add('show');
    clearTimeout(this.captionTimer);
    this.captionTimer = setTimeout(() => this.caption.classList.remove('show'), time * 1000);
  }

  setLockHint(v) { this.lockHint.classList.toggle('hidden', !v); }
}
