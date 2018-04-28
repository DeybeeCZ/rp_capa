import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.styl']
})
export class BookDetailComponent implements OnInit {

  id:Number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id= params['id'],
    ()=>console.log(`id pasado en la url: ${this.id}`))
  }

  ngOnInit() {
  }

}
