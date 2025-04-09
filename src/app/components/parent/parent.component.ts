import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '@app/models/product.interface';
import { ParentChildComponent } from "../parent-child/parent-child.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [FormsModule, ParentChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  myModel: Product = {
    name: 'Superman',
    age: 30,
    favoriteColor: 'blue',
    price: 12
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToItems() {
    this.router.navigate(['' + this.myModel.age], { relativeTo: this.route });
  }

}
