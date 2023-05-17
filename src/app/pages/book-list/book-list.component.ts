import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from '../../services/book.service';
import {BookComponent} from "../../components/book/book.component";
import {RequestState} from "../../utils/request-state";
import {IPaginatedData} from "../../../mock";
import {IBook} from "../../../mock/data/books";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit, OnDestroy {
  private bookService = inject(BookService);
  private cdr = inject(ChangeDetectorRef);
  private subscription = new Subscription();
  private page = 1;
  private pageSize = 10;
  public response?: RequestState<IPaginatedData<IBook>>;
  public selectedCategory?: string;

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(): void {
    this.subscription = this.bookService.getBooksByCategory({
      category: this.selectedCategory,
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
