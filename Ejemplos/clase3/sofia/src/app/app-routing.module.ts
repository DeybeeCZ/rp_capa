import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { CatalogoComponent } from './componentes/catalogo/catalogo.component'
import { ContactanosComponent } from './componentes/contactanos/contactanos.component'

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'contactanos',component:ContactanosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
