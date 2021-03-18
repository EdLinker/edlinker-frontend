import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { teacherHomeRouting } from './teacher-home.routing';
import { TeacherHomeViewComponent } from './components';
import { SharedHeaderModule } from '../../shared/shared-header';
import { GroupListComponent } from './components';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
    MatTableModule,
    SharedHeaderModule,
  ],
  exports: [TeacherHomeViewComponent],
  declarations: [
    TeacherHomeViewComponent,
    GroupListComponent,
  ],
  providers: [],
})
export class TeacherHomeModule { }
