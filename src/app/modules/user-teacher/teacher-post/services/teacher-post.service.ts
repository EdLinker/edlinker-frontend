import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, NewTask } from 'src/models';
import { ShowLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { Store } from '@ngxs/store';
import { delayedRetry } from 'src/app/modules/shared/helper';
import { catchError, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  addPost(payload: NewTask) {
    return this.http.post<NewTask>('http://localhost:3000/posts', payload).pipe(
      delayedRetry(1000, 3),
      catchError(error => {
        alert(error);
        return EMPTY;
      }),
      shareReplay()
    );
  }

  getPosts() {
    this.store.dispatch(new ShowLoaderAction());
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

}
