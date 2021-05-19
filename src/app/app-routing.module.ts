import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginComponnet} from './components/login/login';
import {registerComponent} from './components/register/register';
const routes: Routes = [
  { path: 'login', component: loginComponnet },
  { path: 'register', component: registerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
