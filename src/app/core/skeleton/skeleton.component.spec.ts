import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonComponent, SkeletonType } from './skeleton.component';

describe('SkeletonComponent', () => {
  let component: SkeletonComponent;
  let fixture: ComponentFixture<SkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the skeleton type', () => {
    const type: SkeletonType = 'text';
    component.type = type;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.classList).toContain(`skeleton--type-${type}`);
  });

  it('should set the skeleton animation', () => {
    component.animation = 'fade';
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.classList).toContain('skeleton--anim-fade');
  });

  it('should set the skeleton animation speed', () => {
    const animationSpeed = 1000;
    component.animationSpeed = animationSpeed;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.style.getPropertyValue('--skeleton-speed')).toEqual(
      `${animationSpeed}ms`
    );
  });

  it('should set the skeleton square', () => {
    component.square = true;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.classList).toContain('skeleton--square');
  });

  it('should set the skeleton bordered', () => {
    component.bordered = true;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.classList).toContain('skeleton--bordered');
  });

  it('should set the skeleton size', () => {
    const size = '50px';
    component.size = size;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.style.width).toEqual(size);
    expect(skeletonEl.style.height).toEqual(size);
  });

  it('should set the skeleton width and height', () => {
    const width = '100px';
    const height = '50px';
    component.width = width;
    component.height = height;
    fixture.detectChanges();
    const skeletonEl = fixture.nativeElement.querySelector('.skeleton');
    expect(skeletonEl.style.width).toEqual(width);
    expect(skeletonEl.style.height).toEqual(height);
  });
});
