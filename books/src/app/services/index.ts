import { BookService } from './book.service';
import { AuthService } from './auth.service';

export const services: any[] = [AuthService, BookService];

export * from './book.service';
export * from './auth.service';
