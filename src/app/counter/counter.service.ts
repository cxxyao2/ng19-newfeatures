import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CounterService {
    loadCounterFromApi(): Observable<number> {
        return of(42).pipe(delay(1000));
    }
}