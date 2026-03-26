import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import {
  EffectComposer,
  RenderPass,
  BloomEffect,
  EffectPass,
} from "postprocessing";
import { GUI } from "dat.gui";
import bubbleModelUrl from "../assets/bubble/source/bubble.glb?url";

// --- Loading overlay ---
const loadingOverlay = document.createElement("div");
loadingOverlay.style.cssText =
  "position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;" +
  "display:flex;flex-direction:column;align-items:center;justify-content:center;" +
  "z-index:9999;transition:opacity 1s ease;";

const loadingBarBg = document.createElement("div");
loadingBarBg.style.cssText =
  "width:200px;height:4px;background:#eee;border-radius:2px;overflow:hidden;";

const loadingBarFill = document.createElement("div");
loadingBarFill.style.cssText =
  "width:0%;height:100%;background:#ccc;transition:width 0.2s ease;";

loadingBarBg.appendChild(loadingBarFill);
loadingOverlay.appendChild(loadingBarBg);
document.body.appendChild(loadingOverlay);

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(
  42,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(0.02, -11.98, 0.61);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  premultipliedAlpha: false,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = false;
document.body.appendChild(renderer.domElement);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
const envTexture = pmremGenerator.fromScene(
  new RoomEnvironment(),
  0.08,
).texture;
scene.environment = envTexture;
pmremGenerator.dispose();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableRotate = false;
controls.enablePan = false;
controls.enableZoom = false;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.12);
scene.add(ambientLight);

const keyLight = new THREE.SpotLight(0xffffff, 8.0, 16, 0.5, 0.7, 1.2);
keyLight.position.set(0.5, 2.0, 3.5);
keyLight.target.position.set(0, 0, 0);
scene.add(keyLight);
scene.add(keyLight.target);

const fillLight = new THREE.SpotLight(0xffffff, 0.4, 12, 1.0, 1.0, 2.0);
fillLight.position.set(-1.5, -0.5, 2.0);
fillLight.target.position.set(0, 0, 0);
scene.add(fillLight);
scene.add(fillLight.target);

const rimLight = new THREE.PointLight(0xffffff, 3.5, 12, 1.5);
rimLight.position.set(0, 0.5, -2.5);
scene.add(rimLight);

const rimLight2 = new THREE.PointLight(0xeeeeff, 2.0, 10, 1.5);
rimLight2.position.set(-2.0, 1.0, -1.0);
scene.add(rimLight2);

// --- Glass material (applied to loaded GLB mesh) ---
const bubbleMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.05,
  transmission: 1.0,
  thickness: 0.5,
  ior: 1.45,
  transparent: true,
  opacity: 1.0,
  envMapIntensity: 1.0,
  clearcoat: 1.0,
  clearcoatRoughness: 0.05,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffffff),
  attenuationColor: new THREE.Color(0xd4e2ff),
  attenuationDistance: 1.5,
  emissive: new THREE.Color(0xffffff),
  emissiveIntensity: 0.3,
});

// Reflection material — faded, semi-transparent copy of bubble
const reflectionMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.1,
  transmission: 0,
  thickness: 0.3,
  ior: 1.45,
  transparent: true,
  opacity: 1,
  depthWrite: false,
  envMapIntensity: 0.5,
  clearcoat: 0.5,
  clearcoatRoughness: 0.1,
  specularIntensity: 0.5,
  specularColor: new THREE.Color(0xffffff),
  attenuationColor: new THREE.Color(0xd4e2ff),
  attenuationDistance: 2.0,
});

