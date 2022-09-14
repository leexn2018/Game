export const reg = () => {
    game.regAbility(lifeImprove)
    game.regAbility(someab)
}

const lifeImprove: ability = {
    name: "lifeImprove", description: "will have a age increase", probability: 0.00001, method: (babe: any) => { babe.max_age += 1 }
}
const someab: ability = {
    name: "tmp", description: "tmp", probability: 0.01
}
