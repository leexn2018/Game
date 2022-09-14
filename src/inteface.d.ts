declare const game: Game

declare module './three.module.js' {
    import * as THREE from 'three'
}

interface Window {
    game: Game;
}
interface babe {
    update(): void;
    genChild(): void;
    color: any;
    cube: any;
    genCube: any;
    age?: number;    // range [0,3] , this can be improved (maybe) through mutations
    family: string;
    location?: { x: number, y: number }
    abilities?: [];
    mutate(): void;     //provided by config?
    birthRate?: family[birthRate]
}

interface family {
    name: string;
    member: number;
    maxMember: number;  // this can be improved (maybe) through mutations
    familyAbilities: [];
    birthRate: number
}

interface ability {
    name: string;
    description: string;
    level?: number;     // babe & family will have this
    probability: number;    // range [0,1], better lower than 0.05 , babe's mutation will use this
    data?: {};
    method?(any): void      //also babe & family will have this
}

interface config {
    maxMember: number;
    birthRate: number;
}