import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../objetos/heroe';
import { HeroeService } from '../../servicios/heroe.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  //providers:[HeroeService]
})
export class HeroesComponent implements OnInit {

  heroes:Array<Heroe>

  constructor(protected hs:HeroeService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(){
    this.hs.getHeroes()
    .subscribe(heroes => this.heroes=heroes);
  }

}
