import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedHeaderModule } from '../shared/shared-header';
import { userTeacherRouting } from './user-teacher.routing';

@NgModule({
  imports: [
    RouterModule.forChild(userTeacherRouting),
    SharedHeaderModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class UserTeacherModule { }
