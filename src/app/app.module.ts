import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BarraCimaComponent } from './barra-cima/barra-cima.component';

//PL import httpclient module. tb alterado NgModule para incluir HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule,  
  HttpClientModule, 
  FormsModule ,
  ReactiveFormsModule,
    RouterModule.forRoot([
  
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    BarraCimaComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
