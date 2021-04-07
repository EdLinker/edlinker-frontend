import { Component, Inject, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Post } from 'src/models';
import { StudentGetPosts } from '../../store/actions';
import { LoaderState } from '../../store/loader.state';
import { StudentPostsState } from '../../store/student-post-state';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
@Component({
  selector: 'app-student-posts',
  templateUrl: './student-posts.component.html',
  styleUrls: ['./student-posts.component.css']
})
export class StudentPostsComponent implements OnInit {


  @Select(StudentPostsState.getPosts) posts$!: Observable<Post[]>;

  @Select(LoaderState.status)
  public loadingStatus$?: Observable<boolean>;

  constructor(
    private store: Store,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new StudentGetPosts());
  }

  openDialog(post: Post) {
    const dialogRef = this.dialog.open(PostPopupComponent,
      {
        data: post,
        height: '400px',
        width: '100%',
      },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'app-popup-post.component.html',
  templateUrl: './../popup-post/popup-post.component.html',
  styleUrls: ['./../popup-post/popup-post.component.css']
})
export class PostPopupComponent {
  showAddTasks!: boolean;
  mediaUrl: boolean;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  //todo links from database
  links = [{
    url: 'https://material.angular.io/components/badge/overview'
  },
  {
    url: 'https://material.angular.io/components/badge/overview'
  }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Post,
  ) {
    this.mediaUrl = !data.mediaUrl;
  }

  addTasks() {
    this.showAddTasks = !this.showAddTasks;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.links.push({ url: value.trim() });
    }

    if (input) {
      input.value = '';
    }
  }

  remove(link: any): void {
    const index = this.links.indexOf(link);

    if (index >= 0) {
      this.links.splice(index, 1);
    }
  }
}
