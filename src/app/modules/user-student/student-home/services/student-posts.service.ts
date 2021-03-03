import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class StudentPostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
