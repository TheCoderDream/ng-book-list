import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BookListComponent} from "./pages/book-list/book-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BookListComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
