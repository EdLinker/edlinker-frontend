import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/models';
import { Store } from '@ngxs/store';
import { ShowLoaderAction } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class StudentPostsService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  getPosts() {
    this.store.dispatch(new ShowLoaderAction());
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }
}
