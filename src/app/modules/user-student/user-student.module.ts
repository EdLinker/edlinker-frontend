import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userStudentRouting } from './user-student.routing';

@NgModule({
  imports: [
    RouterModule.forChild(userStudentRouting),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class UserStudentModule { }
