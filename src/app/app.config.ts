import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { animeReducer } from './state/anime/anime.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnimeEffects } from './state/anime/anime.effects';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { RankingEffects } from './state/ranking/ranking.effects';
import { rankingReducer } from './state/ranking/ranking.reducer';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
     },
     defaultLanguage: 'en'
    })),
    importProvidersFrom(
      StoreModule.forRoot({
        anime: animeReducer,
        ranking: rankingReducer
      }),
      EffectsModule.forRoot([AnimeEffects, RankingEffects])
    ),
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://graphql.anilist.co',
          }),
        };
      },
      deps: [HttpLink],
    },
    Apollo
  ]
};

