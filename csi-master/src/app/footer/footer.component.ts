import { Component, OnInit } from '@angular/core';
import jump from "jump.js"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  goFormation(){
    jump("#formation")
  }
  scrollTop(){
    jump(- window.scrollY)
  }
  constructor() { }

  ngOnInit() {
  }

}
