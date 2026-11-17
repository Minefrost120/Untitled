# Third-party 3D assets

The Ultimate Team hologram uses open assets pulled from GitHub and served
locally from this folder. Nothing is fetched from a third-party origin at
runtime.

| File | Source | Author | Licence |
| --- | --- | --- | --- |
| `player.glb` | [mrdoob/three.js — examples/models/gltf/Soldier.glb](https://github.com/mrdoob/three.js/blob/r170/examples/models/gltf/Soldier.glb) | Mixamo character, distributed with the three.js examples | MIT repository; character provided by Mixamo for use in projects |
| `/vendor/three.module.min.js` | [mrdoob/three.js — build](https://github.com/mrdoob/three.js/tree/r170/build) | three.js authors | MIT |
| `/vendor/GLTFLoader.js` | [mrdoob/three.js — examples/jsm/loaders](https://github.com/mrdoob/three.js/tree/r170/examples/jsm/loaders) | three.js authors | MIT |

`player.glb` is a rigged humanoid shipped with these clips: **Idle**, **Walk**,
**Run**, **TPose**. The hologram exposes Idle / Walk / Run and picks the first
available clip automatically. It was optimised locally from 2.16 MB to 741 KB
with [glTF Transform](https://github.com/donmccurdy/glTF-Transform)
(`optimize --compress quantize --texture-compress webp`) so the whole site stays
inside the 10 MiB Sites asset budget. `KHR_mesh_quantization` is supported
natively by three.js, so no extra decoder is loaded.

The loader's `three` import is rewritten to the vendored module path so the
viewer works without an import map or CDN.
