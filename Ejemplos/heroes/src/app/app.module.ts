import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';
import { HeroeService } from './servicios/heroe.service';
import { MensajeService } from './servicios/mensaje.service';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { AppRoutingModule } from './/app-routing.module';
import { PanelComponent } from './componentes/panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetalleComponent,
    MensajesComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroeService,MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
