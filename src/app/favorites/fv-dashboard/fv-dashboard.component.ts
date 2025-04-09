import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { identity } from 'rxjs';
import { FvListComponent } from '../fv-list/fv-list.component';

export type Favorite = {
  id: number;
  content: string;
  isFavorite: boolean;
};

export function generteFavorites(n: number): Favorite[] {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    content: `Favorite content ${i}`,
    isFavorite: false
  }));
};

export function createFavorites(n: number): Favorite[] {
  return [...Array(n).keys()].map(i => ({
    id: i,
    content: `Favorite content ${i}`,
    isFavorite: false
  }));
}


export const favorites: Favorite[] = generteFavorites(10);



@Component({
  selector: 'app-fv-dashboard',
  imports: [FvListComponent],
  templateUrl: './fv-dashboard.component.html',
  styleUrl: './fv-dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FvDashboardComponent {
  favorites = signal<Favorite[]>(favorites);

  updateFavoriteList(id: number) {
    this.favorites.update((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      }
      );
    });
  }

}
