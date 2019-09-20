import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
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
  MatSelectModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';

import { ProductCrudsRoutes } from '../cruds-product/cruds-product.routing';
import { ProductCrudsService } from '../../shared/services/products-cruds.service';
import {InputPopupComponent} from '../cruds-product/crud-products-table/input-popup/input-popup.component';
import { ImagePopupComponent } from '../cruds-product/crud-products-table/image-popup/image-popup.component';
import { UploadTaskComponent } from '../cruds-product/crud-products-table/image-popup/upload-task/upload-task.component';

import { CrudsProductComponent } from '../cruds-product/crud-products-table/cruds-product.component';
import { CrudProductInfoComponent } from './crud-product-info/crud-product-info.component';
import { DataService } from 'app/shared/services/data.service';
import { DropzoneDirective } from 'app/shared/directives/dropzone.directive';
import { DetailPopupComponent } from './crud-product-info/detail-popup/detail-popup.component';
import { AuthService } from 'app/core/auth.service';


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
    RouterModule.forChild(ProductCrudsRoutes)
  ],
  declarations: [
     
    CrudsProductComponent, 
    InputPopupComponent, 
    ImagePopupComponent, 
    UploadTaskComponent,
    DropzoneDirective,
    CrudProductInfoComponent,
    DetailPopupComponent,
   
  ],
  providers: [ProductCrudsService, DataService, AuthService],
  entryComponents: [
    InputPopupComponent,
    ImagePopupComponent,
    UploadTaskComponent, 
    DetailPopupComponent, 
  ]
})
export class CrudsProductModule { }
