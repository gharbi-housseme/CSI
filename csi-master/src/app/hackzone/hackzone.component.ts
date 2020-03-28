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
    
  var countDownDate = new Date("Apr 11, 2020 14:00:00").getTime();
    
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days + " "; 
    document.getElementById("hours").innerHTML = hours + " ";
    document.getElementById("minutes").innerHTML = minutes + " ";
    document.getElementById("seconds").innerHTML = seconds + " ";
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000); };
  
}
