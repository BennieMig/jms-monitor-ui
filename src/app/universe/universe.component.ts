import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../apod';
import { ApodService } from '../apod.service';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.css']
})
export class UniverseComponent implements OnInit {
    
    apods: Apod[] = [];

  constructor(private apodService: ApodService ) { }


  ngOnInit(): void {
    this.getApods();
     //  this.getSyncApods();
    //   setTimeout(() => {hideloader()}, 5000);    
     //  function hideloader() {
  
            // Setting display of spinner
            // element to none
         //   document.getElementById('loading').style.display = 'none';
    //    } 
        
  } 
  
  /*
  ngOnInit(): Apod[] {
      return this.getSyncApods();
     
  }  */

 getApods(): void {
    this.apodService.getApods().subscribe(apods => this.apods = apods.slice(0,1));
  }
  
  // getSyncApods(): void  {
  // this.apodService.getSyncApods();
// }



}