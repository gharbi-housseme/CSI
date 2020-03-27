import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-hackzone',
  templateUrl: './hackzone.component.html',
  styleUrls: ['./hackzone.component.css']
})
export class HackzoneComponent implements OnInit {
  day: number;
  hour: number;
  minute: number;
  second: number;
  period:number=498400;

  constructor() { }

  ngOnInit() {
    this.startCountdown(this.period);
  }
  startCountdown(seconds: number){
    var counter = seconds;
    var t;
    var interval = setInterval(() => {
      counter--;
      if(counter > 0 ){  
        t=counter;
        this.second=(t)%60;
        t=(t-(t)%60)/60;
        this.minute=(t)%60;
        t=(t-(t)%60)/60;
        this.hour=(t)%24;
        t=(t-(t)%24)/24;
        this.day=t;
      }
  
      if(counter <= 0 ){     
        clearInterval(interval);
        console.log('Ding!');
      };
    }, 1000);
  };
}
