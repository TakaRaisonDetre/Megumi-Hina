import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatSidenavModule,
  MatRippleModule
 } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StarRatingModule } from 'angular-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module'

import { HinaProductsComponent } from '../hina-products/hina-products.component';
import { HinaProductsService } from '../hina-products/hina-products.service';
import { HinaProductsRoutes } from '../hina-products/hina-products.routing';
// import { ProductDetailsComponent } from './product-details/product-details.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatMenuModule,
      MatSlideToggleModule,
      MatChipsModule,
      MatCheckboxModule,
      MatRadioModule,
      MatRippleModule,
      MatTabsModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatListModule,
      MatSidenavModule,
      StarRatingModule,
      NgxPaginationModule,
      NgxDatatableModule,
      RouterModule.forChild(HinaProductsRoutes),
      SharedModule
    ],
    declarations: [
     HinaProductsComponent
    ],
    providers: [HinaProductsService]
  })
  export class HinaProductsModule { }
  