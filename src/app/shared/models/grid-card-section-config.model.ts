import { CardConfig } from "./card-config.model";

export interface GridCardSectionConfig {
  columns: number;
  rows?: number;
  rowHeight?: string;
  items: GridCardSectionItemConfig[];
}

export interface GridCardSectionItemConfig {
  colspan?: number;
  rowspan?: number;
  content: CardConfig;
}
