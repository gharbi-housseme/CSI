import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHomeFormation]'
})
export class HomeFormationDirective {
  
  
  
  constructor(private el: ElementRef) {}
  @HostListener("mouseover") enter(){
    let formation = this.el.nativeElement.querySelector(".formation")
    formation.classList.add("zoomIn")
    formation.classList.remove("zoomOut")

  }
  @HostListener("mouseout") leave(){
    let formation = this.el.nativeElement.querySelector(".formation")
    formation.classList.add("zoomOut")
    formation.classList.remove("zoomIn")
  }
  

}
