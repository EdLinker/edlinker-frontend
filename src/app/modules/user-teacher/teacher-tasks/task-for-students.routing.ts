import { Routes } from '@angular/router';
import { TaskForStudentsComponent } from './components/task-for-students/task-for-students.component';

export const tasksForStudentsRouting: Routes = [
    {
      path: '',
      component: TaskForStudentsComponent,
    }
  ];
