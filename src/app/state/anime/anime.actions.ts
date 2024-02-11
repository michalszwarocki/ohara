import { Anime } from '../../anime/models/anime.model';
import { createAction, props } from "@ngrx/store";

export const loadAnimeList = createAction('[Anime] Load Anime List',
  props<{ page: number, perPage: number, search: string }>()
);
export const loadAnimeListSuccess = createAction('[Anime] Load Anime List Success',
  props<{ animeList: Anime[], total: number }>()
);

export const loadAnimeListFailure = createAction('[Anime] Load Anime List Failure',
  props<{ error: string }>()
);
