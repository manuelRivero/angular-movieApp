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
activeSlider = true;



siguiente(){
  if(!this.activeSlider){
    return null
  }
  let element = this.similares.shift();
  
  setTimeout(()=>{
      this.similares.push(element)

  }, 5000)
}

  constructor() { 
  }
  
  ngAfterViewInit() { 
    setInterval(()=>{
      this.siguiente()
    }, 5000 )
  }

}
