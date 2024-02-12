import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ColumnConfig } from '../../models/column-config.model';
import { MatSortModule, SortDirection } from '@angular/material/sort';
import { TableConfig } from '../../models/table-config.model';

@Component({
  selector: 'ohara-table',
  standalone: true,
  imports: [MatTableModule, TranslateModule, PaginatorComponent, MatSortModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() columnsConfig: ColumnConfig[] = [];
  @Input() tableConfig: TableConfig;
  @Output() sortChange: EventEmitter<{active: string, direction: string}> = new EventEmitter();
  @Output() paginationChanged: EventEmitter<{pageIndex: number, pageSize: number}> = new EventEmitter();
  @Input() paginatorLength = 50;
  @Input() pageSize = 10;
  @Input() pageIndex = 0;
  @Input() pageSizeOptions = [10, 20, 50];

  public get sortKey(): string {
    return this.tableConfig?.sortKey;
  }

  public get sortDirection(): SortDirection {
    return this.tableConfig?.sortDirection;
  }

  public displayedColumns: string[] = [];

  ngOnInit() {
    this.prepareDisplayedColumns();
  }

  public onSortChange(event: any): void {
    const sortValue = this.getSortValue(event.active, event.direction);

    if (sortValue) {
      this.sortChange.emit(sortValue);
    }
  }

  public onPaginatorChange(event: any): void {
    this.paginationChanged.emit({pageIndex: event.pageIndex, pageSize: event.pageSize});
  }

  private prepareDisplayedColumns(): void {
    this.displayedColumns = (this.columnsConfig || []).filter(x => x.isVisible).map(column => column.columnKey);
  }

  private getSortValue(columnKey: string, direction: string): any {
    const column = (this.columnsConfig || []).find(x => x.columnKey === columnKey);
    if (column?.sortValue) {
      return column.sortValue[direction];
    }

    return null;
  }
}
