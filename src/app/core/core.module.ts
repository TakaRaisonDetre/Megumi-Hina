import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../../environments/environment';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from 'app/shared/services/auth/auth.guard';
import { NotifyService } from 'app/shared/services/auth/notify.service';


@NgModule ({
    imports :[
        CommonModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule
    ],
    providers : [
        AuthService,
        NotifyService,
        AuthGuard,
      
     // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ]
})
export class CoreModule{}