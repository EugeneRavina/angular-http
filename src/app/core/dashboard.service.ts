import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Book } from '../shared/models/book';
import { Reader } from '../shared/models/reader';
import { catchError } from 'rxjs/operators'
import { CommonService } from './common.service';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient,
    private commonService: CommonService) {

  }

  getBooksList(): Observable<Book[]> {
    return this.http.get<Book[]>('api/books').pipe(
      catchError(this.commonService.handleError)
      );
  }

  getReadersList(): Observable<Reader[]> {
    return this.http.get<Reader[]>('api/readers').pipe(
      catchError(this.commonService.handleError)
      );
  }
}
