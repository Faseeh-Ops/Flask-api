import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"cart",component:CartComponent},
];
