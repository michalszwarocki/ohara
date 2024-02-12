import { createReducer, on } from "@ngrx/store";
import { initializeState } from "./ranking.state";
import { loadRankingList, loadRankingListFailure, loadRankingListSuccess } from "./ranking.actions";

const initialState = initializeState();
export const rankingReducer = createReducer(
  initialState,
  on(loadRankingList, (state) => ({ ...state, isLoaded: false, isLoading: true })),
  on(loadRankingListSuccess, (state, { rankingList, total }) => ({
    ...state,
    rankingList: rankingList,
    isLoaded: true,
    isLoading: false,
    total: total,
  })),
  on(loadRankingListFailure, (state, { error }) => ({
    ...state,
    isLoaded: false,
    isLoading: false,
    error: error,
  }))
);
