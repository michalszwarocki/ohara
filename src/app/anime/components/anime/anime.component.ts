import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAnimeList } from '../../../state/anime/anime.actions';
import { selectAllAnime, selectTotalAnime } from '../../../state/anime/anime.selectors';
import { AppState } from '../../../state/app.state';
import { GridCardSectionComponent } from '../../../shared/components/grid-card-section/grid-card-section.component';
import { GridCardSectionConfig } from '../../../shared/models/grid-card-section-config.model';
import { Anime } from '../../models/anime.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';
import { combineLatest } from 'rxjs';
import { SearchComponent } from '../../../shared/components/search/search.component';

@UntilDestroy()
@Component({
  selector: 'ohara-anime',
  standalone: true,
  imports: [GridCardSectionComponent, PaginatorComponent, SearchComponent],
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.scss'
})
export class AnimeComponent implements OnInit {
  private readonly COLUMNS = 2;
  private readonly ROW_HEIGHT = '300px';
  public allAnime$ = this.store.select(selectAllAnime);
  public totalAnime$ = this.store.select(selectTotalAnime);

  public paginatorLength = 50;
  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [10, 20, 50];
  public cardGridConfig: GridCardSectionConfig;
  public searchValue: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loadAnimeList();
    this.getAnimeList();
  }

  public onPaginatorChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadAnimeList();
  }

  public onSearchByValue(value: string): void {
    this.searchValue = value;
    this.pageIndex = 0;
    this.loadAnimeList();
  }

  private loadAnimeList(): void {
    this.store.dispatch(loadAnimeList({page: this.pageIndex + 1, perPage: this.pageSize, search: this.searchValue}));
  }

  private getAnimeList(): void {
    combineLatest([this.allAnime$, this.totalAnime$]).pipe(
      untilDestroyed(this)).subscribe(([animeList, totalAnime]) => {
        this.paginatorLength = totalAnime;
        this.prepareCardGridConfig(animeList);
    });
  }

  private prepareCardGridConfig(anime: Anime[]): void {
    this.cardGridConfig = {
      columns: this.COLUMNS,
      rowHeight: this.ROW_HEIGHT,
      items: anime.map((anime) => {
        return {
          content: {
            title: anime.title,
            description: anime.description,
            imageUrl: anime.imageUrl
          }
        };
      })
    };
  }
}
