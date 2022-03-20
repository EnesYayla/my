import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { CartService } from 'src/app/services/cart.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] = [];
  dataLoaded = false;
  filterText:string = "";
  constructor(private todoService: TodoService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.dataLoaded = true;
    });
  }

  addToCart(todo:Todo){
    
      this.cartService.addToCart(todo);
    }
  }

