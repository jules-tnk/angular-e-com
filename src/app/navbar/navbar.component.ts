import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private cartService: CartService) {
  }

  getCommandCount():number{
    return this.cartService.getCommandCount();
  }

}
