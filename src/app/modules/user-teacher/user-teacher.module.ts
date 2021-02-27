import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userTeacherRouting } from './user-teacher.routing';

@NgModule({
  imports: [
    RouterModule.forChild(userTeacherRouting)
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class UserTeacherModule { }
