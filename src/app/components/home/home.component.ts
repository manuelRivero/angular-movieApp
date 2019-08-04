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
    this._peliculasService.getReleases().subscribe( res => this.releases=res )
    this._peliculasService.getPopulars().subscribe( res => this.populars=res )
    this._peliculasService.getKidsPopulars().subscribe( res =>  this.kidsPopulars=res )


  }

}
