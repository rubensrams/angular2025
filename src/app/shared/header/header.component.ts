import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
Router
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

constructor(
  private router: Router,
  private authserice:AuthService){

}


logout():void{

  this.authserice.logout();
  this.router.navigate(['/login']);
}

}
