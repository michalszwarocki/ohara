import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardSectionComponent } from './grid-card-section.component';

describe('GridCardSectionComponent', () => {
  let component: GridCardSectionComponent;
  let fixture: ComponentFixture<GridCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
