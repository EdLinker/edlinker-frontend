import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedPostModule } from '../../shared/shared-post-card';
import { TasksForClassComponent } from './components/tasks-for-class/tasks-for-class.component';
import { TeacherPostState } from '../teacher-post/store/teacher-post.state';
import { LoaderState } from '../../user-student/student-home/store/loader.state';
import { TeacherPostService } from '../teacher-post/services';
import { tasksForClassRouting } from './tasks-for-class.routing';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [TasksForClassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksForClassRouting),
    SharedPostModule,
    HttpClientModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [TeacherPostService]
})
export class TasksForClassModule { }
