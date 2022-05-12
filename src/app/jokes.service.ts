import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  apiUrl = 'https://api.chucknorris.io/jokes/random'


  public jokeResponse = new BehaviorSubject<Joke>(null);
  public jokeCategory = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { }

  public getRandomJoke() {
    return this.http.get<Joke>(this.apiUrl).pipe(
      tap(response => {
        this.jokeResponse.next(response)
      })
    ).subscribe()
  }

  public getJokeCategory() {
    return this.http.get<any>("https://api.chucknorris.io/jokes/random?category={music}").pipe(
      tap(res => {
        this.jokeCategory.next(res)
      })
    ).subscribe()
  }

}
