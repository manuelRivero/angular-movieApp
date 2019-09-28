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


toggleAnimation(){
  let time = new Date();
  let tiempoIntervalo;
  let elapseTime;
  if(!this.activeSlider){
    this.activeSlider=true;
    this.intervalo = setInterval(()=>{
      tiempoIntervalo = new Date()
      let element = this.similares.shift();
        this.similares.push(element);
    }, 2000);
  }else{
    elapseTime = time.getMilliseconds()
    console.log(tiempoIntervalo)
    console.log("mouseIn")
    clearInterval(this.intervalo)
    this.activeSlider=false;
  }
}

  constructor() { 
  }
  
  ngAfterViewInit() { 
 
    this.toggleAnimation();
  }

}
