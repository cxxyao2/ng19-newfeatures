import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { Favorite } from '../fv-dashboard/fv-dashboard.component';

@Component({
  selector: 'app-fv-item',
  imports: [],
  templateUrl: './fv-item.component.html',
  styleUrl: './fv-item.component.css'
})
export class FvItemComponent {
  favorite = input.required<Favorite>({alias:'item'});
  favoriteList = input<number[]>([]);

  updateFavorites = output<number>();

  isFavorite = computed(() => this.favoriteList().includes(this.favorite().id));

  favoriteBgColor = computed(() => this.isFavorite() ? 'green' : 'red');

  printItem(){
    console.log(`Favorite item ${this.favorite().id} rendered`);
  }
   

}
