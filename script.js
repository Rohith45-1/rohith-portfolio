// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Create stars
function addStar() {

const geometry = new THREE.SphereGeometry(0.25, 24, 24);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const star = new THREE.Mesh(geometry, material);

const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

star.position.set(x, y, z);

scene.add(star);

}

// Add many stars
Array(200).fill().forEach(addStar);

// Animation
function animate() {

requestAnimationFrame(animate);

renderer.render(scene, camera);

}

animate();

