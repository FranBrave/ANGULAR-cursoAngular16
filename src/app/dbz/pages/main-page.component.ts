import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html'
})

export class MainPageComponent implements OnInit {

  constructor( private dbzservice: DbzService ) { }


  get characters(): Character[] {
    return [ ...this.dbzservice.character ]
  }

  onDeleteChar( id: string ): void {
    this.dbzservice.deleteCharById( id )
  }

  onNewChar ( character: Character ): void {
    this.dbzservice.addChar( character )
  }

  ngOnInit() { }
}
