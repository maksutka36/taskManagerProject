import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GlobalErrorService } from '../global-error/global-error.service';
import { FullTable, Table } from 'src/app/shared/models/table.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private errorService: GlobalErrorService
  ) {}

  getTables(): Observable<Table[]> {
    return this.http
      .get<Table[]>(this.apiUrl + '/stickersTable')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  getFullTable(tableId: number): Observable<FullTable> {
    return this.http
      .get<FullTable>(this.apiUrl + `/stickersTable/getFullTable/${tableId}`)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  addTable(table: string): Observable<FullTable> {
    return this.http
      .post<FullTable>(this.apiUrl + '/stickersTable', {
        name: table,
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  editTable(table: FullTable): Observable<FullTable> {
    return this.http
      .put<FullTable>(this.apiUrl + '/stickersTable', table)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  removeTable(tableId: number): Observable<unknown> {
    return this.http
      .delete(this.apiUrl + `/stickersTable/${tableId}`)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error.message);
    return throwError(() => error.error.message);
  }
}
