import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{

  users: User[] = [];


  constructor( 
    private userService:UsersService  
  ){

  }

  ngOnInit(): void {

    if (this.users == undefined || this.users == null || this.users.length == 0) {     
      this.userService.findAll().subscribe(advices => this.users = advices  as User[]);

    }
  }



}
