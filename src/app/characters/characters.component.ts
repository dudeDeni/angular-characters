import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-data'; 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  selectedHero?: Character;

  onSelect(char: Character): void {
    this.selectedHero = char;
  }

  characters = CHARACTERS;

  constructor() { }

  ngOnInit(): void {
  }

}
