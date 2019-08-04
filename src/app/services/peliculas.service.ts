import { map } from 'rxjs/operators';
import { HttpClient, JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiKey = `160914de780d5e63e887a59b31812e69`;
const apiUrl = `https://api.themoviedb.org/3`;

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor( private http:HttpClient) { }

  resultadosBusqueda:any;

  getPopulars(){
    let url=`${apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
  }

  getKidsPopulars(){
    let url=`${apiUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
  }

  getSearch(terminoBusqueda:string){
    let url = `${apiUrl}/search/movie?query=${terminoBusqueda}&sort_by=popularity.desc&api_key=${apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map( res => {
        this.resultadosBusqueda= res['results'];
        return res})
    )
  }

  getReleases(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate()+7 );

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`


    let url = `${apiUrl}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp( url, 'JSONP_CALLBACK' )
  }

  getMovie(movieId:string){
    let url= `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK')
  }
}
