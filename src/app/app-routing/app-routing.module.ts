import { DetallePeliculaComponent } from './../components/detalle-pelicula/detalle-pelicula.component';
import { BusquedaComponent } from './../components/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from '../components/home/home.component';


const routes:Routes=[
  {path:'home', component:HomeComponent},
  {path:'busqueda', component:BusquedaComponent},
  {path:'busqueda/:termino', component:BusquedaComponent},
  {path:'detalle/:id', component:DetallePeliculaComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
