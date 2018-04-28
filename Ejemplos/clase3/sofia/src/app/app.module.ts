import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { AlimentacionComponent } from './componentes/animal/alimentacion/alimentacion.component';
import { NacimientoComponent } from './componentes/animal/nacimiento/nacimiento.component';
import { SexoComponent } from './componentes/animal/sexo/sexo.component';
import { DetalleComponent } from './componentes/animal/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    ContactanosComponent,
    AnimalComponent,
    AlimentacionComponent,
    NacimientoComponent,
    SexoComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
