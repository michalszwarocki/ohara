import { Media, MediaSort, MediaType } from "../../shared/queries/media.model";
import { Page } from "../../shared/queries/page-query.model";

export interface RankingQuery {
  Page: Page<Media, 'media'>;
}

export interface RankingQueryVariables {
  page: number;
  perPage: number;
  sort?: MediaSort;
  type: MediaType;
}
