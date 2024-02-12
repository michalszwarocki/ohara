export interface Media {
  id: number;
  title: MediaTitle;
  type: MediaType;
  description: string;
  coverImage: MediaCoverImage;
  popularity: number;
  averageScore: number;
  trending: number;
}

export interface MediaTitle {
  english: string;
  userPreferred: string;
}

export enum MediaType {
  ANIME = "ANIME",
  MANGA = "MANGA"
}

export interface MediaCoverImage {
  medium: string;
}

export enum MediaSort {
  POPULARITY = "POPULARITY",
  POPULARITY_DESC = "POPULARITY_DESC",
  SCORE = "SCORE",
  SCORE_DESC = "SCORE_DESC",
  TRENDING = "TRENDING",
  TRENDING_DESC = "TRENDING_DESC",
}

