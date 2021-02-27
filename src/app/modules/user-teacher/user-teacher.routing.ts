import { Routes } from '@angular/router';

export const userTeacherRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./teacher-home').then(m => m.TeacherHomeModule)
  },
]
