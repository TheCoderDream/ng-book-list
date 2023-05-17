import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBookDetailComponent } from './skeleton-book-detail.component';

describe('SkeletonBookDetailComponent', () => {
  let component: SkeletonBookDetailComponent;
  let fixture: ComponentFixture<SkeletonBookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonBookDetailComponent]
    });
    fixture = TestBed.createComponent(SkeletonBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
