import * as Rx from 'rxjs';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';


//https://github.com/elliotforbes/angular-websockets/blob/master/src/app/websocket.service.ts

@Injectable({ providedIn: 'root' })
export class WebSocketService {

    private subject: Rx.Subject<MessageEvent>;

    public connect(url: string): Rx.Subject<MessageEvent> {
        this.log("Em connect");
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject
    }

    private create(url: string): Rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });

        let observer = {
           // next: (data: Object) => {
               next: (data: any) => {
                if (ws.readyState === WebSocket.OPEN) {
                  //  ws.send(JSON.stringify(data));
                   ws.send(data);
                }
            }
        };

        return Rx.Subject.create(observer, observable);
    }
    
 
  private log(message: string) {
    console.info(`WebSocketService: ${message}`);
  }



}