import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from '../../objects/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.styl'],
  providers:[BookService]
})
export class BookListComponent implements OnInit {

  books:Book[];
  constructor(private bs:BookService) { }

  ngOnInit() {
    this.bs.getAllBooks().subscribe(books => this.books = books);
  }

}
