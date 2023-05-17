import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonType =
  | 'text'
  | 'rect'
  | 'circle'
  | 'btn'
  | 'badge'
  | 'chip'
  | 'toolbar'
  | 'checkbox'
  | 'radio'
  | 'toggle'
  | 'slider'
  | 'range'
  | 'input'
  | 'avatar';

export type SkeletonAnimation =
  | 'wave'
  | 'pulse'
  | 'pulse-x'
  | 'pulse-y'
  | 'fade'
  | 'blink'
  | 'none';

const DEFAULT_ANIMATION_SPEED = 1500;

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
})
export class SkeletonComponent {
  private _type: SkeletonType = 'rect';
  private _animation: SkeletonAnimation = 'wave';
  private _animationSpeed: string | number = DEFAULT_ANIMATION_SPEED;
  private _square?: boolean;
  private _bordered?: boolean;
  private _size?: string;
  private _width?: string;
  private _height?: string;

  public get classes(): string[] {
    const classes = [`skeleton skeleton--type-${this._type}`];

    if (this._animation !== 'none') {
      classes.push(`skeleton--anim skeleton--anim-${this._animation}`);
    }
    if (this._square) {
      classes.push('skeleton--square');
    }
    if (this._bordered) {
      classes.push('skeleton--bordered');
    }

    return classes;
  }

  public get style(): Record<string, string | undefined> {
    const size =
      this._size !== undefined
        ? [this._size, this._size]
        : [this._width, this._height];

    return {
      '--skeleton-speed': `${this._animationSpeed}ms`,
      width: size[0],
      height: size[1],
    };
  }

  @Input() public set type(value: SkeletonType) {
    this._type = value;
  }

  @Input() public set animation(value: SkeletonAnimation) {
    this._animation = value;
  }

  @Input() public set animationSpeed(value: string | number) {
    this._animationSpeed = value;
  }

  @Input() public set square(value: boolean) {
    this._square = value;
  }

  @Input() public set bordered(value: boolean) {
    this._bordered = value;
  }

  @Input() public set size(value: string) {
    this._size = value;
  }

  @Input() public set width(value: string) {
    this._width = value;
  }

  @Input() public set height(value: string) {
    this._height = value;
  }
}
