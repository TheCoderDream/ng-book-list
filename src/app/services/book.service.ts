import {Injectable} from '@angular/core';
import {fetchBookCategories, fetchBooks, IFilter, IPaginatedData, IRequest} from "../../mock";
import {Observable} from "rxjs";
import {IBook, IBookCategory} from "../../mock/data/books";
import {RequestState, requestStates} from "../utils/request-state";

export type IFilterByCategory = Omit<IRequest, 'filter'> & { category?: string};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public getBooks(req?: IRequest): Observable<RequestState<IPaginatedData<IBook>>> {
    return fetchBooks(req).pipe(requestStates())
  }

  public getBooksByCategory({ category, page, pageSize}: IFilterByCategory): Observable<RequestState<IPaginatedData<IBook>>>  {
    let filter: IFilter | undefined;
    if (category) {
      filter = {
        property: 'category',
        value: category
      }
    }

    return this.getBooks({ filter, page, pageSize });
  }

  public getCategories(req: IRequest): Observable<RequestState<IPaginatedData<IBookCategory>>> {
    return fetchBookCategories(req).pipe(requestStates())
  }
}
