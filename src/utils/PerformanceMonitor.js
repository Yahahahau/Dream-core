// Frame-time tracking with dynamic resolution scaling.
export class PerformanceMonitor {
  constructor(game) {
    this.game = game;
    this.avg = 16.7;
    this.timer = 0;
    this.frames = 0;
    this.fpsTimer = 0;
    this.fps = 60;
    this.cool = 2;
  }

  update(dtMs) {
    this.avg += (Math.min(dtMs, 100) - this.avg) * 0.05;
    this.frames++;
    this.fpsTimer += dtMs;
    if (this.fpsTimer >= 500) {
      this.fps = Math.round(this.frames * 1000 / this.fpsTimer);
      this.frames = 0; this.fpsTimer = 0;
      if (this.game.settings.data.showFps) {
        const r = this.game.renderer;
        document.getElementById('fps').textContent = `${this.fps} fps · ${(r.pixelRatio()).toFixed(2)}x · ${r.r.info.render.calls} calls`;
      }
    }
    this.cool -= dtMs / 1000;
    if (this.cool > 0 || document.hidden) return;
    const r = this.game.renderer;
    if (this.avg > 24 && r.scale > 0.55) { r.scale = Math.max(0.55, r.scale - 0.1); r.resize(); this.cool = 2.5; }
    else if (this.avg < 14 && r.scale < 1) { r.scale = Math.min(1, r.scale + 0.05); r.resize(); this.cool = 4; }
  }
}
