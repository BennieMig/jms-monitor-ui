import { HttpClient, HttpHeaders } from '@angular/common/http';

private apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1';  // URL to web api

constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
  
 
}