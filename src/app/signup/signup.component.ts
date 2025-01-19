import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Signup</h2>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" />
      <label for="email">Email:</label>
      <input type="email" id="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" />
      <button type="submit">Signup</button>
    </form>
  `,
  styles: [
    `
      form {
        display: flex;
        flex-direction: column;
      }
      label {
        margin-top: 1rem;
      }
    `,
  ],
})
export class SignupComponent {}
