import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pelisImg'
})
export class PelisImgPipe implements PipeTransform {

  transform(pelicula: any, type: string): any {
    let url= 'http://image.tmdb.org/t/p/w500/'
    if(type === "backdrop" && pelicula.backdrop_path){
      return `${url}${pelicula.backdrop_path}`
    } else{
      if(type === "poster" && pelicula.poster_path){
        return `${url}${pelicula.poster_path}`
      }else{
        return ('assets/img/no_image.jpg')
      }
    }
  }
}
