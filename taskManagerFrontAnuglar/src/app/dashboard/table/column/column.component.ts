import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Column } from '../../../shared/models/column.model';
import { Sticker } from 'src/app/shared/models/sticker.interface';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  name: string;

  @Input() column: Column;
  @Output() columnChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.name = this.getName();
  }

  getName(): string {
    let nameOfColumn = '';
    switch (this.column.name) {
      case 'todo':
        nameOfColumn = 'To do';
        break;
      case 'go':
        nameOfColumn = 'In progress';
        break;
      case 'done':
        nameOfColumn = 'Done';
        break;
    }
    return nameOfColumn;
  }

  drop(event: any) {
    this.columnChange.emit(event);
  }
}
