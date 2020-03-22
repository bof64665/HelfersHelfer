import { ListComponent } from './list/list.component';
import { MatchingComponent } from './matching/matching.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MapComponent } from './matching/components/map/map.component';


const routes: Routes = [
  {
    path: 'login',
    component: RegisterComponent
  },
  {
    path: 'profile/:userId',
    component: ProfileComponent
  },
  {
    path: 'matching',
    component: MatchingComponent,
  },
  {
    path: 'hilfeGesuche/:userId',
    component: ListComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
