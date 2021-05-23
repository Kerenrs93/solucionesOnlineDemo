import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }

  sendMessage(msj:string){
    const path=`${environment.urlApi}/message`;
    const data=
    { 
      message: msj
    };
    const response=this.http.post(path,data);
    return response;
  }
}
