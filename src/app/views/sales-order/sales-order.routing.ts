import { Routes } from '@angular/router';
import { SoListsComponent } from './so-lists/so-lists.component';
import { SoDetailComponent } from './so-detail/so-detail.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';

export const SORoutes: Routes = [{
    path: '',
    children: [{
      path: '',
      component: SoListsComponent
    }, {
      path: '発注書/:id',
      component: SoDetailComponent,
      data: { title: '発注書', breadcrumb: '発注書詳細' }
    }]
  }]