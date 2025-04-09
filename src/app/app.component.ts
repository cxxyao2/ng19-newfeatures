import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { ProductFormComponent } from "./components/product-form/product-form.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, LoginFormComponent, ProductFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'no-ssr';

  initProduct = {
    name: 'Wizard',
    age: 25,
    favoriteColor: 'blue',
  }

  productId = 2;

}
