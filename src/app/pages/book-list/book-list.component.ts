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
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [CommonModule, BookComponent, SkeletonBookComponent, MatFormFieldModule, MatSelectModule, SkeletonComponent, MatPaginatorModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit, OnDestroy {
  private bookService = inject(BookService);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  public page = 0;
  public pageSize = 20;
  public response?: RequestState<IPaginatedData<IBook>>;
  public selectedCategory?: IBookCategory;
  public bookCategories$ = this.bookService.getCategories()

  get skeletonData(): unknown[] {
    return (new Array(this.pageSize)).fill(null);
  }

  public ngOnInit(): void {
    this.getBooksList();
  }

  public onFilterChange(): void {
    this.page = 0;
    this.getBooksList();
  }

  public onPageChange(pageEvent: PageEvent): void {
    this.page = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;
    this.getBooksList();
  }

  public trackBy(index: number, book: IBook): string {
    return book.id;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private getBooksList(): void {
    this.subscription = this.bookService.getBooksByCategory({
      category: this.selectedCategory?.category,
      page: this.page + 1,
      pageSize: this.pageSize,
    })
      .subscribe(data => {
        this.response = data;
        this.cdr.detectChanges();
      })
  }

}
