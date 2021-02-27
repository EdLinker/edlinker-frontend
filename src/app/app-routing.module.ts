import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./modules/welcome').then(m => m.WelcomeModule),
  },
  {
    path: 'student', 
    loadChildren: () => import('./modules/user-student').then(m => m.UserStudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
