import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../user.actions';
import * as UserSelectors from '../user.selectors';
import { User } from '../user.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ParentComponent } from '@app/components/parent/parent.component';

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe, CommonModule, ParentComponent],
  template: `
    <h2>User List</h2>
    <button (click)="loadUsers()">Load Users</button>
    <div *ngIf="error$ | async as error">
      <p style="color:red;">Error: {{ error }}</p>
    </div>
    <ul>
      <li *ngFor="let user of users$ | async">
        {{ user.name }}
      </li>
    </ul>
  `
})
export class UserListComponent implements OnInit {

  users$!: Observable<User[]>;
  error$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.users$ = this.store.select(UserSelectors.selectAllUsers);
    this.error$ = this.store.select(UserSelectors.selectUserError);
  }

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }
}
