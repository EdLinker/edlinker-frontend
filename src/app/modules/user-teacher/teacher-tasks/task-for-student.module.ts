import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasksForStudentsRouting } from './task-for-students.routing';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { TaskForStudentsComponent } from './components/task-for-students/task-for-students.component';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { BollToIconPipe } from '../../shared/pipes';
import { SharedPostModule } from '../../shared/shared-post-card';

@NgModule({
  declarations: [TaskForStudentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksForStudentsRouting),
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatChipsModule,
    SharedPostModule,
    MatExpansionModule
  ],
  providers: []
})
export class TaskForStudentModule { }
