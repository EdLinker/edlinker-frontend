import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { StudentPostsState } from '../../store/student-post-state';
import { PostPopupComponent } from './popup-post.component';

@Component({
  template: ''
})
export class PopupEntryComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.openDialog();
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostPopupComponent, {
      data: this.dataForDialog(),
      height: 'auto',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/student'], { relativeTo: this.route });
    });
  }


  dataForDialog() {
    const id = this.route.snapshot.paramMap.get('id');
    const tasks = this.store.selectSnapshot(StudentPostsState.getTasks);
    return tasks.find(task => task.taskId === Number(id));
  }
}
