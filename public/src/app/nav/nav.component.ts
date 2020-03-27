import { Component, OnInit, HostListener } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show: boolean = false

  scrolled : boolean = false
  @HostListener("window:scroll") scroll(){
    if(window.scrollY > 80) this.scrolled = true
    else this.scrolled = false
  }
  constructor() { }

  ngOnInit() {
  }

}
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}