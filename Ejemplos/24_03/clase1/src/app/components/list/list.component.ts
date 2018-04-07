import { Component, OnInit, Input } from '@angular/core';

import { ItemModel } from '../../models/itemModel';
import { ListModel } from '../../models/listModel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  // @Input() list:ItemModel[]
  @Input() list:ListModel

  constructor() { }

  ngOnInit() {
  }

}
