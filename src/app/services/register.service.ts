import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private api="http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }


  getUser(userData){
    const path=`${this.api}/register`;
    //const response=this.http.get(path,userData,{responseType: ''});
    const response=this.http.post(path,userData);
    return response;
  }

  createUser(registerUserData){
    const path=`${this.api}/register`;
    // let encoded_data = JSON.stringify({registerUserData});
     console.log(registerUserData);
    const response=this.http.post(path,registerUserData,{responseType: 'text'});
    return response;
  }
}
