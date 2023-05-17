import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBookComponent } from './skeleton-book.component';

describe('SkeletonBookComponent', () => {
  let component: SkeletonBookComponent;
  let fixture: ComponentFixture<SkeletonBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonBookComponent]
    });
    fixture = TestBed.createComponent(SkeletonBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
