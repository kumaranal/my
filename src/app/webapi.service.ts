import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  URL = 'http://localhost:3000/';
  constructor( private http:HttpClient) { }

  getCountry(){
    return this.http.get(`${this.URL}country`).pipe(
      catchError(this.handleError)
    );
  }
  getState(){
    return this.http.get(`${this.URL}state`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent)
    {
      console.error('An error occured:',error.error.message);
    }
    else{
      console.error(`Backend returned code ${error.status},`+`body was: ${error.error}`);
    }
    return throwError('something bad happened.please try again');
  }
  
}
