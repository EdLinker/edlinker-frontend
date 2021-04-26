import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasksForStudentsRouting } from './task-for-students.routing';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { TaskForStudentsComponent } from './components/task-for-students/task-for-students.component';
import { StudentsService } from './services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { StudentsState } from './store/students.state';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BollToIconPipe } from '../../shared/pipes';

@NgModule({
  declarations: [TaskForStudentsComponent, BollToIconPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksForStudentsRouting),
    NgxsModule.forRoot([StudentsState], {
      developmentMode: !environment.production,
    }),
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [StudentsService]
})
export class TaskForStudentModule { }
