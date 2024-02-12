import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { RankingService } from "../../ranking/services/ranking.service";
import { loadRankingList, loadRankingListFailure, loadRankingListSuccess } from "./ranking.actions";

@Injectable()
export class RankingEffects {
  constructor(
    private actions$: Actions,
    private rankingService: RankingService
  ) {}

  loadRankingList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRankingList),
      switchMap((action) =>
        from(this.rankingService.getRankingList(action.page, action.perPage, action.sort)).pipe(
          map((rankingPage) => loadRankingListSuccess({ rankingList: rankingPage.data, total: rankingPage.total })),
          catchError((error) => of(loadRankingListFailure({ error })))
        )
      )
    )
  );
}
