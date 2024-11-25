import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { HomeComponent } from './admin/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
   
   { path: '', component: HomeComponent,
         children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]} ,
            { path: 'progress', component: ProgressComponent, canActivate: [authGuard]} ,
            { path: 'grafica1', component: Grafica1Component, canActivate: [authGuard]} ,   
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},      
         ]
   } ,

];
