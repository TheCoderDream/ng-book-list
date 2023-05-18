import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import {HarnessLoader} from "@angular/cdk/testing";
import {of} from "rxjs";
import {BookComponent} from "../../components/book/book.component";
import {SkeletonBookComponent} from "../../components/skeleton-book/skeleton-book.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {SkeletonComponent} from "../../core/skeleton/skeleton.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BookService} from "../../services/book.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {fetchBookCategories, fetchBooks, IPaginatedData} from "../../../mock";
import {IBookCategory} from "../../../mock/data/books";
import {MatPaginatorHarness} from "@angular/material/paginator/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {requestStates} from "../../utils/request-state";
import {ActivatedRoute} from "@angular/router";
import {BookComponentHarness} from "../../components/book/book.component.spec";
import {MatSelectHarness} from "@angular/material/select/testing";

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let loader: HarnessLoader;

  const bookServiceMock = {
    getCategories: jasmine.createSpy('getCategories').and.returnValue(fetchBookCategories().pipe(requestStates())),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookListComponent, BrowserAnimationsModule, BookComponent, SkeletonBookComponent, MatFormFieldModule, MatSelectModule, SkeletonComponent, MatPaginatorModule],
      providers: [BookService,         {
        provide: ActivatedRoute,
        useValue: {
          params: of([{id: 1}]),
        },
      },]
    });
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list the amount of books of the page size', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.page).toEqual(0);
    expect(component.pageSize).toEqual(20);

    let bookComponentHarness = await loader.getAllHarnesses(BookComponentHarness);
    expect(bookComponentHarness.length).toBe(component.pageSize);
  });

  it('should filter the list by category', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    let categories = await loader.getHarness(MatSelectHarness);

    await categories.clickOptions({ text: 'technology & engineering'})

    let bookComponentHarness = await loader.getAllHarnesses(BookComponentHarness);
    expect(bookComponentHarness.length).toBe(1);

    categories = await loader.getHarness(MatSelectHarness);
    await categories.clickOptions({ text: 'All'});


    bookComponentHarness = await loader.getAllHarnesses(BookComponentHarness);
    expect(bookComponentHarness.length).toBe(20);
  });

  it('should update page and page size and trigger page change', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.page).toEqual(0);
    expect(component.pageSize).toEqual(20);

    spyOn(component, 'onPageChange').and.callThrough();
    let paginatorHarness = await loader.getHarness(MatPaginatorHarness);
    let bookComponentHarness = await loader.getAllHarnesses(BookComponentHarness);
    expect(bookComponentHarness.length).toBe(component.pageSize)
    await paginatorHarness.setPageSize(10);
    expect(component.onPageChange).toHaveBeenCalledTimes(1);
    expect(component.pageSize).toEqual(10);
    paginatorHarness = await loader.getHarness(MatPaginatorHarness);
    bookComponentHarness = await loader.getAllHarnesses(BookComponentHarness);
    await paginatorHarness.goToNextPage();
    expect(component.onPageChange).toHaveBeenCalledTimes(2);
    expect(bookComponentHarness.length).toBe(component.pageSize);
  });
});
