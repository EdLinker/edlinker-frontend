import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from 'src/models';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class StudentsService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getStudents(numb: number) {
    return this.http.get<Student[]>(`${this.url}/users_task?number=${numb}`);
  }
}
