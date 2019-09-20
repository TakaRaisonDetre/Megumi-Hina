import { Routes } from '@angular/router';

import {CrudSalesTableComponent } from './crud-sales-table/crud-sales-table.component'
import {CrudSalesInfoComponent} from './crud-sales-info/crud-sales-info.component';


export const SOCrudsRoutes: Routes = [
  { 
    path: '受注テーブル', 
    component: CrudSalesTableComponent, 
   
    data: { title: '受注テーブル', breadcrumb: '受注テーブル' } 
  },
  { 
    path: '受注テーブル/:id', 
    component: CrudSalesInfoComponent, 
   
    data : {title: '顧客発注書詳細', breadcrumb: '発注書入力'}
  
  },

];