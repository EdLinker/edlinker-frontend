import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models';

@Component({
  selector: 'app-teacher-post-view',
  templateUrl: './teacher-post-view.component.html',
  styleUrls: ['./teacher-post-view.component.css']
})
export class TeacherPostViewComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private store: Store) {
    this.posts = this.store.select(state => state.teacherPost.posts)
   }

  ngOnInit(): void {
  }

}
