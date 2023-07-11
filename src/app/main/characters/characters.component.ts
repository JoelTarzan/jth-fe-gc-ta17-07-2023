import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  characters: any;

  constructor(private characterService: CharactersService) {
  }

  ngOnInit(): void {
    this.characterService.getRandomCharacters().subscribe(result => {
      this.characters = result;
    });
  }
}