import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './modules/welcome/landing/components';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./modules/welcome').then(m => m.WelcomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
