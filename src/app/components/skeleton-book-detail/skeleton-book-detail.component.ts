import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {SkeletonComponent} from "../../core/skeleton/skeleton.component";

@Component({
  selector: 'app-skeleton-book-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, SkeletonComponent],
  templateUrl: './skeleton-book-detail.component.html',
  styleUrls: ['./skeleton-book-detail.component.scss']
})
export class SkeletonBookDetailComponent {

}
