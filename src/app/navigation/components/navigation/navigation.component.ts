import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { NavigationData } from '../../models/navigation-data.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ohara-navigation',
  standalone: true,
  imports: [RouterModule, AsyncPipe, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  @Input('menuToggled') set menuToggled(value: boolean) {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  public navigations: NavigationData[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigations = this.navigationService.getNavigationData();
  }
}
