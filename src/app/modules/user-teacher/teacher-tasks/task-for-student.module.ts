import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tasksForStudentsRouting } from './task-for-students.routing';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(tasksForStudentsRouting),
  ]
})
export class TaskForStudentModule { }
