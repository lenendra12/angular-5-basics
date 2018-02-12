import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {
  nameVali:string;

  constructor(private ref: ElementRef) { }

 // @HostListener('click') doSomething(){
 //    console.log(this.ref)
 //     this.ref.nativeElement.style.backgroundColor  = "red";
 // }
 //
 // @HostListener('mouseover') doSomething1() {
 //   this.ref.nativeElement.style.color  = "blue";
 // }

  @HostListener('click') onClickName() {
    if(this.nameVali == '' || this.nameVali == null){
      alert("please fill name");
      return false;
    }
  }
}
