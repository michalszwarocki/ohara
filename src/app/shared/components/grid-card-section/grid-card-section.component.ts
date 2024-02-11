import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from '../card/card.component';
import { GridCardSectionConfig, GridCardSectionItemConfig } from '../../models/grid-card-section-config.model';

@Component({
  selector: 'ohara-grid-card-section',
  standalone: true,
  imports: [MatGridListModule, CardComponent],
  templateUrl: './grid-card-section.component.html',
  styleUrl: './grid-card-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCardSectionComponent {
  @Input() public config: GridCardSectionConfig;

  public get columns(): number {
    return this.config?.columns ?? 0;
  }

  public get rows(): number {
    return this.config?.rows ?? 0;
  }

  public get rowHeight(): string {
    return this.config?.rowHeight ?? `${this.rows}:${this.columns}`;
  }

  public get items(): GridCardSectionItemConfig[] {
    return this.config?.items ?? [];
  }
}
