# Building Liquid Glass Bubbles in Three.js: A Dev Log

A walkthrough of building an interactive 3D bubble visualization for my portfolio — the struggles, dead ends, and solutions along the way.

---

## The Goal

Create a set of interactive "liquid glass" bubbles using Three.js that would sit in my portfolio site, each representing an open source project I've contributed to. Think Apple's visionOS aesthetic — glossy, refractive spheres with subtle animations, hover interactions, and reflections. The whole thing needed to run inside an iframe with a transparent background so the portfolio page showed through.

## Starting Point: Loading the GLB

The bubble mesh was a custom icosphere exported as a `.glb` file with 162 vertices and 4 morph targets baked into a single animation clip (~8.46 seconds long). The morph targets create an indent/deformation effect — like pressing a finger into a soap bubble.

**First struggle: the double sphere.** When I added an edge ring clone (a `BackSide` material for that dark refractive rim around the bubble), I initially parented it to the GLB mesh. The sphere vanished. Turns out `mesh.add(edgeClone)` breaks rendering when the parent uses a transmission material. The fix was simple — add the edge clone as a sibling in the scene graph, not a child.

**Baked transforms were another gotcha.** The GLB had a baked translation `[-0.25, 0.92, -0.33]` and rotation quaternion `[0, 0, 0.977, 0.213]` on the mesh node. This meant every clone spawned offset and rotated. The fix: zero out the mesh node's position and quaternion at load time.

## The Glass Material

The premium look came from `MeshPhysicalMaterial` with transmission:

```typescript
const bubbleMaterial = new THREE.MeshPhysicalMaterial({
  transmission: 1.0,
  thickness: 0.5,
  ior: 1.45,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  roughness: 0.05,
  // ...
})
```

Getting the lighting right was surprisingly difficult. The lights were too far from the bubbles with high decay, so cranking intensity just made things worse. The breakthrough was using `RoomEnvironment` via `PMREMGenerator` for the reflections, which gave the bubbles that ambient studio-lit look without needing to perfectly position every light.

## Camera-Parented Layout

I wanted the 5 bubbles arranged in a 2-top / 3-bottom staggered layout that stayed fixed to the viewport regardless of any camera movement. The solution: a `THREE.Group` (the "bubble rig") parented directly to the camera, positioned 10 units in front of it. This meant the bubbles moved with the camera, and I could change the lighting angle by rotating the camera without the layout shifting.

## The Animation State Machine

The morph target animation needed precise control:
- **Idle**: hold at timestamp 4.06s (resting pose)
- **Hover in**: play forward to 4.25s (indent appears)
- **Hover hold**: pause at 4.25s while mouse is over
- **Hover out**: play forward to 4.9s (indent releases), then snap back to idle
- **Returning**: if the mouse re-enters mid-exit, reverse playback back to 4.25s

**The quick mouse on/off bug** was the trickiest part. If you moved the mouse on and off a bubble quickly, the state machine would miss the transition and leave the bubble stuck in an unanimated state. The fix was adding the `returning` state with `timeScale = -1` for reverse playback — the animation plays backward from wherever it is back to the hover-hold position.

Edge clone morph targets also needed syncing. Initially they were spread copies (`[...mesh.morphTargetInfluences]`) that never updated. Adding a per-frame sync loop in the render function fixed this.

## Rotating the Indent Toward the Mouse

This was one of the most satisfying features to get working. The indent deformation should face the direction the mouse enters from — like pressing into the bubble from that side.

**The approach:** Project the bubble's world position to screen space, compute the angle from bubble center to mouse position using `atan2`, then rotate the mesh node around its local Z axis by that angle.

```typescript
const angle = Math.atan2(mouse.y - screenPos.y, mouse.x - screenPos.x)
const INDENT_OFFSET = Math.PI / 2
quat.setFromAxisAngle(new THREE.Vector3(0, 0, 1), angle + INDENT_OFFSET)
```

**The offset was wrong at first** — the indent appeared exactly opposite to the mouse. The morph target's default indent direction was +Y in local space, so we needed a `Math.PI / 2` offset to align it with the computed angle.

**The mixer kept overwriting the rotation.** Three.js's `AnimationMixer` updates the mesh node's quaternion every frame, clobbering our custom rotation. The fix: track the "active hover bubble" and reapply the rotation quaternion *after* all mixer updates in the render loop.

**Slerp was too slow.** Initially I used quaternion slerp for smooth rotation, but the user wanted instant snap. Removed the interpolation and applied the quaternion directly. The rotation also continues following the mouse while hovered, updating on every mousemove.

## Reflections

Each bubble gets a vertically flipped clone positioned directly underneath, creating a floor reflection effect.

### Positioning
The reflection clone sits at `bp.y - 2.0` (one diameter below the bubble center) with `scale.set(1, -1, 1)` to flip it. `renderOrder: -1` and `depthWrite: false` ensure reflections always render behind the main bubbles — important for cases where one bubble's reflection would overlap another bubble.

