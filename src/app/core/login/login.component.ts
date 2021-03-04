import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../model/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


@ViewChild(NgForm) loginForm:NgForm

f:any={};
  isFocus: boolean = true;

  constructor(
    private router:Router,
    private elementRef:ElementRef
  ) { }

  ngOnInit() {
    var modal = document.getElementById('id01');
    modal.style.display='block';
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  }

  submit(){
    console.log(this.f);
  if(this.loginForm.valid){
this.router.navigate(['/userForm']);
  }
  }
  reset(){

    this.loginForm.reset()
  }
  openModal()  {
    
    document.getElementById('id01').style.display='block';
    this.isFocus=true;
  }

}
