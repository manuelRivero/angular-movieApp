import { PeliculasService } from 'src/app/services/peliculas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit{
  busqueda:string="";
  categorias$:any[];
  constructor(private router:Router, private _peliculasService: PeliculasService) { }
  buscar(){
    this.router.navigate(['/busqueda', this.busqueda]);
  }
ngOnInit(){
  this._peliculasService.getavaiblegenres().subscribe( (res)=>{
    this.categorias$=res['genres'];
  })
}
}
