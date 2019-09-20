import { Routes } from '@angular/router';

import { DragndropComponent } from './dragndrop.component';


export const DragndropRoutes: Routes = [
  { path: '', component: DragndropComponent, data: { title: 'Drag and drop' } }
];