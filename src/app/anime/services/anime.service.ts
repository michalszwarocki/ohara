import { Injectable } from '@angular/core';
import { Anime } from '../models/anime.model';
import { Observable, map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { GET_ANIME_LIST } from '../queries/anime.queries';
import { PaginedData } from '../../shared/models/pagined-data.model';
import { Media, MediaType } from '../../shared/queries/media.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private apollo: Apollo) { }

  public getAnimeList(page: number, perPage: number, search: string): Observable<PaginedData<Anime>> {
    return this.apollo.query({
      query: GET_ANIME_LIST,
      variables: {
        page: page,
        perPage: perPage,
        search: search,
        type: MediaType.ANIME
      }
    }).pipe(map(x => {
      return <PaginedData<Anime>> {
        total: x.data.Page.pageInfo.total,
        data: x.data.Page.media.map(m => this.mapMediaToAnime(m))
      };
    }));
  }

  private mapMediaToAnime(media: Media): Anime {
    return <Anime>{
      id: media.id,
      title: media.title.english ?? media.title.userPreferred,
      description: media.description,
      imageUrl: media.coverImage.medium
    };
  }
}
