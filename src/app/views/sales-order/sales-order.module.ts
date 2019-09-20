import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/core/core.module';
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

import { SoListsComponent } from './so-lists/so-lists.component';
import { SORoutes } from './sales-order.routing';
import { SOService } from './sales-order.service';
import { SoDetailComponent } from './so-detail/so-detail.component';
import { ProductCrudsService } from 'app/shared/services/products-cruds.service';
import { DataService } from 'app/shared/services/data.service';

// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
    imports: [
      CommonModule,
      CoreModule,
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
      RouterModule.forChild(SORoutes),
      SharedModule
    ],
    declarations: [
        SoListsComponent, 
        SoDetailComponent, 
　　    ],
    providers: [
      SOService,
      DataService
    ]
  })
  export class SOModule { }
  