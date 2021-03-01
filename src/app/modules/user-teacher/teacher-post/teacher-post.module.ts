import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherPostViewComponent } from './components'
import { TeacherPostFormComponent } from './components/teacher-post-form/teacher-post-form.component';
import { teacherPostRouting } from './teacher-post.routing';



@NgModule({
  imports: [
    RouterModule.forChild(teacherPostRouting),
  ],
  exports: [],
  declarations: [TeacherPostViewComponent, TeacherPostFormComponent],
  providers: [],
})
export class TeacherPostModule { }