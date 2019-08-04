import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styles: []
})
export class DetallePeliculaComponent implements OnInit {
  peliId;
  pelicula;

  goBack() {
    // window.history.back();
    this.location.back();

    console.log( 'goBack()...' );
  }
  constructor( 
      private activateRoute:ActivatedRoute,
      public _peliculasService:PeliculasService,
      private location: Location
      ) {
          this.activateRoute.params.subscribe( params =>{
          this.peliId=params['id'];
    })
  }

  ngOnInit() {
    this._peliculasService.resultadosBusqueda ?
    this.pelicula = this._peliculasService.resultadosBusqueda.find( element => element.id === Number(this.peliId)):
    this._peliculasService.getMovie(this.peliId).subscribe(res =>{
      console.log(res)
      this.pelicula=res;
    })
  }

}
