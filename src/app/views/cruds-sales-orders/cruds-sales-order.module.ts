import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatDatepickerModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatRadioModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatNativeDateModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';

import { SOCrudsRoutes } from '../cruds-sales-orders/crud-sales-order.routing';
import { ProductCrudsService } from '../../shared/services/products-cruds.service';


import { DataService } from 'app/shared/services/data.service';

import { AuthService } from 'app/core/auth.service';

import {DetailPopupComponent} from '../cruds-sales-orders/crud-sales-info/detail-popup/detail-popup.component';
import {CrudSalesInfoComponent} from '../cruds-sales-orders/crud-sales-info/crud-sales-info.component';
import {CrudSalesTableComponent} from '../cruds-sales-orders/crud-sales-table/crud-sales-table.component';
import { SalesPopupComponent } from './crud-sales-table/sales-popup/sales-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [
      CommonModule,
      CoreModule,
      ReactiveFormsModule,
      FlexLayoutModule,
      NgxDatatableModule,
      MatInputModule,
      MatSelectModule,
      MatTabsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatRadioModule,
      MatIconModule,
      MatCardModule,
      MatMenuModule,
      MatButtonModule,
      MatChipsModule,
      MatListModule,
      MatTooltipModule,
      MatDialogModule,
      MatSnackBarModule,
      MatSlideToggleModule,
      SharedModule,
      RouterModule.forChild(SOCrudsRoutes)
    ],
    declarations: [
       
      CrudSalesInfoComponent, 
      CrudSalesTableComponent,
      DetailPopupComponent,
      SalesPopupComponent,
     
    ],
    providers: [ProductCrudsService, DataService, AuthService],
    entryComponents: [
    
      SalesPopupComponent,
      DetailPopupComponent, 
    ]
  })
  export class CrudsSalesOrderModule { }
  