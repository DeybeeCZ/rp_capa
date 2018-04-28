import { Injectable } from '@angular/core';

@Injectable()
export class MensajeService {

  mensajes:String[]=[]
  constructor() { }

  add(msg:String){
    console.log('mensaje service',msg)
    this.mensajes.push(msg)
    console.log('largo',this.mensajes.length)
  }

  clear(){
    this.mensajes=[]
  }
}
