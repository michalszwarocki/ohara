import { Anime } from "../../anime/models/anime.model";

export interface AnimeState {
  isLoading: boolean;
  isLoaded: boolean;
  animeList: Anime[],
  total: number;
  error?: string;
}
export const initializeState = (): AnimeState => {
  return ({
    animeList: [],
    total: 0,
    isLoaded: true,
    isLoading: false
  });
};
