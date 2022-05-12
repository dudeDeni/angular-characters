import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  apiUrl = 'https://api.chucknorris.io/jokes/random'

  private _jokeResponse = new BehaviorSubject<Joke>({
    icon_url: "",
    id: "",
    url: "",
    value: ""
  });

  readonly jokeResponse = this._jokeResponse.asObservable();

  constructor(private http: HttpClient) { }

  public getRandomJoke(): Observable<Joke> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => {
        this._jokeResponse.next(response)
      })
    )
  }
  
}
