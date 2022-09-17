
import * as THREE from "three";

type Tchildren = Array<Child>

enum status {
    dead = 0,
    alive = 1,
    toBeDead = 2,
    toBeAlive = 3
}

const raycaster = new THREE.Raycaster();
window.pointer = new THREE.Vector2();

function onPointerMove( event: { clientX: number; clientY: number; } ) {

	// 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

const clickUpdate = () =>{
    game.nextRound()
}

function render() {

	// 通过摄像机和鼠标位置更新射线
	raycaster.setFromCamera( pointer, game.camera );

	// 计算物体和射线的焦点  返回很多东西
	const intersects = raycaster.intersectObjects( game.scene.children );
    //console.log(intersects[0].object.position);
    //console.log(intersects[0].object);
    if(intersects[0].object.isLine) {return -1}
    if(intersects[0].object.isChild) {return -1}
    game.children.push(new Child( new Points(intersects[0].object.position.x,intersects[0].object.position.z), status.alive))    
}



export class Game {
    coordinate: Coordinate;
    ver: number = 1;
    children:Array<Child> = [];
    scene!: THREE.Scene;
    camera!: THREE.OrthographicCamera;
    renderer: any;
    isRunning: boolean = false;
    isReady:boolean = false;
    constructor()
    {   
        this.coordinate = new Coordinate(this);
    }

    init()
    {
        window.addEventListener( 'pointermove', onPointerMove );
        // this.children.push(new Child(new Points(1,-1)))
        // this.children.push(new Child(new Points(0, 0)))
        // this.coordinate.set(new Points(0,0), status.toBeAlive)
        
        
        //create scene
        this.scene = new THREE.Scene()

        //camera  init
        let frustumSize = 36
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000);
        this.camera.position.set(0, 10, 0);
        this.camera.up.set(0, 0, 1);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        const addCube = (x:number,y:number) => {
            let geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
            let material = new THREE.MeshBasicMaterial({ color: 0x000000 });
            let cube = new THREE.Mesh(geometry, material);
            cube.position.set( x , 0, y)
            this.scene.add(cube)
        }
        
        
        for (let i = 0; i < 128; i++){
            for (let j = 0; j < 128; j++){
                let x = i - 63
                let y = j - 63
                addCube(x,y)
            }
        }
        //bind to element
        if (!this.renderer) {
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this.renderer.domElement);

            //add grid
            const size = 128;
            const divisions = 128;
            const gridHelper = new THREE.GridHelper(size, divisions);
            gridHelper.position.set(-0.5 , 0 ,0.5)
            this.scene.add(gridHelper);
        }        
        this.isReady = true
        this.keyEvent()
        this.animate();
    }
    keyEvent() {
        window.onkeydown = (e) => {
            let velocity = 0.5

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
        }
        document.querySelector("canvas")
            ?.addEventListener("click", render)
    }

    test(i:string)
    {
        method.handleDead(i)
    }

    nextRound() {
        if (!this.isRunning) {
            return
        }
        this.coordinate.for((poz:Points)=>{
            let r = this.coordinate.sumAround(poz)
            //if(r!=0) console.log(r,poz.toGame());
            if(r==1){console.log(poz);
            }

            if(r==3 && this.coordinate.isEmpty(poz)){
                //console.log(this.coordinate.isEmpty(poz));
                this.children.push(new Child(poz.toGame(),status.toBeAlive))
            }
            if(r<2 && !this.coordinate.isEmpty(poz)){
                this.coordinate.set(poz,status.toBeDead)
            }
            if(r== 2 || r ==3){
                //do nothing  :)
            }
            if(r>3 && !this.coordinate.isEmpty(poz)){
                this.coordinate.set(poz,status.toBeDead)
            }
        })
        this.coordinate.update()
    }
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene, this.camera);
    }
    start()
    {   
        this.isRunning = true
        document.querySelector("canvas")?.removeEventListener("click",render)
        document.querySelector("canvas")?.addEventListener("click",clickUpdate)
        /* this.children.push(new Child(new Points(-1, 0),status.alive))
        this.children.push(new Child(new Points(1, 0),status.alive))
        this.children.push(new Child(new Points(0, -1),status.alive))
        this.children.push(new Child(new Points(1, -1),status.alive))
        this.children.push(new Child(new Points(1, 0),status.alive))
        this.children.push(new Child(new Points(1, 1),status.alive)) */


/*      this.children.push(new Child(new Points(-1, 0),status.alive))
        this.children.push(new Child(new Points(-2, 0),status.alive))
        this.children.push(new Child(new Points(1, 0),status.alive))
        this.children.push(new Child(new Points(2, 0),status.alive))
        this.children.push(new Child(new Points(0, -1),status.alive))
        this.children.push(new Child(new Points(1, -1),status.alive))

        this.children.push(new Child(new Points(-2, 1),status.alive))
        this.children.push(new Child(new Points(-1, 1),status.alive))
        this.children.push(new Child(new Points(0, 1),status.alive))
        this.children.push(new Child(new Points(1, 1),status.alive))

        this.children.push(new Child(new Points(-1, 2),status.alive))
        this.children.push(new Child(new Points(0, 2),status.alive)) */
    }
    reset()
    {
        this.coordinate = new Coordinate(this)
        this.scene.children = this.scene.children.filter((e)=>{
            return e.isChild != true
        })
        this.children = []
        document.querySelector("canvas")?.addEventListener("click",render)
        document.querySelector("canvas")?.removeEventListener("click",clickUpdate)
    }
}
class Coordinate {
    game: any;
    block!: Array<any>;
    index!: Array<any>;
    size: number;
    constructor(that: any)
    {
        this.size = 128
        this.game = {
            children: that.children
        }
        this.block = []
        for (let i = 0; i < this.size; i++){
            this.block[i] = new Array()
            for (let j = 0; j < this.size; j++){
                this.block[i][j] = 0
            }
        }

        this.index = []
        for (let i = 0; i < this.size; i++){
            this.index[i] = new Array()
            for (let j = 0; j < this.size; j++){
                this.index[i][j] = 0
            }
        }
    }
    isEmpty(p:Points)
    {   
        if (this.block[p.x][p.y]  == 1){return 0}
        else {
            return 1
        }
    }
    set(p:Points,v:status)
    {   
        this.block[p.x][p.y] = v
    }
    setIndex(p:Points,v:status)
    {   
        this.index[p.x][p.y] = v
    }
    get(p:Points)
    {
        return this.block[p.x][p.y]
    }

