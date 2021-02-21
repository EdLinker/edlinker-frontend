import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { welcomeRouting } from './welcome.routing';

import { LandingViewComponent } from './landing/components/landing-view/landing-view.component';

@NgModule({
  imports: [
    RouterModule.forChild(welcomeRouting)
  ],
  exports: [],
  declarations: [
    // LandingViewComponent
  ],
  providers: [],
})
export class WelcomeModule { }
