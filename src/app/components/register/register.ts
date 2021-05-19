import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import {RegisterService} from "../../services/register.service";

@Component({
    selector: 'app-register',
    templateUrl:'./register.html'
})

export class registerComponent implements OnInit {

  form: FormGroup;

  constructor(public registerService:RegisterService) {
    this.buildForm();
  }

  ngOnInit() {
  }
  private buildForm() {
    this.form = new FormGroup({
      nameUser: new FormControl('', [Validators.required]),
      emailRegister: new FormControl('', [Validators.email]),
      passwordRegister: new FormControl('', [Validators.required]),
    });
  }
  registerUser(event:Event){
    event.preventDefault();
    const data = this.form.value;
    this.registerService.registerUserService(data);
  }
}