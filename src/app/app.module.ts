import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbLayoutModule,
  NbMenuModule,
  NbToastrModule,
  NbDialogModule, 
  NbDatepickerModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PagesModule } from './pages/pages.module';

const NB_MODULES = [
  NbMenuModule.forRoot(),
  NbToastrModule.forRoot(),
  NbDialogModule.forRoot(),
  NbDatepickerModule.forRoot(),
  NbLayoutModule,
  NbEvaIconsModule,
];

const CUSTOM_MODULES = [
  CoreModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot(),
    ...NB_MODULES,
    ...CUSTOM_MODULES,

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
