import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProductComponent} from "./list-product/list-product.component";
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/catalog', pathMatch: 'full'},
  {path: 'catalog', component: ListProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  //{path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
