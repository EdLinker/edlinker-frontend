import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { teacherHomeRouting } from './teacher-home.routing';
import { TeacherHomeViewComponent } from './components';
import { SharedHeaderModule } from '../../shared';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
    SharedHeaderModule
  ],
  exports: [TeacherHomeViewComponent],
  declarations: [TeacherHomeViewComponent],
  providers: [],
})
export class TeacherHomeModule { }
