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
          loadChildren: () => import('./teacher-tasks/tasks-for-class.module').then(m => m.TasksForClassModule),
        }]
      },
      {
        path: 'task-for-students',
        data: {
          breadcrumb: 'Студенти'
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null
            },
            loadChildren: () => import('./teacher-tasks/task-for-student.module').then(m => m.TaskForStudentModule)
          }
        ]
      }
    ]
  },
];
