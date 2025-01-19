import { Component } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';  // Correct import for provideRouter
import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Imports RouterModule for the app's routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Flask E-commerce App';
}

// Define routes for standalone components
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

// Bootstrap the root component with router configuration
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],  // Use provideRouter here instead of imports
}).catch((err) => console.error(err));
