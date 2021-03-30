import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { teacherHomeRouting } from './teacher-home.routing';
import { SharedHeaderModule } from '../../shared/shared-header';
import { TeacherHomeViewComponent } from './components';
import { AuditoriumsListComponent } from './components';
import { TeacherAuditoriumsListState } from './store/teacher-auditoriumslist.state';
import { TeacherAuditoriumsService } from './services';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
    CommonModule,
    SharedHeaderModule,
    NgxsModule.forRoot([TeacherAuditoriumsListState], {
      developmentMode: !environment.production,
    }),
    HttpClientModule,
    MatTableModule,
  ],
  exports: [TeacherHomeViewComponent],
  declarations: [
    TeacherHomeViewComponent,
    AuditoriumsListComponent,
  ],
  providers: [
    TeacherAuditoriumsService,
  ],
})
export class TeacherHomeModule { }
