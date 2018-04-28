import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HeroesComponent } from './componentes/heroes/heroes.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';
import { NoFoundComponent } from './componentes/no-found/no-found.component';
import { CrearHeroeComponent } from './formularios/crear-heroe/crear-heroe.component';

const routes: Routes = [
  { path:'',redirectTo:'panel',pathMatch:'full'},
  { path: 'heroes', children:[
    {path:'',component: HeroesComponent},
    {path:'crear',component:CrearHeroeComponent}
  ] },
  { path: 'panel', component: PanelComponent },
  { path: 'detalle/:id', component: HeroeDetalleComponent },
  { path: '**', component: NoFoundComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
