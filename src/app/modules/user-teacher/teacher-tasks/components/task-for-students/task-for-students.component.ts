import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Student, Task } from 'src/models';
import { TeacherGetPosts } from '../../../teacher-post/store/actions';
import { TeacherPostState } from '../../../teacher-post/store/teacher-post.state';
import { TeacherGetStudents } from '../../store/actions';
import { StudentsState } from '../../store/students.state';

export interface PeriodicElement {
  firstName: string;
  lastName: string;
  patronymic: string;
  num: number;
  status: boolean;
  messages: string;
}

@Component({
  selector: 'app-task-for-students',
  templateUrl: './task-for-students.component.html',
  styleUrls: ['./task-for-students.component.scss']
})
export class TaskForStudentsComponent implements OnInit {

  @Select(StudentsState.getStudents) students$!: Observable<Student[]>;

  id: number;
  task: Task | undefined;
  taskNumber: number;
  panelOpenState = false;
  displayedColumns: string[] = [
    'fullName',
    'status',
    'messages',
  ];

  constructor(private store: Store, private route: ActivatedRoute) {
    this.taskNumber = Number(this.route.snapshot.paramMap.get('taskNumber'));
    this.id = Number(this.route.snapshot.paramMap.get('auditoriumId'));
    this.task = this.store.selectSnapshot(TeacherPostState.getPosts).find(task => task.number === this.taskNumber);
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.getTask();
    return this.store.dispatch(new TeacherGetStudents(this.taskNumber, this.id));
  }

  async getTask() {
    if (!this.task) {
      await this.store.dispatch(new TeacherGetPosts(this.id)).toPromise();
      return this.task = this.store.selectSnapshot(TeacherPostState.getPosts).find(task => task.number === this.taskNumber);
    }
    return;
  }
}
