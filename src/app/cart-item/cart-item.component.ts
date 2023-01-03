import {Component, Input} from '@angular/core';
import {ProductCommand} from "../model/productCommand";

@Component({
  selector: 'CartItem',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  productCommand: ProductCommand | undefined;
}
