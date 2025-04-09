import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { map, mergeMap } from 'rxjs';

import { CounterService } from './counter.service';
import * as CounterActions from './counter.actions';



@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions, private service: CounterService) { }

    loadCounter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CounterActions.loadCounter),
            mergeMap(() =>
                this.service.loadCounterFromApi().pipe(
                    map(value => CounterActions.loadCounterSuccess({ value }))
                )
            )
        )
    );



}