import { Route } from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";

export const routes: Route[] = [
  { path: '',   redirectTo: '/book-list', pathMatch: 'full' },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'book-list/:id',

    loadComponent: () => import('./book-detail/book-detail-component-page.component').then(c => c.BookDetailComponentPage)
  }
]
