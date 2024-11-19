import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any [] = [
    {
      titulo: 'Inicio',
      icono: 'fa fa-home',
        subMenu: [
          {titulo: 'Home', url: '/' },
          {titulo: 'Graficas', url: '/grafica1' },
          {titulo: 'Progress', url: '/progress' }
        ]
    },

    {
      titulo: 'Avances',
      icono: 'fa fa-edit',
        subMenu: [
          {titulo: 'Home', url: '/home' },
          {titulo: 'Graficas', url: '/grafica2' },
          {titulo: 'Progress', url: '/progres3' }
        ]
    }
  ]


}
