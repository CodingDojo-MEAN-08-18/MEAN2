import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookieService } from 'ngx-cookie';

import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly base = '/api/auth';

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/login`, user);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.base}/register`, user);
  }

  logout(): Observable<void> {
    return this.http.delete<void>(`${this.base}/logout`);
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userID = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return session && userID && expired && expired > Date.now();
  }
}
