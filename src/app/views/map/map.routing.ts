import { Routes } from '@angular/router';

import { MapComponent } from './map.component';


export const MapRoutes: Routes = [
  { path: '', component: MapComponent, data: { title: 'Google map' } }
];