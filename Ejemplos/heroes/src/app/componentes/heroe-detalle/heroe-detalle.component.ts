import { Component, OnInit,Input } from '@angular/core';
import { Heroe } from '../../objetos/heroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  heroe:Heroe
  constructor(private actRoute:ActivatedRoute,
    private loc:Location,
    private hs:HeroeService) { }

  ngOnInit() {
    this.getHeroe()
  }

  getHeroe(){
    const id = +this.actRoute.snapshot.paramMap.get('id');
    console.log('id de heroe',id)
  this.hs.getHeroe(id)
    .subscribe(heroe => this.heroe = heroe);
  }

  save(){
    this.hs.updateHeroe(this.heroe)
     .subscribe(() => this.goBack());
  }

  goBack(){
    console.log('GO BACK');
  }
  

}
