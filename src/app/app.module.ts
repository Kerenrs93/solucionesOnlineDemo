import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// Components
import { AppRoutingModule } from './app-routing.module';
import { menuComponent } from './components/menu/menu';
import {loginComponnet} from './components/login/login';
import {registerComponent} from './components/register/register';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';


@NgModule({
  declarations: [
    AppComponent,
    menuComponent,
    loginComponnet,
    registerComponent,
    PostComponent,
    ChatComponent,
    ChatMessagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