    getIndex(p:Points)
    {
        return this.index[p.x][p.y]
    }
    update()
    {   
        //console.log("beginAt: "+ new Date().getUTCMilliseconds());
        
        for (let i = 0; i < this.size; i++){
            for (let j = 0; j < this.size; j++){
                if(this.block[i][j] == status.toBeAlive)
                {
                    this.block[i][j] = status.alive   
                }
                 
                if(this.block[i][j] == status.toBeDead) 
                {
                    this.block[i][j] = status.dead
                    method.handleDead(this.index[i][j])
                    this.index[i][j] = 0
                }
            }
        }
        //console.log("endAt: "+ new Date().getUTCMilliseconds());
    }
    for(fn:Function)
    {
        for (let i = 0; i < this.size; i++){
            for (let j = 0; j < this.size; j++){
                fn(new Points(i,j))
            }
        }
    }
    sumAround(p:Points){
        const dx = [0, 0, 1, -1, -1, -1, 1, 1];
        const dy = [1, -1, 0, 0, 1, -1, 1, -1];
        let sum = 0;
        for(let index = 0; index < 8; index++) {
            let x = p.x + dx[index];
            let y = p.y + dy[index];
            if(x < 0 || y < 0 || x >= this.size -1 || y >= this.size-1) continue;
            if(this.block[x][y]==0 || this.block[x][y] == 3) continue;
            sum += 1
        }
        return sum
    }
}

class Child {
    position!:Points;
    tag: string;
    family!: string;
    constructor(poz:Points, ...args: (any)[])
    {   
        //this.family = args[0] || 'F' + Math.floor(Math.random()*1000);
        this.tag = 'I' + Math.floor(Math.random()*1000000);
        this.position = poz;
        
        let geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        let cube = new THREE.Mesh(geometry, material);
        cube.type = this.tag
        cube.isChild = true
        game.coordinate.set(this.position.toCoordinate(), args[0])
        game.coordinate.setIndex(this.position.toCoordinate(),this.tag)
        cube.position.set( this.position.x , 1, this.position.y)
        game.scene.add(cube)
    }
}

class Points {
    x!:number;
    y!:number;
    constructor(x:number,y:number)
    {
        this.x = x;
        this.y = y;
    } 
    up()
    {
        return new Points(this.x, this.y+1)
    }
    down()
    {
        return new Points(this.x, this.y-1)
    }
    left()
    {
        return new Points(this.x-1, this.y)
    }
    right()
    {
        return new Points(this.x+1, this.y)
    }
    toCoordinate(){
        return new Points(this.x+63,this.y+63)
    }
    toGame(){
        return new Points(this.x-63,this.y-63)
    }
}

class Ability {
    name: string;
    method: Function;
    level: number;
    
    constructor(props: { name: string; level: number; method: Function; })
    {
        this.name = props.name
        this.level = props.level
        this.method = props.method
    }
}

const method = {
    children:[], // 无用 仅为消除errors
    // this 指向 Game
    findChildByTag(tag:string): Tchildren
    {
        return this.children.filter((e:Child)=>{
            return e.tag == tag
        })
    },
    findChildrenByFamilyName(family:string): Tchildren
    {
        return this.children.filter((e:Child)=>{
            return [e.family == family]
        })
    },
    toIndex(p:Points): number
    {   
        return  0
    },
    handleDead(i:string):void
    {
        game.scene.children = game.scene.children.filter((e:any)=>{
            return e.type != i
        })
    }
}

// (x,y)  =>  x.y