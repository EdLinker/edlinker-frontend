import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, User } from 'src/models';
import { Select, Store } from '@ngxs/store';
import { ShowLoaderAction } from '../store/actions';
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

  getPosts(id: number) {
    // this.store.dispatch(new ShowLoaderAction());
    return this.http.get<Post[]>(`https://ed-linker.herokuapp.com/api/${id}/tasks`);
  }
}
