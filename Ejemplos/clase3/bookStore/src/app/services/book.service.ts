import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Response } from '@angular/http';
import { Book } from '../objects/book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private _http:Http) { }

  getAllBooks():Observable<Book[]>{
    return this._http.get('assets/books/books.json')
    .map((response:Response)=><Book[]> response.json());
  }

  getBookById(id:Number){
    this._http.get('assets/books/books.json')
    .map((response: Response) => response.json().data)
    
  }

}
