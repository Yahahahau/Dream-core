// First-person walker: acceleration, gravity, step-up, ramps, wall sliding.
import * as THREE from 'three';

export const PLAYER = {
  radius: 0.32,
  height: 1.72,
  eye: 1.6,
  step: 0.48,
  walk: 3.1,
  run: 5.6,
  accel: 11,
  decel: 13,
  gravity: 22,
};

export class PlayerController {
  constructor(game) {
    this.game = game;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.vy = 0;
    this.grounded = true;
    this.surface = 'grass';
    this.safe = new THREE.Vector3();
    this.safeTimer = 0;
    this.frozen = false;
    this.speed = 0;
    this.landImpact = 0;
    this.airTime = 0;
  }

  teleport(p, yaw) {
    this.pos.set(p[0], p[1], p[2]);
    const g = this.game.collision.groundAt(this.pos.x, this.pos.z, this.pos.y + 1.5);
    if (g.y > -Infinity && Math.abs(g.y - this.pos.y) < 3) this.pos.y = g.y;
    this.vel.set(0, 0, 0); this.vy = 0;
    this.safe.copy(this.pos);
    if (yaw !== undefined) this.game.cam.setYaw(yaw);
    this.game.cam.snap(this);
  }

  update(dt) {
    const input = this.game.input, col = this.game.collision, cam = this.game.cam;
    const mv = this.frozen ? { x: 0, y: 0 } : input.move;
    const mag = Math.min(1, Math.hypot(mv.x, mv.y));
    const target = (input.run ? PLAYER.run : PLAYER.walk) * (this.game.settings.data.alwaysRun ? 1.35 : 1);
    // camera-relative wish direction
    const yaw = cam.yaw;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    const rx = Math.cos(yaw), rz = -Math.sin(yaw);
    let wx = fx * mv.y + rx * mv.x, wz = fz * mv.y + rz * mv.x;
    const wl = Math.hypot(wx, wz);
    if (wl > 1e-4) { wx /= wl; wz /= wl; }
    const ts = target * mag;
    const tvx = wx * ts, tvz = wz * ts;
    const rate = mag > 0.01 ? PLAYER.accel : PLAYER.decel;
    const k = 1 - Math.exp(-rate * dt);
    this.vel.x += (tvx - this.vel.x) * k;
    this.vel.z += (tvz - this.vel.z) * k;

    // sub-stepped horizontal movement
    const dist = Math.hypot(this.vel.x, this.vel.z) * dt;
    const steps = Math.max(1, Math.ceil(dist / (PLAYER.radius * 0.5)));
    const before = this.pos.clone();
    for (let i = 0; i < steps; i++) {
      this.pos.x += this.vel.x * dt / steps;
      this.pos.z += this.vel.z * dt / steps;
      col.resolve(this.pos, PLAYER.radius, this.pos.y + PLAYER.step, this.pos.y + PLAYER.height);
    }
    // measured speed (after collisions) drives the head bob
    const actual = Math.hypot(this.pos.x - before.x, this.pos.z - before.z) / Math.max(dt, 1e-4);
    this.speed = actual;
    // kill velocity into walls so we slide instead of sticking
    if (actual < Math.hypot(this.vel.x, this.vel.z) * 0.5) { this.vel.x *= 0.6; this.vel.z *= 0.6; }

    // vertical
    const g = col.groundAt(this.pos.x, this.pos.z, this.pos.y + PLAYER.step);
    if (g.y > -Infinity) this.surface = g.surface;
    if (this.grounded && g.y > -Infinity && this.pos.y - g.y < PLAYER.step + 0.05 && this.vy <= 0) {
      // stick to ground (stairs down / ramps)
      this.pos.y = g.y; this.vy = 0;
      this.airTime = 0;
    } else {
      this.vy -= PLAYER.gravity * dt;
      this.pos.y += this.vy * dt;
      this.airTime += dt;
      if (g.y > -Infinity && this.pos.y <= g.y) {
        if (this.vy < -6) this.landImpact = Math.min(1, -this.vy / 16);
        this.pos.y = g.y; this.vy = 0;
      }
    }
    this.grounded = g.y > -Infinity && this.pos.y - g.y < 0.02;
    const ceil = col.ceilingAt(this.pos.x, this.pos.z, this.pos.y + PLAYER.step + 0.01, PLAYER.radius * 0.7);
    if (this.vy > 0 && this.pos.y + PLAYER.height > ceil) this.vy = 0;

    // remember a safe spot to return to after a fall
    if (this.grounded) {
      this.safeTimer += dt;
      if (this.safeTimer > 0.5) { this.safe.copy(this.pos); this.safeTimer = 0; }
    }
    const level = this.game.world.level;
    if (level && this.pos.y < level.killY) this.game.world.respawnFall();
  }
}
