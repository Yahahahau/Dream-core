import './ui/style.css';
import { Game } from './core/Game.js';
import { bootSplash } from './utils/LoadingScreen.js';

const splash = bootSplash();

function webglOk() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) { return false; }
}

if (!webglOk()) {
  splash.error('This dream needs WebGL. Please try a recent browser, or enable hardware acceleration.');
} else {
  const game = new Game();
  game.start(splash).catch((e) => {
    console.error(e);
    splash.error('The dream could not start: ' + (e?.message || e));
  });
}
