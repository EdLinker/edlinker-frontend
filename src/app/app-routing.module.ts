import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './modules/welcome/landing/components';

const routes: Routes = [
  {
    path: '',
    component: LandingViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
