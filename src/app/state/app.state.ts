import { AnimeState } from "./anime/anime.state";
import { RankingState } from "./ranking/ranking.state";

export interface AppState {
  anime: AnimeState;
  ranking: RankingState;
}
