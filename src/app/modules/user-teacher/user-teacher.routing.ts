import { Routes } from '@angular/router';

export const userTeacherRouting: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Аудиторії'
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null
        },
        loadChildren: () => import('./teacher-home').then(m => m.TeacherHomeModule)
      },
      {
        path: 'create-post',
        data: {
          breadcrumb: 'Створити'
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            loadChildren: () => import('./teacher-post').then(m => m.TeacherCreatePostModule),
          }]
      },
      {
        path: 'class-tasks',
        data: {
          breadcrumb: 'Группа-Предмет'
        },
        children: [{
          path: '',
          data: {
            breadcrumb: null
          },
          loadChildren: () => import('./teacher-tasks').then(m => m.TasksForClassModule),
        }]
      }
    ]
  },
];
