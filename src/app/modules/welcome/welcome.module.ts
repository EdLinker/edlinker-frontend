import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { welcomeRouting } from './welcome.routing';

@NgModule({
  imports: [
    RouterModule.forChild(welcomeRouting)
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class WelcomeModule { }
