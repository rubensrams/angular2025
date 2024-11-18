import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { HomeComponent } from './admin/home/home.component';

export const routes: Routes = [
   
   { path: '', component: HomeComponent,

         children: [
            { path: 'dashboard', component: DashboardComponent} ,
            { path: 'progress', component: ProgressComponent} ,
            { path: 'grafica1', component: Grafica1Component} ,   
           { path: '', redirectTo: '/dashboard', pathMatch: 'full'},      
         ]
   } ,

   //Public routes
   { path: 'login', component: LoginComponent} ,
   { path: 'register', component: RegisterComponent} ,
   { path: '**', component: NofoundComponent}
];
