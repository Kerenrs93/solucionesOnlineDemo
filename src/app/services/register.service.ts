import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  registerUserService(registerUserData){
    console.log("entro al service");
    console.log(registerUserData);
  }
}
