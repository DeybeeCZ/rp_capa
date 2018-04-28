import { Injectable } from '@angular/core';
import { Heroe } from '../objetos/heroe';
import { HEROES } from '../mocks/heroes'
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
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
    return this.http.get<Heroe[]>(this.heroesUrl).pipe(
      tap(heroes => this.ms.add(`fetched heroes`)),
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.ms.add(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateHeroe(heroe:Heroe):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json' })
    };
    return this.http.put(this.heroesUrl,heroe,httpOptions).pipe(
      //tap(_ => this.ms.add(`updated hero id=${heroe.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  getHeroe(id:Number):Observable<Heroe>{
    return of(HEROES.find(hero => hero.id === id))
  }

}
