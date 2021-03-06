import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedHeaderModule } from '../shared';
import { userStudentRouting } from './user-student.routing';

@NgModule({
  imports: [
    RouterModule.forChild(userStudentRouting),
    SharedHeaderModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class UserStudentModule { }
