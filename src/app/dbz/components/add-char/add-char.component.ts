import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-char',
  templateUrl: './add-char.component.html',
  styleUrls: ['./add-char.component.scss']
})
export class AddCharComponent {

  @Output()
  public onNewChar: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  }


  emitChar(): void {
    console.log(this.character);
    if ( this.character.name.length === 0) return;

    this.onNewChar.emit(this.character)

  this.character = { name: '', power: 0}
}

}
