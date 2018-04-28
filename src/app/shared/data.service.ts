import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get('./assets/mydata.json');
  }

  public getPoSummaryData(): Observable<any> {
    return this.http.get('./assets/po-summary.json');
  }
}