import { Routes } from '@angular/router';

import { AppAutocompleteComponent } from './app-autocomplete/app-autocomplete.component';
import { AppButtonsComponent } from './app-buttons/app-buttons.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppProgressComponent } from './app-progress/app-progress.component';
import { AppRadioComponent } from './app-radio/app-radio.component';
import { AppSelectComponent } from './app-select/app-select.component';
import { AppSliderComponent } from './app-slider/app-slider.component';
import { AppSnackbarComponent } from './app-snackbar/app-snackbar.component';
import { AppTabComponent } from './app-tab/app-tab.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    data: { title: 'Material' },
    children: [{
      path: 'buttons',
      component: AppButtonsComponent,
      data: { title: 'Buttons', breadcrumb: 'BUTTONS' }
    }, {
      path: 'cards',
      component: AppCardComponent,
      data: { title: 'Cards', breadcrumb: 'CARDS' }
    }, {
      path: 'tabs',
      component: AppTabComponent,
      data: { title: 'Tabs', breadcrumb: 'TABS' }
    }, {
      path: 'grids',
      component: AppGridComponent,
      data: { title: 'Grids', breadcrumb: 'GRIDS' }
    }, {
      path: 'lists',
      component: AppListComponent,
      data: { title: 'Lists', breadcrumb: 'LISTS' }
    }, {
      path: 'menu',
      component: AppMenuComponent,
      data: { title: 'Menu', breadcrumb: 'MENU' }
    }, {
      path: 'select',
      component: AppSelectComponent,
      data: { title: 'Select', breadcrumb: 'SELECT' }
    }, {
      path: 'radio',
      component: AppRadioComponent,
      data: { title: 'Radio', breadcrumb: 'RADIO' }
    }, {
      path: 'snackbar',
      component: AppSnackbarComponent,
      data: { title: 'Snackbar', breadcrumb: 'SNACKBAR' }
    }, {
      path: 'autocomplete',
      component: AppAutocompleteComponent,
      data: { title: 'Autocomplete', breadcrumb: 'AUTOCOMPLETE' }
    }, {
      path: 'slider',
      component: AppSliderComponent,
      data: { title: 'Slider', breadcrumb: 'SLIDER' }
    }, {
      path: 'progress',
      component: AppProgressComponent,
      data: { title: 'Progress', breadcrumb: 'PROGRESS' }
    }]
  }
];