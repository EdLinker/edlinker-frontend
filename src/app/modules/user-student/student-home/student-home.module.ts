import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { studentHomeRouting } from './student-home.routing';
import { StudentHomeViewComponent } from './components';
import { SharedHeaderModule } from '../../shared';

@NgModule({
  imports: [
    RouterModule.forChild(studentHomeRouting),
    SharedHeaderModule
  ],
  exports: [],
  declarations: [StudentHomeViewComponent],
  providers: [],
})
export class StudentHomeModule { }
