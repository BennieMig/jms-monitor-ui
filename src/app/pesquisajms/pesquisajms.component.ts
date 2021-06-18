import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from './../services/jms/queue';
import { QueueService } from './../services/jms/queue.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

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
    this.queueService.getQueues().subscribe(queues => this.queues= queues );
  }
  
  
  form = new FormGroup({
    queue: new FormControl('', Validators.required)
  });
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }

}