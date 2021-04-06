
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TeacherPostViewComponent } from './components';
import { TeacherCreatePostFormComponent } from './components';
import { teacherCreatePostRouting } from './teacher-create-post.routing';
import { TeacherPostService } from './services';
import { TeacherPostState } from './store/teacher-post.state';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ShortUrlPipe } from './pipes/short-url.pipe';


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
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [],
  declarations: [
    TeacherPostViewComponent,
    TeacherCreatePostFormComponent,
    ShortUrlPipe
  ],
  providers: [TeacherPostService],
})
export class TeacherCreatePostModule { }
