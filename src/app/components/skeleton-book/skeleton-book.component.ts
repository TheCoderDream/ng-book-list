import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SkeletonComponent} from "../../core/skeleton/skeleton.component";

@Component({
  selector: 'app-skeleton-book',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SkeletonComponent],
  templateUrl: './skeleton-book.component.html',
  styleUrls: ['./skeleton-book.component.scss']
})
export class SkeletonBookComponent {

}
