import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../Model/user';
import { UtilsService } from './utils.service';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient: HttpClient;
  private baseURL = this.utilService.getApiUrl();

  constructor(handler: HttpBackend,
    private utilService: UtilsService,
  ) { 
    this.httpClient = new HttpClient(handler);
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
  }

  createUser(endUrl: string, user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseURL + endUrl, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  login(endUrl: string, user:User): Observable<Array<any>>{
    return this.httpClient.post<Array<any>>(this.baseURL + endUrl, JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

  startOrStopVm(endUrl: string): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + endUrl, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }




  errorHandl(error) {
    let errorMessage = '';
    let errorStatus = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorStatus = error.status;
    }
    console.log(errorMessage);
    return throwError(errorStatus);
  }
}
