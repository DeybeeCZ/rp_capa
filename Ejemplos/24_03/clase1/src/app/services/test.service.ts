import { Injectable } from '@angular/core';
// import { ListModel } from '../models/listModel';
import { ItemModel } from '../models/itemModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TestService {

  constructor(protected list:ItemModel[]) { }

  // getItems(): Observable<ItemModel[]>{
  //   // return of(this.list.getItems())
  //   return of(this.list.items)
  // }
  //
  // addItem(item:ItemModel){
  //   // this.list.addItem(item)
  //   this.list.addItem(item)
  // }

}