// Inject gradient alpha fade: top of reflection opaque, bottom transparent
// With scale.y=-1 on the clone: local y=-1 is visual top, local y=+1 is visual bottom
reflectionMaterial.onBeforeCompile = (shader) => {
  // Use view-space Y offset from object center — view Y = screen up,
  // so the fade stays top-to-bottom regardless of mesh rotation
  shader.vertexShader = shader.vertexShader.replace(
    "void main() {",
    "varying float vViewYOffset;\nvoid main() {",
  );
  shader.vertexShader = shader.vertexShader.replace(
    "#include <begin_vertex>",
    `#include <begin_vertex>
     vec4 viewPos = modelViewMatrix * vec4(position, 1.0);
     vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
     vViewYOffset = viewPos.y - viewCenter.y;`,
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    "void main() {",
    "varying float vViewYOffset;\nvoid main() {",
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    "#include <alphatest_fragment>",
    `#include <alphatest_fragment>
     float fadeFactor = 0.08 * smoothstep(0.35, 1.0, vViewYOffset);
     diffuseColor.a *= fadeFactor;`,
  );
};

// Edge ring material (BackSide) for dark refractive rim
const edgeMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x8899aa,
  metalness: 0.1,
  roughness: 0.15,
  transmission: 0.0,
  transparent: true,
  opacity: 1,
  envMapIntensity: 0.8,
  side: THREE.BackSide,
  depthWrite: false,
});

// --- Post-processing (pmndrs/postprocessing — preserves alpha) ---
const composer = new EffectComposer(renderer, {
  frameBufferType: THREE.HalfFloatType,
});
const renderPass = new RenderPass(scene, camera);
renderPass.clearPass.overrideClearColor = new THREE.Color(0x000000);
renderPass.clearPass.overrideClearAlpha = 0;
composer.addPass(renderPass);

const BLOOM_TARGET_INTENSITY = 3;
const BLOOM_TARGET_THRESHOLD = 0.44;
const bloomEffect = new BloomEffect({
  intensity: 8,
  radius: 0,
  luminanceThreshold: 0,
});
composer.addPass(new EffectPass(camera, bloomEffect));

// --- Resize ---
function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleResize);

// Re-sync size once the iframe/window has settled after load
window.addEventListener("load", handleResize);

// --- Bubble rig: parented to camera so layout is fixed to view ---
const bubbleRig = new THREE.Group();
bubbleRig.position.set(0, 0, -10); // 10 units in front of camera
camera.add(bubbleRig);
scene.add(camera); // camera must be in scene graph for children to render

// --- 5 bubble layout: 2 top, 3 bottom ---
const bubblePositions: {
  x: number;
  y: number;
  label: string;
  url: string;
  lx: number;
  ly: number;
}[] = [
  // Top row (2)
  {
    x: -1.8,
    y: 2.0,
    label: "PixiJS",
    url: "https://github.com/pixijs/pixijs/pull/11761",
    lx: -8,
    ly: -4,
  },
  {
    x: 1.8,
    y: 2.0,
    label: "Crawlee",
    url: "https://github.com/apify/crawlee/pull/3237",
    lx: 7,
    ly: -4,
  },
  // Bottom row (3)
  {
    x: -3.6,
    y: -0.4,
    label: "Hoppscotch",
    url: "https://github.com/hoppscotch/hoppscotch/pull/5231",
    lx: -9,
    ly: 3,
  },
  {
    x: 0.0,
    y: -0.75,
    label: "Altair\nGraphQL",
    url: "https://github.com/altair-graphql",
    lx: 0,
    ly: 0,
  },
  {
    x: 3.6,
    y: -0.4,
    label: "Godot\nEngine",
    url: "https://docs.godotengine.org/en/stable/contributing/workflow/bug_triage_guidelines.html",
    lx: 13,
    ly: 0,
  },
];

const clock = new THREE.Clock();

// Per-bubble animation state machine
type BubbleState =
  | "idle"
  | "hover-in"
  | "hover-hold"
  | "hover-out"
  | "returning";
let REST_TIME = 4.06;
let HOVER_TIME = 4.25;
let EXIT_TIME = 4.9;

