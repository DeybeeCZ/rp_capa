import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../servicios/heroe.service';
import { Heroe } from '../../objetos/heroe';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  heroes:Array<Heroe>
  constructor(private hs:HeroeService) { }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(){
    this.hs.getHeroes().subscribe(heroes=>this.heroes=heroes.slice(1,5))
  }

}
