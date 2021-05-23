import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginComponnet} from './components/login/login';
import {registerComponent} from './components/register/register';
import {PostComponent} from './components/post/post.component';
import {ChatComponent} from './components/chat/chat.component'

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'login', component: loginComponnet },
  { path: 'register', component: registerComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'chat/:id/:idUser/:idpost', component: ChatComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
