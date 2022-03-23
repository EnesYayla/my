import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoAddForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createTodoAddForm();
    this.add();
  }

  createTodoAddForm() {
    this.todoAddForm = this.formBuilder.group({
      //Ürün eklerken kaydının tutulmasını istediğimiz özellikleri buraya ekleyeceğiz
      title: ['', Validators.required],
      id: ['', Validators.required],
      userId: ['', Validators.required],
      completed: ['', Validators.required],
      //map edilecek bölümler ve kurallar burada belirleniyor
    });
  }

  add() {
    //Üstteki fonksiyon ile gelen özellikleri bir Todo objesi haline getirip ürünü ekle
    let todoModel = Object.assign({}, this.todoAddForm.value);
    console.log(todoModel);
  }
}
