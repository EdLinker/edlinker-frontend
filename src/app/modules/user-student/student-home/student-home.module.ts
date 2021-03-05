import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { studentHomeRouting } from './student-home.routing';
import { StudentHomeViewComponent } from './components';
import { StudentPostsComponent } from './components/student-posts/student-posts.component';
import { StudentPostsService } from './services';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { StudentPostsState } from './store/student-post-state';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderState } from './store/loader.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(studentHomeRouting),
    NgxsModule.forRoot([StudentPostsState, LoaderState], {
      developmentMode: !environment.production,
    }),
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [],
  declarations: [
    StudentHomeViewComponent,
    StudentPostsComponent],
  providers: [
    StudentPostsService,
  ],
})
export class StudentHomeModule { }
