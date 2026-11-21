// Disposal helpers for anything created outside the level lifecycle.
export function disposeObject(obj) {
  obj.traverse((o) => {
    o.geometry?.dispose?.();
    const m = o.material;
    if (Array.isArray(m)) m.forEach(disposeMaterial); else if (m) disposeMaterial(m);
  });
  obj.removeFromParent();
}

export function disposeMaterial(m) {
  for (const k of Object.keys(m)) {
    const v = m[k];
    if (v && v.isTexture && !v.userData?.key) v.dispose();
  }
  m.dispose();
}
