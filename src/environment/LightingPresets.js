// Per-location lighting, sky, fog and grading presets plus the code that applies them.
import * as THREE from 'three';

export const PRESETS = {
  starting: {
    sky: { top: 0x2f7fe0, horizon: 0xcfe6ff, bottom: 0x9ec0d8, cloudCover: 0.42, cloudOpacity: 0.95, billboards: 14, sunDir: [0.5, 0.75, -0.3], sunSize: 1400 },
    fog: { color: 0xcfe2f4, near: 60, far: 520 },
    hemi: [0xdcecff, 0x8a9a6a, 1.35], sun: { color: 0xfff4e0, intensity: 2.4, dir: [0.5, 0.75, -0.3], shadows: true },
    exposure: 1.0, post: { saturation: 1.08, contrast: 1.02, vignette: 0.22, grain: 0.02, haze: 0.08, hazeColor: 0xeaf4ff },
  },
  almond: {
    sky: { top: 0x5a96d6, horizon: 0xf3dfb8, bottom: 0xd9c49a, cloudCover: 0.3, billboards: 8, billboardTint: '#fff4e4', sunDir: [-0.6, 0.38, -0.4], sunColor: 0xffd9a0, sunSize: 600, sunGlow: 2 },
    fog: { color: 0xf0d9b0, near: 40, far: 420 },
    hemi: [0xffe6bf, 0x9c7a44, 1.2], sun: { color: 0xffd39a, intensity: 2.6, dir: [-0.6, 0.38, -0.4], shadows: true },
    exposure: 1.02, post: { saturation: 1.12, contrast: 1.03, gain: 0xfff1dc, vignette: 0.3, grain: 0.03, haze: 0.18, hazeColor: 0xffe2b5 },
  },
  school: {
    sky: { top: 0x6aa8e8, horizon: 0xe8f2ff, cloudCover: 0.55, billboards: 10, sunDir: [0.3, 0.7, 0.4] },
    fog: { color: 0xdfe6e4, near: 25, far: 90 },
    hemi: [0xf2fbff, 0x8a8f86, 1.7], sun: { color: 0xffffff, intensity: 0.6, dir: [0.3, 0.7, 0.4], shadows: false },
    exposure: 1.0, post: { saturation: 0.95, contrast: 1.0, gain: 0xf3fbff, lift: 0x050a08, vignette: 0.3, grain: 0.03 },
  },
  pool: {
    sky: { top: 0x7cc0f0, horizon: 0xf0fbff, cloudCover: 0.4, billboards: 6 },
    fog: { color: 0xd8f1f2, near: 20, far: 110 },
    hemi: [0xf6ffff, 0x6fb9bf, 1.75], sun: { color: 0xffffff, intensity: 0.5, dir: [0.2, 0.9, 0.1], shadows: false },
    exposure: 1.05, post: { saturation: 1.05, contrast: 0.98, gain: 0xf0ffff, vignette: 0.24, grain: 0.025, bloom: 0.3 },
  },
  hotel: {
    sky: { top: 0x1d2a4a, horizon: 0x6a5a6a, cloudCover: 0.2, stars: 0.6 },
    fog: { color: 0x3a2a24, near: 18, far: 70 },
    hemi: [0xffe0b8, 0x4a2a20, 1.15], sun: { color: 0xffd5a0, intensity: 0.2, dir: [0.2, 1, 0.1], shadows: false },
    exposure: 1.05, post: { saturation: 1.05, contrast: 1.04, gain: 0xffecd2, lift: 0x0a0604, vignette: 0.38, grain: 0.035, bloom: 0.35 },
  },
  apartments: {
    sky: { top: 0x6d7fb8, horizon: 0xf4c9a4, bottom: 0xb59a8a, cloudCover: 0.35, billboards: 8, billboardTint: '#ffe3d0', sunDir: [-0.7, 0.18, 0.3], sunColor: 0xffb070, sunGlow: 2.5, sunSize: 300 },
    fog: { color: 0xd8b8a0, near: 20, far: 160 },
    hemi: [0xffe2c8, 0x6a5040, 1.25], sun: { color: 0xffb27a, intensity: 1.4, dir: [-0.7, 0.18, 0.3], shadows: true },
    exposure: 1.0, post: { saturation: 1.0, contrast: 1.03, gain: 0xffeedd, vignette: 0.32, grain: 0.035, haze: 0.06, hazeColor: 0xffd8b0 },
  },
  mall: {
    sky: { top: 0x8ab8e6, horizon: 0xeaf2fa, cloudCover: 0.5, billboards: 8 },
    fog: { color: 0xe4e6ea, near: 40, far: 160 },
    hemi: [0xf8fbff, 0x8c8e94, 1.6], sun: { color: 0xffffff, intensity: 1.0, dir: [0.2, 0.9, 0.3], shadows: false },
    exposure: 1.0, post: { saturation: 0.98, contrast: 1.02, vignette: 0.25, grain: 0.03, bloom: 0.25 },
  },
  maze: {
    sky: { top: 0x3e86d8, horizon: 0xd8ecff, cloudCover: 0.5, billboards: 12, sunDir: [0.6, 0.65, 0.2], sunSize: 1200 },
    fog: { color: 0xd4e6f2, near: 50, far: 260 },
    hemi: [0xe2f0ff, 0x5a7a40, 1.25], sun: { color: 0xfff6e2, intensity: 2.5, dir: [0.6, 0.65, 0.2], shadows: true },
    exposure: 1.0, post: { saturation: 1.12, contrast: 1.03, vignette: 0.24, grain: 0.02 },
  },
  hallways: {
    sky: { top: 0x9ab0d0, horizon: 0xefe6dc, cloudCover: 0.6, billboards: 6 },
    fog: { color: 0xe6dccf, near: 18, far: 95 },
    hemi: [0xfff3e6, 0x7a6a5a, 1.45], sun: { color: 0xfff0dc, intensity: 0.4, dir: [0.3, 0.8, 0.2], shadows: false },
    exposure: 1.02, post: { saturation: 0.9, contrast: 0.98, gain: 0xfff4e6, lift: 0x0c0806, vignette: 0.35, grain: 0.04, haze: 0.12, hazeColor: 0xfff0dc },
  },
  edge: {
    sky: { top: 0x3570c6, horizon: 0xe8f0f6, bottom: 0x6b9ab8, cloudCover: 0.38, billboards: 16, billboardHeight: 20, sunDir: [0.3, 0.35, -0.8], sunSize: 700, sunGlow: 1.5 },
    fog: { color: 0xd9e8f2, near: 80, far: 900 },
    hemi: [0xe4f0ff, 0x4a6a80, 1.25], sun: { color: 0xfff1da, intensity: 2.4, dir: [0.3, 0.35, -0.8], shadows: true },
    exposure: 1.0, post: { saturation: 1.06, contrast: 1.0, vignette: 0.2, grain: 0.02, haze: 0.2, hazeColor: 0xeef6ff },
  },
  broken: {
    sky: { top: 0x070a1c, horizon: 0x1a2c5c, bottom: 0x05060c, cloudCover: 0.0, cloudOpacity: 0, eyes: 0.55, stars: 0.5 },
    fog: { color: 0x0d1430, near: 25, far: 120 },
    hemi: [0x9ab8ff, 0x2a1a3a, 1.0], sun: { color: 0xc8d8ff, intensity: 0.8, dir: [0.2, 0.9, 0.3], shadows: true },
    exposure: 1.1, post: { saturation: 1.25, contrast: 1.08, vignette: 0.4, grain: 0.07, aberration: 0.8, wave: 0.6, scan: 0.6, bloom: 0.45 },
  },
  frozen: {
    sky: { top: 0x8ea8c8, horizon: 0xe6edf4, bottom: 0xd0dbe6, cloudCover: 0.75, cloudOpacity: 0.7, cloudColor: 0xf2f4f8, cloudShade: 0xb4c0d0, sunDir: [0.2, 0.25, -0.9], sunSize: 200, sunGlow: 0.6, sunColor: 0xdde8ff },
    fog: { color: 0xdde5ee, near: 15, far: 210 },
    hemi: [0xe8f0ff, 0xbac8d8, 1.5], sun: { color: 0xd8e4ff, intensity: 1.0, dir: [0.2, 0.25, -0.9], shadows: true },
    exposure: 1.0, post: { saturation: 0.85, contrast: 0.98, gain: 0xeef4ff, lift: 0x05080c, vignette: 0.28, grain: 0.03 },
  },
  anemoia: {
    sky: { top: 0x4a5fa8, horizon: 0xffb08a, bottom: 0xa07a80, cloudCover: 0.25, billboards: 6, billboardTint: '#ffd6c0', sunDir: [-0.8, 0.12, 0.2], sunColor: 0xff9a5a, sunSize: 250, sunGlow: 3, band: { color: 0x5c7a64, low: 0.16, high: 0.34 } },
    fog: { color: 0xe7a98e, near: 30, far: 260 },
    hemi: [0xffd2b8, 0x5a6a50, 1.2], sun: { color: 0xffa060, intensity: 2.0, dir: [-0.8, 0.12, 0.2], shadows: true },
    exposure: 1.0, post: { saturation: 1.18, contrast: 1.02, gain: 0xffe6d6, lift: 0x100608, vignette: 0.34, grain: 0.035, haze: 0.18, hazeColor: 0xffc8a8, bloom: 0.35 },
  },
  menu: null,
};