### The Rotation Mirror
The reflection needs to mirror the indent rotation. Since the reflection has `scale.y = -1`, we negate the mouse angle:
```typescript
_reflectionQuat.setFromAxisAngle(
  new THREE.Vector3(0, 0, 1),
  -angle - INDENT_OFFSET
)
```

### The Gradient Alpha Fade (Three Attempts)

This was the most frustrating part of the entire build. The reflection should fade from slightly visible at the top to fully transparent at the bottom. Sounds simple. It was not.

**Attempt 1: `gl_FragColor.a` after `#include <output_fragment>`**

```glsl
#include <output_fragment>
float fadeFactor = 1.0 - smoothstep(-1.0, 1.0, vLocalY);
gl_FragColor.a *= fadeFactor;
```

No visible effect. The `MeshPhysicalMaterial` with `transmission > 0` uses a special transmissive render pass that completely bypasses standard alpha blending. The `gl_FragColor.a` modification was essentially a no-op.

**Attempt 2: Remove transmission, still use `gl_FragColor.a`**

Set `transmission: 0` on the reflection material. Still no effect. Even without transmission, Three.js processes alpha through `diffuseColor.a` during the shader pipeline, and `#include <output_fragment>` handles premultiplication. Modifying `gl_FragColor.a` after this stage doesn't integrate into the pipeline properly.

**Attempt 3 (the fix): Modify `diffuseColor.a` before `#include <output_fragment>`**

The working approach injects at `#include <alphatest_fragment>` — earlier in the pipeline — and modifies `diffuseColor.a`:

```typescript
shader.fragmentShader = shader.fragmentShader.replace(
  '#include <alphatest_fragment>',
  `#include <alphatest_fragment>
   float fadeFactor = 0.08 * smoothstep(0.35, 1.0, vViewYOffset);
   diffuseColor.a *= fadeFactor;`
)
```

**But then the fade rotated with the mesh.** Using `position.y` (local space) meant the gradient spun when the indent rotation was applied. The fix: compute the Y offset in **view space** using `modelViewMatrix`, which always points "screen up" regardless of mesh rotation:

```glsl
vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
vViewYOffset = viewPos.y - viewCenter.y;
```

## Text Labels

Canvas-rendered text sprites using Ubuntu Bold 700 font, centered on each bubble. A few gotchas:

- **Color was wrong** (`#b1b3b5` instead of `#55575b`): Fixed by setting `toneMapped: false` on the `SpriteMaterial` and `texture.colorSpace = THREE.SRGBColorSpace` on the `CanvasTexture`. Without these, ACES Filmic tone mapping shifts the colors.
- **Text appeared behind/inside the spheres**: Set `renderOrder: 999`, `depthTest: false`, and positioned at `z = 0` (same plane as bubble center) to eliminate perspective parallax.
- **Multi-line labels were smaller**: The font size was conditionally reduced for multi-line text. Fixed by using a uniform size for all labels.

## Transparent Background for Iframe Embedding

The final boss. The Three.js canvas needed to be fully transparent so the portfolio page's background showed through the iframe.

**The renderer setup was already correct:**
```typescript
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  premultipliedAlpha: false
})
renderer.setClearColor(0x000000, 0)
```

