import { Routes } from '@angular/router';
import { TasksForClassComponent } from './components/tasks-for-class/tasks-for-class.component';

export const tasksForClassRouting: Routes = [
    {
      path: '',
      component: TasksForClassComponent,
    },
    {
      path: 'create-post/subject/:subjectId',
      loadChildren: () => import('./../teacher-post').then(m => m.TeacherCreatePostModule),
    }
  ];
