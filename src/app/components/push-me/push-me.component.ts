import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-push-me',
  imports: [],
  templateUrl: './push-me.component.html',
  styleUrl: './push-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PushMeComponent {
  time = 0;

  constructor(private cdr: ChangeDetectorRef) {
    interval(1000).pipe(takeUntilDestroyed()).subscribe(
      {
        next: (value) => {
          this.time = value as number;
          this.cdr.markForCheck();
        }
      }
    );
  }

}


