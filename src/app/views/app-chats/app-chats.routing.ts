import { Routes } from '@angular/router';

import { AppChatsComponent } from './app-chats.component';

export const ChatsRoutes: Routes = [
  { path: '', component: AppChatsComponent, data: { title: 'Chat' } }
];
