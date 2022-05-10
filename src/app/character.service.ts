import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Config>('https://rickandmortyapi.com/api/character')
  }

  getCharById(id: number) {
    return this.http.get<SearchResults>(`https://rickandmortyapi.com/api/character/${id}`)
  }
}
interface SearchResults {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: [string],
  url: string,
  created: string
}

interface Config {
  info: Object,
  results: SearchResults[]
}
