import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxAsyncWithStatusModule } from "../../projects/ngx-async-with-status/src/lib/ngx-async-with-status.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAsyncWithStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
