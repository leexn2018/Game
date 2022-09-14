import { lerp16 } from "./math.js";
import * as THREE from "three";
export class Game {
    isRunning = false;
    abilityLib = [];
    familyLib = [];
    babeLib = [];
    config;
    scene;
    camera;
    renderer;
    coordinate;
    constructor() {
        this.coordinate = new coordinate();
        this.init();
        this.animate();
    }
    regAbility(ability) {
        this.abilityLib.push(ability);
    }
    findFamilyByName(name) {
        return this.familyLib.find((e) => {
            return e.name == name;
        });
    }
    findAbilityByName(name) {
        let result = this.abilityLib.find((e) => {
            return e.name == name;
        });
        if (result == undefined) {
            console.log('failed to find the given ability');
            return -1;
        }
        else {
            return result;
        }
    }
    init() {
        this.scene = new THREE.Scene();
        let frustumSize = 100;
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
        this.camera.position.set(0, 10, 0);
        this.camera.up.set(0, 0, 1);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        if (!this.renderer) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);
            const size = 16;
            const divisions = 16;
            const gridHelper = new THREE.GridHelper(size, divisions);
            this.scene.add(gridHelper);
        }
        this.keyEvent();
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    ;
    keyEvent() {
        window.onkeydown = (e) => {
            let velocity = 0.5;
            if (e.key == "w") {
                this.camera.position.z += velocity;
            }
            if (e.key == "s") {
                this.camera.position.z -= velocity;
            }
            if (e.key == "a") {
                this.camera.position.x += velocity;
            }
            if (e.key == "d") {
                this.camera.position.x -= velocity;
            }
            if (e.key == " ") {
                this.nextRound();
                e.preventDefault();
            }
        };
        document.addEventListener("click", () => {
            this.nextRound();
        });
    }
    nextRound() {
        if (!this.isRunning) {
            return;
        }
        for (let babe in this.babeLib) {
            this.babeLib[babe].update();
            this.babeLib[babe].genChild();
        }
        game.babeLib = game.babeLib.filter((e) => {
            return e.age < e.max_age + 1;
        });
    }
    start(config) {
        this.isRunning = true;
        this.config = config || { birthRate: 0.4, maxMember: 100 };
        this.familyLib.push(new family(this.config));
        game.familyLib[0].familyAbilities.push(this.findAbilityByName("lifeImprove"));
        game.babeLib.push(new Babe(game.familyLib[0].name, { x: 0, y: 0 }));
    }
    reset() {
        this.isRunning = false;
        this.babeLib = [];
        this.familyLib = [];
        this.scene.children = game.scene.children.filter((e) => {
            return e.type != "babe";
        });
        this.coordinate.reset();
    }
}
class Babe {
    age;
    max_age = 3;
    family;
    location;
    cube;
    color;
    abilities;
    birthRate;
    constructor(familyName, poz) {
        this.age = 0;
        this.family = familyName;
        this.abilities = this.inheritAbilitiesFromFamily();
        for (let index in this.abilities) {
            this.abilities[index].method(this);
        }
        this.color = lerp16(0x00ff00, 0xff0000, this.max_age + 1);
        this.birthRate = game.findFamilyByName(familyName)?.birthRate;
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: this.color[this.age] });
        this.cube = new THREE.Mesh(geometry, material);
        this.cube.type = "babe";
        let x = poz.x;
        let y = poz.y;
        this.location = { x: x, y: y };
        game.coordinate.set({ x: x, y: y }, 1);
        this.cube.position.set(x - 0.5, 0, y + 0.5);
        game.scene.add(this.cube);
        this.cube.material.color.set(this.color[this.age]);
    }
    mutate() {
        if (Math.random()) {
            for (let index in game.abilityLib) {
                if (Math.random() <= game.abilityLib[index].probability) {
                    console.log("mutated");
                    if (this.abilities.filter((e) => { return e == game.abilityLib[index]; }).length == 1) {
                        console.log(game.abilityLib[index].name);
                    }
                }
            }
        }
    }
    update() {
        this.age++;
        this.cube.material.color.set(this.color[this.age]);
        if ((this.age >= this.max_age + 1)) {
            this.cube.visible = false;
            game.coordinate.set(this.location, 0);
            game.scene.children = game.scene.children.filter((e) => {
                return e != this.cube;
            });
        }
        this.mutate();
    }
    genChild() {
        let x = this.location.x;
        let y = this.location.y;
        if (this.age > this.max_age - 1 || this.age < 1) {
            return;
        }
        if (game.coordinate.isEmpty({ x: x + 1, y: y }) && Math.random() <= this.birthRate && game.babeLib.length <= game.findFamilyByName(this.family).maxMember) {
            game.babeLib.push(new Babe(this.family, { x: x + 1, y: y }));
        }
        if (game.coordinate.isEmpty({ x: x - 1, y: y }) && Math.random() <= this.birthRate && game.babeLib.length <= game.findFamilyByName(this.family).maxMember) {
            game.babeLib.push(new Babe(this.family, { x: x - 1, y: y }));
        }
        if (game.coordinate.isEmpty({ x: x, y: y + 1 }) && Math.random() <= this.birthRate && game.babeLib.length <= game.findFamilyByName(this.family).maxMember) {
            game.babeLib.push(new Babe(this.family, { x: x, y: y + 1 }));
        }
        if (game.coordinate.isEmpty({ x: x, y: y - 1 }) && Math.random() <= this.birthRate && game.babeLib.length <= game.findFamilyByName(this.family).maxMember) {
            game.babeLib.push(new Babe(this.family, { x: x, y: y - 1 }));
        }
    }
    inheritAbilitiesFromFamily() {
        return this.abilities = game.findFamilyByName(this.family)?.familyAbilities;
    }
}
class family {
    name;
    maxMember;
    familyAbilities = [];
    birthRate;
    constructor(config) {
        this.name = "f" + Math.floor(Math.random() * 10000);
        this.birthRate = config.birthRate;
        this.maxMember = config.maxMember;
        console.log(this.name);
    }
}
class coordinate {
    block = [];
    constructor() {
        let inner = new Array(16).fill(0);
        this.block = new Array(256).fill(inner);
    }
    find(poz) {
        let blockIndex, index;
        let _x = 128 + poz.x;
        let _y = Math.abs(poz.y - 128);
        let x_index = 0, y_index = 0;
        Math.ceil(_x / 16) == 0 ? x_index = 1 : x_index = Math.ceil(_x / 16) - 1;
        Math.ceil(_y / 16) == 0 || Math.ceil(_y / 16) == 1 ? y_index = 0 : y_index = Math.ceil(_y / 16) - 1;
        let x = _x % 16;
        let y = _y % 16;
        blockIndex = y_index * 16 + x_index;
        index = (16 - y) * 16 + x - 1;
        return { blockIndex, index };
    }
    isEmpty(poz) {
        let r = this.find(poz);
        return !this.block[r.blockIndex][r.index];
    }
    set(poz, value) {
        let r = this.find(poz);
        this.block[r.blockIndex][r.index] = value;
    }
    reset() {
        let inner = new Array(16).fill(0);
        this.block = new Array(256).fill(inner);
    }
}
