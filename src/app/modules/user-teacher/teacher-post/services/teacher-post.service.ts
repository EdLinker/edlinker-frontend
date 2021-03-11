import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models';
import { ShowLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  addPost(payload: Post) {
    return this.http.post<Post>('http://localhost:3000/posts', payload);
  }

  getPosts() {
    this.store.dispatch(new ShowLoaderAction());
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

}
