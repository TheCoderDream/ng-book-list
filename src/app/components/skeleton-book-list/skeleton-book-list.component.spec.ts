import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBookListComponent } from './skeleton-book-list.component';

describe('SkeletonBookListComponent', () => {
  let component: SkeletonBookListComponent;
  let fixture: ComponentFixture<SkeletonBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonBookListComponent]
    });
    fixture = TestBed.createComponent(SkeletonBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
