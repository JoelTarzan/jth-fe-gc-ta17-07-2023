import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number | null = null;
  characters: any[] = [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Earth",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Male",
      "origin": "Citadel of Ricks",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      "id": 4,
      "name": "Beth Smith",
      "status": "Dead",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      "id": 5,
      "name": "Jerry Smith",
      "status": "Dead",
      "species": "Human",
      "gender": "Male",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth",
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
      "id": 14,
      "name": "Alien Morty",
      "status": "unknown",
      "species": "Alien",
      "gender": "Male",
      "origin": "unknown",
      "location": "Citadel of Ricks",
      "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
    },
    {
      "id": 245,
      "name": "Mrs. Lipkip",
      "status": "Alive",
      "species": "Human",
      "gender": "Female",
      "origin": "Earth (Replacement Dimension)",
      "location": "Earth (Replacement Dimension)",
      "image": "https://rickandmortyapi.com/api/character/avatar/245.jpeg"
    },
    {
      "id": 531,
      "name": "Tony",
      "status": "Dead",
      "species": "Alien",
      "gender": "Male",
      "origin": "unknown",
      "location": "Mount Space Everest",
      "image": "https://rickandmortyapi.com/api/character/avatar/531.jpeg"
    },
  ];
  characterSelected: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.characters.findIndex(character => {
      if (character.id == this.id) {
        this.characterSelected = character;
      }
    });
  }
}