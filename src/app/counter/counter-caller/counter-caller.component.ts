import { increment } from './../counter.actions';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from '../counter.actions';
import { selectCounter } from '../counter.selectors';

@Component({
  selector: 'app-counter-caller',
  imports: [CommonModule],
  templateUrl: './counter-caller.component.html',
  styleUrl: './counter-caller.component.css'
})
export class CounterCallerComponent {
  store = inject(Store);

  counter$: Observable<number> = this.store.select(selectCounter);

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }

  load() {
    this.store.dispatch(CounterActions.loadCounter())
  }




}
