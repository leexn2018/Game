import * as THREE from './three.module.js'
import {Game} from "./class.js"
//delete loading view
console.log("loaded");
let loading = document.querySelector("#loading")
loading?.parentNode?.removeChild(loading)

//threejs test
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();

//ability define
const lifeImprove: ability = {
    name: "lifeImprove", description:"will have a age increase", probability: 0.001
}
const someab:ability = {
    name: "tmp", description: "tmp", probability: 0.01
}

window.game = new Game()
game.regAbility(lifeImprove)
game.regAbility(someab)
game.start()
game.familyLib[0].familyAbilities.push(lifeImprove)
game.familyLib[0].birth()
console.log(game)
