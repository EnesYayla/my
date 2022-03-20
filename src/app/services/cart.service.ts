import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(todo: Todo) {
    let item = CartItems.find((c) => c.todo.id == todo.id); //Array'i aramak
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.todo = todo;
      cartItem.quantity = 1;
      CartItems.push(cartItem); //Array'a eleman eklemek
    }
  }
  removeFromCart(todo:Todo){
    let item:CartItem = CartItems.find((c) => c.todo.id == todo.id);
    CartItems.splice(CartItems.indexOf(item),1) //belirli bir indexten(1) itibaren eleman siler    
  }

  list(): CartItem[] {
    return CartItems;
  }
}
