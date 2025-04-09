import { Component, input, signal } from '@angular/core';
import { Favorite } from '../fv-dashboard/fv-dashboard.component';
import { FvItemComponent } from '../fv-item/fv-item.component';

@Component({
  selector: 'app-fv-list',
  imports: [FvItemComponent],
  templateUrl: './fv-list.component.html',
  styleUrl: './fv-list.component.css'
})
export class FvListComponent {
  items = input.required<Array<Favorite>>();

  favoriteList = signal<number[]>([]);

  updateFavoriteList(id:number){
    const isRemoved = this.favoriteList().includes(id);

    if (isRemoved) {
      this.favoriteList.update((prev) => prev.filter((item) => item !== id));
    } else {
      this.favoriteList.update((prev) => [...prev, id]);
    }
  }

}
