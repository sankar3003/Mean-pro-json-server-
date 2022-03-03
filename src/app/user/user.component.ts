import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { JsonService } from '../service/json.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { ApiService } from '../service/api.service';

import { Url } from '../config';





class model{
username:string;
password:string
}






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[
    
  ]
})
export class UserComponent implements OnInit {

username:string;
password:string;

userModel= new model;


form:User={
  id:null,
  confirmPassword: null,
  email: null,
  name: null,
  password: null
};
  submitted: boolean=false;
  users: Object;
  id: any;

  constructor(
    private jsonService:JsonService,
private apiService: ApiService,

    private toastr: ToastrService,
    

  ) { }

  ngOnInit() {


console.log(Url.name);


    this.getUsers()
  }
  getUsers(){
this.apiService.get().subscribe(res=>{
  console.log(res);
  this.users= res;

  
},error=>{
  this.toastr.error('Error', error);
})
  }

  submit(form)
{
console.log(form)

//this.submitted =true;
if(form.invalid){
  this.markFormGroupTouched(form)
}
else{

if(!this.id){
  
 let data:User= form.value;
 
  this.apiService.createUser(data).subscribe(res=>{
    console.log(res);
    form.reset();
    this.getUsers();
    this.toastr.success('Success', 'created');

  },error=>{
    this.toastr.error('Error', error);
  }
  )
}
else if(this.id){
  
 let data:User = form.value;
 data.id= this.id;
  this.apiService.updateUser(data,this.id).subscribe(res=>{
    this.getUsers();
    form.reset();
    this.toastr.success('Success',`The id ${this.id} was updated`);
    this.id=null;
  },error=>{
    this.toastr.error('Error', error);
  })
}

}

  }


  view(id){
    this.id=id;
this.apiService.getById(id).subscribe((res:any)=>{
  this.form=res;
   
})
  }
  deleteval(id){
  var delet= confirm("Would you like to delete ??");

  if(delet){
    
    this.apiService.deleteUser(id).subscribe(res=>{

      this.getUsers();
      this.toastr.success('Success',`The id ${id} was Deleted`);
    },error=>{
      this.toastr.error('Error', error);
    })
  }

  }


  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
export class Car{
  model:string;
  color:string
  constructor (model,color){
    this.model=model,
    this.color=color
  }
}