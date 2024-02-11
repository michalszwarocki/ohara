import { gql } from "apollo-angular";
import { AnimeQuery, AnimeQueryVariables } from "./anime-query.model";

export const GET_ANIME_LIST = gql<AnimeQuery, AnimeQueryVariables>`
  query GetAnimeList($page: Int, $perPage: Int, $search: String, $type: MediaType) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search, type: $type) {
        id
        title {
          english
          userPreferred
        }
        type
        description
        coverImage {
          medium
        }
      }
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
    }
  }
`;
