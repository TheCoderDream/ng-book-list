import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonBookComponent } from './skeleton-book.component';
import {ComponentHarness} from "@angular/cdk/testing";

export class BookComponentHarness extends ComponentHarness {
  public static hostSelector = 'app-skeleton-book';
}

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
