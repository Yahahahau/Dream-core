# ASSET CREDITS — DREAMSCAPE v1.0

## Music (supplied by the project owner)

| File | Title | Artist | Source / licence |
|------|-------|--------|------------------|
| `public/assets/audio/music/warm-nights.mp3` | warm nights | — | Supplied by the project owner. Rights belong to the original artist. |
| `public/assets/audio/music/snowfall.mp3` | snowfall | neheart | Supplied by the project owner (downloaded from Spotify). Rights belong to the artist. |
| `public/assets/audio/music/you-not-the-same.mp3` | you not the same | TileKid | Supplied by the project owner (downloaded from Spotify). Rights belong to the artist. |
| `public/assets/audio/music/the-lobotomy.mp3` | The Lobotomy | — | Supplied by the project owner. Rights belong to the original artist. |
| `public/assets/audio/music/numbers.mp3` | Numbers | — | Supplied by the project owner. Rights belong to the original artist. |

All tracks were re-encoded to 128 kbps MP3 with metadata stripped for faster mobile loading.
**Before publishing the game commercially or on a public platform, confirm you have the right to redistribute these tracks.**

## Rendering

- **three.js** r170 — MIT licence — https://threejs.org

## 3D models, textures, skies, water

All environment assets in v1.0 are **generated procedurally in code** for this project
(`src/utils/Textures.js`, `src/levels/common/Props.js`, `src/core/LevelBuilder.js`,
`src/environment/*`). This includes grass, tiles, carpets, wallpaper, wood, brick, hedges,
snow, ice, signage, retro desktop dialogs (original design), eyes, clouds, skies, water and
caustics. No third-party texture or model files are bundled.

v1.1 adds an architecture kit (`src/core/Architecture.js`: railings, pillars, window units,
gable roofs, stair flights, contact shading) and bevelled furniture using three.js'
`RoundedBoxGeometry` (MIT). External GLB libraries were again unreachable from the build
environment, so all models remain procedural and share one consistent style.

v1.2 adds `src/core/Blueprint.js` (one building plan generates facade, interior walls,
slabs, windows, stairs and elevators) and `src/core/Baker.js` (in-engine light baking into
vertex colours). Both are original code; no external models or lightmaps are used.

External sources recommended in the design brief (Poly Haven, ambientCG — both CC0;
Quaternius, Kenney — check each pack) could not be reached from the build environment, so
procedural replacements were made as the brief allows. Any downloaded asset added later must
be listed in this file with source URL, creator, licence and file name.

## Sound effects and ambience

Recorded sound effects (v1.2) were **supplied by the project owner** and live in
`public/assets/audio/sfx/`. They were converted to mono MP3, trimmed of leading silence and
peak-normalised; nothing else was changed.

| Game file | Supplied file / use |
|---|---|
| `concrete1-4.mp3` | concrete footsteps — also tile, marble, asphalt, metal, ice |
| `dirt1-3.mp3` | dirt footsteps — also sand, snow, gravel |
| `wood1-4.mp3` | `run_wooden` footsteps — wood; carpet and rugs use them low-pass filtered |
| `grass1-4.mp3` | grass footsteps — also leaves |
| `door-open.mp3` | door opening |
| `door-close.mp3` | `Spyderst-door-shut` — door closing (plays when the door meets its frame) |

Rights belong to their original creators / the supplier. All other ambience (wind, birds,
chimes, hum, water, rain, drips, ocean, crickets, static, drones) and interface sounds are
still **synthesized live with the Web Audio API** (`src/audio/*`, `src/core/AudioManager.js`).

## Reference images

`public/references/` contains mood-board images supplied by the project owner. They are used
only as visual reference for composition, colour and atmosphere and are **not used as
in-game textures**. Rights belong to their original creators.
