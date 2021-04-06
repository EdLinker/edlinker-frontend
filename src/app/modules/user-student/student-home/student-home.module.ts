import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { PostPopupComponent, StudentPostsComponent } from './components/student-posts/student-posts.component';
import { StudentPostsService } from './services';
import { StudentPostsState } from './store/student-post-state';
import { LoaderState } from './store/loader.state';
import { StudentHomeViewComponent } from './components';
import { studentHomeRouting } from './student-home.routing';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedPostModule } from '../../shared/shared-post-card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
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
    MatProgressSpinnerModule,
    SharedPostModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [
    StudentHomeViewComponent,
    StudentPostsComponent,
    PostPopupComponent
  ],
  providers: [
    StudentPostsService,
  ],
})
export class StudentHomeModule { }
