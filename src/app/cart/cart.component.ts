import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductCommand} from "../model/productCommand";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  productCommands: ProductCommand[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productCommands = this.cartService.getProductCommands();
  }

  addToCart(product: Product){
    this.cartService.addProduct(product);
  }

  removeFromCart(product: Product){
    this.cartService.removeProduct(product);
    this.ngOnInit();
  }

}
