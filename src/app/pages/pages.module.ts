import { NbCardModule, NbTreeGridModule, NbButtonModule, NbInputModule, NbFormFieldModule, NbIconModule } from '@nebular/theme';
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

const NB_MODULES = [
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbFormFieldModule,
  NbEvaIconsModule,
  NbIconModule,
]
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
  ]
})
export class PagesModule { }
