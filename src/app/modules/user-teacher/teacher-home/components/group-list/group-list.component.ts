import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GroupModele } from 'src/models';
import { GetTeacherGroups } from '../../store/actions';
import { TeacherGroupListState } from '../../store/teacher-grouplist.state';

@Component({
  selector: 'app-group-list',
  templateUrl: 'group-list.component.html',
  styleUrls: ['group-list.component.css'],

})

export class GroupListComponent implements OnInit {

  @Select(TeacherGroupListState.getGroupList) groups$!: Observable<GroupModele[]>;

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetTeacherGroups());
  }
}
