import {
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbUserModule,
  NbCheckboxModule,
  NbListModule,
  NbDatepickerModule,
  NbTreeGridModule} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MatchingComponent } from './matching/matching.component';
import { CardComponent } from './matching/components/card/card.component';
import { MapComponent } from './matching/components/map/map.component';
import { ListComponent } from './list/list.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

const NB_MODULES = [
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbEvaIconsModule,
  NbIconModule,
  NbUserModule,
  NbCheckboxModule,
  NbListModule,
  NbDatepickerModule,
  NbTreeGridModule,
];
@NgModule({
  declarations: [
    RegisterComponent,
    ProfileComponent,
    MatchingComponent,
    CardComponent,
    MapComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbTreeGridModule,
    NbCardModule,
    PagesRoutingModule,
    FormsModule,
    ...NB_MODULES,
    LeafletModule
  ]
})
export class PagesModule { }
