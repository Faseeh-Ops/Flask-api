import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    return this.http.post('/api/cart', product);
  }

  getCart() {
    return this.http.get<any[]>('/api/cart');
  }

  getTotal() {
    return this.http.get<{ total: number }>('/api/cart/total');
  }
}
