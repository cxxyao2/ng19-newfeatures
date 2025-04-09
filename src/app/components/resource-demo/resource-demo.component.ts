import { Component, resource, signal } from '@angular/core';
import { User } from '@app/user/user.model';

export const API_URL = 'https://jsonplaceholder.typicode.com';

@Component({
  selector: 'app-resource-demo',
  imports: [],
  template: `<input (input)="search($event)" placeholder="Search user..."/>
    
  <br />
  <ul>
    @let error = users.error();
    @if (error) {
      <p>{{ error }}</p>
    }

    @if (users.isLoading()) {
      <p>Loading Users...</p>
    }

    @for (user of users.value(); track user.id) {
      <li> {{ user.username }}</li>
    } @empty {
      <p>No Users!</p>
    }
  </ul>`,
  styleUrl: './resource-demo.component.css'
})
export class ResourceDemoComponent {
  // https://jsonplaceholder.typicode.com/todos?userId=2
  // https://jsonplaceholder.typicode.com/users?email=Shanna@melissa.tv
  query = signal<string>("");

  // The resource can be typed as follows:
  // resource<response type, request type>
  users = resource<User[], string>({
    request: () => this.query(),
    loader: async ({ request, abortSignal }): Promise<User[]> => {
      const response = await fetch(`${API_URL}/users?email=${request}`, {
        signal: abortSignal,
      });

      if (!response.ok) throw new Error("Unable to load users!");
      return (await response.json());
    },
  });

  search(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.query.set(value);

    // this.users.reload();
  }
}
