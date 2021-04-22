import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { SharedHeaderModule } from '../shared/shared-header';
import { UserState } from '../shared/user-store/user-state';
import { StudentPostsState } from './student-home/store/student-post-state';
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
