import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginedData } from '../../shared/models/pagined-data.model';
import { Ranking } from '../models/ranking.model';
import { Apollo } from 'apollo-angular';
import { GET_RANKING_LIST } from '../queries/ranking.queries';
import { Media, MediaSort, MediaType } from '../../shared/queries/media.model';
import { NumeralPipe } from '../../shared/pipes/numeral.pipe';
import { ColumnConfig } from '../../shared/models/column-config.model';
import { TableConfig } from '../../shared/models/table-config.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private apollo: Apollo) { }

  public getRankingColumnConfig(): ColumnConfig[] {
    return [
    {
      columnKey: 'rank',
      header: 'RANKING.COLUMNS.RANK',
      isSortable: false,
      isVisible: true,
      customValue: (row: Ranking) => new NumeralPipe().transform(row.rank)
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
        asc: MediaSort.POPULARITY,
        desc: MediaSort.POPULARITY_DESC
      },
      isVisible: true
    },
    {
      columnKey: 'score',
      header: 'RANKING.COLUMNS.SCORE',
      isSortable: true,
      sortValue: {
        asc: MediaSort.SCORE,
        desc: MediaSort.SCORE_DESC
      },
      isVisible: true,
      customValue: (row: Ranking) => row.averageScore ?  row.averageScore : '0'
    },
    {
      columnKey: 'trending',
      header: 'RANKING.COLUMNS.TRENDING',
      isSortable: true,
      sortValue: {
        asc: MediaSort.TRENDING,
        desc: MediaSort.TRENDING_DESC
      },
      isVisible: true,
      customValue: (row: Ranking) => row.trending ?  row.trending : '0'
    }
  ]}

  public getTableConfig(): TableConfig {
    return <TableConfig>{
      sortKey: 'popularity',
      sortDirection: 'desc'
    };
  }

  public getRankingList(page: number, perPage: number, sort?: MediaSort): Observable<PaginedData<Ranking>> {
    return this.apollo.query({
      query: GET_RANKING_LIST,
      variables: {
        page: page,
        perPage: perPage,
        sort: sort,
        type: MediaType.ANIME
      }
    }).pipe(map(x => {
      return <PaginedData<Ranking>> {
        total: x.data.Page.pageInfo.total,
        data: x.data.Page.media.map((m, index) => this.mapMediaToRanking(m, index, page, perPage))
      };
    }));
  }

  private mapMediaToRanking(media: Media, index: number, page: number, perPage: number): Ranking {
    return <Ranking>{
      id: media.id,
      rank: index + 1 + (page - 1) * perPage,
      title: media.title.english ?? media.title.userPreferred,
      popularity: media.popularity,
      averageScore: media.averageScore,
      trending: media.trending
    };
  }
}
