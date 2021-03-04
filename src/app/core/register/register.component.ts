import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit,AfterViewInit {

  isFocus: boolean = true;
  @ViewChild(NgForm) registerForm:NgForm ;

  f:any={};
  
    constructor() { }
  
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
  

ngAfterViewInit(){
  this.isFocus=true;
}

    submit(){
      console.log(this.f);
    }
    reset(){
  
      this.registerForm.reset()
    }

    openModal()  {
    
      document.getElementById('id01').style.display='block';
      this.isFocus=true;
    }
 
  
}
