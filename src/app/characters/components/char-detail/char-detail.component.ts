import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/character';
import { CharacterService } from 'src/app/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-char-detail',
  templateUrl: './char-detail.component.html',
  styleUrls: ['./char-detail.component.css']
})
export class CharDetailComponent implements OnInit {
  @Input() character?: Character;

  constructor(
    public characterServise: CharacterService,
    private route: ActivatedRoute,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.charDetail();
  }

  charDetail() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterServise.getCharById(id)
  }

  goBack(): void {
    this.location.back();
  }

}
