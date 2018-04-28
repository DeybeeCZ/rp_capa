import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'books',pathMatch:'full'},
  {path:'books',children:[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:BookListComponent},
    {path:'grid',component:BookGridComponent},
    {path:'detail/:id',component:BookDetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
