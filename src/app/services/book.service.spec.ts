import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {IBook} from "../../mock/data/books";
import {fetchBooks, IPaginatedData, IRequest} from "../../mock";
import {of} from "rxjs";

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch books with pagination', (done) => {
    const request: IRequest = {
      filter: {
        property: 'category',
        value: 'fiction'
      },
      page: 1,
      pageSize: 5,
    };

    const expectedData: IBook[] = [
      { id: '1', title: 'Book 1', category: 'Fiction' },
      { id: '2', title: 'Book 2', category: 'Fiction' },
      { id: '3', title: 'Book 3', category: 'Fiction' },
    ];

    const paginatedData: IPaginatedData<IBook> = {
      data: expectedData,
      totalPages: 2,
      page: 1,
      pageSize: 5
    };

    const fetchBooksMock = jasmine.createSpy().and.returnValue(
      of(paginatedData)
    );

    spyOn(service, 'getBooks').and.callFake(fetchBooksMock);

    service.getBooks(request).subscribe((result) => {
      expect(fetchBooksMock).toHaveBeenCalledWith(request);
      expect(result.data).toEqual(expectedData);
      expect(result.totalPages).toBe(2);
      done();
    });
  });
});
