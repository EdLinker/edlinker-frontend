import { Routes } from '@angular/router';

export const userStudentRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./student-home').then(m => m.StudentHomeModule)
  },
]
