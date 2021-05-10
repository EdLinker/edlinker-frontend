import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models';
import { Select } from '@ngxs/store';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentPostsService {

  @Select(UserState.getUser) user$!: Observable<User>;
  url = environment.apiUrl;

  constructor( private http: HttpClient ) { }

  getPosts() {
    return this.http.get<Task[]>(`${this.url}tasks`);
  }
}
