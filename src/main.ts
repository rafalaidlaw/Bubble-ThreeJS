import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { GUI } from 'dat.gui'
import bubbleModelUrl from '../assets/bubble/source/bubble.glb?url'

const scene = new THREE.Scene()
scene.background = null

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0, 12)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.1
renderer.shadowMap.enabled = false
document.body.appendChild(renderer.domElement)

const pmremGenerator = new THREE.PMREMGenerator(renderer)
const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.08).texture
scene.environment = envTexture
pmremGenerator.dispose()

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enablePan = false
controls.minDistance = 4
controls.maxDistance = 25

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.12)
scene.add(ambientLight)

const keyLight = new THREE.SpotLight(0xffffff, 8.0, 16, 0.5, 0.7, 1.2)
keyLight.position.set(0.5, 2.0, 3.5)
keyLight.target.position.set(0, 0, 0)
scene.add(keyLight)
scene.add(keyLight.target)

const fillLight = new THREE.SpotLight(0xffffff, 0.4, 12, 1.0, 1.0, 2.0)
fillLight.position.set(-1.5, -0.5, 2.0)
fillLight.target.position.set(0, 0, 0)
scene.add(fillLight)
scene.add(fillLight.target)

const rimLight = new THREE.PointLight(0xffffff, 3.5, 12, 1.5)
rimLight.position.set(0, 0.5, -2.5)
scene.add(rimLight)

const rimLight2 = new THREE.PointLight(0xeeeeff, 2.0, 10, 1.5)
rimLight2.position.set(-2.0, 1.0, -1.0)
scene.add(rimLight2)

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
})

// Edge ring material (BackSide) for dark refractive rim
const edgeMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x8899aa,
  metalness: 0.1,
  roughness: 0.15,
  transmission: 0.0,
  transparent: true,
  opacity: 0.35,
  envMapIntensity: 0.8,
  side: THREE.BackSide,
  depthWrite: false,
})

// --- Shadow plane ---
const shadowGeo = new THREE.PlaneGeometry(3, 3)
const shadowMat = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.06,
  depthWrite: false,
})
const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat)
shadowPlane.rotation.x = -Math.PI / 2
shadowPlane.position.y = -1.15
scene.add(shadowPlane)

// --- Post-processing (alpha-aware render target) ---
const renderTarget = new THREE.WebGLRenderTarget(
  window.innerWidth, window.innerHeight,
  { type: THREE.HalfFloatType, format: THREE.RGBAFormat }
)
const composer = new EffectComposer(renderer, renderTarget)
const renderPass = new RenderPass(scene, camera)
renderPass.clearAlpha = 0
composer.addPass(renderPass)

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.4,
  0.8,
  0.85
)
composer.addPass(bloomPass)

// --- Resize ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
  composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// --- 5 bubble layout: 2 top, 3 bottom ---
const bubblePositions: { x: number; y: number; label: string }[] = [
  // Top row (2)
  { x: -1.8, y:  1.4, label: 'PixiJS' },
  { x:  1.8, y:  1.4, label: 'Crawlee' },
  // Bottom row (3)
  { x: -3.6, y: -1.0, label: 'Hoppscotch' },
  { x:  0.0, y: -1.0, label: 'Altair\nGraphQL' },
  { x:  3.6, y: -1.0, label: 'Godot\nEngine' },
]

const clock = new THREE.Clock()
const mixers: THREE.AnimationMixer[] = []
const actions: THREE.AnimationAction[] = []
let clipDuration = 1

const anim = {
  time: 0,
  playing: false,
  speed: 1.0,
  loop: true,
}

const gui = new GUI()

// Camera
const cameraPos = { x: camera.position.x, y: camera.position.y, z: camera.position.z }
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(cameraPos, 'x', -10, 10, 0.01).listen().onChange((v: number) => camera.position.x = v)
cameraFolder.add(cameraPos, 'y', -10, 10, 0.01).listen().onChange((v: number) => camera.position.y = v)
cameraFolder.add(cameraPos, 'z', 0.5, 20, 0.01).listen().onChange((v: number) => camera.position.z = v)
cameraFolder.open()

// Glass
const glassFolder = gui.addFolder('Glass')
glassFolder.add(bubbleMaterial, 'roughness', 0, 1, 0.01)
glassFolder.add(bubbleMaterial, 'transmission', 0, 1, 0.01)
glassFolder.add(bubbleMaterial, 'thickness', 0, 3, 0.01)
glassFolder.add(bubbleMaterial, 'ior', 1, 2.5, 0.01)
glassFolder.add(bubbleMaterial, 'envMapIntensity', 0, 3, 0.01)
glassFolder.add(bubbleMaterial, 'clearcoatRoughness', 0, 1, 0.01)
glassFolder.add(bubbleMaterial, 'specularIntensity', 0, 2, 0.01)
glassFolder.add(bubbleMaterial, 'attenuationDistance', 0, 5, 0.01)
glassFolder.open()

// Edge Rim
const rimFolder = gui.addFolder('Edge Rim')
rimFolder.add(edgeMaterial, 'opacity', 0, 1, 0.01)
rimFolder.add(edgeMaterial, 'roughness', 0, 1, 0.01)
rimFolder.add(edgeMaterial, 'envMapIntensity', 0, 2, 0.01)

// Bloom
const bloomFolder = gui.addFolder('Bloom')
bloomFolder.add(bloomPass, 'strength', 0, 3, 0.01)
bloomFolder.add(bloomPass, 'radius', 0, 2, 0.01)
bloomFolder.add(bloomPass, 'threshold', 0, 1, 0.01)
bloomFolder.open()

