import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { teacherHomeRouting } from './teacher-home.routing';
import { TeacherHomeViewComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
  ],
  exports: [],
  declarations: [TeacherHomeViewComponent],
  providers: [],
})
export class TeacherHomeModule { }
