import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { LoginComponent } from './components/login/login.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoComponent } from './components/todo/todo.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodoComponent },
  { path: 'todos', component: TodoComponent },
  { path: 'users', component: CategoryComponent },
  { path: 'products/category/:id', component: TodoComponent },
  { path: 'login', component: LoginComponent},
  { path: 'todos/add', component:TodoAddComponent, canActivate:[LoginGuard]},
  //Backend'de belirtilen eposta ve şifreyi girmeden ürün eklemeni engelliyor
  { path: 'loggin', component:LogginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
