import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { AnimeService } from './anime.service';

describe('AnimeService', () => {
  let service: AnimeService;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(() => {
    const apolloSpyObj = jasmine.createSpyObj('Apollo', ['query']);
    TestBed.configureTestingModule({
      providers: [
        AnimeService,
        { provide: Apollo, useValue: apolloSpyObj }
      ]
    });
    service = TestBed.inject(AnimeService);
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
