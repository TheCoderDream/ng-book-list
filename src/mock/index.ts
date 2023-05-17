import {delay, Observable} from 'rxjs';
import {mockBooks, mockCategories} from './data/books';

export const fetchBooks = fetchData(mockBooks, 500);

export const fetchBookCategories = fetchData(mockCategories, 500);

export interface IPaginatedData<T> {
  data: T[];
  totalPages: number;
  page: number;
  pageSize: number;
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
        page,
        pageSize
      };

      // Emit the paginated data
      observer.next(paginatedResult);
      observer.complete();
    }).pipe(delay<any>(delayInMilliseconds)));
  }
}

function filterArrayByProperty(array: any[], property: string, value: unknown) {
  return array.filter(item => item[property] === value);
}
