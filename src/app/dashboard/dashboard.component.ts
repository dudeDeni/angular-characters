import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private characterService: CharacterService,
    private jokesService: JokesService
    ) { }

  ngOnInit(): void {
    this.getCharacters();
    
    this.jokesService.getRandomJoke().pipe().subscribe(data => { console.log(data)})
  }

  getCharacters(): void {
    this.characterService.getData()
      .subscribe(data => this.characters = data.results.slice(0, 5));
  }

}
