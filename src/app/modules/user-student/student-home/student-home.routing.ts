import { Routes } from '@angular/router';
import { StudentHomeViewComponent } from './components';
import { PopupEntryComponent } from './components/popup-post/popup-entry.component';

export const studentHomeRouting: Routes = [
  {
    path: '',
    component: StudentHomeViewComponent,
    children: [
      {
        path: 'dialog/:id',
        component: PopupEntryComponent
      }
    ]
  },
];
