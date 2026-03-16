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
// Select canvas
const canvas = document.querySelector('#bg');

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
canvas: canvas
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Camera position
camera.position.z = 30;

// Create particles
const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 1000; i++) {

const x = (Math.random() - 0.5) * 200;
const y = (Math.random() - 0.5) * 200;
const z = (Math.random() - 0.5) * 200;

vertices.push(x, y, z);

}

geometry.setAttribute(
'position',
new THREE.Float32BufferAttribute(vertices, 3)
);

// Material
const material = new THREE.PointsMaterial({
color: 0xffffff,
size: 0.7
});

// Points
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Animation loop
function animate() {

requestAnimationFrame(animate);

particles.rotation.x += 0.0005;
particles.rotation.y += 0.0005;

renderer.render(scene, camera);

}

animate();
