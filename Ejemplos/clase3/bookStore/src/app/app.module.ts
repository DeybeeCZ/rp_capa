import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavComponent } from './components/common/nav/nav.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookGridComponent } from './components/book-grid/book-grid.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BookListComponent,
    BookGridComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
