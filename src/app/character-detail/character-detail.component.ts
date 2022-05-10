import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character?: Character;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getChar();
  }

  getChar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.characterService.getCharById(id)
      .subscribe(char => this.character = char);
  }

  goBack(): void {
    this.location.back();
  }
}
