import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AnimeService } from "../../anime/services/anime.service";
import { loadAnimeList, loadAnimeListFailure, loadAnimeListSuccess } from "./anime.actions";
import { catchError, from, map, of, switchMap } from "rxjs";

@Injectable()
export class AnimeEffects {
  constructor(
    private actions$: Actions,
    private animeService: AnimeService
  ) {}

  loadAnimeList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAnimeList),
      switchMap((action) =>
        from(this.animeService.getAnimeList(action.page, action.perPage, action.search)).pipe(
          map((animePage) => loadAnimeListSuccess({ animeList: animePage.data, total: animePage.total })),
          catchError((error) => of(loadAnimeListFailure({ error })))
        )
      )
    )
  );
}
