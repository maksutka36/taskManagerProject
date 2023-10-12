import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowingStickerDialogComponent } from 'src/app/dashboard/showing-sticker-dialog/showing-sticker-dialog.component';
import { StickerDialogComponent } from 'src/app/dashboard/sticker-dialog/sticker-dialog.component';
import { Column } from 'src/app/shared/models/column.model';
import { Sticker } from 'src/app/shared/models/sticker.interface';
import { FullTable } from 'src/app/shared/models/table.interface';
import { ConfirmationService } from '../confirmation/confirmation.service';

@Injectable({
  providedIn: 'root',
})
export class StickersService {
  isSavable = false;

  constructor(
    private dialog: MatDialog,
    private confirmationService: ConfirmationService
  ) {}

  todo: Column = { name: 'todo', data: [] };
  go: Column = { name: 'go', data: [] };
  done: Column = { name: 'done', data: [] };

  setStickers(table: FullTable): void {
    this.todo.data = [];
    this.go.data = [];
    this.done.data = [];
    table.stickers.forEach((sticker) => {
      this.sortSticker(sticker).data.push(sticker);
    });
  }

  addSticker(): void {
    const dialogRef = this.dialog.open(StickerDialogComponent);

    dialogRef.afterClosed().subscribe((result: Sticker) => {
      if (result) {
        this.sortSticker(result).data.push(result);
        this.ableSaving();
      }
    });
  }

  editSticker(sticker: Sticker): void {
    const dialogRef = this.dialog.open(StickerDialogComponent, {
      data: sticker,
    });

    dialogRef.afterClosed().subscribe((result: Sticker) => {
      if (result) {
        this.sortSticker(sticker).data.forEach((editableSticker, i) => {
          if (sticker.id == editableSticker.id) {
            this.sortSticker(sticker).data[i] = result;
            this.ableSaving();
          }
        });
      }
    });
  }

  openFullSticker(sticker: Sticker): void {
    const dialogRef = this.dialog.open(ShowingStickerDialogComponent, {
      data: sticker,
    });
  }

  deleteSticker(sticker: Sticker): void {
    this.confirmationService
      .openConfirmationDialog(
        `Are you sure you want to delete ${sticker.title} sticker!`
      )
      .subscribe((result: boolean) => {
        if (result) {
          this.sortSticker(sticker).data = this.sortSticker(
            sticker
          ).data.filter((stickerData) => stickerData.id !== sticker.id);
          this.ableSaving();
        }
      });
  }

  ableSaving(): void {
    this.isSavable = true;
  }

  private sortSticker(sticker: Sticker): Column {
    console.log(sticker.stickerStatus)
    switch (sticker.stickerStatus) { 
      case 'TODO':
        return this.todo;
      case 'GO':
        return this.go;
      default:
        return this.done;
    }
  }
}
