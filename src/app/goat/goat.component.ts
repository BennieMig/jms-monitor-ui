import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './../services/quote/quote';
import { QuoteService } from './../services/quote/quote.service';

@Component({
  selector: 'app-goat',
  templateUrl: './goat.component.html',
  styleUrls: ['./goat.component.css']
})
export class GoatComponent implements OnInit {
    
    quotes: Quote[] = [];
    
   constructor(private quoteService: QuoteService ) { }
  ngOnInit(){
       this.getQuotes();
      }
  
 getQuotes(): void {
    this.quoteService.getQuotes().subscribe(quotes => this.quotes= quotes.slice(0,1) );
  }
  

}