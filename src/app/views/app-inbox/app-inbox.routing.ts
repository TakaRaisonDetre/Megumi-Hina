import { Routes } from '@angular/router';

import { AppInboxComponent } from './app-inbox.component';


export const InboxRoutes: Routes = [
  { path: '', component: AppInboxComponent, data: { title: 'Inbox' } }
];