// Lighting
const lightFolder = gui.addFolder('Lighting')
lightFolder.add(keyLight, 'intensity', 0, 20, 0.1)
lightFolder.add(rimLight, 'intensity', 0, 10, 0.1)
lightFolder.add(rimLight2, 'intensity', 0, 10, 0.1)
lightFolder.add(ambientLight, 'intensity', 0, 1, 0.01)

// Animation timeline
const timelineFolder = gui.addFolder('Animation')

// --- Create text sprite for bubble labels ---
function createTextSprite(text: string): THREE.Sprite {
  const canvas = document.createElement('canvas')
  const size = 512
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, size, size)

  const lines = text.split('\n')
  const fontSize = lines.length > 1 ? 64 : 72
  ctx.font = `500 ${fontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
  ctx.fillStyle = '#555555'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const lineHeight = fontSize * 1.2
  const startY = size / 2 - ((lines.length - 1) * lineHeight) / 2
  lines.forEach((line, i) => {
    ctx.fillText(line, size / 2, startY + i * lineHeight)
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  const spriteMat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  })
  const sprite = new THREE.Sprite(spriteMat)
  sprite.scale.set(0.8, 0.8, 1)
  return sprite
}

// --- Load GLB and spawn 5 instances ---
const loader = new GLTFLoader()
loader.load(
  bubbleModelUrl,
  (gltf) => {
    const clip = gltf.animations[0] || null
    if (clip) clipDuration = clip.duration

    bubblePositions.forEach((bp, i) => {
      // Clone the model for each bubble
      const model = gltf.scene.clone(true)

      // Reset baked transforms, apply layout position
      const meshNode = model.children[0]
      if (meshNode) {
        meshNode.position.set(0, 0, 0)
        meshNode.quaternion.identity()
      }
      model.position.set(bp.x, bp.y, 0)

      // Apply glass material
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          mesh.material = bubbleMaterial

          // Edge ring clone at same position
          const edgeClone = new THREE.Mesh(mesh.geometry.clone(), edgeMaterial)
          if (mesh.morphTargetInfluences) {
            edgeClone.morphTargetInfluences = [...mesh.morphTargetInfluences]
            edgeClone.morphTargetDictionary = mesh.morphTargetDictionary
          }
          edgeClone.scale.setScalar(1.005)
          edgeClone.position.copy(model.position)
          scene.add(edgeClone)
        }
      })

      scene.add(model)

      // Add text label
      const label = createTextSprite(bp.label)
      label.position.set(bp.x, bp.y, 0.05)
      scene.add(label)

      // Set up animation mixer per instance
      if (clip) {
        const mixer = new THREE.AnimationMixer(model)
        const action = mixer.clipAction(clip)
        action.play()
        action.paused = true
        // Offset each bubble's animation slightly for variety
        action.time = (i * clipDuration) / 5
        mixer.update(0)
        mixers.push(mixer)
        actions.push(action)
      }
    })

    console.log(`Loaded 5 bubbles with animation "${clip?.name}" — ${clipDuration.toFixed(2)}s`)

    // Build timeline GUI
    timelineFolder.add(anim, 'time', 0, clipDuration, 0.01).name('Time (s)').listen()
      .onChange((v: number) => {
        actions.forEach((action, i) => {
          action.time = (v + (i * clipDuration) / 5) % clipDuration
        })
        mixers.forEach(m => m.update(0))
      })
    timelineFolder.add(anim, 'playing').name('Play / Pause').listen()
    timelineFolder.add(anim, 'speed', 0.1, 3, 0.1).name('Speed')
    timelineFolder.add(anim, 'loop').name('Loop')
    timelineFolder.add({
      reset: () => {
        anim.time = 0
        actions.forEach((action, i) => { action.time = (i * clipDuration) / 5 })
        mixers.forEach(m => m.update(0))
      }
    }, 'reset').name('Reset')
    timelineFolder.open()
  },
  (progress) => {
    console.log('Loading bubble...', ((progress.loaded / progress.total) * 100).toFixed(0) + '%')
  },
  (error) => {
    console.error('Error loading bubble model:', error)
  }
)

// Keyboard controls
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault()
    anim.playing = !anim.playing
    actions.forEach(a => a.paused = !anim.playing)
  }
  if (e.code === 'ArrowRight') {
    e.preventDefault()
    anim.time = Math.min(anim.time + 0.1, clipDuration)
    actions.forEach((action, i) => {
      action.time = (anim.time + (i * clipDuration) / 5) % clipDuration
    })
    mixers.forEach(m => m.update(0))
  }
  if (e.code === 'ArrowLeft') {
    e.preventDefault()
    anim.time = Math.max(anim.time - 0.1, 0)
    actions.forEach((action, i) => {
      action.time = (anim.time + (i * clipDuration) / 5) % clipDuration
    })
    mixers.forEach(m => m.update(0))
  }
})

// --- Render loop ---
function animate() {
  requestAnimationFrame(animate)

  const delta = clock.getDelta()

  // Update all animation mixers
  if (anim.playing) {
    mixers.forEach(m => m.update(delta * anim.speed))
    if (actions.length > 0) {
      anim.time = actions[0].time

      if (anim.time >= clipDuration) {
        if (anim.loop) {
          anim.time = 0
          actions.forEach((action, i) => { action.time = (i * clipDuration) / 5 })
        } else {
          anim.playing = false
          actions.forEach(a => a.paused = true)
          anim.time = clipDuration
        }
      }
    }
  }

  // Sync camera GUI
  cameraPos.x = camera.position.x
  cameraPos.y = camera.position.y
  cameraPos.z = camera.position.z

  controls.update()
  composer.render()
}

animate()
