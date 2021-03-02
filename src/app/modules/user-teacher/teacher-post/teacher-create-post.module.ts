
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { TeacherPostViewComponent } from './components'
import { TeacherCreatePostFormComponent } from './components';
import { teacherCreatePostRouting } from './teacher-create-post.routing';
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
    RouterModule.forChild(teacherCreatePostRouting),
    NgxsModule.forRoot([TeacherPostState], {
      developmentMode: !environment.production
    }),
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [
    TeacherPostViewComponent,
    TeacherCreatePostFormComponent
  ],
  providers: [],
})
export class TeacherCreatePostModule { }