import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbDialogModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbActionsModule,
  NbTooltipModule } from '@nebular/theme';
import { HeaderComponent } from './components/header/header.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const NB_MODULES = [
  NbLayoutModule,
  NbEvaIconsModule,
  NbDialogModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule,
  NbTooltipModule,
];

const COMPONENTS = [
  HeaderComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
  ],
  imports: [
    ...NB_MODULES,
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class CoreModule { }
