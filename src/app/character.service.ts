import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl = 'https://rickandmortyapi.com/api/character'


  public charSubject = new BehaviorSubject<Character[]>([]);
  public charDetailSubject = new BehaviorSubject<Character>(null);
  public topCharSubject = new BehaviorSubject<Character[]>([]);

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Config>(this.apiUrl).pipe(
      tap((res) => {
        this.charSubject.next(res.results)
      })
    ).subscribe();
  }

  getCharById(id: number) {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`).pipe(
      tap(res => {
        this.charDetailSubject.next(res)
      })
    ).subscribe();
  }

  getTopChar() {
    return this.http.get<Config>(this.apiUrl).pipe(
      tap(res => {
        this.topCharSubject.next(res.results.slice(0, 5))
      })
    ).subscribe();
  }
}

interface Config {
  info: Object,
  results: Character[]
}
