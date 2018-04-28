import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';
import { HeroeService } from './servicios/heroe.service';
import { MensajeService } from './servicios/mensaje.service';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { AppRoutingModule } from './/app-routing.module';
import { PanelComponent } from './componentes/panel/panel.component';
import { NoFoundComponent } from './componentes/no-found/no-found.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetalleComponent,
    MensajesComponent,
    PanelComponent,
    NoFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroeService,MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
