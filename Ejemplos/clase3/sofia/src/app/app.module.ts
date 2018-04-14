import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { AnimalComponent } from './componentes/animal/animal.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoComponent,
    ContactanosComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
