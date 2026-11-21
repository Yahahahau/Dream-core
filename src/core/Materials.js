// Material factory that adapts shading cost to the quality setting.
import * as THREE from 'three';

export const quality = { level: 'medium' };

export function makeMaterial(o = {}) {
  const low = quality.level === 'low' && !o.forceStandard;
  const common = {
    color: o.color ?? 0xffffff,
    map: o.map ?? null,
    vertexColors: o.vertexColors ?? true,
    transparent: o.transparent ?? false,
    opacity: o.opacity ?? 1,
    side: o.side ?? THREE.FrontSide,
    alphaTest: o.alphaTest ?? 0,
    depthWrite: o.depthWrite ?? true,
    fog: o.fog ?? true,
  };
  let m;
  if (o.unlit) {
    m = new THREE.MeshBasicMaterial(common);
  } else if (low) {
    m = new THREE.MeshLambertMaterial({ ...common, emissive: o.emissive ?? 0x000000, emissiveIntensity: o.emissiveIntensity ?? 1, emissiveMap: o.emissiveMap ?? null });
  } else {
    m = new THREE.MeshStandardMaterial({
      ...common,
      roughness: o.roughness ?? 0.85,
      metalness: o.metalness ?? 0,
      emissive: o.emissive ?? 0x000000,
      emissiveIntensity: o.emissiveIntensity ?? 1,
      emissiveMap: o.emissiveMap ?? null,
      envMapIntensity: o.envMapIntensity ?? 1,
    });
  }
  if (o.polygonOffset) { m.polygonOffset = true; m.polygonOffsetFactor = -2; m.polygonOffsetUnits = -2; }
  m.userData.texScale = o.texScale ?? [2, 2];
  return m;
}