interface BubbleInstance {
  model: THREE.Object3D;
  meshNode: THREE.Object3D | null;
  mixer: THREE.AnimationMixer;
  action: THREE.AnimationAction;
  mesh: THREE.Mesh | null;
  edgeClone: THREE.Mesh | null;
  state: BubbleState;
  reflectionClone: THREE.Mesh | null;
  targetQuat: THREE.Quaternion;
  currentQuat: THREE.Quaternion;
  idleAngle: number;
  introScale: number;
  introDelay: number;
  introPlaying: boolean;
  labelDiv: HTMLDivElement | null;
  label: string;
  url: string;
  bp: { x: number; y: number; lx: number; ly: number };
}
const bubbles: BubbleInstance[] = [];

// Raycasting for hover detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let hoveredIndex = -1;

const gui = new GUI();
gui.hide();

window.addEventListener("keydown", (e) => {
  if (e.key === "m" || e.key === "M") {
    gui.domElement.style.display === "none" ? gui.show() : gui.hide();
  }
});

// Camera
const cameraPos = {
  x: camera.position.x,
  y: camera.position.y,
  z: camera.position.z,
};
const cameraFolder = gui.addFolder("Camera");
cameraFolder
  .add(cameraPos, "x", -10, 10, 0.01)
  .listen()
  .onChange((v: number) => (camera.position.x = v));
cameraFolder
  .add(cameraPos, "y", -10, 10, 0.01)
  .listen()
  .onChange((v: number) => (camera.position.y = v));
cameraFolder
  .add(cameraPos, "z", 0.5, 20, 0.01)
  .listen()
  .onChange((v: number) => (camera.position.z = v));
cameraFolder.open();

// Glass
const glassFolder = gui.addFolder("Glass");
glassFolder.add(bubbleMaterial, "roughness", 0, 1, 0.01);
glassFolder.add(bubbleMaterial, "transmission", 0, 1, 0.01);
glassFolder.add(bubbleMaterial, "thickness", 0, 3, 0.01);
glassFolder.add(bubbleMaterial, "ior", 1, 2.5, 0.01);
glassFolder.add(bubbleMaterial, "envMapIntensity", 0, 3, 0.01);
glassFolder.add(bubbleMaterial, "clearcoatRoughness", 0, 1, 0.01);
glassFolder.add(bubbleMaterial, "specularIntensity", 0, 2, 0.01);
glassFolder.add(bubbleMaterial, "attenuationDistance", 0, 5, 0.01);
glassFolder.open();

// Edge Rim
const rimFolder = gui.addFolder("Edge Rim");
rimFolder.add(edgeMaterial, "opacity", 0, 1, 0.01);
rimFolder.add(edgeMaterial, "roughness", 0, 1, 0.01);
rimFolder.add(edgeMaterial, "envMapIntensity", 0, 2, 0.01);

// Reflection
const reflectionFolder = gui.addFolder("Reflection");
reflectionFolder.add(reflectionMaterial, "opacity", 0, 1, 0.01);
reflectionFolder.add(reflectionMaterial, "transmission", 0, 1, 0.01);
reflectionFolder.add(reflectionMaterial, "roughness", 0, 1, 0.01);
reflectionFolder.add(reflectionMaterial, "envMapIntensity", 0, 2, 0.01);

// Bloom
const bloomFolder = gui.addFolder("Bloom");
bloomFolder.add(bloomEffect, "intensity", 0, 3, 0.01);
bloomFolder.add(bloomEffect.mipmapBlurPass, "radius", 0, 2, 0.01);
bloomFolder.add(bloomEffect.luminanceMaterial, "threshold", 0, 1, 0.01);
bloomFolder.open();

// Animation
const animFolder = gui.addFolder("Animation");
const animParams = {
  idleSpinSpeed: -0.1,
  introLerpSpeed: 4.0,
  bloomIntroSpeed: 3.0,
  emissiveIntroSpeed: 3.0,
};
animFolder.add(animParams, "idleSpinSpeed", -1, 0, 0.01).name("Idle Spin");
animFolder
  .add(animParams, "introLerpSpeed", 0.5, 10, 0.1)
  .name("Intro Scale Speed");
