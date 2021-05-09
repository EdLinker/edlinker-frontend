import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
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

  tasks$!: Task[];

  constructor(
    private store: Store,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  async getTasks() {
    await this.store.dispatch(new StudentGetPosts()).toPromise();
    return this.tasks$ = this.store.selectSnapshot(StudentPostsState.getTasks);
  }
}
