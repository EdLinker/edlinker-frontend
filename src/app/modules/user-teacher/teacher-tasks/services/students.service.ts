import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/models';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }
}
