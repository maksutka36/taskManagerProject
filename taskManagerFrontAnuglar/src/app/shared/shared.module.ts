import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmatonDialogComponent } from './components/confirmaton-dialog/confirmaton-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [ConfirmatonDialogComponent, GlobalErrorComponent ],
  exports: [ConfirmatonDialogComponent, GlobalErrorComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class SharedModule {}
