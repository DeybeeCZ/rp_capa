import { Animal } from "./animal";

export class Caballo extends Animal{
    constructor(nombre){
        super(nombre)
    }

    mover(distancia=45){
        console.log('cabalgando....')
        super.mover(distancia)
    }
}
