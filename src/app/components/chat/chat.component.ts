import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';
import { environment } from 'src/environments/environment';
import {ChatService} from '../../services/chat.service';
import {Imessage} from  '../../interfaces/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  echo:Echo;
  inputMessage:string;
  messages:Imessage[]=[];
  constructor(public chatService: ChatService) 
  {
    this.echo=new Echo({
      broadcaster: 'pusher',
      key: environment.pusherKey,
      wsHost: environment.pusherHost,
      cluster: environment.pusherCluster,
      authEndpoint: `${environment.urlApi}/broadcasting/auth`,
      wsPort: 6001,
      forceTLS: false,
      disableStats: true,
      enabledTransports:['ws']
    });
   }

  ngOnInit(): void {
    this.echo.private('channel-chat')
    .listen('chatEvent',(resp)=>{
      let message: Imessage={
        message:this.inputMessage,
        me:false
      }
    })
  }

  sendMessage(){
    this.chatService.sendMessage(this.inputMessage)
    .subscribe((resp:any)=>{
      let message: Imessage={
        message:this.inputMessage,
        me:true
      }
      this.inputMessage='';
      this.messages.push(message);
      console.log(this.messages);
    })
  }

}
