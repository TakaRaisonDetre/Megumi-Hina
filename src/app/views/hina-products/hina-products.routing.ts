import { Routes } from '@angular/router';
// import { ProductsComponent } from './products/products.component';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';
import { HinaProductsComponent } from './hina-products.component';


export const HinaProductsRoutes: Routes = [{
    path: '',
    children: [{
      path: '',
      component: HinaProductsComponent
    }, ]
  }]