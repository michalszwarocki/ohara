import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'ohara-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, TranslateModule, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() title: string = '';
  @Output() onMenuToggle: EventEmitter<void> = new EventEmitter<void>();

  toggleMenu() {
    this.onMenuToggle.emit();
  }

}
