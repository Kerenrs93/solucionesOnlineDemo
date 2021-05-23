import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
  getPosts(idUser){
    const path=`${environment.urlApi}/post/${idUser}`;
    const response=this.http.get(path);
    return response;
  }
}
