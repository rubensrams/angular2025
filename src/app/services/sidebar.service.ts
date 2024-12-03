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
      admin: false,
        subMenu: [
          {titulo: 'Home', url: '/' },
          {titulo: 'Progress', url: '/progress' }
        ]
    },

    {
      titulo: 'Configuración',
      icono: 'fa fa-edit',
      admin: true,
        subMenu: [
          {titulo: 'Usuarios', url: '/users' },
          {titulo: 'Avisos', url: '/advices/list' },
          {titulo: 'Graficas', url: '/grafica1' }
          
        ]
    }
  ]


}
