import { Routes } from '@angular/router';
import { NavigationData } from './navigation/models/navigation-data.model';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'anime',
        pathMatch: 'full'
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
        path: 'ranking',
        loadChildren: () => import('./ranking/ranking.routes').then(m => m.RANKING_ROUTES),
        data: <NavigationData> {
          isVisibleInNavigation: true,
          name: 'RANKING.TITLE',
          icon: 'list_alt'
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
        redirectTo: 'anime'
      }
    ]
  }
];
