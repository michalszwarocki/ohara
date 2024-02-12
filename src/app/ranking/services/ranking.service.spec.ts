import { TestBed } from '@angular/core/testing';
import { RankingService } from './ranking.service';
import { Apollo } from 'apollo-angular';

describe('RankingService', () => {
  let service: RankingService;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(() => {
    const apolloSpyObj = jasmine.createSpyObj('Apollo', ['query']);
    TestBed.configureTestingModule({
      providers: [
        RankingService,
        { provide: Apollo, useValue: apolloSpyObj }
      ]
    });
    service = TestBed.inject(RankingService);
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  });

  it('should return the correct ranking column configuration', () => {
    const expectedConfig = [
      {
        columnKey: 'rank',
        header: 'RANKING.COLUMNS.RANK',
        isSortable: false,
        isVisible: true,
        customValue: jasmine.any(Function)
      },
      {
        columnKey: 'title',
        header: 'RANKING.COLUMNS.TITLE',
        isSortable: false,
        isVisible: true
      },
      {
        columnKey: 'popularity',
        header: 'RANKING.COLUMNS.POPULARITY',
        isSortable: true,
        sortValue: {
          asc: jasmine.any(String),
          desc: jasmine.any(String)
        },
        isVisible: true
      },
      {
        columnKey: 'score',
        header: 'RANKING.COLUMNS.SCORE',
        isSortable: true,
        sortValue: {
          asc: jasmine.any(String),
          desc: jasmine.any(String)
        },
        isVisible: true,
        customValue: jasmine.any(Function)
      },
      {
        columnKey: 'trending',
        header: 'RANKING.COLUMNS.TRENDING',
        isSortable: true,
        sortValue: {
          asc: jasmine.any(String),
          desc: jasmine.any(String)
        },
        isVisible: true,
        customValue: jasmine.any(Function)
      }
    ];

    const config = service.getRankingColumnConfig();
    expect(config).toEqual(expectedConfig);
  });
});
