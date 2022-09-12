export class Game {
    abilityLib: Array<ability> = [];
    familyLib: Array<family> = [];
    babeLib: Array<babe> = [];
    config!: config;
    constructor() {
        console.log("abilityLib created");

    }

    regAbility(ability: ability) {
        this.abilityLib.push(ability)
    }

    findFamilyByName(name: string) {
        return this.familyLib.find((e) => {
            return e.name == name
        })
    }

    findAbilityByName(name: string) {
        let result: any = this.abilityLib.find((e) => {
            return e.name == name
        })
        if (result == undefined) {
            console.log('failed to find the given ability');
            return -1
        } else {
            return result
        }
    }
    start(config: config) {
        this.config = config || { birthRate: 0.4, maxMember: 100 };
        this.familyLib.push(new family(this.config));

    }
}


class Babe {
    age!: number;    // range [0,3] , this can be improved (maybe) through mutations
    family!: string;
    location!: { x: number; y: number; };
    abilities!: [];
    birthRate!: number;
    constructor(familyName: string) {
        this.age = 0
        this.family = familyName
        this.abilities = this.inheritAbilitiesFromFamily()
        this.birthRate = game.findFamilyByName(familyName)?.birthRate
    }

    inheritAbilitiesFromFamily(): [] {
        return this.abilities = game.findFamilyByName(this.family)?.familyAbilities
    }
}

class family {
    name!: string;
    member!: number;
    maxMember!: number;  // this can be improved (maybe) through mutations
    familyAbilities: [] = [];
    birthRate!: number;
    constructor(config: config) {
        this.name = "f" + Math.floor(Math.random() * 10000);
        this.birthRate = config.birthRate;
        this.member = 0;
        this.maxMember = config.maxMember;
        console.log(this.name);

    }
    birth() {
        console.log("birth called");
        game.babeLib.push(new Babe(this.name))
    }
}
