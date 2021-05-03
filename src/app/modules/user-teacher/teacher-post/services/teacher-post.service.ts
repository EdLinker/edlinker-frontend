import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/models';
import { ShowLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/modules/shared/user-store/user-state';

@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(
    private http: HttpClient,
    private store: Store,
  ) { }

  getPosts(id: number) {
    this.store.dispatch(new ShowLoaderAction());
    const user = this.store.selectSnapshot(UserState.getUser);
    return this.http.get<Task[]>(`https://ed-linker.herokuapp.com/api/auditoriums/${id}/tasks?user_id=${user.id}`);
  }

}
