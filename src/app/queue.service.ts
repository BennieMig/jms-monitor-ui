import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Queue } from './queue';

@Injectable({ providedIn: 'root' })
export class QueueService {

private queueUrl = 'http://35.189.243.155/jms-monitor-app/api/v1/mon/registos/1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) { }  

/** GET apods from the server */
     getQueues(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.queueUrl)
      .pipe(
        tap(_ => this.log('fetched queues')),
        catchError(this.handleError<Queue[]>('getQueues', []))
      );
  }
  
   /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.info(`QueueService: ${message}`);
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