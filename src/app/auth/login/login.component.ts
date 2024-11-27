import { Component } from '@angular/core';
import { SharingDataService } from '../../services/sharing-data.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  user: User;
 
 
  constructor(
    private router: Router,
    private authService: AuthService
  ){
    this.user = new User();
  }


  ngOnInit(): void {

  }


  onSubmit() {
    if (!this.user.username || !this.user.password) {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: 'Usuario y password requeridos!'
        }        
      );
    } else {
         this.authService.loginUser(this.user).subscribe({
          next: response => {
          const token = response.token;
          const payload = this.authService.getPayload(token);
          const nombreUsuario =payload.sub;
          const user = nombreUsuario;
          console.log('Nombre de usuario '+ user)
          const login = {
            user,
            isAuth: true,
            isAdmin: payload.isAdmin
          };
          
          this.authService.token = token;
          this.authService.user = login;
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          if (error.status == 401) {
            Swal.fire('Error en el Login', error.error.message, 'error')
          } else {
            Swal.fire('Por el momento el servicio no está disponible. Intenta mas tarde', error.error.message, 'error')
          }
        }
      })
    }
  }
}
