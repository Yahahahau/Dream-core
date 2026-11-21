// DREAMSCAPE — central game object: owns every system and the main loop.
import * as THREE from 'three';
import { Renderer } from './Renderer.js';
import { InputManager } from './InputManager.js';
import { AudioManager } from './AudioManager.js';
import { WorldManager } from './WorldManager.js';
import { quality } from './Materials.js';
import { PlayerController } from '../player/PlayerController.js';
import { CameraController } from '../player/CameraController.js';
import { CollisionSystem } from '../player/CollisionSystem.js';
import { InteractionSystem } from '../player/InteractionSystem.js';
import { Atmosphere } from '../environment/Atmosphere.js';
import { Lighting } from '../environment/LightingPresets.js';
import { tickWind } from '../environment/EnvironmentEffects.js';
import { UI } from '../ui/UI.js';
import { Journal } from '../ui/Journal.js';
import { Settings, SaveSystem } from '../utils/SaveSystem.js';
import { PerformanceMonitor } from '../utils/PerformanceMonitor.js';
import { UpdateChecker } from '../utils/UpdateChecker.js';
import { LEVEL_BY_ID } from '../levels/LevelRegistry.js';
import { analyzeNavigation } from '../utils/NavValidator.js';

/* global __BUILD_ID__, __APP_VERSION__ */

