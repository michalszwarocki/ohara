import { Media, MediaType } from "../../shared/queries/media.model";
import { Page } from "../../shared/queries/page-query.model";

export interface AnimeQuery {
  Page: Page<Media, 'media'>;
}

export interface AnimeQueryVariables {
  page: number;
  perPage: number;
  search?: string;
  type: MediaType;
}
