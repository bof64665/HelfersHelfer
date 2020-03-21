import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbDialogModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbActionsModule,
  NbTooltipModule,
  NbUserModule,
  NbMenuModule,
  NbContextMenuModule} from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbDialogModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule,
  NbTooltipModule,
  NbUserModule,
  NbMenuModule,
  NbContextMenuModule
];

const COMPONENTS = [
  HeaderComponent,
  NotFoundComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...NB_MODULES,
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class CoreModule { }