animFolder
  .add(animParams, "bloomIntroSpeed", 0.5, 10, 0.1)
  .name("Bloom Intro Speed");
animFolder
  .add(animParams, "emissiveIntroSpeed", 0.5, 10, 0.1)
  .name("Emissive Intro Speed");
animFolder.open();

// GLB Morph Animation
const morphParams = {
  restTime: REST_TIME,
  hoverTime: HOVER_TIME,
  exitTime: EXIT_TIME,
  scrub: REST_TIME,
};
const morphFolder = gui.addFolder("GLB Animation");
morphFolder
  .add(morphParams, "restTime", 0, 8.46, 0.01)
  .name("Rest Time")
  .onChange((v: number) => {
    REST_TIME = v;
  });
morphFolder
  .add(morphParams, "hoverTime", 0, 8.46, 0.01)
  .name("Hover Time")
  .onChange((v: number) => {
    HOVER_TIME = v;
  });
morphFolder
  .add(morphParams, "exitTime", 0, 8.46, 0.01)
  .name("Exit Time")
  .onChange((v: number) => {
    EXIT_TIME = v;
  });
morphFolder
  .add(morphParams, "scrub", 0, 8.46, 0.01)
  .name("Scrub")
  .onChange((v: number) => {
    for (const b of bubbles) {
      b.action.time = v;
      b.action.paused = true;
      b.mixer.update(0);
    }
  });

// Lighting
const lightFolder = gui.addFolder("Lighting");
lightFolder.add(keyLight, "intensity", 0, 20, 0.1);
lightFolder.add(rimLight, "intensity", 0, 10, 0.1);
lightFolder.add(rimLight2, "intensity", 0, 10, 0.1);
lightFolder.add(ambientLight, "intensity", 0, 1, 0.01);

const labelFolder = gui.addFolder("Label Offsets");
bubblePositions.forEach((bp) => {
  const f = labelFolder.addFolder(bp.label.replace("\n", " "));
  f.add(bp, "lx", -50, 50, 1).name("x offset (px)");
  f.add(bp, "ly", -50, 50, 1).name("y offset (px)");
});

