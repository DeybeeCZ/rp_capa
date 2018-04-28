import { Component, OnInit } from '@angular/core';
import { Animal } from '../../objetos/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.styl']
})
export class AnimalComponent implements OnInit {

  animales:Array<Animal>=[]
  constructor() { }

  ngOnInit() {
    this.animales.push(new Animal(1,'Serpiente'))
    this.animales.push(new Animal(2,'Tigre'))
    this.animales.push(new Animal(3,'Oso'))
    this.animales.push(new Animal(4,'Jirafa'))
    this.animales.push(new Animal(5,'Ballena'))
  }

}
