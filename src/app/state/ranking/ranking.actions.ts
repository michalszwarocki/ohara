import { createAction, props } from "@ngrx/store";
import { Ranking } from '../../ranking/models/ranking.model';
import { MediaSort } from "../../shared/queries/media.model";

export const loadRankingList = createAction('[Ranking] Load Ranking List',
  props<{ page: number, perPage: number, sort?: MediaSort }>()
);
export const loadRankingListSuccess = createAction('[Ranking] Load Ranking List Success',
  props<{ rankingList: Ranking[], total: number }>()
);

export const loadRankingListFailure = createAction('[Ranking] Load Ranking List Failure',
  props<{ error: string }>()
);
