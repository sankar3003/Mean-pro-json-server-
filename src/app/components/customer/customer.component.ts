import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  name = 'Angular';
  apiUrl: string = 'http://localhost:3000/customer';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  productForm: FormGroup;
  productDatas: Object;
   
  constructor(private fb:FormBuilder,
    private http:HttpClient
    
    ) {
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  ngOnInit(): void {
  this.getCustomer()
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
      price: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
    let API_URL = `${this.apiUrl}`;
  var tt=   this.http.post(API_URL, this.productForm.value)
      .pipe(
        catchError(this.handleError)
      )
tt.subscribe(res=>{
  console.log("Resa" , res);
  this.getCustomer()
})
  } 
  viewCustomer(id) {
 
    let API_URL = `${this.apiUrl}`;
  var tt=   this.http.get(API_URL+'/'+id )
      .pipe(
        catchError(this.handleError)
      )
tt.subscribe((res:any)=>{
  console.log("view ss" , res);
 let dd= this.productForm.get("quantities") as FormArray
  this.productForm.patchValue(
    {name:res.name, dd:res.quantities},

  )

// this.getCustomer()
})
  } 

  getCustomer(){
    let API_URL = `${this.apiUrl}`;
    var tt=   this.http.get(API_URL);
    tt.subscribe(res=>{
      console.log("res", res);

      this.productDatas=res
    })
  }
DeleteCustomer(){
  let API_URL = `${this.apiUrl}`;
  var tt=   this.http.delete(API_URL);
  tt.subscribe(res=>{
    console.log("res", res);

   this.getCustomer()
  })
}
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
