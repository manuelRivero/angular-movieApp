import { PeliculasService } from "./../../services/peliculas.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-detalle-pelicula",
  templateUrl: "./detalle-pelicula.component.html",
  styles: []
})
export class DetallePeliculaComponent implements OnInit {
  peliId;
  pelicula;
  similares;

  goBack() {
    // window.history.back();
    this.location.back();
  }
  constructor(
    private activateRoute: ActivatedRoute,
    public _peliculasService: PeliculasService,
    private location: Location
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.peliId = params["id"];


    this._peliculasService.resultadosBusqueda
    ? () => {
        this.pelicula = this._peliculasService.resultadosBusqueda.find(
          element => element.id === Number(this.peliId)
        );
        this._peliculasService
          .getSimilar(this.pelicula.genres)
          .subscribe(res => {
            this.similares = res;
          });
      }
    : this._peliculasService.getMovie(this.peliId).subscribe(res => {
        console.log(res);
        this.pelicula = res;
        //gender reduce to only 3 tags for more matchs to fill similares array
        this._peliculasService
          .getSimilar(this.pelicula.genres.slice(0, 3))
          .subscribe(res => {
            this.similares = res;
          });
      });

    });
  }
}
