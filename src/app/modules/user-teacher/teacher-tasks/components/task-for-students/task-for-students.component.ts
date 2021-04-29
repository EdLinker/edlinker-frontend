import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Student } from 'src/models';
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
  styleUrls: ['./task-for-students.component.css']
})
export class TaskForStudentsComponent implements OnInit {

  @Select(StudentsState.getStudents) students$!: Observable<Student[]>;

  displayedColumns: string[] = [
    'number',
    'fullName',
    'status',
    'messages',
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new TeacherGetStudents());
  }
}
