# Third-party 3D assets

The Ultimate Team mode uses open assets pulled from GitHub and served locally
from this folder. Nothing is fetched from a third-party origin at runtime.

| File | Source | Author | Licence |
| --- | --- | --- | --- |
| `robot-expressive.glb` | [mrdoob/three.js — examples/models/gltf/RobotExpressive](https://github.com/mrdoob/three.js/tree/r170/examples/models/gltf/RobotExpressive) | Don McCurdy | CC-BY 4.0 |
| `/vendor/three.module.min.js` | [mrdoob/three.js — build](https://github.com/mrdoob/three.js/tree/r170/build) | three.js authors | MIT |
| `/vendor/GLTFLoader.js` | [mrdoob/three.js — examples/jsm/loaders](https://github.com/mrdoob/three.js/tree/r170/examples/jsm/loaders) | three.js authors | MIT |

The loader's `three` import is rewritten to the vendored module path so the
whole viewer works without an import map or CDN. Animation clips shipped in the
model: Dance, Death, Idle, Jump, No, Punch, Running, Sitting, Standing,
ThumbsUp, Walk, WalkJump, Wave, Yes.
