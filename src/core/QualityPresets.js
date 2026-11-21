// Graphics tiers. LOW is the default and still keeps real-time sun shadows,
// baked contact shading and colour grading — it only trims cost.
const desktop = typeof matchMedia !== 'undefined' && !matchMedia('(pointer: coarse)').matches;

export const QUALITY = {
  low: {
    label: 'Low', maxRatio: 1, msaa: 0, bloom: false, env: false,
    shadowMap: 1024, shadowExt: 16, shadowSoft: false, normalBias: 0.05, bias: -0.0006,
    far: 480, interiorCasters: true,
  },
  medium: {
    label: 'Medium', maxRatio: 1.5, msaa: 2, bloom: false, env: true,
    shadowMap: 2048, shadowExt: 26, shadowSoft: true, normalBias: 0.035, bias: -0.0004,
    far: 900, interiorCasters: true,
  },
  high: {
    label: 'High', maxRatio: 2, msaa: 4, bloom: true, env: true,
    shadowMap: desktop ? 4096 : 2048, shadowExt: 38, shadowSoft: true, normalBias: 0.025, bias: -0.0003,
    far: 1500, interiorCasters: true,
  },
};

export const tier = (q) => QUALITY[q] || QUALITY.low;
