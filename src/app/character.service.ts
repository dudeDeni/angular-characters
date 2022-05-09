import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  totalAngularPackages: SearchResults[] = []
  errorMessage: string = '';
  

  constructor(private http: HttpClient) { }

  getChar(): Character[] {
    return CHARACTERS;
  }
  async gerRes(): Promise<SearchResults[]> {
    await this.http.get<SearchResults[]>('https://rickandmortyapi.com/api/character/1,183').subscribe({
      next: data => {
          this.totalAngularPackages = data;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
    console.log(this.totalAngularPackages)
    return this.totalAngularPackages
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
