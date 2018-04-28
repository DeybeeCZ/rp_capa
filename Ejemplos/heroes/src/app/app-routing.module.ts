import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HeroesComponent } from './componentes/heroes/heroes.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { HeroeDetalleComponent } from './componentes/heroe-detalle/heroe-detalle.component';

const routes: Routes = [
  { path:'',redirectTo:'panel',pathMatch:'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'detalle/:id', component: HeroeDetalleComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
