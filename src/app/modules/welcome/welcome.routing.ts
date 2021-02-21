import { Routes } from '@angular/router';

export const welcomeRouting: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./landing').then(m => m.LandingModule)
  }
]