import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import * as fromServices from './services';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  // providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
