import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRouting } from './auth.routing';

@NgModule({
  imports: [
    RouterModule.forChild(authRouting),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AuthModule { }
