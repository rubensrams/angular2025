import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent {

constructor(
  private router: Router  
){
   
}

goToDashboard():void {
  this.router.navigate(['/dashboard']);
}

}
