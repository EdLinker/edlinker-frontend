import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { SharedHeaderModule } from '../shared/shared-header';
import { UserState } from '../shared/user-store/user-state';
import { userStudentRouting } from './user-student.routing';

@NgModule({
  imports: [
    RouterModule.forChild(userStudentRouting),
    SharedHeaderModule,
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production,
    }),
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class UserStudentModule { }
