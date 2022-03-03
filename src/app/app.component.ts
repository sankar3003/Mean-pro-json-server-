import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

import { NgxUiLoaderService } from 'ngx-ui-loader';





@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'mean-stack-crud-app';
  show:boolean=false;

 myname:string="sanak"


  date: Date;
  time: any;
  setDob: any;
constructor(private ngxService: NgxUiLoaderService,
  private elementRef:ElementRef,
  private changeDetect:ChangeDetectorRef
  ){}
   ngOnInit(){
console.log(
this.myname.bold())
// if(this.myname.includes('a')){
//   alert("2")
// }
// else{
//   alert("no")
// }
    
console.log(this.myname.indexOf('s'))

// this.setDob = datePipe.transform(this.date, 'dd/MM/yyyy');
    // this.time = this.date.getTime()

    setInterval(()=>{
      if(!this.show){
        this.show=true;
        this.changeDetect.detectChanges();
   
      
   
      }else{
        this.show=false;
        this.changeDetect.detectChanges()
        setInterval(()=>{
          this.date=new Date()
        },1000)
      }

      console.log("please subcribe here")
    },7000)

  //   this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
  //   // Stop the foreground loading after 5s
  //   setTimeout(() => {
  //     this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
  //   }, 2000);
  }

  ngAfterViewInit(){
  }
}
  