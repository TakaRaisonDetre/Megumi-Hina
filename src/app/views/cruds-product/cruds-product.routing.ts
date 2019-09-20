import { Routes } from '@angular/router';

import {CrudsProductComponent } from './crud-products-table/cruds-product.component'
import {CrudProductInfoComponent} from './crud-product-info/crud-product-info.component';


export const ProductCrudsRoutes: Routes = [
  { 
    path: '商品テーブル', 
    component: CrudsProductComponent, 
   
    data: { title: '商品テーブル', breadcrumb: '商品テーブル' } 
  },
  { 
    path: '商品テーブル/:id', 
    component: CrudProductInfoComponent, 
   
    data: { title: '商品原価', breadcrumb: '原価情報入力' } 
  },

];