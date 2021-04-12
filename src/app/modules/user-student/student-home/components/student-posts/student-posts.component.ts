import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models';
import { StudentGetPosts } from '../../store/actions';
import { LoaderState } from '../../store/loader.state';
import { StudentPostsState } from '../../store/student-post-state';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-student-posts',
  templateUrl: './student-posts.component.html',
  styleUrls: ['./student-posts.component.scss']
})
export class StudentPostsComponent implements OnInit {

  @Select(StudentPostsState.getPosts) posts$!: Observable<Post[]>;

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
