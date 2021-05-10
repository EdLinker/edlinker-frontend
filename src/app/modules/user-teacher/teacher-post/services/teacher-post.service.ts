import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewTask } from 'src/models';
import { delayedRetry } from 'src/app/modules/shared/helper';
import { catchError, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Task } from 'src/models';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {

  url = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  addPost(payload: NewTask, id: number) {
    return this.http.post<NewTask>(
      `${this.url}auditoriums/${id}/tasks`, payload
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
    return this.http.get<Task[]>(`${this.url}auditoriums/${id}/tasks`);
  }

}
