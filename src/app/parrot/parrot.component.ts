import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ParrotService } from './../services/parrot/parrot.service';

@Component({
  selector: 'app-parrot',
  templateUrl: './parrot.component.html',
  styleUrls: ['./parrot.component.css']
})
export class ParrotComponent 
implements OnInit {
    
  newMessage: string;
  messageList:  string[] = [];
  content = ''; 
   
  //https://stackoverflow.com/questions/47451177/getting-live-data-from-server-continuosly-and-refelect-changes-in-html-in-angular 
  //https://www.techiediaries.com/angular-9-realtime-chat-example-with-nodejs-socketio-and-websocket/
  
  //constructor() { }
 constructor( private parrotService: ParrotService) {
   //     parrotService.messages.subscribe(msg => {
   //         this.handleIncomingMessages(msg);
   //     });
    }
       
  // handleIncomingMessages(msg) {
      //here comes the data on every change
   //    this.messageList.push(msg);
  //     console.log("Em ParrotComponent msg="+msg);
  //  }
       

  ngOnInit() {
   
      this.parrotService.messages.subscribe((message: string) => {
      //  this.messageList.push(message);
         console.log("Em ParrotComponent msg="+message);
          var date=new Date();
         this.content = date.getHours()+":"+date.getMinutes()+ ":"+date.getSeconds()+ " Parrot: " + message + '\n'+ this.content;
      });
       
  }
  
 //https://github.com/elliotforbes/angular-websockets/blob/master/src/app/app.component.ts
 sendMessage() {
  this.parrotService.messages.next(this.newMessage);
  var date=new Date();
   this.content = date.getHours()+":"+date.getMinutes()+ ":"+date.getSeconds()+ " You: "+this.newMessage +'\n' + this.content;
  this.newMessage = '';
  } 
  
  


  submit(){
  
  }

}