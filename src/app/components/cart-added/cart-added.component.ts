import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-added',
  templateUrl: './cart-added.component.html',
  styleUrls: ['./cart-added.component.css']
})
export class CartAddedComponent implements OnInit {
  cartItems:CartItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