// --- Load GLB and spawn 5 instances ---
const loader = new GLTFLoader();
loader.load(
  bubbleModelUrl,
  (gltf) => {
    const clip = gltf.animations[0] || null;

    bubblePositions.forEach((bp) => {
      const model = gltf.scene.clone(true);

      // Reset baked transforms, apply layout position
      const meshNode = model.children[0] || null;
      if (meshNode) {
        meshNode.position.set(0, 0, 0);
        meshNode.quaternion.identity();
      }
      model.position.set(bp.x, bp.y, 0);
      const startScale = 0.01;
      model.scale.setScalar(startScale);

      let bubbleMesh: THREE.Mesh | null = null;
      let edgeCloneMesh: THREE.Mesh | null = null;
      let reflectionCloneMesh: THREE.Mesh | null = null;
      const storedMeshNode = meshNode;

      // Apply glass material
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = bubbleMaterial.clone();
          bubbleMesh = mesh;

          // Edge ring clone — shares geometry but gets its own morph influences to sync
          const edgeClone = new THREE.Mesh(mesh.geometry.clone(), edgeMaterial);
          if (mesh.morphTargetInfluences) {
            edgeClone.morphTargetInfluences = [...mesh.morphTargetInfluences];
            edgeClone.morphTargetDictionary = mesh.morphTargetDictionary;
          }
          edgeClone.scale.setScalar(1.005 * startScale);
          edgeClone.position.copy(model.position);
          bubbleRig.add(edgeClone);
          edgeCloneMesh = edgeClone;

          // Reflection clone — mirrored below floor line
          const reflectionClone = new THREE.Mesh(
            mesh.geometry.clone(),
            reflectionMaterial,
          );
          if (mesh.morphTargetInfluences) {
            reflectionClone.morphTargetInfluences = [
              ...mesh.morphTargetInfluences,
            ];
            reflectionClone.morphTargetDictionary = mesh.morphTargetDictionary;
          }
          // Place reflection directly under its bubble: offset by 2× radius so tops touch bottoms
          reflectionClone.position.set(bp.x, bp.y - 2.0, 0);
          reflectionClone.scale.set(startScale, -startScale, startScale); // flip vertically, start small
          reflectionClone.renderOrder = -1;
          bubbleRig.add(reflectionClone);
          reflectionCloneMesh = reflectionClone;
        }
      });

      bubbleRig.add(model);

      // Text label (HTML overlay)
      const labelDiv = document.createElement("div");
      labelDiv.innerHTML = bp.label.replace("\n", "<br>");
      labelDiv.style.cssText =
        "position:fixed;pointer-events:none;font:700 16px 'Ubuntu',sans-serif;" +
        "color:#55575b;text-align:center;white-space:nowrap;" +
        "transform:translate(-50%,-50%);opacity:0;transition:opacity 0.3s ease;";
      document.body.appendChild(labelDiv);

      // Animation mixer — start at rest pose
      if (clip) {
        const mixer = new THREE.AnimationMixer(model);
        const action = mixer.clipAction(clip);
        action.play();
        action.clampWhenFinished = true;
        action.setLoop(THREE.LoopOnce, 1);
        action.time = 6.8;
        action.paused = false;
        action.timeScale = 1;
        mixer.update(0);

        bubbles.push({
          model,
          meshNode: storedMeshNode,
          mixer,
          action,
          mesh: bubbleMesh,
          edgeClone: edgeCloneMesh,
          reflectionClone: reflectionCloneMesh,
          state: "idle",
          targetQuat: new THREE.Quaternion(),
          currentQuat: new THREE.Quaternion(),
          idleAngle: 0,
          introScale: startScale,
          introDelay: 0,
          introPlaying: true,
          labelDiv: labelDiv,
          label: bp.label,
          url: bp.url,
          bp,
        });
      }
    });

    console.log(
      `Loaded 5 bubbles — rest:${REST_TIME} hover:${HOVER_TIME} exit:${EXIT_TIME}`,
    );

    // Scene is ready — remove loading overlay and start timers
    loadingOverlay.remove();

    // Start label fade-ins relative to scene ready
    setTimeout(() => { leftLabel.style.opacity = "1"; }, 500);
    setTimeout(() => { oscLabel.style.opacity = "1"; }, 1000);
  },
  (progress) => {
    if (progress.lengthComputable) {
      const pct = (progress.loaded / progress.total) * 100;
      loadingBarFill.style.width = `${pct}%`;
    }
  },
  (error) => console.error("Error loading bubble model:", error),
);

// --- Glass ice cube (GLB projected onto cube shape) ---
// let iceCube: THREE.Mesh | null = null;
// let iceCubeEdge: THREE.Mesh | null = null;
// let iceCubeReflection: THREE.Mesh | null = null;

// --- "Open Source Contributions" label (HTML overlay) ---
const oscLabel = document.createElement("div");
oscLabel.textContent = "Hover For More Information";
oscLabel.style.cssText =
  "position:fixed;bottom:5%;left:50%;transform:translateX(-50%);" +
  "background:#fff;color:#333;font:700 16px 'Ubuntu',sans-serif;" +
  "padding:12px 28px;border-radius:0;border-top:1px solid #ccc;border-bottom:10px solid #ccc;border-left:5px solid #ccc;border-right:5px solid #ccc;pointer-events:none;white-space:nowrap;text-align:center;width:320px;box-sizing:border-box;" +
  "opacity:0;transition:opacity 2.5s ease;";
document.body.appendChild(oscLabel);

