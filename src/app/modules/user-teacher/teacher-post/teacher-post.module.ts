
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { TeacherPostViewComponent } from './components'
import { TeacherPostFormComponent } from './components/teacher-post-form/teacher-post-form.component';
import { teacherPostRouting } from './teacher-post.routing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherPostState } from './store/teacher-post.state';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(teacherPostRouting),
    NgxsModule.forRoot([TeacherPostState], {
      developmentMode: !environment.production
    }),
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [
    TeacherPostViewComponent,
    TeacherPostFormComponent
  ],
  providers: [],
})
export class TeacherPostModule { }