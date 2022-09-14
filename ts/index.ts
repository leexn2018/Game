import * as THREE from './three.module.js'
import {Game} from "./class.js"
//delete loading view
console.log("loaded");
let loading = document.querySelector("#loading")
loading?.parentNode?.removeChild(loading)

//set view

//ability define
const lifeImprove: ability = {
    name: "lifeImprove", description:"will have a age increase", probability: 0.00001, method:(babe:any)=>{babe.max_age +=1}
}
const someab:ability = {
    name: "tmp", description: "tmp", probability: 0.01
}

const config = { birthRate: 1, maxMember: 23 }

window.game = new Game()
game.regAbility(lifeImprove)
game.regAbility(someab)

game.start(config)

//test code

console.log(game)

