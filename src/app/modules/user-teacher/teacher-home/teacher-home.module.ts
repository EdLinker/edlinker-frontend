import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { teacherHomeRouting } from './teacher-home.routing';
import { SharedHeaderModule } from '../../shared';
import { TeacherHomeViewComponent } from './components';
import { GroupListComponent } from './components';
import { TeacherGroupListState } from './store/teacher-grouplist.state';
import { TeacherGroupsService } from './services';


import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
    CommonModule,
    SharedHeaderModule,
    NgxsModule.forRoot([TeacherGroupListState], {
      developmentMode: !environment.production,
    }),
    HttpClientModule,
    MatTableModule,
  ],
  exports: [TeacherHomeViewComponent],
  declarations: [
    TeacherHomeViewComponent,
    GroupListComponent,
  ],
  providers: [
    TeacherGroupsService,
  ],
})
export class TeacherHomeModule { }
