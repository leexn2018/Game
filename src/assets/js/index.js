import { Game } from "./class.js";
console.log("loaded");
let loading = document.querySelector("#loading");
loading?.parentNode?.removeChild(loading);
const lifeImprove = {
    name: "lifeImprove", description: "will have a age increase", probability: 0.00001, method: (babe) => { babe.max_age += 1; }
};
const someab = {
    name: "tmp", description: "tmp", probability: 0.01
};
const config = { birthRate: 0.5, maxMember: 23 };
window.game = new Game();
game.regAbility(lifeImprove);
game.regAbility(someab);
game.start(config);
