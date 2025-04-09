import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from './user.service';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {

  // constructor(private actions$: Actions, private userService: UserService) {}
  actions$ = inject(Actions);
  userService = inject(UserService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),  // 監聽 loadUsers action
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),   // 成功則發送 loadUsersSuccess
          catchError(error => of(UserActions.loadUsersFailure({ error }))) // 失敗則發送 loadUsersFailure
        )
      )
    )
  );

}
