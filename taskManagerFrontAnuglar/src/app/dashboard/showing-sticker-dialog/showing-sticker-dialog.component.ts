import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Sticker } from 'src/app/shared/models/sticker.interface';

@Component({
  selector: 'app-showing-sticker-dialog',
  templateUrl: './showing-sticker-dialog.component.html',
  styleUrls: ['./showing-sticker-dialog.component.scss'],
})
export class ShowingStickerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowingStickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sticker
  ) {}
}
