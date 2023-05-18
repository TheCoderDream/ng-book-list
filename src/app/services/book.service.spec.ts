import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import {IBook, IBookCategory} from "../../mock/data/books";
import {fetchBooks, IPaginatedData, IRequest} from "../../mock";
import {of} from "rxjs";

describe('BookService', () => {
  let service: BookService;

  const mockBookData: IBook[] = [
    { id: '1', title: 'Book 1', category: 'Fiction', coverImageUrl: '' },
    { id: '2', title: 'Book 2', category: 'Fiction', coverImageUrl: '' },
    { id: '3', title: 'Book 3', category: 'Fiction', coverImageUrl: '' },
    { id: '3', title: 'Book 4', category: 'Computer', coverImageUrl: '' },
  ];


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


    const paginatedData: IPaginatedData<IBook> = {
      totalItems: mockBookData.length,
      data: mockBookData,
      totalPages: 2,
      page: 1,
      pageSize: 5
    };

    const fetchBooksMock = jasmine.createSpy().and.returnValue(
      of(paginatedData)
    );

    spyOn(service, 'getBooks').and.callFake(fetchBooksMock);

    service.getBooks(request).subscribe((result: any) => {
      expect(fetchBooksMock).toHaveBeenCalledWith(request);
      expect(result.data).toEqual(mockBookData);
      expect(result.totalPages).toBe(2);
      done();
    });
  });

  it('should fetch books by category', (done: DoneFn) => {
    const category: IBookCategory = { category: 'computer', id: '1'};
    const req: IRequest = { page: 1, pageSize: 10 };

    const paginatedData: IPaginatedData<IBook> = {
      totalItems: mockBookData.length,
      data: [{ id: '3', title: 'Book 4', category: 'Computer', coverImageUrl: '' }],
      totalPages: 2,
      page: 1,
      pageSize: 5
    };

    const fetchBooksMock = jasmine.createSpy().and.returnValue(
      of(paginatedData)
    );

    spyOn(service, 'getBooks').and.callFake(fetchBooksMock);

    service.getBooksByCategory({ category: category.category, ...req }).subscribe((result) => {
      expect(result).toEqual(paginatedData as any);
      done();
    });
  });
});
