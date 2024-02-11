import { createReducer, on } from "@ngrx/store";
import { initializeState } from "./anime.state";
import { loadAnimeList, loadAnimeListFailure, loadAnimeListSuccess } from "./anime.actions";

const initialState = initializeState();
export const animeReducer = createReducer(
  initialState,
  on(loadAnimeList, (state) => ({ ...state, isLoaded: false, isLoading: true })),
  on(loadAnimeListSuccess, (state, { animeList, total }) => ({
    ...state,
    animeList: animeList,
    isLoaded: true,
    isLoading: false,
    total: total,
  })),
  on(loadAnimeListFailure, (state, { error }) => ({
    ...state,
    isLoaded: false,
    isLoading: false,
    error: error,
  }))
);
