import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NofoundComponent } from '../pages/nofound/nofound.component';

export const authRoutes: Routes = [
   
   //Public routes
   { path: 'login', component: LoginComponent} ,
   { path: 'register', component: RegisterComponent} ,
   { path: '**', component: NofoundComponent}
];
