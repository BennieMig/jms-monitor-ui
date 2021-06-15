import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarraCimaComponent } from './barra-cima/barra-cima.component';
import { BarraBaixoComponent } from './barra-baixo/barra-baixo.component';
import { CorpoComponent } from './corpo/corpo.component';
import { UniverseComponent } from './universe/universe.component';
import { GoatComponent } from './goat/goat.component';
import { QueuesComponent } from './queues/queues.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UploadJMSComponent } from './uploadjms/uploadjms.component';
import { PesquisaJMSComponent } from './pesquisajms/pesquisajms.component';
import { InterfaceComponent } from './interface/interface.component';
//PL import httpclient module. tb alterado NgModule para incluir HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
  BrowserModule,  
  HttpClientModule, 
  FormsModule ,
  ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: CorpoComponent },
      { path: 'universe', component: UniverseComponent },
       { path: 'queues', component: QueuesComponent },
       { path: 'goat', component: GoatComponent },
       { path: 'queues/uploadjms', component: UploadJMSComponent },
       { path: 'queues/pesquisajms', component: PesquisaJMSComponent },
       { path: 'interface', component: InterfaceComponent },
       { path: '**', component: PageNotFoundComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    BarraCimaComponent,
    CorpoComponent,
    BarraBaixoComponent,
    UniverseComponent,
    GoatComponent,
    QueuesComponent,
    UploadJMSComponent,
    PesquisaJMSComponent,
    InterfaceComponent,
    PageNotFoundComponent,
     ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
