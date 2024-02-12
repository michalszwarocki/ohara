export interface ColumnConfig {
  columnKey: string;
  header: string;
  isVisible?: boolean;
  isSortable?: boolean;
  sortValue?: {
    [key: string]: any;
  };
  customValue?: (row: any) => string | number;
}
