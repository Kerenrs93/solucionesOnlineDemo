import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private id:number;
  public dataPost;
  constructor(public postService:PostService, private route:ActivatedRoute,public router:Router) 
  { 

    this.loadPost();
  }

  ngOnInit(): void {
  }

  loadPost(){
    this.id=parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.postService.getPosts(this.id)
    .subscribe((post)=>{
      this.dataPost= post['service'];
    });
  }

  loadChat(idUser, idService){
    this.router.navigate([`/chat/${this.id}/${idUser}/${idService}`], {relativeTo: this.route});
    //USAR localstorage.setItems para guardar el nombre del servicio publicado
  }
}
