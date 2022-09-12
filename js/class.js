export class Game {
    abilityLib = [];
    familyLib = [];
    babeLib = [];
    config;
    constructor() {
        console.log("abilityLib created");
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
    start(config) {
        this.config = config || { birthRate: 0.4, maxMember: 100 };
        this.familyLib.push(new family(this.config));
    }
}
class Babe {
    age; // range [0,3] , this can be improved (maybe) through mutations
    family;
    location;
    abilities;
    birthRate;
    constructor(familyName) {
        this.age = 0;
        this.family = familyName;
        this.abilities = this.inheritAbilitiesFromFamily();
        this.birthRate = window.game.findFamilyByName(familyName)?.birthRate;
    }
    inheritAbilitiesFromFamily() {
        return this.abilities = window?.game.findFamilyByName(this.family)?.familyAbilities;
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
        window.game.babeLib.push(new Babe(this.name));
    }
}
