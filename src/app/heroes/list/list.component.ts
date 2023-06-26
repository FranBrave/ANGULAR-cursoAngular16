import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

public heroNames: string[] = ['Spiderman', 'Thor', 'Ironman', 'Captain America', 'Black Widow'];
public deletedHero?: string;

removeLastHero(): void {
  this.deletedHero = this.heroNames.pop();
}

}
