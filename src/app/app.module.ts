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
import { ParrotComponent } from './parrot/parrot.component';
import { UploadJMSComponent } from './uploadjms/uploadjms.component';
import { PesquisaJMSComponent } from './pesquisajms/pesquisajms.component';
import { InterfaceComponent } from './interface/interface.component';
import { PulseComponent } from './pulse/pulse.component';
import { MongoComponent } from './mongo/mongo.component';
import { ToolsComponent } from './tools/tools.component';
import { GrafanaComponent } from './grafana/grafana.component';
import { PrometheusComponent } from './prometheus/prometheus.component';
import { SwaggerUIComponent } from './swaggerui/swaggerui.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertWebComponent } from './alertweb/alertweb.component';
import { AlertEmailComponent } from './alertemail/alertemail.component';
import { SwaggerUIJavaComponent } from './swaggeruijava/swaggeruijava.component';
import { SwaggerUIJava2Component } from './swaggeruijava2/swaggeruijava2.component';
import { SwaggerUIDotNetCoreComponent } from './swaggeruidotnetcore/swaggeruidotnetcore.component';
import { GraphQLUIComponent } from './graphqlui/graphqlui.component';
//PL import httpclient module. tb alterado NgModule para incluir HttpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
  BrowserModule,  
  HttpClientModule, 
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: CorpoComponent },
      { path: 'universe', component: UniverseComponent },
       { path: 'queues', component: QueuesComponent },
        { path: 'tools', component: ToolsComponent },
        { path: 'tools/mongo', component: MongoComponent },
       { path: 'goat', component: GoatComponent },
       { path: 'queues/uploadjms', component: UploadJMSComponent },
       { path: 'queues/pesquisajms', component: PesquisaJMSComponent },
       { path: 'queues/parrot', component: ParrotComponent },
       { path: 'interface', component: InterfaceComponent },
       { path: 'pulse', component: PulseComponent },
       { path: 'pulse/grafana', component: GrafanaComponent },
       { path: 'pulse/prometheus', component: PrometheusComponent },
       { path: 'interface/swaggerui', component: SwaggerUIComponent },
       { path: 'pulse/alerts', component: AlertsComponent },
       { path: 'pulse/alerts/alertweb', component: AlertWebComponent },
       { path: 'pulse/alerts/alertemail', component: AlertEmailComponent },
       { path: 'interface/swaggerui/swaggeruijava', component: SwaggerUIJavaComponent }, 
       { path: 'interface/swaggerui/swaggeruijava2', component: SwaggerUIJava2Component },  
       { path: 'interface/swaggerui/swaggeruidotnetcore', component: SwaggerUIDotNetCoreComponent },
       { path: 'interface/graphqlui', component: GraphQLUIComponent },
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
    MongoComponent,
    ToolsComponent,
    ParrotComponent,
    UploadJMSComponent,
    PesquisaJMSComponent,
    InterfaceComponent,
    PulseComponent,
    GrafanaComponent,
    PrometheusComponent,
    SwaggerUIComponent,
    AlertsComponent,
    AlertWebComponent,
    AlertEmailComponent,
    SwaggerUIJavaComponent,
    SwaggerUIJava2Component,
    SwaggerUIDotNetCoreComponent,
    GraphQLUIComponent,
    PageNotFoundComponent,
     ],
  
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
