import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/models';
import { StudentGetPosts } from '../../store/actions';
import { StudentPostsState } from '../../store/student-post-state';
import { PostPopupComponent } from './popup-post.component';

@Component({
    template: ''
  })
  export class PopupEntryComponent implements OnInit{

    @Select(StudentPostsState.getPosts) posts$!: Observable<Post[]>;


    constructor(
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute,
      private store: Store
    ) {
      this.openDialog();
    }

    async ngOnInit() {
      await this.store.dispatch(new StudentGetPosts()).toPromise();
        this.dataForDialog();
    }

    openDialog(): void {
      const dialogRef = this.dialog.open(PostPopupComponent, {
            // data: post,
            height: 'auto',
            width: '100%',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['/student'], { relativeTo: this.route });
      });
    }


    dataForDialog() {
      const id = Number(this.router.url.slice(-1));
      this.posts$.pipe(
          // map((post) => post.find(v => v.id === id)),
          map((post) => post.map(v => console.log(v))),
      ).subscribe();
  }
  }
