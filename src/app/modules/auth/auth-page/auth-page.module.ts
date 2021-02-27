import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authPageRouting } from './auth-page.routing';
import { AuthPageViewComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild(authPageRouting),
  ],
  exports: [],
  declarations: [AuthPageViewComponent],
  providers: [],
})
export class AuthPageModule { }
