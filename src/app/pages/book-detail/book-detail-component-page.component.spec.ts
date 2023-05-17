import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponentPage } from './book-detail-component-page.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponentPage;
  let fixture: ComponentFixture<BookDetailComponentPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookDetailComponentPage]
    });
    fixture = TestBed.createComponent(BookDetailComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
