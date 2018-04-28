import { Injectable } from '@angular/core';
import { Heroe } from '../objetos/heroe';
import { HEROES } from '../mocks/heroes'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MensajeService } from './mensaje.service'

@Injectable()
export class HeroeService {

  constructor(private ms:MensajeService) { }

  getHeroes():Observable<Heroe[]>{
    
    this.ms.add('Se obtuvieron todos los heroes')
    console.log('get HEROESSSSSSSSSSSSSSSSSSSS');
    return of(HEROES);
  }

  getHeroe(id:Number):Observable<Heroe>{
    return of(HEROES.find(hero => hero.id === id))
  }

}
