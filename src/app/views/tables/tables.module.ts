import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatInputModule
 } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FilterTableComponent } from './filter-table/filter-table.component';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { TablesRoutes } from './tables.routing';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    NgxDatatableModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: [FilterTableComponent, FullscreenTableComponent, PagingTableComponent]
})
export class TablesModule { }
