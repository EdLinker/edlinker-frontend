import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class TeacherPostService {
  constructor(private http: HttpClient) { }

  addPost(payload: Post) {
    return this.http.post<Post>('http://localhost:3000/posts', payload);
  }
}
