# East Fort Drive

A playable, stylized 3D browser game inspired by East Fort in Thiruvananthapuram, Kerala. Drive, walk, explore the market streets, and complete a three-stop delivery run.

## Play

Use **WASD / arrow keys** to move, **Space** to brake, **F** to enter or exit a nearby parked vehicle, **C** to change camera, **R** to recover to the road, and **Esc** to pause. The interface includes touch controls, a minimap and a day/night toggle.

## Scope and references

This is an original low-poly prototype, not a complete digital twin or a GTA V-equivalent game. Buildings, road placement, scale and architectural details are approximate. No building interiors, combat, police simulation, multiplayer or full-city map are included. Landmarks represented include the East Fort gateway, Padmanabhaswamy Temple frontage, Padmatheertham pond, Kuthiramalika, Chalai shops, Gandhi Park and the bus interchange.

Google Maps search results were consulted for the temple's East Fort location. The interactive Maps and Street View imagery could not be verified during production; no Google map tiles, screenshots, imagery or proprietary game assets are distributed.

- [Google Maps: East Fort](https://www.google.com/maps/search/?api=1&query=East+Fort+Thiruvananthapuram)
- [East Fort context](https://en.wikipedia.org/wiki/East_Fort)
- [Chalai context](https://en.wikipedia.org/wiki/Chala,_Thiruvananthapuram)

## Source and build

The public site's root contains the compiled game. `source.zip` contains the editable project, including `app/world.js` (3D world and gameplay), `app/page.tsx` (interface), and `app/globals.css` (styles). The game has no backend and makes no gameplay network requests.

Extract the source, install dependencies using pnpm, then run `./build.ps1` in PowerShell on Windows. Run `node serve.mjs` and visit the address it prints. The `dist` directory can be hosted on GitHub Pages or any static web host. `node check-game.mjs` runs gameplay smoke checks using a mocked renderer; it is not a visual browser test.

Three.js, React and React DOM license notices are included with the playable distribution. Original game source and procedural assets are provided for the repository owner; no additional license is granted here.
