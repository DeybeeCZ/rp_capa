import {Animal} from './animal'

export class Serpiente extends Animal {

    constructor(nombre){
        super(nombre)
    }

    mover(distancia=5){
        console.log('Arrastrandose...')
        super.mover(distancia)
    }

}
