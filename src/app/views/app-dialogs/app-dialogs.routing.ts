import { Routes } from '@angular/router';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';

export const DialogsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'confirm',
      component: ConfirmDialogComponent,
      data: { title: 'Confirm', breadcrumb: 'CONFIRM' },
    }, {
      path: 'loader',
      component: LoaderDialogComponent,
      data: { title: 'Loader', breadcrumb: 'LOADER' },
    }]
  }
];