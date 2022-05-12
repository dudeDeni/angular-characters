import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/character.service';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.css']
})
export class CharListComponent implements OnInit {

  constructor(public characterServise: CharacterService) { }

  ngOnInit(): void {
    this.characterServise.getCharacters()
  }

}
