import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  pages = [
    {title: 'Acerca de', path: 'pages/acercade'},
    {title: 'Contacto', path: 'pages/contacto'},
    {title: 'Lista de Contactos', path:'pages/lista-contacto'}, 
  ]
}
