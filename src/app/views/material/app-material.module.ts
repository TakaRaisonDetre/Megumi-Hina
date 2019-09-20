import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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

import { MaterialRoutes } from "./app-material.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    RouterModule.forChild(MaterialRoutes)
  ],
  declarations: [
    AppAutocompleteComponent, 
    AppButtonsComponent, 
    AppCardComponent, 
    AppGridComponent, 
    AppListComponent,
    AppMenuComponent,
    AppProgressComponent,
    AppRadioComponent,
    AppSelectComponent,
    AppSliderComponent,
    AppSnackbarComponent,
    AppTabComponent
  ]
})
export class AppMaterialModule { }
