import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from '../../services/book.service';
import {BookComponent} from "../../components/book/book.component";
import {RequestState} from "../../utils/request-state";
import {IPaginatedData} from "../../../mock";
import {IBook, IBookCategory} from "../../../mock/data/books";
import {Subscription} from "rxjs";
import {SkeletonBookComponent} from "../../components/skeleton-book/skeleton-book.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {SkeletonComponent} from "../../core/skeleton/skeleton.component";

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [CommonModule, BookComponent, SkeletonBookComponent, MatFormFieldModule, MatSelectModule, SkeletonComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit, OnDestroy {
  private bookService = inject(BookService);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  private page = 1;
  private pageSize = 20;
  public response?: RequestState<IPaginatedData<IBook>>;
  public selectedCategory?: IBookCategory;
  public bookCategories$ = this.bookService.getCategories()

  get skeletonData(): unknown[] {
    return (new Array(this.pageSize)).fill(null);
  }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(category?: IBookCategory): void {
    this.subscription = this.bookService.getBooksByCategory({
      category: category?.category,
      page: this.page,
      pageSize: this.pageSize,
    })
      .subscribe(data => {
        this.response = data;
        this.cdr.detectChanges();
    })
  }

  public trackBy(index: number, book: IBook): string {
    return book.id;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
