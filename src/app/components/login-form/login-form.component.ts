import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ]),
  ],
})
export class LoginFormComponent implements OnInit {
  private fb = new FormBuilder();
  loginForm = this.fb.nonNullable.group({
    email: 'bar@gmail.com',
    password: '1222',
    profile: 'good tree, good spring, good winter',
    price: new FormControl(0, {
      validators: [Validators.required, Validators.pattern(/^\d{0,8}(\.\d{0,2})?$/)],
    })
  });

  get priceControl() {
    return this.loginForm.get('price') as FormControl;
  }

  ngOnInit(): void {
    this.loginForm.get("email")?.valueChanges
      .pipe(
        debounceTime(300), // Optional: Add a debounce time to limit the number of emissions
        distinctUntilChanged(), // Optional: Emit only when the value changes
        filter(value => value.length > 0), // Optional: Filter out empty values
        map(value => value.toLowerCase()) // Optional: Transform the value (e.g., convert to uppercase)

        // debounceTime(300), // Optional: Add a debounce time to limit the number of emissions
        // distinctUntilChanged(), // Optional: Emit only when the value changes
        // filter(value => value.length > 0), // Optional: Filter out empty values
        // map(value => value.toUpperCase()) // Optional: Transform the value (e.g., convert to uppercase)
      )
      .subscribe((value) => {
        console.log('Email changed:', value);
        console.log(value);
      });
  }

  onSubmit() {
    // Process login form submission
    console.log(this.loginForm.value);
    // Add your login logic here (e.g., API call)
    this.loginForm.reset(); // Reset the form after submission

  }

}

