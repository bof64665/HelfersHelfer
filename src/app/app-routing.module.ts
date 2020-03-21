import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
/*   {
    path: '**',
    component: NotFoundComponent,
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
