import { Component, HostListener, ElementRef } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import jump from 'jump.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-csi';
  scrolltop : boolean = false
  preloader : boolean = true

  @HostListener("window: scroll",["$event"]) show(){
    console.log(window)
    if(window.scrollY > 150) this.scrolltop = true
    else this.scrolltop = false
  }

  @HostListener("window: load") preload(){
    let preloaderLeft = this.el.nativeElement.querySelector('.preloader-left');
    let preloaderRight = this.el.nativeElement.querySelector('.preloader-right');
    setTimeout(()=>{
      preloaderLeft.classList.add("slideOutLeft")
      preloaderRight.classList.add("slideOutRight")
    },1000)
  }
  scrollTop(){
    jump(- window.scrollY)
  }
  constructor(private wowService: NgwWowService, private el: ElementRef) {
    this.wowService.init();
  }
  
}
