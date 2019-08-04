import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [`
  .div-pic-1{
    width: 100%;
    height: 300px;
    background-size: 100% 100%;
    position:relative;
}
.div-pic-2{
    width: 100%;
    height: 200px;
    background-size: 100% 100%;
    position:relative;
}
.titulo-movie-galeria{
  position:absolute;
  color:#fff;
  bottom:0;
  margin:1rem;
  background-color:rgba(0,0,0, .4);
  border-radius:3px;
  padding: .5rem;

}

`
]
})
export class GaleriaComponent implements OnInit {
  @Input() movies;
  @Input() title:string;

  constructor() { }

  ngOnInit() {
  }

}
