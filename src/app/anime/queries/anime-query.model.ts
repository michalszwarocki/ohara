import { Page } from "../../shared/queries/page-query.model";
import { Media, MediaType } from "./media.model";

export interface AnimeQuery {
  Page: Page<Media, 'media'>;
}

export interface AnimeQueryVariables {
  page: number;
  perPage: number;
  search?: string;
  type: MediaType;
}
