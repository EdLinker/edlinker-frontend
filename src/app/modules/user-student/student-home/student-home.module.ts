import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { SharedHeaderModule } from '../../shared/shared-header';
import { StudentPostsComponent } from './components/student-posts/student-posts.component';
import { StudentPostsService } from './services';
import { StudentPostsState } from './store/student-post-state';
import { LoaderState } from './store/loader.state';
import { StudentHomeViewComponent } from './components';
import { studentHomeRouting } from './student-home.routing';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedPostModule } from '../../shared/shared-post-card';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(studentHomeRouting),
    SharedHeaderModule,
    NgxsModule.forRoot([StudentPostsState, LoaderState], {
      developmentMode: !environment.production,
    }),
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    SharedPostModule
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
