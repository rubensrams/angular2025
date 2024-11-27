import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
Router
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
user!:string;
constructor(
  private router: Router,
  private authserice:AuthService){

}

ngOnInit(): void {

  this.user= this.authserice.user.user;
 
 }

logout():void{
 
  this.authserice.logout();
  this.router.navigate(['/login']);
}

}
