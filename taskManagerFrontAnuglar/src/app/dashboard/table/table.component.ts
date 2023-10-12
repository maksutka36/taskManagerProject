import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { StickersService } from 'src/app/services/stickers/stickers.service';
import { FullTable } from 'src/app/shared/models/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() fullTable: FullTable;
  @Input() fullTableIsLoading: boolean;

  constructor(public stickersService: StickersService) {}

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        0
      );
      event.container.data[0].stickerStatus = this.setStickerStatus(
        event.container.id
      );
      this.stickersService.ableSaving();
    }
  }

  private setStickerStatus(column: string): 'TODO' | 'GO' | 'DONE' {
    switch (column) {
      case 'cdk-drop-list-3':
        return 'TODO';
      case 'cdk-drop-list-4':
        return 'GO';
      default:
        return 'DONE';
    }
  }
}
