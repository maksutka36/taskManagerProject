import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorService {
  error$ = new Subject<string>();
  dialogError$ = new Subject<string>();

  constructor() {}

  handle(message: string): void {
    this.error$.next(message);
  }

  handleDialog(message: string): void {
    this.dialogError$.next(message);
  }

  clear(): void {
    this.error$.next('');
    this.dialogError$.next('');
  }
}
