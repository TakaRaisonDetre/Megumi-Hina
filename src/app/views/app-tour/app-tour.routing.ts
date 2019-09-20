import { Routes } from '@angular/router';

import { AppTourComponent } from './app-tour.component';


export const TourRoutes: Routes = [
  { path: '', component: AppTourComponent, data: { title: 'User Tour' } }
];