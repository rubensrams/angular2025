import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { MenuprofileComponent } from '../../shared/menuprofile/menuprofile.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

declare function initCustonMin(): any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, MenuprofileComponent, FooterComponent ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    initCustonMin();
  }




}
