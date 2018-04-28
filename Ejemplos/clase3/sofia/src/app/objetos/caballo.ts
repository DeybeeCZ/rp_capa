import { Animal } from "./animal";

export class Caballo extends Animal{
    constructor(id,nombre){
        super(id,nombre)
    }

    mover(distancia=45){
        console.log('cabalgando....')
        super.mover(distancia)
    }
}
