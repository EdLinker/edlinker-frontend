import { Routes } from '@angular/router';

export const welcomeRouting: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing').then(m => m.LandingModule)
  },
];
