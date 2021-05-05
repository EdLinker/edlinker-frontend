import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewTask } from 'src/models';
import { Store } from '@ngxs/store';
import { delayedRetry } from 'src/app/modules/shared/helper';
import { catchError, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Task } from 'src/models';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(
    private http: HttpClient,
    private store: Store,
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
    const user = this.store.selectSnapshot(UserState.getUser);
    return this.http.get<Task[]>(`https://ed-linker.herokuapp.com/api/auditoriums/${id}/tasks?user_id=${user.id}`);
  }

}
