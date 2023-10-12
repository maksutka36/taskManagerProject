import { Component } from '@angular/core';
import { FullTable, Table } from '../shared/models/table.interface';
import { TablesDialogComponent } from './tables-dialog/tables-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService } from '../services/confirmation/confirmation.service';
import { StickersService } from '../services/stickers/stickers.service';
import { ApiService } from '../services/api/api.service';
import { TablesService } from '../services/tables/tables.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private stickerService: StickersService,
    private apiService: ApiService,
    private tablesService: TablesService,
    private dialog: MatDialog
  ) {}

  tables: Table[];
  tablesIsLoading: boolean;
  currentTable: Table;

  currentFullTable: FullTable;
  fullTableIsLoading: boolean;

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    this.tablesIsLoading = true;
    this.apiService.getTables().subscribe((res: Table[]) => {
      if (res.length > 0) {
        this.tables = res;
        const index = this.tables.findIndex(
          (table) => table.id === this.tablesService.getCurrentTableId()
        );
        this.currentTable =
          this.tables[index !== -1 ? index : this.tables.length - 1];
        this.tablesIsLoading = false;
        this.getFullTable(this.currentTable);
      } else {
        this.apiService.addTable('new table').subscribe(() => this.getTables());
      }
    });
  }

  getFullTable(table: Table): void {
    this.fullTableIsLoading = true;
    this.apiService.getFullTable(table.id).subscribe((res) => {
      this.currentFullTable = res;
      this.stickerService.setStickers(res);
      this.fullTableIsLoading = false;
    });
  }

  changeTable(table: Table): void {
    if (this.currentTable !== table) {
      if (this.stickerService.isSavable === true) {
        this.confirmationService
          .openConfirmationDialog(
            'Are you sure you want change table without saving'
          )
          .subscribe((res) => {
            if (res) {
              this.currentTable = table;
              this.tablesService.setCurrentTableId(table.id);
              this.getFullTable(table);
              this.stickerService.isSavable = false;
            }
          });
      } else {
        this.currentTable = table;
        this.tablesService.setCurrentTableId(table.id);
        this.getFullTable(table);
        this.stickerService.isSavable = false;
      }
    }
  }

  saveTable(): void {
    this.currentFullTable.stickers = [];
    this.currentFullTable.stickers.push(
      ...this.stickerService.todo.data,
      ...this.stickerService.go.data,
      ...this.stickerService.done.data
    );
    this.apiService.editTable(this.currentFullTable).subscribe(() => {
      this.stickerService.isSavable = false;
      this.getFullTable(this.currentTable);
    });
  }

  addTable(): void {
    const dialogRef = this.dialog.open(TablesDialogComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.apiService.addTable(result).subscribe((res) => {
          this.getTables();
        });
      }
    });
  }

  editTable(): void {
    const dialogRef = this.dialog.open(TablesDialogComponent, {
      data: { ...this.currentFullTable },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        const table: FullTable = {...this.currentFullTable};
        table.name = result;
        this.apiService.editTable(table).subscribe(() => this.getTables());
      }
    });
  }

  removeTable(): void {
    this.confirmationService
      .openConfirmationDialog(
        `Are you sure you want to delete ${this.currentTable.name} table!`
      )
      .subscribe((result: boolean) => {
        if (result) {
          this.apiService
            .removeTable(this.currentTable.id)
            .subscribe(() => this.getTables());
        }
      });
  }
}
