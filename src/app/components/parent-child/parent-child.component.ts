import { ChangeDetectionStrategy, Component, EventEmitter, input, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/models/product.interface';

@Component({
  selector: 'app-parent-child',
  imports: [],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentChildComponent implements OnChanges {

  @Input({ required: true }) set initProduct(product: any) {
    if (product) {
      this._initProduct = product;
    }
  }

  productVendor = input.required<string>();

  @Output() initProductChange = new EventEmitter<Product>();

  private _initProduct: Product | null = null;
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log('productId is ', params['productId']);
    });
    // this._initProduct = {  
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent component changes:', changes);
  }

  // get, setter
  get initProduct(): Product | null {
    return this._initProduct;
  }

  onProductChange(product: Product) {
    this._initProduct = product;
    this.initProductChange.emit(this._initProduct);
  }



}
