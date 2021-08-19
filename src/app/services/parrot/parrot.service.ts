import * as Rx from 'rxjs';
import { EMPTY, Subject } from 'rxjs';
import { WebSocketService } from './websocket.service';
import { WsObject } from './ws-object';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

//Injectabel error https://angular.io/errors/NG0201

@Injectable({ providedIn: 'root' })
export class ParrotService {

  //  private websocketUrl= "ws://benniemig.mywire.org/jms-monitor-app/wsock/v1/info/you"; 
    private websocketUrl= "ws://benniemig.mywire.org/jms-monitor-app/wsock/v1/info/"+UUID.UUID(); 
    public messages: Subject<String>;

   constructor( private websocketService: WebSocketService ) {
        this.log("Em constructor");
        this.messages = <Subject<String>>websocketService.connect(this.websocketUrl).pipe(map((response: MessageEvent): String=> {
        let data = response.data;
        return data;
        }
        )
    )
    }
    
    
     private log(message: string) {
    console.info(`ParrotService: ${message}`);
  }
  
 
    
    }
