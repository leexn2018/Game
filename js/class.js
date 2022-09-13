import * as THREE from "./three.module.js";
export class Game {
    abilityLib = [];
    familyLib = [];
    babeLib = [];
    config;
    scene;
    camera;
    renderer;
    coordinate;
    constructor() {
        console.log("abilityLib created");
        this.coordinate = new coordinate();
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
        //create scene
        this.scene = new THREE.Scene();
        //camera  init
        let frustumSize = 16;
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 1, 1000);
        this.camera.position.set(0, 10, 0);
        this.camera.up.set(0, 0, 1);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        //bind to element
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        //add grid
        const size = 16;
        const divisions = 16;
        const gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(gridHelper);
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    ;
    keyEvent() {
        document.addEventListener("keypress", (e) => {
            if (e.key == "w") {
                this.camera.position.z += 0.1;
            }
            if (e.key == "s") {
                this.camera.position.z -= 0.1;
            }
            if (e.key == "a") {
                this.camera.position.x += 0.1;
            }
            if (e.key == "d") {
                this.camera.position.x -= 0.1;
            }
            if (e.key == " ") {
                this.nextRound();
                e.preventDefault();
            }
        });
    }
    nextRound() {
        for (let babe in this.babeLib) {
            //grow & update color
            //genNewBabe
            this.babeLib[babe].age++;
            this.babeLib[babe].cube.material.color.set(this.babeLib[babe].color[this.babeLib[babe].age]);
            if ((this.babeLib[babe].age >= 5)) {
                this.babeLib[babe].cube.visible = false;
                game.babeLib = game.babeLib.filter((e) => {
                    return e.age < 5;
                });
            }
            this.babeLib[babe]?.genCube();
        }
    }
    start(config) {
        this.config = config || { birthRate: 0.4, maxMember: 100 };
        this.familyLib.push(new family(this.config));
        game.familyLib[0].familyAbilities.push(this.findAbilityByName("lifeImprove"));
        game.familyLib[0].birth();
        console.log(this.babeLib);
        this.init();
        this.keyEvent();
        this.animate();
    }
}
class Babe {
    age; // range [0,3] , this can be improved (maybe) through mutations
    family;
    location;
    cube;
    color = [0x00ff00, 0xffff00, 0xff6633, 0xff0000];
    abilities;
    birthRate;
    constructor(familyName) {
        this.age = 0;
        this.family = familyName;
        this.abilities = this.inheritAbilitiesFromFamily();
        this.birthRate = game.findFamilyByName(familyName)?.birthRate;
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
    }
    genCube() {
        this.cube.position.set(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10));
        game.scene.add(this.cube);
    }
    inheritAbilitiesFromFamily() {
        return this.abilities = game.findFamilyByName(this.family)?.familyAbilities;
    }
}
class family {
    name;
    member;
    maxMember; // this can be improved (maybe) through mutations
    familyAbilities = [];
    birthRate;
    constructor(config) {
        this.name = "f" + Math.floor(Math.random() * 10000);
        this.birthRate = config.birthRate;
        this.member = 0;
        this.maxMember = config.maxMember;
        console.log(this.name);
    }
    birth() {
        console.log("birth called");
        game.babeLib.push(new Babe(this.name));
    }
}
class coordinate {
    blockIndex = [];
    block = []; //16*16
    /*eg
    [
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
                    ......
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]

    */
    find(poz) {
        //stupid
        let blockIndex, index;
        let _x = 128 + poz.x;
        let _y = Math.abs(poz.y - 128);
        let x_index = 0, y_index = 0;
        Math.ceil(_x / 16) == _x / 16 ? x_index = (_x / 16) : x_index = Math.ceil(_x / 16) - 1;
        Math.ceil(_y / 16) == _y / 16 ? y_index = (_y / 16) : y_index = Math.ceil(_y / 16) - 1;
        let x = Math.abs(_x % 16);
        let y = Math.abs(_y % 16);
        blockIndex = y_index * 16 + x_index;
        index = y * 16 + x - 1;
        return { blockIndex, index };
    }
}
