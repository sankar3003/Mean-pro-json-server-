
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {  Subscription } from 'rxjs';

import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  
  Employee:any = [];
  users:any=[];
  sub: Subscription;


  constructor(private apiService: ApiService,
    private toastr: ToastrService) { 
    
  }

  ngOnInit() {
    this.readEmployee();



  }

  readEmployee(){
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data; 
     
    });
    

  }

  removeEmployee(employee, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
          this.toastr.success("Deleted" ,"Success")
        },err=>{
        this.toastr.error("Error", "Something went wrong")
        }
      )    
    }
  }

  insert(val){
// console.log("val",val);

var json:any={};

json.name=val.name;
json.email=val.email;
json.designation=val.designation;
json.phoneNumber=val.phoneNumber;

console.log("jisn", json)
  }
  ngOnDestroy(){
// this.sub.unsubscribe()
  }

}