// Heightfield terrain mesh with vertex-color variation.
import * as THREE from 'three';
import { quality } from '../../core/Materials.js';

export function terrain(level, { size = 800, cx = 0, cz = 0, seg = null, heightAt, mat, colorAt = null, uvScale = 4 }) {
  const s = seg ?? { low: 110, medium: 160, high: 220 }[quality.level];
  const g = new THREE.PlaneGeometry(size, size, s, s);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position, uv = g.attributes.uv;
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i) + cx, z = pos.getZ(i) + cz;
    pos.setXYZ(i, x, heightAt(x, z), z);
    uv.setXY(i, x / uvScale, z / uvScale);
    const c = colorAt ? colorAt(x, z) : [1, 1, 1];
    col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.computeVertexNormals();
  g.computeBoundingSphere();
  const m = new THREE.Mesh(g, mat);
  m.receiveShadow = true;
  m.matrixAutoUpdate = false;
  level.group.add(m);
  level.disposables.push(g);
  return m;
}

// Smooth value noise for natural variation.
export function vnoise(x, z, seed = 0) {
  const h = (a, b) => { const s = Math.sin(a * 127.1 + b * 311.7 + seed * 74.7) * 43758.5453; return s - Math.floor(s); };
  const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  return (h(xi, zi) * (1 - u) + h(xi + 1, zi) * u) * (1 - v) + (h(xi, zi + 1) * (1 - u) + h(xi + 1, zi + 1) * u) * v;
}
