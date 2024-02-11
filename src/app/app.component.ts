import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/components/navigation/navigation.component';
import { HeaderComponent } from './header/components/header/header.component';
@Component({
  selector: 'app-ohara',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public menuToggled: boolean = false;
  public title: string = 'TITLE';

  toggleMenu() {
    this.menuToggled = !this.menuToggled;
  }
}