export class Game {
  constructor() {
    this.version = __APP_VERSION__;
    this.build = __BUILD_ID__;
    this.settings = new Settings();
    this.save = new SaveSystem();
    quality.level = this.settings.data.quality;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 1500);
    this.scene.add(this.camera);
    this.renderer = new Renderer(this, document.getElementById('stage'));
    this.input = new InputManager(this, document.getElementById('touch-layer'));
    this.cam = new CameraController(this, this.camera);
    this.collision = new CollisionSystem();
    this.player = new PlayerController(this);
    this.interaction = new InteractionSystem(this);
    this.audio = new AudioManager(this);
    this.atmosphere = new Atmosphere(this);
    this.lighting = new Lighting(this);
    this.world = new WorldManager(this);
    this.ui = new UI(this);
    this.journal = new Journal(this);
    this.perf = new PerformanceMonitor(this);
    this.updater = new UpdateChecker(this, this.build);
    this.state = 'boot';
    this.modal = false;
    this.clock = new THREE.Clock();
    this.time = 0;
    this.poseTimer = 0;
    window.__dream = this; // handy for debugging in the console
    this.nav = (opts) => analyzeNavigation(this, this.world.level, opts);
  }

  async start(splash) {
    this.renderer.setQuality(this.settings.data.quality);
    const onResize = () => { this.renderer.resize(); this.ui.resize(); };
    addEventListener('resize', onResize);
    addEventListener('orientationchange', () => setTimeout(onResize, 250));
    window.visualViewport?.addEventListener('resize', onResize);
    addEventListener('keydown', (e) => this.onKey(e));
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.persistPose(); });
    addEventListener('pagehide', () => this.persistPose());
    // first interaction anywhere unlocks audio
    const unlock = () => { this.audio.unlock(); this.audio.flushPending(); };
    addEventListener('pointerdown', unlock, { once: true });
    addEventListener('keydown', unlock, { once: true });

    this.loop();
    const resume = UpdateChecker.takeResume();
    if (resume && resume.state !== 'menu' && this.save.data.location) {
      await this.world.goTo(this.save.data.location.id, this.save.data.location.spawn, { instant: true, silent: true, pos: this.save.data.pos, yaw: this.save.data.yaw });
      this.state = 'menu-hold';
      splash.done();
      await this.ui.tapToContinue('the dream changed a little', 'TAP TO CONTINUE');
      this.audio.unlock(); this.audio.startMusic();
      this.state = 'play';
      this.ui.hud.show(true);
      this.input.enabled = true;
      this.input.requestLock();
      this.player.frozen = false;
      this.ui.hud.showLocation(LEVEL_BY_ID[this.world.level.id]);
    } else {
      await this.world.goTo('starting', 'menu', { instant: true, silent: true });
      this.state = 'menu';
      splash.done();
      this.ui.main.show();
    }
    this.updater.start();
  }

  // ---------- flow ----------
  async enterPlay(id, spawn = 'default', opts = {}) {
    this.ui.main.hide();
    this.ui.pause.hide();
    this.state = 'play';
    this.ui.hud.show(true);
    this.input.enabled = true;
    this.input.requestLock();
    this.ui.hud.setLockHint(false);
    await this.world.goTo(id, spawn, opts);
  }

  newGame() {
    const settingsKeep = this.settings.data;
    this.save.reset();
    this.settings.data = settingsKeep;
    this.enterPlay('starting', 'default');
  }

  continueGame() {
    const s = this.save.data;
    if (!s.location || !LEVEL_BY_ID[s.location.id]) return this.newGame();
    this.enterPlay(s.location.id, s.location.spawn, { pos: s.pos, yaw: s.yaw });
  }

  travelTo(id) {
    if (this.state === 'menu') return this.enterPlay(id, 'default');
    this.resume();
    this.world.goTo(id, 'default', { style: 'light' });
  }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this.input.enabled = false;
    this.input.releaseJoy();
    this.input.exitLock();
    this.ui.hud.setPrompt(null);
    this.ui.hud.setLockHint(false);
    this.ui.pause.show();
    this.persistPose();
  }

  resume() {
    // close any panels stacked over the pause menu
    while (this.ui.modalOpen) this.ui.handleEsc();
    this.ui.pause.hide();
    if (this.state !== 'paused' && this.state !== 'play') return;
    this.state = 'play';
    this.input.enabled = !this.modal;
    this.input.clearEdges();
    this.input.requestLock();
  }

  toMenu() {
    this.persistPose();
    while (this.ui.modalOpen) this.ui.handleEsc();
    this.ui.pause.hide();
    this.state = 'menu';
    this.input.enabled = false;
    this.input.exitLock();
    this.ui.hud.show(false);
    this.world.goTo('starting', 'menu', { silent: true, style: 'light' }).then(() => this.ui.main.show());
  }

  openJournal() {
    if (this.state === 'play') {
      this.setModal(true);
      this.journal.open(() => this.setModal(false));
    } else this.journal.open();
  }

  setModal(v) {
    this.modal = v;
    if (this.state !== 'play') return;
    this.input.enabled = !v;
    this.input.releaseJoy();
    if (v) { this.input.exitLock(); this.ui.hud.setPrompt(null); }
    else { this.input.clearEdges(); this.input.requestLock(); }
  }

  onPointerUnlock() {
    if (this.state === 'play' && !this.modal && !this.world.busy) this.pause();
  }

  onKey(e) {
    if (e.code === 'Escape' || e.code === 'KeyP') {
      if (this.ui.modalOpen) { this.ui.handleEsc(); return; }
      if (this.state === 'paused') this.resume();
      else if (this.state === 'play') this.pause();
    }
  }

  applySettings(key) {
    const s = this.settings.data;
    if (key === 'quality') {
      quality.level = s.quality;
      this.renderer.setQuality(s.quality);
      // rebuild the current place so materials pick up the new tier
      const lvl = this.world.level;
      if (lvl) {
        const pos = this.player.pos.toArray(), yaw = this.cam.yaw, pitch = this.cam.pitch;
        this.world.level.dispose();
        this.world.level = null;
        this.world.goTo(lvl.id, 'default', { pos, yaw, instant: true, silent: true }).then(() => this.cam.setPitch(pitch));
      }
    }
    if (['musicVolume', 'ambienceVolume', 'sfxVolume', 'muted'].includes(key)) this.audio.applyVolumes();
    if (['vignette', 'grain'].includes(key)) this.renderer.setPost(this.renderer.post);
    if (key === 'fov') this.cam.updateFov();
    if (key === 'showFps') document.getElementById('fps').classList.toggle('hidden', !s.showFps);
  }

  persistPose() {
    if (this.state === 'play' || this.state === 'paused') {
      this.save.setPose(this.player.pos, this.cam.yaw);
      this.save.persist();
    }
  }

  // Small 16:10 photograph of the current view for the journal.
  captureThumb() {
    try {
      this.renderer.render(this.time);
      const src = this.renderer.r.domElement;
      const W = 192, H = 120;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const ctx = c.getContext('2d');
      const sw = src.width, sh = src.height;
      let cw = sw, ch = sw * H / W;
      if (ch > sh) { ch = sh; cw = sh * W / H; }
      ctx.drawImage(src, (sw - cw) / 2, (sh - ch) / 2, cw, ch, 0, 0, W, H);
      // a little warmth, like an old print
      ctx.fillStyle = 'rgba(255,230,200,0.08)'; ctx.fillRect(0, 0, W, H);
      return c.toDataURL('image/jpeg', 0.72);
    } catch (e) { return null; }
  }

  // ---------- main loop ----------
  loop() {
    const frame = () => {
      requestAnimationFrame(frame);
      const rawDt = this.clock.getDelta();
      const dt = Math.min(rawDt, 0.05);
      this.time += dt;
      const t = this.time;
      this.input.poll();
      if (this.state === 'play' && !this.modal) {
        if (this.input.edge('journal')) this.openJournal();
        this.player.update(dt);
        this.cam.update(dt, this.player);
        this.interaction.update(dt);
        this.poseTimer += dt;
        if (this.poseTimer > 5) { this.poseTimer = 0; this.persistPose(); this.save.data.playTime += 5; }
        this.ui.hud.setLockHint(!this.input.isTouch && !this.input.locked && !this.world.busy);
        document.body.classList.toggle('joy-active', !!this.input.joy);
      } else if (this.state === 'menu' || this.state === 'menu-hold') {
        const lvl = this.world.level;
        const sp = lvl?.spawns.menu || lvl?.spawns.default;
        if (sp && this.state === 'menu') {
          this.cam.tYaw = sp.yaw + Math.sin(t * 0.05) * 0.35;
          this.cam.tPitch = (sp.pitch ?? 0.05) + Math.sin(t * 0.07) * 0.03;
        }
        this.cam.update(dt, this.player);
      } else {
        this.cam.update(0.0001, this.player);
      }
      if (this.state !== 'paused') this.world.update(dt, t);
      this.atmosphere.update(dt, t);
      this.lighting.update();
      tickWind(t);
      this.renderer.render(t);
      this.perf.update(rawDt * 1000);
    };
    requestAnimationFrame(frame);
  }
}
