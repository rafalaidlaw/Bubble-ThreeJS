import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

const scene = new THREE.Scene()
scene.background = null

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 0, 3.3)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xededed, 1)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0
renderer.shadowMap.enabled = false
document.body.appendChild(renderer.domElement)

const pmremGenerator = new THREE.PMREMGenerator(renderer)
const envTexture = pmremGenerator.fromScene(new RoomEnvironment(), 0.03).texture
scene.environment = envTexture
pmremGenerator.dispose()

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.enablePan = false
controls.minDistance = 2.4
controls.maxDistance = 5

// Soft lighting layout for UI glass:
// - key: bright upper-right/front hotspot
// - fill: weaker lower-left/front hotspot
// - rim: back light to lift contour
// - ambient: low base visibility
const ambientLight = new THREE.AmbientLight(0xffffff, 0.12)
scene.add(ambientLight)

const keyLight = new THREE.SpotLight(0xffffff, 5.8, 12, 0.85, 1, 2)
keyLight.position.set(2.0, 1.5, 2.6)
keyLight.target.position.set(0.18, 0.12, 0)
scene.add(keyLight)
scene.add(keyLight.target)

const fillLight = new THREE.SpotLight(0xffffff, 2.4, 10, 0.95, 1, 2)
fillLight.position.set(-1.5, -1.0, 2.1)
fillLight.target.position.set(-0.18, -0.16, 0)
scene.add(fillLight)
scene.add(fillLight.target)

const rimLight = new THREE.PointLight(0xffffff, 3.4, 12, 2)
rimLight.position.set(0, 0.1, -2.8)
scene.add(rimLight)

const bubbleGeometry = new THREE.SphereGeometry(1, 128, 128)

const bubbleMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xf0f5ff,
  metalness: 0.0,
  roughness: 0.28,
  transmission: 0.93,
  thickness: 1.15,
  ior: 1.42,
  transparent: true,
  opacity: 0.96,
  envMapIntensity: 0.95,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  specularIntensity: 1.0,
  specularColor: new THREE.Color(0xffffff),
  attenuationColor: new THREE.Color(0xeff5ff),
  attenuationDistance: 0.8
})
const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial)
scene.add(bubble)

// Inner frosted core adds a soft milky fill so the bubble
// reads as premium UI glass instead of empty shell.
const coreMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.52,
  transmission: 0.58,
  thickness: 0.85,
  ior: 1.33,
  transparent: true,
  opacity: 0.28,
  envMapIntensity: 0.4
})
const frostedCore = new THREE.Mesh(bubbleGeometry, coreMaterial)
frostedCore.scale.setScalar(0.92)
scene.add(frostedCore)

// Thin outer shell strengthens glossy edge/rim response.
const rimShellMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  roughness: 0.12,
  transmission: 1.0,
  thickness: 0.26,
  ior: 1.5,
  transparent: true,
  opacity: 0.22,
  envMapIntensity: 1.2,
  clearcoat: 1.0,
  clearcoatRoughness: 0.03
})
const rimShell = new THREE.Mesh(bubbleGeometry, rimShellMaterial)
rimShell.scale.setScalar(1.01)
scene.add(rimShell)

const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.1,
  0.45,
  0.95
)
composer.addPass(bloomPass)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  composer.setSize(window.innerWidth, window.innerHeight)
  composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()

function animate() {
  requestAnimationFrame(animate)

  const t = clock.getElapsedTime()
  bubble.rotation.y = t * 0.16
  frostedCore.rotation.y = t * 0.14
  rimShell.rotation.y = t * 0.18

  controls.update()
  composer.render()
}

animate()
