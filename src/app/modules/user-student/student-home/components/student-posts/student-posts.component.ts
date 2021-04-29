import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoaderState } from '../../store/loader.state';
import { StudentPostsState } from '../../store/student-post-state';

import { MatDialog } from '@angular/material/dialog';
import { StudentGetPosts } from '../../store/actions';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-student-posts',
  templateUrl: './student-posts.component.html',
  styleUrls: ['./student-posts.component.scss']
})
export class StudentPostsComponent implements OnInit {

  @Select(StudentPostsState.getTasks) tasks$!: Observable<Task[]>;

  @Select(LoaderState.status)
  public loadingStatus$?: Observable<boolean>;

  constructor(
    private store: Store,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new StudentGetPosts());
  }
}
