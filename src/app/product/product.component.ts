import {Component, Input} from '@angular/core';
import {Product} from "../model/product";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product?: Product;

  constructor(private cartService: CartService) {
  }

  addToCart(){
    if (this.product) {
      this.cartService.addProduct(this.product);
    }
  }

}
