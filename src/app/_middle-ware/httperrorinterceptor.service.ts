import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private ngxService:NgxUiLoaderService){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ngxService.start();
    return  next.handle(request)
    
      .pipe(
        finalize(() => 
        
        this.ngxService.stop()),
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
           
            console.log('this is client side error');
            errorMsg = `Error: ${error.error.message}`;
            this.ngxService.stop();
          }
          else {
            console.log('this is server side error');
           
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            this.ngxService.stop();
          }
          console.log(errorMsg);
          return throwError(errorMsg);
        })
        
      )
  }
  
}