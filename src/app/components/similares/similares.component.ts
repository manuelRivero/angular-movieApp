import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-similares',
  templateUrl: './similares.component.html',
  styleUrls: ['./similares.component.css'],  
})
export class SimilaresComponent implements AfterViewInit {
@Input() similares=[];
activeSlider = false;
intervalo;



siguiente(){
  
  let element = this.similares.shift();
  setTimeout(()=>{
      this.similares.push(element)

  }, 5000)
}

stop(){
  console.log("stop")
  clearInterval(this.intervalo);
}

play(){
  console.log("play")
  this.intervalo=setInterval(()=>{
    this.siguiente()
  }, 5100 )
}
  constructor() { 
  }
  
  ngAfterViewInit() { 
    this.intervalo=setInterval(()=>{
      this.siguiente()
    }, 5100 )
  }

}
