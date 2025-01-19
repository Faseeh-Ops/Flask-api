import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Dashboard</h2>
    <p>Welcome to the dashboard!</p>
    <!-- You can add product listings and other content here -->
  `,
  styles: [
    `
      h2 {
        color: #333;
      }
    `,
  ],
})
export class DashboardComponent {}
