import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Table } from 'src/app/shared/models/table.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isOpen: boolean = false;

  @Input() tables: Table[];
  @Input() isLoading: boolean;
  @Input() currentTable: Table;

  @Output() changeTableEvent = new EventEmitter<Table>();
  @Output() addTableEvent = new EventEmitter<void>();

  constructor(public apiService: ApiService) {}

  changeTable(table: Table): void {
    this.changeTableEvent.emit(table);
  }

  addTable(): void {
    this.addTableEvent.emit();
  }
}
