import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../objetos/heroe';

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styleUrls: ['./crear-heroe.component.css']
})
export class CrearHeroeComponent implements OnInit {

  poderes = ['Super Inteligencia', 'Super Flexible',
  'Super Caliente', 'Cambia de forma'];

  submitted = false;

  model = new Heroe(18, 'Dr IQ', this.poderes[0], 'Danesa');
  constructor() { }

  ngOnInit() {
  }

  

  onSubmit() { this.submitted = true; }

  diagnostic() { return JSON.stringify(this.model); }

}
