import { Injectable } from '@angular/core';
import {Product} from "../../model/product";
import {ProductCommand} from "../../model/productCommand";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productCommands: ProductCommand[] = [];


  constructor() { }

  getProductCommands(): ProductCommand[] {
    return this.productCommands;
  }

  addProduct(product: Product){
    if (!this.isProductInCart(product)){
      let newProductCommand: ProductCommand = {product: product, quantity: 1};
      this.productCommands.push(newProductCommand);
    }
  }

  removeProduct(product: Product) {
    let newCart: ProductCommand[] = [];
    for (const productCommand of this.productCommands) {
      if (productCommand.product?.id != product.id){
        newCart.push(productCommand);
      }
    }
    this.productCommands = newCart;
  }

  isProductInCart(product: Product): boolean{
    for (const productCommand of this.productCommands) {
      if (product.id == productCommand.product?.id){
        return true;
      }
    }
    return false;
  }

  isCartEmpty(){
    return this.productCommands.length==0;
  }

  getCommandCount(): number{
    return this.productCommands.length;
  }

}
