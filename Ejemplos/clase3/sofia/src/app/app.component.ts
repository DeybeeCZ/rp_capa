import { Component,OnInit } from '@angular/core';
import { Serpiente } from './objetos/serpiente';
import { Caballo } from './objetos/caballo';
import { Animal } from './objetos/animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  sam:Serpiente;
  jul:Animal;

  constructor(){
    this.sam = new Serpiente(1,'Sammy');
    this.jul = new Caballo(2,'Julio');
  }

  ngOnInit(){
    this.sam.mover(50)
    this.jul.mover(150)
  }


}
