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

External sources recommended in the design brief (Poly Haven, ambientCG — both CC0;
Quaternius, Kenney — check each pack) could not be reached from the build environment, so
procedural replacements were made as the brief allows. Any downloaded asset added later must
be listed in this file with source URL, creator, licence and file name.

## Sound effects and ambience

All ambience (wind, birds, chimes, fluorescent hum, pool water, drips, ocean, crickets,
CRT static, drones), footsteps and interface sounds are **synthesized live with the Web
Audio API** (`src/audio/*`, `src/core/AudioManager.js`). No recorded audio besides the music.

## Reference images

`public/references/` contains mood-board images supplied by the project owner. They are used
only as visual reference for composition, colour and atmosphere and are **not used as
in-game textures**. Rights belong to their original creators.
