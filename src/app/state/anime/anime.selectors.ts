import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AnimeState } from "./anime.state";

export const selectAnime = (state: AppState) => state.anime;
export const selectAllAnime = createSelector(
  selectAnime,
  (state: AnimeState) => state.animeList
);
export const selectTotalAnime = createSelector(
  selectAnime,
  (state: AnimeState) => state.total
);
