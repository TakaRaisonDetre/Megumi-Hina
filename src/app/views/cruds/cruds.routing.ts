import { Routes } from '@angular/router';
import { CrudNgxTableComponent } from './crud-ngx-table/crud-ngx-table.component';

export const CrudsRoutes: Routes = [
  { 
    path: 'ngx-table', 
    component: CrudNgxTableComponent, 
    data: { title: 'NgX Table', breadcrumb: 'NgX Table' } 
  }
];