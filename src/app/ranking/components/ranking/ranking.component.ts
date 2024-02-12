import { Component } from '@angular/core';
import { Ranking } from '../../models/ranking.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectAllRanking, selectTotalRanking } from '../../../state/ranking/ranking.selectors';
import { loadRankingList } from '../../../state/ranking/ranking.actions';
import { MediaSort } from '../../../shared/queries/media.model';
import { combineLatest } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TableComponent } from '../../../shared/components/table/table.component';
import { ColumnConfig } from '../../../shared/models/column-config.model';
import { TableConfig } from '../../../shared/models/table-config.model';
import { RankingService } from '../../services/ranking.service';

@UntilDestroy()
@Component({
  selector: 'ohara-ranking',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
  dataSource: Ranking[];
  public allRanking$ = this.store.select(selectAllRanking);
  public totalRanking$ = this.store.select(selectTotalRanking);
  public paginatorLength = 50;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [10, 20, 50];
  public sort: MediaSort = MediaSort.POPULARITY_DESC;

  public tableConfig: TableConfig;

  public columnsConfig: ColumnConfig[] = [];
  constructor(private store: Store<AppState>, private rankingService: RankingService) {
  }

  ngOnInit() {
    this.columnsConfig = this.rankingService.getRankingColumnConfig();
    this.tableConfig = this.rankingService.getTableConfig();

    this.dataSource = [];
    this.loadRankingList();
    this.getRankingList();
  }

  public onPaginatorChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadRankingList();
  }

  public onSortChange(event: any): void {
    this.sort = event;
    this.loadRankingList();
  }

  private loadRankingList(): void {
    this.store.dispatch(loadRankingList({page: this.pageIndex + 1, perPage: this.pageSize, sort: this.sort}));
  }

  private getRankingList(): void {
    combineLatest([this.allRanking$, this.totalRanking$]).pipe(
      untilDestroyed(this)).subscribe(([animeList, totalAnime]) => {
        this.paginatorLength = totalAnime;
        this.dataSource = animeList;
    });
  }
}
