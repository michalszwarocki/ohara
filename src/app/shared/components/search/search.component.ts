import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ohara-search',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatIconModule, TranslateModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  @Input() width: string = 'full';

  @Output() search = new EventEmitter<string>();

  public searchValue: string | undefined = undefined;

  onSearch() {
    this.search.emit(this.searchValue);
  }

  onClear() {
    this.searchValue = undefined;
    this.onSearch();
  }
}
