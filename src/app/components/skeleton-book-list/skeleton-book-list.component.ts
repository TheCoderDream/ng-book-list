import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonBookComponent} from "../skeleton-book/skeleton-book.component";

@Component({
  selector: 'app-skeleton-book-list',
  standalone: true,
  imports: [CommonModule, SkeletonBookComponent],
  templateUrl: './skeleton-book-list.component.html',
  styleUrls: ['./skeleton-book-list.component.scss']
})
export class SkeletonBookListComponent {
  @Input() size = 10;

  get array(): unknown[] {
    return (new Array(this.size)).fill(null);
  }
}