**But the background was still black.** The culprit: Three.js's native `UnrealBloomPass`. It always outputs `alpha = 1.0` during its internal Gaussian blur and composite operations, filling every pixel's alpha channel with opaque black — even in areas with no geometry. A PR (#22853) attempted to fix this but was closed without merging.

**The solution: switch to the `pmndrs/postprocessing` library.** This library was specifically designed to handle transparency correctly through its entire pipeline:

```typescript
import { EffectComposer, RenderPass, BloomEffect, EffectPass } from 'postprocessing'

const composer = new EffectComposer(renderer, {
  frameBufferType: THREE.HalfFloatType,
})
```

Drop-in replacement, same `composer.render()` API, and the alpha channel is properly preserved through bloom.

## Event Dispatch for Portfolio Integration

The bubbles dispatch `CustomEvent`s so the portfolio site can react to hover state:

```typescript
window.dispatchEvent(new CustomEvent('bubble-hover', {
  detail: { label: 'PixiJS', url: '...', index: 0 }
}))
```

A small bug caught early: the `detail.label` was accidentally set to the URL instead of the display name. Easy fix once spotted.

## Idle Rotation

To give the bubbles some life when not hovered, each bubble slowly rotates clockwise around its local Z axis (screen-facing) at 0.1 rad/s. The rotation is applied to the mesh, edge clone, and reflection (mirrored) every frame in the idle state. When hover begins, the indent rotation takes over; when hover-out completes, the idle spin resumes from angle 0.

## Bloom Tuning and Per-Bubble Hover Glow

### The Emissive Dead End with Transmission Materials

We wanted a per-bubble hover effect where the hovered bubble would glow brighter via bloom. The natural approach: boost `emissiveIntensity` on hover.

**Attempt 1: Emissive on the bubble mesh.** Set `emissive: 0xffffff` and animated `emissiveIntensity` from 0 to 0.15 on hover. No visible effect. `MeshPhysicalMaterial` with `transmission: 1.0` uses a special transmissive render path that overwhelms the emissive contribution — the emissive light gets lost in the transmission composite.

**Attempt 2: Emissive on the edge clone instead.** Since the edge clone uses `BackSide` rendering with no transmission, emissive should work. Moved the emissive animation to the edge clone material. Still didn't produce the desired visual — the edge ring is too thin and the glow wasn't substantial enough to match the target look.

**Attempt 3: `envMapIntensity` animation.** Tried animating the bubble mesh's `envMapIntensity` from 1.0 to 4.5 on hover. This made reflections brighter but didn't match the target visual either.

**What we kept:** The emissive properties remain on the bubble material (`emissive: 0xffffff`, `emissiveIntensity: 0`) as a baseline, and each bubble gets a cloned material so properties can be adjusted independently. The hover glow feature was ultimately removed as none of the approaches produced the desired "lit up" look on a transmission material. The core issue: transmission materials render through a separate pass that dominates the final pixel output, making additive effects like emissive visually negligible.

### Bloom Settings

The bloom went through several iterations:
- Started at intensity 0.4, threshold 0.85, radius 0.8 (subtle)
- Bumped to intensity 3, threshold 0.44, radius 0 (dramatic)
- Tried threshold 0.42 on hover / 0.44 off hover — but bloom threshold is a global screen-space effect, can't be set per-object
- Final resting values: intensity 3, threshold 0.44, radius 0

## Intro Animation

### Bloom Intro

On page load, the bloom starts intense (intensity 8, threshold 0) and animates down to resting values (intensity 3, threshold 0.44) via an exponential lerp at speed 1.5/s. This creates a bright, washed-out entrance that settles into the normal look over ~2 seconds.

### Bubble Scale-Up

Each bubble starts at a fraction of its full size and scales up to 1.0 on load. The scale animation runs on the model, edge clone, reflection clone, and text label simultaneously.

**Staggered entrance — first attempt:** Added a per-bubble delay so they popped in sequentially (0s, 0.15s, 0.3s...). Problem: the delayed bubbles sat motionless on screen at their tiny size until their delay expired, which looked broken.

**The fix: randomized starting size + speed.** Instead of delaying, each bubble gets a random `stagger` value (0–1) that determines:
- **Starting scale**: `0.2 - stagger * 0.14` (range: 0.06 to 0.2)
- **Animation speed**: `2.0 - stagger * 1.2` (range: 0.8 to 2.0)

All bubbles start animating immediately, but the ones with smaller starting sizes and slower speeds appear to come from further away and arrive later — creating a natural depth illusion without any visible "waiting" phase. Randomizing the stagger per load means every page visit has a unique entrance pattern.

## GUI Controls

A `dat.gui` panel provides runtime tuning for glass properties, bloom, lighting, edge rim, reflection, and camera position. It starts hidden and toggles with the `M` key — keeping the viewport clean for the portfolio while allowing quick iteration during development.

## Key Takeaways

1. **`MeshPhysicalMaterial` transmission bypasses alpha blending entirely.** If you need transparency control on a transmissive material, you can't just modify `gl_FragColor.a`. Remove transmission or work with `diffuseColor.a` at the `alphatest_fragment` stage.

2. **`onBeforeCompile` injection points matter.** The Three.js shader pipeline has a specific order. Injecting at `output_fragment` is too late for alpha; `alphatest_fragment` is the right spot.

3. **View-space coordinates are rotation-independent.** When you need a screen-aligned effect (like a vertical fade) on a mesh that rotates, use `modelViewMatrix` to compute the offset in view space.

4. **Three.js's native `UnrealBloomPass` destroys alpha.** If you need a transparent canvas with bloom, use `pmndrs/postprocessing` instead.

5. **AnimationMixer overwrites quaternions.** If you're manually rotating a mesh that also has animation, reapply your rotation after `mixer.update()` in the render loop.

6. **Camera-parented groups are great for fixed-viewport layouts.** Parent a group to the camera, offset it along Z, and your layout stays screen-fixed while you can still change lighting angles by rotating the camera.

7. **Emissive is effectively invisible on transmission materials.** The transmissive render pass dominates the final output. If you need per-object glow differentiation on glass materials, you need a different strategy (selective bloom via `Selection`, or compositing tricks) rather than emissive properties.

8. **Bloom threshold is global, not per-object.** You can't lower the threshold for just one mesh. To get per-object bloom variation, either use `pmndrs/postprocessing`'s `Selection` API or manipulate the object's brightness (emissive, envMap) to push it above the global threshold.

9. **Stagger animations with varied speed, not delays.** Delaying an animation's start leaves objects frozen on screen. Starting everything simultaneously but with different speeds and starting values creates a more natural, depth-aware entrance effect.

---

*Built with Three.js, TypeScript, and Vite. The full source is available on GitHub.*
