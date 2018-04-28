import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  @Input() title;
  searchBox:String
  
  constructor() { }

  ngOnInit() {
  }

}
