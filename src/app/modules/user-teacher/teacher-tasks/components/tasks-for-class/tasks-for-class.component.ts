import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Task } from 'src/models';
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

  posts!: Task[];
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
    this.setTasks();
  }

  async setTasks() {
    await this.store.dispatch(new TeacherGetPosts(this.id)).toPromise();
    this.posts = this.store.selectSnapshot(TeacherPostState.getPosts);
  }

  navigateToCreateTask() {
    this.router.navigate(['create-post'], { relativeTo:this.route });
  }

  routeToStudent(numb: number) {
      this.router.navigate(['students', numb], { relativeTo: this.route });
  }
}
