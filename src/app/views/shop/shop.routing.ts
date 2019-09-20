import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const ShopRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ProductsComponent
  }, {
    path: 'products/:id',
    component: ProductDetailsComponent,
    data: { title: 'Detail', breadcrumb: 'Detail' }
  }, {
    path: 'cart',
    component: CartComponent,
    data: { title: 'Cart', breadcrumb: 'CART' }
  }, {
    path: 'checkout',
    component: CheckoutComponent,
    data: { title: 'Checkout', breadcrumb: 'CHECKOUT' }
  }]
}]