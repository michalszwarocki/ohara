import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationData } from '../models/navigation-data.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  getNavigationData(): NavigationData[] {
    return this.router.config
      .flatMap(route => [route, ...(route.children || [])])
      .filter(route => route.data && route.data['isVisibleInNavigation'])
      .flatMap(route => <NavigationData>{ path: route.path, ...route.data });
  }
}
