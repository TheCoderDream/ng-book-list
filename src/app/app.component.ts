import { Component } from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'async-with-status';
  public data$ = of({ title: 'test' }).pipe(delay(1000));
}
