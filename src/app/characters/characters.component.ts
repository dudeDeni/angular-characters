import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private characterService: CharacterService) {
    this.characterService.getData().subscribe(data => {
      console.log(data)
      this.characters = data.results;
    })
  }

  ngOnInit(): void {

  }

}
