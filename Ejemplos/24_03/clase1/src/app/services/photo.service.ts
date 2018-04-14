import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhotoService {

  public url: string;

  constructor(private _http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/photos';
  }

  getPhotos() {
    return this._http.get(this.url);
  }

}
