import { Injectable } from '@angular/core';
import { Heroe } from '../objetos/heroe';
import { HEROES } from '../mocks/heroes'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MensajeService } from './mensaje.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroeService {

  private heroesUrl:string = 'api/heroes'

  constructor(private http: HttpClient,private ms:MensajeService) { }

  getHeroes():Observable<Heroe[]>{
    
    this.ms.add('Se obtuvieron todos los heroes')
    console.log('get HEROESSSSSSSSSSSSSSSSSSSS');
    //return of(HEROES);
    return this.http.get<Heroe[]>(this.heroesUrl);
  }

  getHeroe(id:Number):Observable<Heroe>{
    return of(HEROES.find(hero => hero.id === id))
  }

}
