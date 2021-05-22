import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api="http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }
  
  getPosts(idUser){
    const path=`${this.api}/post/${idUser}`;
    const response=this.http.get(path);
    return response;
  }
}
