import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CardConfig } from '../../models/card-config.model';
import { CustomMatCardHoverDirective } from '../../directives/custom-mat-card-hover.directive';

@Component({
  selector: 'ohara-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, CustomMatCardHoverDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() config: CardConfig;

  public get title(): string {
    return this.config?.title;
  }

  public get description(): string | undefined {
    return this.config?.description;
  }

  public get imageUrl(): string | undefined {
    return this.config?.imageUrl;
  }
}
