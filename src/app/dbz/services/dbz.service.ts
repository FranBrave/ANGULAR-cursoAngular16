import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public character: Character[] = [
    {
    id: uuid(),
    name: 'Krillin',
    power: 1000,
    },
    {
      id: uuid(),
      name: 'Gokuh',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Veggeta',
      power: 7500,
    }
  ];

addChar( character: Character ): void {

  const newChar: Character = { id: uuid(), ...character }

this.character.push(newChar);
}

// onDeleteChar ( index: number ) {
// this.character.splice(index, 1);

deleteCharById(id: string){
  this.character = this.character.filter( character => character.id !== id )
}


  constructor() { }


}
