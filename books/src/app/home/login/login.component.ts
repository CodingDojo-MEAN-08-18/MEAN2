import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from '../../services';

import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();

  errors: string[] = [];

  constructor(private auth: AuthService, private location: Location) {}

  onSubmit(user: User): void {
    this.auth
      .login(user)
      .subscribe(
        () => this.location.go('books'),
        errors => this.handleErrors(errors)
      );
  }

  private handleErrors(errors: string[] | Error): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
