import { Routes } from '@angular/router';
import { NavigationData } from './navigation/models/navigation-data.model';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
      },
      {
        path: 'news',
        loadChildren: () => import('./news/news.routes').then(m => m.NEWS_ROUTES),
        data: <NavigationData> {
          isVisibleInNavigation: true,
          name: 'NEWS.TITLE',
          icon: 'list_alt'
        }
      },
      {
        path: 'anime',
        loadChildren: () => import('./anime/anime.routes').then(m => m.ANIME_ROUTES),
        data: <NavigationData> {
          isVisibleInNavigation: true,
          name: 'ANIME.TITLE',
          icon: 'movie'
        }
      },
      {
        path: 'quiz',
        loadChildren: () => import('./quiz/quiz.routes').then(m => m.QUIZ_ROUTES),
        data: <NavigationData> {
          isVisibleInNavigation: true,
          name: 'QUIZ.TITLE',
          icon: 'poll'
        }
      },
      {
        path: '**',
        redirectTo: 'news'
      }
    ]
  }
];
