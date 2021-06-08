import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from '../queue';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.css']
})
export class QueuesComponent implements OnInit {
    
    queues: Queue[] = [];

  constructor(private queueService: QueueService ) { }

  ngOnInit(): void {
      this.getQueues();
       setTimeout(() => {hideloader()}, 5000);    
       function hideloader() {
  
            // Setting display of spinner
            // element to none
         //   document.getElementById('loading').style.display = 'none';
        } 
        

  }
  
          getQueues(): void {
    this.queueService.getQueues().subscribe(queues => this.queues = queues.slice(1, 1));
  }
}