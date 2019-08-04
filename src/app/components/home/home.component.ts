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
  kidsPopulars;

  loading = (!this.releases || !this.kidsPopulars || !this.populars) ? true : false;
  constructor(public _peliculasService: PeliculasService) { }

  ngOnInit() {
    this._peliculasService.getReleases().subscribe( res => {
      setTimeout( ()=>this.releases=res, 2000) } )
    this._peliculasService.getPopulars().subscribe( res => {
      setTimeout( ()=> this.populars=res, 4000) } )
    this._peliculasService.getKidsPopulars().subscribe( res => {
      setTimeout(()=>this.kidsPopulars=res, 6000)} )


  }

}
