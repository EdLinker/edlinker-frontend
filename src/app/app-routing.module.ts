import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards';
import { LayoutComponent } from './modules/shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/welcome').then(m => m.WelcomeModule),
      },
      {
        path: 'student',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
          roles: ['student']
        },
        loadChildren: () => import('./modules/user-student').then(m => m.UserStudentModule),
      },
      {
        path: 'teacher',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        data: {
          roles: ['teacher']
        },
        loadChildren: () => import('./modules/user-teacher').then(m => m.UserTeacherModule),
      }
    ]
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
