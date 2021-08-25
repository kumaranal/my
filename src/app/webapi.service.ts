import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  URL = 'http://localhost:3000/';
  httpClient: any;
  constructor( private http:HttpClient) { }

  getCountry(){
    return this.http.get<any>(`${this.URL}country`);
  }
  getState(){
    return this.http.get<any>(`${this.URL}state`);
  }
  postRegister(data:any){
    return this.http.post<any>(`${this.URL}register`,data);
  }
  // .pipe(
  //   catchError(this.handleError)
  
  public handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  
  // public sendGetRequest(){
  //   // return this.httpClient.get(this.URL).pipe(retry(3), catchError(this.handleError));
  //   const options = { params: new HttpParams({fromString: "_page=1&_limit=20"}) };
  //   return this.httpClient.get(this.URL, options).pipe(retry(3), catchError(this.handleError));
  // }
}
