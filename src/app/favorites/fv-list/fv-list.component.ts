import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { Favorite } from '../fv-dashboard/fv-dashboard.component';
import { FvItemComponent } from '../fv-item/fv-item.component';

@Component({
  selector: 'app-fv-list',
  imports: [FvItemComponent],
  templateUrl: './fv-list.component.html',
  styleUrl: './fv-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FvListComponent {
  items = input.required<Array<Favorite>>();

  updateFavorites = output<number>();

  favoriteList = computed(() => this.items().reduce((acc, item) => {
    if (item.isFavorite) {
      return acc.concat(item.id);
    }
    return acc;
  }, [] as number[]));  // [2,3]

}
