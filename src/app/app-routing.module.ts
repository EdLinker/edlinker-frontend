import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome').then(m => m.WelcomeModule),
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/user-student').then(m => m.UserStudentModule),
  },
  {
    path: 'teacher',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/user-teacher').then(m => m.UserTeacherModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
