import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Cart</h2>
    <p>Your cart is currently empty.</p>
    <!-- You can display the products added to the cart here -->
  `,
  styles: [
    `
      h2 {
        color: #333;
      }
    `,
  ],
})
export class CartComponent {}
