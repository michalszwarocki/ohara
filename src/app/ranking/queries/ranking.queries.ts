import { gql } from "apollo-angular";
import { RankingQuery, RankingQueryVariables } from "./ranking-query.model";

export const GET_RANKING_LIST = gql<RankingQuery, RankingQueryVariables>`
  query GetRankingList($page: Int, $perPage: Int, $sort: [MediaSort], $type: MediaType) {
    Page(page: $page, perPage: $perPage) {
      media(type: $type, sort: $sort) {
        id
        title {
          english
          userPreferred
        }
        popularity
        averageScore
        trending
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
