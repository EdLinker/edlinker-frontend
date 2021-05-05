import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!: number;

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

  constructor( private store: Store, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('auditoriumId'));
    this.store.dispatch(new TeacherGetPosts(this.id));
  }

  navigateToCreateTask() {
    this.router.navigate(['create-post/subject', 1,], {relativeTo:this.route});
  }
}
