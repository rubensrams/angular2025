import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menuprofile',
  standalone: true,
  imports: [],
  templateUrl: './menuprofile.component.html'
})
export class MenuprofileComponent implements OnInit{
  user!:string;
  constructor(
    private authserice:AuthService){
  
  }

  ngOnInit(): void {
    this.user= this.authserice.user.user;
  }

}
