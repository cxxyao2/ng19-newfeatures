import { HttpClient } from '@angular/common/http';
import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { User } from '@app/user/user.model';
import { catchError, debounce, debounceTime, distinctUntilChanged, map, throttle } from 'rxjs';

export const API_URL = 'https://jsonplaceholder.typicode.com';

@Component({
  selector: 'app-rx-resource-demo',
  imports: [],
  template: `<input (input)="search($event)" placeholder="Search user..."/>
    
  <br />
  <ul>
    @let error = rxUsers.error();
    @if (error) {
      <p>{{ error }}</p>
    }

    @if (rxUsers.isLoading()) {
      <p>Loading Users...</p>
    }

    @for (user of rxUsers.value(); track user.id) {
      <li> {{ user.username }}</li>
    } @empty {
      <p>No Users!</p>
    }
  </ul>`,
  styleUrl: './rx-resource-demo.component.css'
})
export class RxResourceDemoComponent {

  #http = inject(HttpClient);

  query = signal<string>("");


  rxUsers = rxResource<User[], string | undefined>({
    request: () => this.query(),
    loader: ({ request }) =>
      this.#http.get(`${API_URL}/users?email=${request}`).pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map((response) => response as User[]),
        catchError(() => {
          throw Error('Unable to load!');
        })
      ),
  });

  search(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.query.set(value);

    // this.users.reload();
  }
}

