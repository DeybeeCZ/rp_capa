import {Animal} from './animal'

export class Serpiente extends Animal {

    constructor(id,nombre){
        super(id,nombre)
    }

    mover(distancia=5){
        console.log('Arrastrandose...')
        super.mover(distancia)
    }

}
