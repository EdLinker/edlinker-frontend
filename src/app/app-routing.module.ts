import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/guards';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { Page404Component } from './modules/shared/page-404/page404.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/welcome').then(m => m.WelcomeModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
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
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
