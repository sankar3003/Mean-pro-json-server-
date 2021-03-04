import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {


@Input('appFocus') isFocused:boolean;

  constructor(
    private hostElement:ElementRef,
    
  ) { }

  ngOnInit(){
    if (this.isFocused) {
      this.hostElement.nativeElement.focus();
   }
  }
}
