import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User } from 'src/models';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Observable } from 'rxjs';

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
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
