import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IBook} from "../../../mock/data/books";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input({ required: true }) book!: IBook;
}
