import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

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

  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(): Promise<Character[]> {
    //this.characters = this.characterService.getChar();
    return this.characters = this.characterService.gerRes();
  }

}
