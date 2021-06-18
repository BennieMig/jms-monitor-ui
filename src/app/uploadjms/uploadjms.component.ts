import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-uploadjms',
  templateUrl: './uploadjms.component.html',
  styleUrls: ['./uploadjms.component.css']
})
export class UploadJMSComponent 
implements OnInit {
   
  constructor() { }

  ngOnInit() {
  }
  
  websiteList: any = ['tutsmake.com', 'abc.com', 'w3alert.com']  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }

}