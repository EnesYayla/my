import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  siteImage:string = '../../../../assets/Tea.png';
  logo:string = '../../../../assets/Anadolu.png'
  email: string = '';
  password:string = '';
  

  ngOnInit(): void {}

  login(){
    console.log(this.email + " " +  this.password)
  }
}
