import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BookService } from '../../services';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  errors: string[] = [];

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('book_id'));
    //   const id = params.get('book_id');

    //   this.bookService.getBook(id).subscribe(book => (this.book = book));
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(id => this.bookService.getBook(id))
      )
      .subscribe(book => (this.book = book));
  }

  updateBook(book: Book) {
    console.log('updating book', book);

    this.bookService
      .updateBook(book)
      .pipe(take(1))
      .subscribe(
        () => {
          this.router.navigateByUrl('books');
        },
        error => {
          this.errors = error.error;
        }
      );
  }

  onCancel() {
    this.router.navigateByUrl('books');
  }
}
