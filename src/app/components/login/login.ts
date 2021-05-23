import { Component,OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {RegisterService} from "../../services/register.service";


@Component({
    selector:'app-login',
    templateUrl:'./login.html',
    styleUrls:['./login.css']
})

export class loginComponnet implements OnInit 
{
    formLogin: FormGroup;
    constructor(public registerService:RegisterService, public router:Router,) {
        this.form();
    }

  ngOnInit() {
  }
  private form(){
      this.formLogin = new FormGroup({
      nameLogin: new FormControl('', [Validators.required]),
      passwordLogin: new FormControl('', [Validators.required]),
    });
  }

  validateUser(event:Event){
      event.preventDefault();
      const user={
        nameUser:this.formLogin.get('nameLogin').value, 
        passwordUser:this.formLogin.get('passwordLogin').value
      }
      this.registerService.getUser(user)
      .subscribe((User)=>{
        User['user'][0]=== undefined ? alert('Usuario incorrecto') : this.router.navigateByUrl(`post/${User['user'][0]['idUser']}`);
    });
  }
}

