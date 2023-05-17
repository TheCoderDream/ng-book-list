import {Component, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {getRouteParam} from "../../utils/get-route-param";
import {BookService} from "../../services/book.service";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {BookDetailComponent} from "../../components/book-detail/book-detail.component";
import {SkeletonBookDetailComponent} from "../../components/skeleton-book-detail/skeleton-book-detail.component";

@Component({
  selector: 'app-book-detail-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, RouterLink, BookDetailComponentPage, BookDetailComponent, SkeletonBookDetailComponent],
  templateUrl: './book-detail-component-page.component.html',
  styleUrls: ['./book-detail-component-page.component.scss']
})
export class BookDetailComponentPage {
  private bookService = inject(BookService);
  private id = getRouteParam('id');
  public book$ = this.bookService.getBook(this.id);
}