export class Lighting {
  constructor(game) {
    this.game = game;
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1);
    this.sun = new THREE.DirectionalLight(0xffffff, 2);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.03;
    this.sunDir = new THREE.Vector3(0.4, 0.7, -0.3).normalize();
    game.scene.add(this.hemi, this.sun, this.sun.target);
    this.pmrem = null;
    this.envRT = null;
  }

  apply(p) {
    const g = this.game, q = g.renderer.quality;
    this.hemi.color.set(p.hemi[0]); this.hemi.groundColor.set(p.hemi[1]); this.hemi.intensity = p.hemi[2];
    this.sun.color.set(p.sun.color); this.sun.intensity = p.sun.intensity;
    this.sunDir.set(...p.sun.dir).normalize();
    this.sun.castShadow = !!p.sun.shadows && q !== 'low';
    const res = q === 'high' ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== res) {
      this.sun.shadow.mapSize.set(res, res);
      this.sun.shadow.map?.dispose(); this.sun.shadow.map = null;
    }
    const sc = this.sun.shadow.camera;
    const ext = q === 'high' ? 38 : 26;
    sc.left = -ext; sc.right = ext; sc.top = ext; sc.bottom = -ext; sc.near = 1; sc.far = 200;
    sc.updateProjectionMatrix();
    g.renderer.r.toneMappingExposure = p.exposure ?? 1;
    g.renderer.setPost(p.post);
    g.atmosphere.apply(p);
    this.updateEnv();
  }

  // Image-based ambient lighting from the current sky (standard materials only).
  updateEnv() {
    const g = this.game;
    if (g.renderer.quality === 'low') { g.scene.environment = null; return; }
    if (!this.pmrem) this.pmrem = new THREE.PMREMGenerator(g.renderer.r);
    const s = new THREE.Scene();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8), g.atmosphere.material);
    s.add(dome);
    const old = this.envRT;
    this.envRT = this.pmrem.fromScene(s, 0, 0.1, 50);
    g.scene.environment = this.envRT.texture;
    g.scene.environmentIntensity = 0.35;
    dome.geometry.dispose();
    old?.dispose();
  }

  update() {
    const p = this.game.player.pos;
    // shadow frustum follows the player, snapped to texels to avoid shimmer
    const step = 0.5;
    const cx = Math.round(p.x / step) * step, cz = Math.round(p.z / step) * step;
    this.sun.target.position.set(cx, p.y, cz);
    this.sun.position.set(cx + this.sunDir.x * 80, p.y + this.sunDir.y * 80, cz + this.sunDir.z * 80);
  }
}
