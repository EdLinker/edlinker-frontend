import { Routes } from '@angular/router';
import { PopupEntryComponent } from './student-home/components/popup-post/popup-entry.component';

export const userStudentRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./student-home').then(m => m.StudentHomeModule)
  },
];
