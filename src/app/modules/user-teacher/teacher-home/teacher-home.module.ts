import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { teacherHomeRouting } from './teacher-home.routing';
import { TeacherHomeViewComponent } from './components';
import { AuditoriumsListComponent } from './components';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    RouterModule.forChild(teacherHomeRouting),
    HttpClientModule,
    MatTableModule,
    CommonModule
  ],
  exports: [TeacherHomeViewComponent],
  declarations: [
    TeacherHomeViewComponent,
    AuditoriumsListComponent,
  ],
  providers: [],
})
export class TeacherHomeModule { }
