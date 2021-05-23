import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  getUser(userData){
    const path=`${environment.urlApi}/register`;
    const response=this.http.post(path,userData);
    return response;
  }

  createUser(registerUserData){
    const path=`${environment.urlApi}/register`;
    const response=this.http.post(path,registerUserData,{responseType: 'text'});
    return response;
  }
}
