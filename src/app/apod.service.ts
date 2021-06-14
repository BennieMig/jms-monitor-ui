import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Apod } from './apod';

@Injectable({ providedIn: 'root' })
export class ApodService {

private apodUrl = 'http://35.241.230.139/jms-monitor-app/api/v1/apod/count/1';
//private apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

constructor(private http: HttpClient) { }  


/*
https://angular.io/guide/http 
*/

     getApods():Observable<Apod[]> {
    this.log('fetched apodss');
    return this.http.get<Apod[]>(this.apodUrl)
    .pipe( 
    tap(x => x.length ? this.log('fetched apods '+ x[0]):this.log('no apods')),
    catchError(this.handleError<Apod[]>('getApods', [])));
  }
  
  
/*
 
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
  */


  
  /*
  getSyncApods(): void {
    this.http.get<Apod[]>(this.apodUrl);
   }*/
      

  
  
   /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.info(`ApodService: ${message}`);
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