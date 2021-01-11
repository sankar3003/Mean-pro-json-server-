import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { JsonService } from '../service/json.service';
import { ToastrService } from 'ngx-toastr';
import { deepEqual } from 'assert';
import { User } from '../model/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
    this.getUsers()
  }
  getUsers(){
this.jsonService.get().subscribe(res=>{
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
 
  this.jsonService.post(data).subscribe(res=>{
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
  this.jsonService.update(data,this.id).subscribe(res=>{
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
    
this.jsonService.getById(id).subscribe((res:any)=>{
  this.form=res;
   this.id=res.id;
})
  }
  deleteval(id){
  var delet= confirm("Would you like to delete ??");

  if(delet){
    
    this.jsonService.deleteById(id).subscribe(res=>{

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
