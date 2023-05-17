import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {IBook} from "../../../mock/data/books";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  @Input({ required: true }) book!: IBook;
}
