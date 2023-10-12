import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sticker } from 'src/app/shared/models/sticker.interface';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import 'moment/locale/fr';

@Component({
  selector: 'app-sticker-dialog',
  templateUrl: './sticker-dialog.component.html',
  styleUrls: ['./sticker-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class StickerDialogComponent {
  isEdit = false;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    stickerStatus: new FormControl('TODO', Validators.required),
    date: new FormControl('', Validators.required),
  });

  changeDatePicker(): void {
    this.form.value.date = this.form.value.date?.toString();
  }

  constructor(
    public dialogRef: MatDialogRef<StickerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Sticker
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.isEdit = true;
      this.form.setValue({
        title: this.data.title,
        description: this.data.description || '',
        stickerStatus: this.data.stickerStatus,
        date: this.data.date,
      });
    }
  }
}
