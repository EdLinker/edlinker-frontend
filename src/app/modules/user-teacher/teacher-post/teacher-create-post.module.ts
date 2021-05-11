
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TeacherPostViewComponent } from './components';
import { TeacherCreatePostFormComponent } from './components';
import { teacherCreatePostRouting } from './teacher-create-post.routing';
import { TeacherPostService } from './services';
import { PipesModule } from '../../shared/pipes/pipes.module';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(teacherCreatePostRouting),
    HttpClientModule,
    PipesModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [],
  declarations: [
    TeacherPostViewComponent,
    TeacherCreatePostFormComponent
  ],
  providers: [TeacherPostService],
})
export class TeacherCreatePostModule { }
