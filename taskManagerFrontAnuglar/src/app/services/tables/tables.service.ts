import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  constructor() {}

  setCurrentTableId(tableId: number): void {
    localStorage.setItem('tableId', tableId.toString());
  }

  getCurrentTableId(): number | null {
    return Number(localStorage.getItem('tableId'));
  }
}
