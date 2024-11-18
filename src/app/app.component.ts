import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuprofileComponent } from './shared/menuprofile/menuprofile.component';
import { HomeComponent } from './admin/home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }
  title = 'angular-code';


}
