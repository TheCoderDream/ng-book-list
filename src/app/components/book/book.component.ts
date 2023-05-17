import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {IBook} from "../../../mock/data/books";
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, MatButtonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input({ required: true }) book!: IBook;
}
