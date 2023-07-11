import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {
  }

  // Devuelve un personaje buscandolo por Id
  getCharacterById(id: number) {
    return this.http.get(this.endpoint + id);
  }

  // Devuelve 8 personajes aleatorios
  getRandomCharacters() {
    const randomIds: string = this.getRandomIds().join();

    return this.http.get(this.endpoint + randomIds);
  }

  // Genera 8 numeros aleatorios del 1 al 826, nº de personajes en la API
  private getRandomIds(): number[] {
    const randomIds: number[] = [];

    while (randomIds.length != 8) {
      const randomId = Math.floor(Math.random() * 826) + 1;

        if (!randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
    }

    return randomIds;
  }

}
