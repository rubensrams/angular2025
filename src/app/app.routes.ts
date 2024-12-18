import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { NofoundComponent } from './pages/nofound/nofound.component';
import { HomeComponent } from './admin/home/home.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { UsersComponent } from './admin/users/users.component';
import { CreateAdviceComponent } from './admin/advices/create/createAdvice.component';
import { ListAdviceComponent } from './admin/advices/list/listAdvice.component';

export const routes: Routes = [
   
   { path: '', component: HomeComponent,
         children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]} ,
            { path: 'progress', component: ProgressComponent, canActivate: [authGuard]} ,
            { path: 'grafica1', component: Grafica1Component, canActivate: [adminGuard]} ,   
            { path: 'forbidden', component: ForbiddenComponent, canActivate: [authGuard]} ,   
            { path: 'users', component: UsersComponent, canActivate: [adminGuard]} ,   
            { path: 'advices/create', component: CreateAdviceComponent, canActivate: [adminGuard]} ,  
            { path: 'advices/list', component: ListAdviceComponent, canActivate: [adminGuard]} ,  
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},      
         ]
   } ,

];
