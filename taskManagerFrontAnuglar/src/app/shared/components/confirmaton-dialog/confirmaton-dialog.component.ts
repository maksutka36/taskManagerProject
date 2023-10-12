import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmaton-dialog',
  templateUrl: './confirmaton-dialog.component.html',
  styleUrls: ['./confirmaton-dialog.component.scss'],
})
export class ConfirmatonDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
