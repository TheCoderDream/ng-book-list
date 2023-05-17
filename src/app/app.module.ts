import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {BookListComponent} from "./pages/book-list/book-list.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {routes} from "./pages";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BookListComponent,
        BrowserAnimationsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
