import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../servicios/mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(private ms:MensajeService) { }

  ngOnInit() {
  }

}
