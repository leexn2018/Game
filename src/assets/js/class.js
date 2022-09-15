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
        let frustumSize = 36;
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
        document.querySelector("canvas")
            ?.addEventListener("click", () => {
            this.nextRound();
        });
    }
    nextRound() {
        if (!this.isRunning) {
            return;
        }
        for (let babe in this.babeLib) {
            this.babeLib[babe]?.update();
            this.babeLib[babe]?.genChild();
        }
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
        this.birthRate = game.findFamilyByName(familyName).birthRate;
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
    }
    mutate() {
        if (Math.random()) {
            for (let index in game.abilityLib) {
                if (Math.random() <= game.abilityLib[index].probability) {
                    if (this.abilities.filter((e) => { return e == game.abilityLib[index]; }).length == 1) {
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
            game.babeLib = game.babeLib.filter((e) => {
                return e.age <= e.max_age;
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
        this.block = new Array(256 * 256).fill(0);
    }
    find(poz) {
        let index;
        let x = 128 + poz.x;
        let y = Math.abs(poz.y - 128);
        y == 0 || y == 1 ? y = 0 : y = y - 1;
        index = y * 256 + x;
        return index;
    }
    isEmpty(poz) {
        let r = this.find(poz);
        return !this.block[r];
    }
    set(poz, value) {
        let r = this.find(poz);
        this.block[r] = value;
    }
    reset() {
        this.block = new Array(256 * 256).fill(0);
    }
    print(poz) {
        let r = this.find(poz);
        let t = this.block[r];
        console.log(t);
    }
}
export class test {
    show(poz) {
        if (game.coordinate.isEmpty(poz)) {
            let geometry = new THREE.BoxGeometry(1, 1, 1);
            let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            let cube = new THREE.Mesh(geometry, material);
            game.scene.add(cube);
        }
        game.coordinate.set(poz, 1);
    }
    showBro(poz) {
        let x = poz.x;
        let y = poz.y;
        console.log("1");
        if (game.coordinate.isEmpty({ x: (x + 1), y: y })) {
            this.show({ x: x + 1, y: y });
        }
        if (game.coordinate.isEmpty({ x: x - 1, y: y })) {
            this.show({ x: x - 1, y: y });
        }
        if (game.coordinate.isEmpty({ x: x, y: y + 1 })) {
            this.show({ x: x, y: y + 1 });
        }
        if (game.coordinate.isEmpty({ x: x, y: y - 1 })) {
            this.show({ x: x, y: y - 1 });
        }
    }
}
