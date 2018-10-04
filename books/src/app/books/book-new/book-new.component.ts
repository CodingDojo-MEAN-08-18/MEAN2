import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models/book';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent {
  errors: string[] = [];
  book = new Book();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  createBook(book: Book) {
    event.preventDefault();

    console.log('submitting form', book);
    this.bookService.createBook(book).subscribe(
      () => {
        this.router.navigateByUrl('books');
      },
      error => {
        this.errors = error.error;
      }
    );
  }
}
