import { Location } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PeliculasService } from "src/app/services/peliculas.service";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styles: []
})
export class BusquedaComponent implements OnInit {
  loading: Boolean;
  terminoBusqueda: string = "";
  buscar() {
    if (this.terminoBusqueda.length == 0) return null;
    this.loading = true;
    this._peliculasService
      .getSearch(this.terminoBusqueda)
      .subscribe(res => (this.loading = false));
  }

  goback() {
    this.location.back();
  }
  constructor(
    private activateRoute: ActivatedRoute,
    public _peliculasService: PeliculasService,
    private location: Location
  ) {
    this.activateRoute.params.subscribe(params => {
      if (params["termino"]) {
        this.terminoBusqueda = params["termino"];
        this.buscar();
      }
    });
  }

  ngOnInit() {}
}
