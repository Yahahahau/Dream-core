// Keyboard + mouse (pointer lock) + touch (virtual joystick / drag look).
export class InputManager {
  constructor(game, layer) {
    this.game = game;
    this.layer = layer;
    this.keys = new Set();
    this.move = { x: 0, y: 0 };
    this.run = false;
    this.look = { x: 0, y: 0 };
    this.edges = new Set();
    this.enabled = false;
    this.locked = false;
    this.isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    this.joy = null;      // {id, ox, oy, x, y}
    this.lookPtr = null;  // {id, x, y, moved}
    this.joyEl = document.getElementById('joystick');
    this.knobEl = document.getElementById('joystick-knob');

    addEventListener('keydown', (e) => this.onKey(e, true));
    addEventListener('keyup', (e) => this.onKey(e, false));
    addEventListener('blur', () => { this.keys.clear(); this.releaseJoy(); });

    layer.addEventListener('pointerdown', (e) => this.onDown(e));
    addEventListener('pointermove', (e) => this.onMove(e), { passive: false });
    addEventListener('pointerup', (e) => this.onUp(e));
    addEventListener('pointercancel', (e) => this.onUp(e));
    document.addEventListener('pointerlockchange', () => {
      const was = this.locked;
      this.locked = document.pointerLockElement === layer;
      if (was && !this.locked && this.enabled && !this.isTouch) this.game.onPointerUnlock();
    });
    addEventListener('mousemove', (e) => {
      if (!this.locked || !this.enabled) return;
      this.look.x += e.movementX; this.look.y += e.movementY;
    });
    layer.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  onKey(e, down) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
    const k = e.code;
    if (down) {
      if (!this.keys.has(k)) {
        if (k === 'KeyE' || k === 'KeyF' || k === 'Enter') this.edges.add('interact');
        if (k === 'Escape' || k === 'KeyP') this.edges.add('pause');
        if (k === 'KeyJ' || k === 'Tab') this.edges.add('journal');
        if (k === 'KeyM') this.edges.add('map');
      }
      this.keys.add(k);
      if (['ArrowUp', 'ArrowDown', 'Space', 'Tab'].includes(k)) e.preventDefault();
    } else this.keys.delete(k);
  }

  requestLock() {
    if (this.isTouch || this.locked) return;
    try { const p = this.layer.requestPointerLock?.(); p?.catch?.(() => {}); } catch (e) { /* ignore */ }
  }

  exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }

  onDown(e) {
    if (!this.enabled) return;
    if (e.pointerType === 'mouse') {
      if (!this.locked) { this.requestLock(); return; }
      if (e.button === 0) this.edges.add('interact');
      return;
    }
    e.preventDefault();
    const w = innerWidth, h = innerHeight;
    const s = this.game.ui?.scale || 1;
    if (!this.joy && e.clientX < w * 0.45 && e.clientY > h * 0.3) {
      const m = 70 * s;
      const ox = Math.max(m, Math.min(w * 0.45, e.clientX)), oy = Math.max(m, Math.min(h - m, e.clientY));
      this.joy = { id: e.pointerId, ox, oy, x: 0, y: 0, t: performance.now() };
      this.joyEl.style.left = ox + 'px'; this.joyEl.style.top = oy + 'px';
      this.joyEl.classList.add('active');
      this.updateJoy(e.clientX, e.clientY);
    } else if (!this.lookPtr) {
      this.lookPtr = { id: e.pointerId, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() };
    }
  }

  updateJoy(px, py) {
    const s = this.game.ui?.scale || 1, R = 52 * s;
    let dx = px - this.joy.ox, dy = py - this.joy.oy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = dx / d * R; dy = dy / d * R; }
    this.joy.x = dx / R; this.joy.y = -dy / R;
    this.knobEl.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  }

  onMove(e) {
    if (this.joy && e.pointerId === this.joy.id) { e.preventDefault(); this.updateJoy(e.clientX, e.clientY); }
    else if (this.lookPtr && e.pointerId === this.lookPtr.id) {
      e.preventDefault();
      this.look.x += (e.clientX - this.lookPtr.x) * 2.2;
      this.look.y += (e.clientY - this.lookPtr.y) * 2.2;
      this.lookPtr.x = e.clientX; this.lookPtr.y = e.clientY;
    }
  }

  onUp(e) {
    if (this.joy && e.pointerId === this.joy.id) this.releaseJoy();
    if (this.lookPtr && e.pointerId === this.lookPtr.id) {
      const moved = Math.hypot(e.clientX - this.lookPtr.sx, e.clientY - this.lookPtr.sy);
      if (moved < 10 && performance.now() - this.lookPtr.t < 280) this.edges.add('tap');
      this.lookPtr = null;
    }
  }

  releaseJoy() {
    this.joy = null;
    this.joyEl?.classList.remove('active');
    if (this.knobEl) this.knobEl.style.transform = 'translate(-50%, -50%)';
  }

  // Called once per frame.
  poll() {
    let x = 0, y = 0;
    const k = this.keys;
    if (k.has('KeyW') || k.has('ArrowUp')) y += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) y -= 1;
    if (k.has('KeyD') || k.has('ArrowRight')) x += 1;
    if (k.has('KeyA') || k.has('ArrowLeft')) x -= 1;
    const len = Math.hypot(x, y);
    if (len > 1) { x /= len; y /= len; }
    this.run = k.has('ShiftLeft') || k.has('ShiftRight');
    if (this.joy) {
      x = this.joy.x; y = this.joy.y;
      const m = Math.hypot(x, y);
      this.run = m > 0.97;
    }
    this.move.x = this.enabled ? x : 0;
    this.move.y = this.enabled ? y : 0;
  }

  consumeLook() {
    const l = { x: this.look.x, y: this.look.y };
    this.look.x = 0; this.look.y = 0;
    return l;
  }

  edge(name) {
    if (this.edges.has(name)) { this.edges.delete(name); return true; }
    return false;
  }

  clearEdges() { this.edges.clear(); }
}
