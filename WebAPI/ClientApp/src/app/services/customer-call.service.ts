import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomerCall } from '../models/customercall';

@Injectable({
  providedIn: 'root'
})
export class CustomerCallService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Customer/';
  }

  getCustomerCalls(): Observable<CustomerCall[]> {
    return this.http.get<CustomerCall[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getCustomerCall(id: number): Observable<CustomerCall> {
    return this.http.get<CustomerCall>(this.myAppUrl + this.myApiUrl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveCustomerCall(customerCall): Observable<CustomerCall> {
    return this.http.post<CustomerCall>(this.myAppUrl + this.myApiUrl, JSON.stringify(customerCall), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateCustomerCall(id: number, customerCall): Observable<CustomerCall> {
    return this.http.put<CustomerCall>(this.myAppUrl + this.myApiUrl + id, JSON.stringify(customerCall), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteCustomerCall(id: number): Observable<CustomerCall> {
    return this.http.delete<CustomerCall>(this.myAppUrl + this.myApiUrl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
