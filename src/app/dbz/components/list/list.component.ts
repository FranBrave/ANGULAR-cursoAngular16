import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public charList: Character[] = [{
      name: 'Trunks',
      power: 10,
    }]

   @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteChar(id?: string): void {

    if( !id ) return;

   this.onDelete.emit( id );
  }


}
