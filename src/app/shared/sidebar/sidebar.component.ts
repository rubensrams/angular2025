import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

declare function initReload(): any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html'
})


export class SidebarComponent implements OnInit{

  hola: string= '';
  menuItens: any[]= [];


  ngOnInit(): void {
   initReload();
  
  }

  constructor(private sideBar: SidebarService,
      private authService: AuthService

  ){
    this.menuItens = sideBar.menu;
    
  }


  isAdmin():boolean{
    return this.authService.isAdmin();
  }



}
