import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedPostModule } from '../../shared/shared-post-card';
import { SharedHeaderModule } from '../../shared/shared-header';
import { TasksForClassComponent } from './components/tasks-for-class/tasks-for-class.component';
import { TeacherPostState } from '../teacher-post/store/teacher-post.state';
import { LoaderState } from '../../user-student/student-home/store/loader.state';
import { TeacherPostService } from '../teacher-post/services';
import { tasksForClassRouting } from './tasks-for-class.routing';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TasksForClassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksForClassRouting),
    NgxsModule.forRoot([TeacherPostState, LoaderState], {
      developmentMode: !environment.production,
    }),
    SharedPostModule,
    SharedHeaderModule,
    HttpClientModule,
    MatChipsModule,
    MatButtonModule
  ],
  providers: [TeacherPostService]
})
export class TasksForClassModule { }
