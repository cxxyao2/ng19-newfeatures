import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface Product {
  name: string;
  age: number;
  favoriteColor: string;
  price: number;
}

@Component({
  selector: 'app-product-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {

  @Input() set initProduct(product: any) {
    if (product) {
      this.product = product;
    }
  }

  initCustomer = input.required<number>();

  priceRegex = '^\\d{0,8}(\\.\\d{0,2})?$'; // Regular expression pattern for price (only numbers)

  onPriceChange(value: string) {
    const inputValue = value;
    const regex = new RegExp(this.priceRegex);
    console.log(inputValue);
    if (!regex.test(inputValue)) {
      value = inputValue.slice(0, -1); // Remove the last character if it doesn't match the regex
    }
    // console.log(inputValue);
  }

  product: Product = {
    name: 'Superman',
    age: 30,
    favoriteColor: 'blue',
    price: 12
  }

  onSubmit() {
    // Process product form submission
    console.log(this.product);
    // Add your product logic here (e.g., API call)
    // this.productForm.reset(); // Reset the form after submission
  }

}
