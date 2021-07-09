import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Quote } from './quote';

@Injectable({ providedIn: 'root' })
export class QuoteService {

private quoteUrl = '/jms-quotes-app/api/v1/Quotes/GetQuotes';  // URL to web api
//private queueUrl ='http://35.195.69.137/jms-quotes-app/api/QuotesItems'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) { }  

/** get Quotes  from the server */
   getQuotes():Observable<Quote[]> {
    this.log('fetched quotes');
    return this.http.get<Quote[]>(this.quoteUrl)
    .pipe( 
    tap(x => x.length ? this.log('fetched quotes '+ x[0]):this.log('no quotes')),
    catchError(this.handleError<Quote[]>('getQuotes', [])));
  }
  
   /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.info(`QuoteService: ${message}`);
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  

  

  
}