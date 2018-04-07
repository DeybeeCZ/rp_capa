import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  nombre:String = 'Real Plaza';
  url:string = 'http://realplaza.com';
  myurl:string;

  constructor() {
    console.log('en costruccion');
   }

   saludar(){
     console.log(this.myurl);
   }

  ngOnInit() {
    console.log('evento ng-oninit');
  }

  ngAfterViewInit(){
    console.log('se incializo la vista');
  }

}
