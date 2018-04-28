import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { CatalogoComponent } from './componentes/catalogo/catalogo.component'
import { ContactanosComponent } from './componentes/contactanos/contactanos.component'
import { AnimalComponent } from './componentes/animal/animal.component'
import { DetalleComponent } from './componentes/animal/detalle/detalle.component'

const routes: Routes = [
  {path:'',redirectTo:'animales',pathMatch:'full'},
  {path:'animales',children:[
    {path:'',component:AnimalComponent},
    {path:'detalle/:id',component:DetalleComponent}
  ]},
  {path:'inicio',component:InicioComponent},
  {path:'catalogo',component:CatalogoComponent},
  {path:'contactanos',component:ContactanosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
