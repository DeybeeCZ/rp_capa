import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.styl']
})
export class BotonComponent implements OnInit {

  texto : string
 variable : boolean
  constructor() { }

  ngOnInit() {
    this.texto="mostrar"
    this.variable=false
  }

  onclick(){
    if(this.texto=="mostrar") 
    {
      this.variable=true
      this.texto="ocultar"
    } 
    else 
    {
      this.variable=false
      this.texto="mostrar"
    }
  }

}
