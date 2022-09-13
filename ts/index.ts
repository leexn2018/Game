import * as THREE from './three.module.js'
import {Game} from "./class.js"
//delete loading view
console.log("loaded");
let loading = document.querySelector("#loading")
loading?.parentNode?.removeChild(loading)


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

//test code

console.log(game)
