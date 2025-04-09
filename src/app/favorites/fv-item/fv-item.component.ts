import { ChangeDetectionStrategy, Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { Favorite } from '../fv-dashboard/fv-dashboard.component';

@Component({
  selector: 'app-fv-item',
  imports: [],
  templateUrl: './fv-item.component.html',
  styleUrl: './fv-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FvItemComponent {
  favorite = input.required<Favorite>({ alias: 'item' });
  updateFavorites = output<number>();

  favoriteBgColor = computed(() => {
    return this.favorite().isFavorite ? 'yellow' : 'transparent';
  }
  );

  printItem() {
    console.log(`Favorite item ${this.favorite().id} rendered`);
  }


}
