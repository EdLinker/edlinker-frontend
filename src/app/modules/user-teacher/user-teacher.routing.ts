import { Routes } from '@angular/router';

export const userTeacherRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./teacher-home').then(m => m.TeacherHomeModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./teacher-post').then(m => m.TeacherCreatePostModule),
  },
  {
    path: 'class-tasks',
    loadChildren: () => import('./teacher-tasks').then(m => m.TasksForClassModule),
  }
];
