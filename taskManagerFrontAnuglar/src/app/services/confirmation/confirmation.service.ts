import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { ConfirmatonDialogComponent } from 'src/app/shared/components/confirmaton-dialog/confirmaton-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog(message: string): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmatonDialogComponent, {
      data: { message },
    });

    return dialogRef.afterClosed();
  }
}
