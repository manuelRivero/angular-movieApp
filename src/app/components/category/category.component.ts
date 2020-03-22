import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoria:string;
  avaiableCategories:any[]=[];
  peliculas:any[]=[]
  constructor(private route:ActivatedRoute, private _peliculasService: PeliculasService) { }

  ngOnInit() {
    this._peliculasService.getavaiblegenres().subscribe( res =>{
      this.avaiableCategories = res['genres']
    })
    this.route.params.subscribe( paramas => {
      this.categoria = paramas.categoria;
      this._peliculasService.getCategory(this.categoria).subscribe( res => {
        this.peliculas = res['results'].filter( item => item !== null && item.poster_path)
      })

    })
  }

}
