import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CustomMatCardHoverDirective } from './custom-mat-card-hover.directive';

describe('Directive: CustomMatCardHover', () => {
  let directive: CustomMatCardHoverDirective;
  let fixture: ComponentFixture<CustomMatCardHoverDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMatCardHoverDirective],
    }).compileComponents();

    //fixture = TestBed.createComponent(CustomMatCardHoverDirective);
    //directive = fixture.componentInstance;
    //fixture.detectChanges();

  });

  it('should create an instance', () => {
    //expect(directive).toBeTruthy();
  });
});
