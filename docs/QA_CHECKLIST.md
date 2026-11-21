# DREAMSCAPE v1.1 — QA checklist

Run against a production build (`npm run build && npm run preview`).
Automated checks: `node tools/qa-validate.mjs` (geometry audit, opens `?validate=1`)
and `node tools/qa-portals.mjs` (walks up to every portal door and uses it).
Visual checks were made from the player's first-person viewpoint in portrait (430×870)
and landscape (870×430) on every level.

| Check | Method | Result |
|---|---|---|
| Overlapping / coplanar surfaces (z-fighting) | `GeometryValidator` on every level | v1.0: ~1,700 findings → v1.1: 0 between different materials. 17 remaining are same-material faces hidden on building exteriors. |
| Duplicate geometry | Duplicate-placement guard in `LevelBuilder` | Exact duplicates are skipped at build time (only shared railing corner posts trigger it). |
| Floors through walls / walls into floors | Validator + visual | Fixed: white-house foundation, raised pool base, school stairwell filler, mall upper floor, cabin base. |
| Roofs clipping buildings | Visual | Houses rebuilt with the architecture kit: slabs, gable ends, fascia, ridge cap. Chimneys pass through the roof on purpose. |
| Doors intersecting frames | Validator + visual | Door module: 3 mm slab clearance, stops, threshold inside the jambs, openings ≥ door + 5 cm. |
| Furniture in walls | Validator `prop-in-wall` | 0 remaining (sconces, lamp posts, maze lamps and signs, slide support, apartment street lamps moved). |
| Floating objects | Visual | Only intentional dream objects float (Edge of the World, Broken Reality). |
| Broken UVs | Visual | Roof slabs, extruded arcades, gables and vaults use meter-based UVs. |
| Water planes | Visual | Round fountains use round water; no water plane overlaps another. |
| Glass sorting | Code + visual | Transparent materials no longer write depth; railings use inset glass panels. |
| Lighting depth | Visual on all levels | Interior key light + lower ambient; outdoor architecture casts shadows. |
| Shadow quality | Visual + settings test | Texel-snapped frustum (no shimmer), tier-specific bias/normal bias, contact-shading strips at wall bases, blob shadows under props. |
| Door interactions | `qa-portals` | 24 / 24 portal doors pass: prompt, transition, spawn, controls restored. |
| Level 11 exit door | Scripted walk-up + E pressed 3× | Fixed. Prompt appears, Anemoia loads once, spawn correct, controls restored. |
| Player collision | Scripted walking + stairs | Rotated objects now use oriented colliders instead of oversized boxes. |
| Loading errors | Console capture on all levels | None. |
| Graphics presets | Settings test | LOW default (also migrates v1.0 auto-picked tiers), MEDIUM/HIGH switch live and persist. |
| Mobile performance | Draw calls / triangles per level | ≤ 175 draw calls, ≤ 185k triangles per frame on LOW. Dynamic resolution still active. |

## Root cause: Level 11 (and Broken Reality) door
The door on the far hill is rotated 0.12π. Its closed-door collider was the axis-aligned
box around the rotated slab, which sticks out ~18 cm in front of the door. The
interaction line-of-sight test found that box between the camera and the hit point and
treated the door as hidden behind a wall, so the prompt never appeared and the door could
not be used. Fixes:
1. Rotated objects now get oriented colliders (thin slices along the real footprint).
2. Line-of-sight ignores the target's own colliders and stops 30 cm short of the hit point.
3. Transitions lock the door until loading finishes, cannot fire twice, and always restore
   player control (also on a failed load).
