import { Ranking } from "../../ranking/models/ranking.model";

export interface RankingState {
  isLoading: boolean;
  isLoaded: boolean;
  rankingList: Ranking[],
  total: number;
  error?: string;
}
export const initializeState = (): RankingState => {
  return ({
    rankingList: [],
    total: 0,
    isLoaded: true,
    isLoading: false
  });
};
