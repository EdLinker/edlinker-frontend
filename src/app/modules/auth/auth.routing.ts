import { Routes } from '@angular/router';

export const authRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth-page').then(m => m.AuthPageModule)
  }
];