// --- Left side label (HTML overlay) ---
const leftLabel = document.createElement("div");
leftLabel.innerHTML = "Open<br>Source<br>Contributions";
leftLabel.style.cssText =
  "position:fixed;left:4%;top:35%;transform:translateY(-50%);" +
  "background:#fff;color:#333;font:700 19px 'Ubuntu',sans-serif;" +
  "width:150px;height:150px;display:flex;align-items:center;justify-content:center;text-align:left;" +
  "border-radius:0;border-top:1px solid #ccc;border-bottom:5px solid #ccc;border-left:10px solid #ccc;border-right:1px solid #ccc;pointer-events:none;" +
  "opacity:0;transition:opacity 2.5s ease;";
document.body.appendChild(leftLabel);

// --- Mouse hover detection ---
const _bubbleScreenPos = new THREE.Vector3();
const _reflectionQuat = new THREE.Quaternion();
const _idleQuat = new THREE.Quaternion();
const _zAxis = new THREE.Vector3(0, 0, 1);

function setRotationTowardMouse(b: BubbleInstance) {
  // Ensure world matrices are current (bubbles are camera children)
  b.model.updateWorldMatrix(true, false);
  b.model.getWorldPosition(_bubbleScreenPos);
  _bubbleScreenPos.project(camera);
  const angle = Math.atan2(
    mouse.y - _bubbleScreenPos.y,
    mouse.x - _bubbleScreenPos.x,
  );
  // Indent naturally points toward +Y in local space (π/2 from +X axis)
  // Offset so the indent aligns with the mouse direction
  const INDENT_OFFSET = Math.PI / 2;
  const quat = b.targetQuat.setFromAxisAngle(
    new THREE.Vector3(0, 0, 1),
    angle + INDENT_OFFSET,
  );
  b.currentQuat.copy(quat);
  if (b.meshNode) b.meshNode.quaternion.copy(quat);
  if (b.edgeClone) b.edgeClone.quaternion.copy(quat);
  // Mirror rotation for reflection (flip angle for Y-inverted clone)
  if (b.reflectionClone) {
    _reflectionQuat.setFromAxisAngle(
      new THREE.Vector3(0, 0, 1),
      -angle - INDENT_OFFSET,
    );
    b.reflectionClone.quaternion.copy(_reflectionQuat);
  }
}

// Also update rotation every frame while hovered (not just on mousemove)
// This ensures the rotation is always applied after any mixer updates
let activeHoverBubble: BubbleInstance | null = null;

function onBubbleEnter(b: BubbleInstance) {
  setRotationTowardMouse(b);

  switch (b.state) {
    case "idle":
      // Start playing forward from rest to hover
      b.state = "hover-in";
      b.action.paused = false;
      b.action.timeScale = 1;
      b.action.time = REST_TIME;
      break;
    case "hover-out":
      // Currently playing forward past hover point, or playing backward —
      // either way, reverse direction toward HOVER_TIME
      if (b.action.time > HOVER_TIME) {
        // Past hover point, reverse back to it
        b.state = "returning";
        b.action.paused = false;
        b.action.timeScale = -1;
      } else if (b.action.time < HOVER_TIME) {
        // Before hover point (reversing toward rest), go forward again
        b.state = "hover-in";
        b.action.paused = false;
        b.action.timeScale = 1;
      } else {
        b.state = "hover-hold";
        b.action.paused = true;
      }
      break;
    case "returning":
      // Already heading back to hover, just keep going
      break;
    case "hover-in":
    case "hover-hold":
      // Already hovering, nothing to do
      break;
  }
}

function onBubbleLeave(b: BubbleInstance) {
  switch (b.state) {
    case "hover-hold":
    case "hover-in":
      // Play forward from current position to exit
      b.state = "hover-out";
      b.action.paused = false;
      b.action.timeScale = 1;
      break;
    case "returning":
      // Was reversing back to hover, now go forward to exit instead
      b.state = "hover-out";
      b.action.paused = false;
      b.action.timeScale = 1;
      break;
    case "hover-out":
    case "idle":
      // Already leaving or idle, nothing to do
      break;
  }
}

