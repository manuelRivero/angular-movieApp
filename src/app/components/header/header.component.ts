import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  busqueda:string=""
  constructor(private router:Router) { }
  buscar(){
    this.router.navigate(['/busqueda', this.busqueda]);
  }

}
