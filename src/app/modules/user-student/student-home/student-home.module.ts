import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { studentHomeRouting } from './student-home.routing';
import { StudentHomeViewComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild(studentHomeRouting),
  ],
  exports: [],
  declarations: [StudentHomeViewComponent],
  providers: [],
})
export class StudentHomeModule { }
