import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingComponent } from './ranking.component';
import { StoreModule } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RankingComponent', () => {
  let component: RankingComponent;
  let fixture: ComponentFixture<RankingComponent>;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(async () => {
    const apolloSpyObj = jasmine.createSpyObj('Apollo', ['query']);
    await TestBed.configureTestingModule({
      imports: [RankingComponent, StoreModule.forRoot(), NoopAnimationsModule, TranslateModule.forRoot()],
      providers:[
        { provide: Apollo, useValue: apolloSpyObj }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingComponent);
    component = fixture.componentInstance;
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
