import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PeliculasService } from './services/peliculas.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PelisImgPipe } from './pipe/pelis-img.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { SimilaresComponent } from './components/similares/similares.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BusquedaComponent,
    PelisImgPipe,
    GaleriaComponent,
    DetallePeliculaComponent,
    SimilaresComponent,
    CarouselComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
