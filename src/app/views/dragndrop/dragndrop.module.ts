import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatListModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragulaModule } from 'ng2-dragula';

import { DragndropComponent } from './dragndrop.component';
import { DragndropRoutes } from "./dragndrop.routing";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    DragulaModule,
    RouterModule.forChild(DragndropRoutes)
  ],
  declarations: [DragndropComponent]
})
export class DragndropModule { }
