import {delay, map, Observable} from 'rxjs';
import {IBook, mockBooks, mockCategories} from './data/books';

export const fetchBooks = fetchData(mockBooks, 500);

export const fetchBookById = (id: string) => fetchBooks({pageSize: 999999}).pipe(
  map((res: IPaginatedData<IBook>) => res.data.find(b => b.id == id))
);

export const fetchBookCategories = fetchData(mockCategories, 500);

export interface IPaginatedData<T> {
  data: T[];
  totalPages: number;
  page: number;
  pageSize: number;
  totalItems: number;
}

export interface IFilter {
  property: string;
  value: string;
}

export interface IRequest {
  filter?: IFilter, page?: number, pageSize?: number
}

function fetchData<T>(data: T[], delayInMilliseconds = 0) {
  return ({filter, page = 1, pageSize = 10}: IRequest = {}): Observable<IPaginatedData<T>>  => {
    return (new Observable((observer) => {
      // Apply filtering if provided
      let filteredData = data;
      if (filter) {
        filteredData = filterArrayByProperty(filteredData, filter.property, filter.value)
      }

      // Calculate total pages based on the filtered data size and page size
      const totalItems = filteredData.length;
      const totalPages = Math.ceil(totalItems / pageSize);

      // Apply pagination
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      // Create the paginated data object
      const paginatedResult: IPaginatedData<T> = {
        data: paginatedData,
        totalPages: totalPages,
        totalItems,
        page,
        pageSize
      };

      // Emit the paginated data
      observer.next(paginatedResult);
      observer.complete();
    }).pipe(delay<any>(delayInMilliseconds)));
  }
}

function filterArrayByProperty(array: any[], property: string, value: string) {
  return array.filter(item => item[property]?.toLowerCase() === value?.toLowerCase());
}
