import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { StickersService } from 'src/app/services/stickers/stickers.service';
import { Table } from 'src/app/shared/models/table.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() tableName: Table;
  @Input() fullTableIsLoading: boolean;
  
  @Output() savaTableEvent = new EventEmitter<void>();
  @Output() editTableEvent = new EventEmitter<void>();
  @Output() removeTableEvent = new EventEmitter<void>();


  constructor(
    public stickerService: StickersService,
    public apiService: ApiService,
  ) {}

  addSticker(): void {
    this.stickerService.addSticker();
  }

  editTable(): void {
    this.editTableEvent.emit();
  }

  saveTable(): void {
    this.savaTableEvent.emit();
  }

  removeTable(): void {
    this.removeTableEvent.emit();
  }
}
