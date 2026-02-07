let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;
scene.add(camera);

let box = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: "Red" });
let mesh = new THREE.Mesh(box, material);

// mesh.position.y = 2;
// mesh.position.z = -2;
// mesh.rotation.x =1;
// mesh.scale.z = 2.6;
// Math.PI= 180 degree
// mesh.rotation.y = Math.PI / 5;

scene.add(mesh);

const canvas = document.querySelector("#draw");

let renderer = new THREE.WebGLRenderer({ canvas ,antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);


let Clock = new THREE.Clock();

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.y = Clock.getElapsedTime()  ;
//   mesh.rotation.x += 0.01;
//   mesh.rotation.z += 0.01;
}
animate();
