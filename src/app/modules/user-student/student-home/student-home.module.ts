import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { StudentPostsComponent } from './components/student-posts/student-posts.component';
import { StudentPostsService } from './services';
import { StudentPostsState } from './store/student-post-state';
import { LoaderState } from './store/loader.state';
import { StudentHomeViewComponent } from './components';
import { studentHomeRouting } from './student-home.routing';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedPostModule } from '../../shared/shared-post-card';


import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostPopupComponent } from './components/popup-post/popup-post.component';

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
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    PipesModule,
    MatFormFieldModule
  ],
  exports: [],
  declarations: [
    StudentHomeViewComponent,
    StudentPostsComponent,
    PostPopupComponent,
  ],
  providers: [
    StudentPostsService,
  ],
})
export class StudentHomeModule { }
