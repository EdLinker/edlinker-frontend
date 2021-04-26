import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models';
import { TeacherGetPosts } from '../../../teacher-post/store/actions';
import { TeacherPostState } from '../../../teacher-post/store/teacher-post.state';

export interface SortOption {
  name: string;
  selected: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-tasks-for-class',
  templateUrl: './tasks-for-class.component.html',
  styleUrls: ['./tasks-for-class.component.scss']
})
export class TasksForClassComponent implements OnInit {

  @Select(TeacherPostState.getPosts) posts$!: Observable<Post[]>;

  sortOptions: SortOption[] = [
    {
      name: 'всі',
      selected: true,
      disabled: false
    },
    {
      name: 'завдання',
      selected: false,
      disabled: true
    },
    {
      name: 'повідомлення',
      selected: false,
      disabled: true
    },
  ];

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new TeacherGetPosts());
  }

}
