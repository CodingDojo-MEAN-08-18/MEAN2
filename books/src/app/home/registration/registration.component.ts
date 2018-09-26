import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';

import { AuthService } from '../../services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, user: User) {
    event.preventDefault();

    this.auth.register(user).subscribe(
      () => {
        this.router.navigateByUrl('books');
      },
      error => {
        const errors = error.json();
      }
    );
  }
}
