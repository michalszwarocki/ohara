export interface Media {
  id: number;
  title: MediaTitle;
  type: MediaType;
  description: string;
  coverImage: MediaCoverImage;
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

