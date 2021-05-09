import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewTask } from 'src/models';
import { delayedRetry } from 'src/app/modules/shared/helper';
import { catchError, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Task } from 'src/models';
@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(
    private http: HttpClient,
  ) { }

  addPost(payload: NewTask, id: number) {
    return this.http.post<NewTask>(
      `https://ed-linker.herokuapp.com/api/auditoriums/${id}/tasks`, payload
      ).pipe(
      delayedRetry(1000, 3),
      catchError(error => {
        alert(error);
        return EMPTY;
      }),
      shareReplay()
    );
  }

  getPosts(id: number) {
    return this.http.get<Task[]>(`https://ed-linker.herokuapp.com/api/auditoriums/${id}/tasks`);
  }

}
