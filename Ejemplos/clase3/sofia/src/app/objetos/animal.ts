export class Animal {
    constructor(public id:Number,public nombre:String){}

    mover(distancia:Number=0){
        console.log(`${this.nombre} se movio ${distancia}m.`);
    }
}
