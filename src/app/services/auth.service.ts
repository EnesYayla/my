import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  realApiUrl = 'https://localhost:44314/api/auth';
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<ResponseModel<TokenModel>>(this.apiUrl+"loggin",loginModel)
    
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
