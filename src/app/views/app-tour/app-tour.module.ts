import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  MatCardModule,
  MatButtonModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppTourComponent } from './app-tour.component';
import { TourRoutes } from './app-tour.routing';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(TourRoutes)
  ],
  declarations: [AppTourComponent]
})
export class AppTourModule { }
