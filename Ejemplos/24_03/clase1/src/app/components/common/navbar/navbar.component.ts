import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {

  @Input()
  nombre_ext:string

  name:string='Realplaza'
  constructor() { }

  ngOnInit() {
  }

}
