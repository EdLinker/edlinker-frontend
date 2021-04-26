import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuditoriumModele } from 'src/models';
import { GetTeacherAuditoriums } from '../../store/actions';
import { TeacherAuditoriumsListState } from '../../store/teacher-auditoriumslist.state';

@Component({
  selector: 'app-auditoriums-list',
  templateUrl: 'auditoriums-list.component.html',
  styleUrls: ['auditoriums-list.component.scss'],

})

export class AuditoriumsListComponent implements OnInit {

  @Select(TeacherAuditoriumsListState.getAuditoriumsList) auditoriums$!: Observable<AuditoriumModele[]>;

  displayedColumns: string[] = [
    'groupNameColumn',
    'subjectNameColumn',
    'courceNumberColumn',
    'studentsCountColumn',
    'groupLeaderNameColumn',
  ];

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetTeacherAuditoriums());
  }

  navigateTo(row: AuditoriumModele) {
    console.log(row.auditoriumId);
    // this.router.navigate(['/some/'+row.auditoriumId]);
  }
}
