import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { AuditoriumModel } from 'src/models';
import { GetTeacherAuditoriums } from '../../store/actions';
import { TeacherAuditoriumsListState } from '../../store/teacher-auditoriumslist.state';

@Component({
  selector: 'app-auditoriums-list',
  templateUrl: 'auditoriums-list.component.html',
  styleUrls: ['auditoriums-list.component.scss'],

})

export class AuditoriumsListComponent implements OnInit {

  auditoriums$!: AuditoriumModel[];

  displayedColumns: string[] = [
    'groupNameColumn',
    'subjectNameColumn',
    'courseNumberColumn',
    'studentsCountColumn',
    'groupLeaderNameColumn',
  ];

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  async ngOnInit() {
    await this.store.dispatch(new GetTeacherAuditoriums()).toPromise();
    this.auditoriums$ = this.store.selectSnapshot(TeacherAuditoriumsListState.getAuditoriumsList);
  }

  navigateTo(row: AuditoriumModel) {
    this.router.navigate(['/teacher/class-tasks/auditorium', row.auditoriumId]);
  }
}
