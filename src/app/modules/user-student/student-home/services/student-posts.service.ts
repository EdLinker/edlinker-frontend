import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User } from 'src/models';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class StudentPostsService {

  @Select(UserState.getUser) user$!: Observable<User>;

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getPosts() {
    return this.http.get<Task[]>(`https://ed-linker.herokuapp.com/api/tasks`);
  }
}
