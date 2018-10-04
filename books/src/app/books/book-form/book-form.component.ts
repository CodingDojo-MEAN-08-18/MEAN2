import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../../models';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  @Input()
  book: Book;

  @Output()
  bookEvent = new EventEmitter<Book>();

  onSubmit(form: NgForm) {
    this.bookEvent.emit(form.value);
  }
}
