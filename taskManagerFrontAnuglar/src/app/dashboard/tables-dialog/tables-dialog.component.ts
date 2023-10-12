import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FullTable } from 'src/app/shared/models/table.interface';

@Component({
  selector: 'app-tables-dialog',
  templateUrl: './tables-dialog.component.html',
  styleUrls: ['./tables-dialog.component.scss'],
})
export class TablesDialogComponent {
  isEdit = false;
  name = '';

  constructor(
    public dialogRef: MatDialogRef<TablesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FullTable
  ) {}

  ngOnInit(): void {
    if (this.data !== null) {
      this.isEdit = true
      this.name = this.data.name;
    };
    this.data ? this.data : this.name;
  }
}
