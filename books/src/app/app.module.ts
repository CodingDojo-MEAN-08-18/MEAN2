import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import * as fromServices from './services';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, ...fromBooks.components, NavComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  // providers: [...fromServices.services],
  bootstrap: [AppComponent],
})
export class AppModule {}
