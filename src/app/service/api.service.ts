import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { DebugRenderer2 } from '@angular/core/src/view/services';
import { isThisISOWeek } from 'date-fns';




@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'http://localhost:4000/api/emp';
  baseUri1:string = 'http://localhost:4000/apiUser';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create
  createEmployee(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all employees
  getEmployees() {
    
    return this.http.get(`${this.baseUri}`);
  }

  // Get employee
  getEmployee(id): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

//user functionalities


createUser(data): Observable<any> {
  let url = `${this.baseUri1}/create`;
  return this.http.post(url, data)
    .pipe(
      catchError(this.errorMgmt)
    )
}


  get(){
    return this.http.get(`${this.baseUri1}`);
  }

  getById(id): Observable<any> {
    let url = `${this.baseUri1}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  updateUser(data,id): Observable<any> {
    
    let url = `${this.baseUri1}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  deleteUser(id): Observable<any> {
    let url = `${this.baseUri1}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }



  // Update employee
  updateEmployee(id, data): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteEmployee(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
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