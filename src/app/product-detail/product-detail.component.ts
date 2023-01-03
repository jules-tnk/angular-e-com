import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../model/product';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product/product.service";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  @Input()
  product?: Product;

  constructor(private route: ActivatedRoute,
              protected productService: ProductService,
              protected cartService: CartService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(
      product => this.product = product
    );
  }

  addToCart(){
    if (this.product) {
      this.cartService.addProduct(this.product);
    }
  }

}
