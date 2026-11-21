// First-person camera: smoothed look, walking head-bob, idle breathing sway,
// step smoothing on stairs and an aspect-aware field of view.
import * as THREE from 'three';
import { PLAYER } from './PlayerController.js';

const TAU = Math.PI * 2;

export class CameraController {
  constructor(game, camera) {
    this.game = game;
    this.camera = camera;
    this.yaw = 0; this.pitch = 0;
    this.tYaw = 0; this.tPitch = 0;
    this.eyeY = 0;
    this.phase = 0;
    this.bobAmt = 0;
    this.t = 0;
    this.lastStep = 0;
    this.dip = 0;
    this.extraRoll = 0;
    this.shake = 0;
    camera.rotation.order = 'YXZ';
  }

  setYaw(y) { this.yaw = this.tYaw = y; }
  setPitch(p) { this.pitch = this.tPitch = p; }

  snap(player) {
    this.eyeY = player.pos.y + PLAYER.eye;
    this.yaw = this.tYaw; this.pitch = this.tPitch;
    this.update(0, player);
  }

  updateFov() {
    const s = this.game.settings.data;
    const aspect = this.camera.aspect;
    const base = s.fov; // vertical fov in landscape reference
    // Keep a sensible horizontal view in portrait by widening the vertical FOV.
    const minH = 68 * Math.PI / 180;
    const vFromH = 2 * Math.atan(Math.tan(minH / 2) / aspect) * 180 / Math.PI;
    this.camera.fov = Math.min(95, Math.max(base, vFromH));
    this.camera.updateProjectionMatrix();
  }

  update(dt, player) {
    const input = this.game.input, s = this.game.settings.data;
    this.t += dt;
    if (dt > 0 && input.enabled) {
      const l = input.consumeLook();
      const sens = 0.0022 * s.sensitivity * (input.isTouch ? 0.75 : 1);
      this.tYaw -= l.x * sens;
      this.tPitch -= l.y * sens * (s.invertY ? -1 : 1);
      this.tPitch = Math.max(-1.45, Math.min(1.45, this.tPitch));
    }
    // look smoothing: responsive, never sluggish
    const lk = 1 - Math.exp(-(input.isTouch ? 22 : 30) * dt);
    this.yaw += (this.tYaw - this.yaw) * lk;
    this.pitch += (this.tPitch - this.pitch) * lk;

    // step smoothing
    const targetEye = player.pos.y + PLAYER.eye;
    const ek = 1 - Math.exp(-16 * dt);
    if (Math.abs(targetEye - this.eyeY) > 1.2) this.eyeY = targetEye;
    else this.eyeY += (targetEye - this.eyeY) * ek;

    // head bob driven by actual ground speed
    const bobOn = s.headBob ? 1 : 0.25;
    const sp = player.grounded ? player.speed : 0;
    const targetAmt = Math.min(1.25, sp / PLAYER.walk);
    this.bobAmt += (targetAmt - this.bobAmt) * (1 - Math.exp(-7 * dt));
    const freq = 1.75 + Math.min(sp, PLAYER.run) * 0.16; // strides per second
    this.phase += dt * freq * Math.PI * Math.min(1, this.bobAmt * 1.3);
    const a = this.bobAmt * bobOn;
    const bobY = Math.abs(Math.sin(this.phase)) * 0.055 * a - 0.03 * a;
    const bobX = Math.cos(this.phase) * 0.032 * a;
    const roll = Math.cos(this.phase) * 0.011 * a;
    const bobPitch = Math.sin(this.phase * 2) * 0.006 * a;

    // footsteps on each foot plant
    const stepIdx = Math.floor(this.phase / Math.PI);
    if (stepIdx !== this.lastStep) {
      this.lastStep = stepIdx;
      if (a > 0.15 || this.bobAmt > 0.15) this.game.audio.footstep(player.surface, Math.min(1, this.bobAmt));
    }

    // idle breathing sway (always present, subtle)
    const idle = (1 - Math.min(1, this.bobAmt)) * bobOn;
    const t = this.t;
    const breathY = Math.sin(t * 1.45) * 0.009 * idle;
    const swayYaw = (Math.sin(t * 0.53) * 0.6 + Math.sin(t * 0.91 + 1.3) * 0.4) * 0.0045 * idle;
    const swayPitch = (Math.sin(t * 0.71 + 0.4) * 0.6 + Math.sin(t * 1.27) * 0.4) * 0.0035 * idle;
    const swayRoll = Math.sin(t * 0.37 + 2.1) * 0.003 * idle;

    // landing dip
    if (player.landImpact > 0) { this.dip = Math.max(this.dip, player.landImpact * 0.18); player.landImpact = 0; }
    this.dip *= Math.exp(-7 * dt);

    let shx = 0, shy = 0;
    if (this.shake > 0) { this.shake *= Math.exp(-4 * dt); shx = (Math.random() - 0.5) * this.shake * 0.02; shy = (Math.random() - 0.5) * this.shake * 0.02; }

    const cam = this.camera;
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    cam.position.set(
      player.pos.x + rx * bobX + shx,
      this.eyeY + bobY + breathY - this.dip + shy,
      player.pos.z + rz * bobX,
    );
    cam.rotation.set(this.pitch + bobPitch + swayPitch, this.yaw + swayYaw, roll + swayRoll + this.extraRoll);
  }
}

export { TAU };