window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const meshes = bubbles.map((b) => b.mesh).filter(Boolean) as THREE.Mesh[];
  const intersects = raycaster.intersectObjects(meshes, false);

  const newHovered =
    intersects.length > 0
      ? bubbles.findIndex((b) => b.mesh === intersects[0].object)
      : -1;

  if (newHovered !== hoveredIndex) {
    // Mouse left previous bubble
    if (hoveredIndex >= 0 && hoveredIndex < bubbles.length) {
      const prev = bubbles[hoveredIndex];
      onBubbleLeave(prev);
      activeHoverBubble = null;
      window.parent.postMessage({ type: "bubble-leave" }, "*");
      oscLabel.textContent = "Hover For More Information";
    }
    // Mouse entered new bubble
    if (newHovered >= 0) {
      const curr = bubbles[newHovered];
      onBubbleEnter(curr);
      activeHoverBubble = curr;
      window.parent.postMessage(
        { type: "bubble-hover", label: curr.label.replace("\n", " "), url: curr.url, index: newHovered },
        "*",
      );
      oscLabel.textContent = "Click Bubble To View Merged PR";
    }
    hoveredIndex = newHovered;
    document.body.style.cursor = newHovered >= 0 ? "pointer" : "default";
  } else if (newHovered >= 0) {
    // Mouse still over same bubble — update rotation to follow mouse
    setRotationTowardMouse(bubbles[newHovered]);
  }
});

// Click to open link
window.addEventListener("click", () => {
  if (hoveredIndex >= 0 && hoveredIndex < bubbles.length) {
    window.open(bubbles[hoveredIndex].url, "_blank");
  }
});

