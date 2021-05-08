import { Routes } from '@angular/router';

export const userTeacherRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./teacher-home').then(m => m.TeacherHomeModule)
  },
  {
    path: 'class-tasks/auditorium/:auditoriumId',
    loadChildren: () => import('./teacher-tasks').then(m => m.TasksForClassModule),
  }
];
