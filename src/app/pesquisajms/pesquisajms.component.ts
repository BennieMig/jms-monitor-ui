import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Queue } from './../services/jms/queue';
import { QueueService } from './../services/jms/queue.service';

@Component({
  selector: 'app-pesquisajms',
  templateUrl: './pesquisajms.component.html',
  styleUrls: ['./pesquisajms.component.css']
})
export class PesquisaJMSComponent implements OnInit {
   
    queues: Queue[] = [];
   
  constructor(private queueService: QueueService) { }

  ngOnInit() {
      this.getQueues();
  }

 getQueues(): void {
    this.queueService.getQueues().subscribe(queues => this.queues= queues.slice(0,1) );
  }

}