// --- Render loop ---
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  // Animate bloom intro toward target values
  const t = bloomEffect.luminanceMaterial.threshold;
  if (Math.abs(t - BLOOM_TARGET_THRESHOLD) > 0.001) {
    bloomEffect.luminanceMaterial.threshold +=
      (BLOOM_TARGET_THRESHOLD - t) *
      Math.min(1, animParams.bloomIntroSpeed * delta);
  }
  const i = bloomEffect.intensity;
  if (Math.abs(i - BLOOM_TARGET_INTENSITY) > 0.001) {
    bloomEffect.intensity +=
      (BLOOM_TARGET_INTENSITY - i) *
      Math.min(1, animParams.bloomIntroSpeed * delta);
  }

  // Animate emissive intro fade-down to 0
  for (const b of bubbles) {
    if (b.mesh) {
      const mat = b.mesh.material as THREE.MeshPhysicalMaterial;
      if (mat.emissiveIntensity > 0.001) {
        mat.emissiveIntensity +=
          (0 - mat.emissiveIntensity) *
          Math.min(1, animParams.emissiveIntroSpeed * delta);
      }
    }
  }

  for (const b of bubbles) {
    // Sync position from GUI
    b.model.position.set(b.bp.x, b.bp.y, 0);
    if (b.edgeClone) b.edgeClone.position.set(b.bp.x, b.bp.y, 0);
    if (b.reflectionClone)
      b.reflectionClone.position.set(b.bp.x, b.bp.y - 2.0, 0);

    switch (b.state) {
      case "hover-in":
        b.mixer.update(delta);
        if (b.action.time >= HOVER_TIME) {
          b.action.time = HOVER_TIME;
          b.action.paused = true;
          b.mixer.update(0);
          b.state = "hover-hold";
        }
        break;

      case "hover-out":
        b.mixer.update(delta);
        if (b.action.time >= EXIT_TIME) {
          b.action.time = REST_TIME;
          b.action.paused = true;
          b.mixer.update(0);
          b.idleAngle = 0;
          b.state = "idle";
        }
        break;

      case "returning":
        // Playing backwards toward HOVER_TIME
        b.mixer.update(delta); // delta is positive, timeScale is -1
        if (b.action.time <= HOVER_TIME) {
          b.action.time = HOVER_TIME;
          b.action.paused = true;
          b.action.timeScale = 1;
          b.mixer.update(0);
          b.state = "hover-hold";
        }
        break;

      case "idle": {
        b.idleAngle += animParams.idleSpinSpeed * delta;
        const idleQuat = _idleQuat.setFromAxisAngle(_zAxis, b.idleAngle);
        if (b.meshNode) b.meshNode.quaternion.copy(idleQuat);
        if (b.edgeClone) b.edgeClone.quaternion.copy(idleQuat);
        if (b.reflectionClone) {
          _reflectionQuat.setFromAxisAngle(_zAxis, -b.idleAngle);
          b.reflectionClone.quaternion.copy(_reflectionQuat);
        }
        break;
      }

      // hover-hold: no updates
    }

    // Play GLB intro animation (6.48 → 8.46) alongside scale-up
    if (b.introPlaying) {
      b.mixer.update(delta);
      if (b.action.time >= 8.46) {
        b.action.time = REST_TIME;
        b.action.paused = true;
        b.mixer.update(0);
        b.introPlaying = false;
      }
    }

    // Animate intro scale to 1.0 — later bubbles start smaller & animate slower
    if (b.introScale < 0.999) {
      const speed = animParams.introLerpSpeed - b.introDelay * 2;
      b.introScale += (1.0 - b.introScale) * Math.min(1, speed * delta);
      const s = b.introScale;
      b.model.scale.setScalar(s);
      if (b.edgeClone) b.edgeClone.scale.setScalar(1.005 * s);
      if (b.reflectionClone) b.reflectionClone.scale.set(s, -s, s);
    }

    // Position HTML label over bubble
    if (b.labelDiv) {
      const labelPos = new THREE.Vector3();
      b.model.updateWorldMatrix(true, false);
      b.model.getWorldPosition(labelPos);
      labelPos.project(camera);
      const x = (labelPos.x * 0.5 + 0.5) * window.innerWidth + b.bp.lx;
      const y = (-labelPos.y * 0.5 + 0.5) * window.innerHeight + b.bp.ly;
      b.labelDiv.style.left = `${x}px`;
      b.labelDiv.style.top = `${y}px`;
      b.labelDiv.style.opacity = b.introScale > 0.5 ? "1" : "0";
    }

    // Sync edge clone and reflection morph targets with main mesh
    if (b.mesh && b.mesh.morphTargetInfluences) {
      for (let i = 0; i < b.mesh.morphTargetInfluences.length; i++) {
        if (b.edgeClone)
          b.edgeClone.morphTargetInfluences![i] =
            b.mesh.morphTargetInfluences[i];
        if (b.reflectionClone)
          b.reflectionClone.morphTargetInfluences![i] =
            b.mesh.morphTargetInfluences[i];
      }
    }
  }

  // Reapply rotation AFTER all mixer updates so it's never overwritten
  if (activeHoverBubble && activeHoverBubble.meshNode) {
    activeHoverBubble.meshNode.quaternion.copy(activeHoverBubble.currentQuat);
    if (activeHoverBubble.edgeClone) {
      activeHoverBubble.edgeClone.quaternion.copy(
        activeHoverBubble.currentQuat,
      );
    }
    // Reapply mirrored rotation to reflection clone
    if (activeHoverBubble.reflectionClone) {
      const angle =
        2 * Math.acos(Math.min(1, Math.abs(activeHoverBubble.currentQuat.w)));
      const sign = activeHoverBubble.currentQuat.z >= 0 ? 1 : -1;
      const mouseAngle = sign * angle - Math.PI / 2;
      _reflectionQuat.setFromAxisAngle(
        new THREE.Vector3(0, 0, 1),
        -mouseAngle - Math.PI / 2,
      );
      activeHoverBubble.reflectionClone.quaternion.copy(_reflectionQuat);
    }
  }

  // Sync camera GUI
  cameraPos.x = camera.position.x;
  cameraPos.y = camera.position.y;
  cameraPos.z = camera.position.z;

  controls.update();
  composer.render();
}

animate();
