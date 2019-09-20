import { Routes } from '@angular/router';

import { AppCalendarComponent } from './app-calendar.component';

export const CalendarRoutes: Routes = [
  { path: '', component: AppCalendarComponent, data: { title: 'Calendar' } }
];