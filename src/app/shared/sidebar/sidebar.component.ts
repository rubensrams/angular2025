import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

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

  }

  constructor(private sideBar: SidebarService){
    this.menuItens = sideBar.menu;
  }
}
