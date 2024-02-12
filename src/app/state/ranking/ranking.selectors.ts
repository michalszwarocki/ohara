import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { RankingState } from "./ranking.state";

export const selectRanking = (state: AppState) => state.ranking;
export const selectAllRanking = createSelector(
  selectRanking,
  (state: RankingState) => state.rankingList
);
export const selectTotalRanking = createSelector(
  selectRanking,
  (state: RankingState) => state.total
);
