import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  releases;
  populars;

  constructor(public _peliculasService: PeliculasService) { }

  ngOnInit() {
    this._peliculasService.getReleases().subscribe( res => {
      console.log(res);this.releases=res} )
    this._peliculasService.getPopulars().subscribe( res => {
      console.log(res);this.populars=res} )


  }

}
