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

  id!: number;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.openDialog();
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostPopupComponent, {
      data: { task: this.dataForDialog(), id: this.id },
      height: 'auto',
      width: '960px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/student'], { relativeTo: this.route });
    });
  }


  dataForDialog() {
    const tasks = this.store.selectSnapshot(StudentPostsState.getTasks);
    return tasks.find(task => task.taskId === Number(this.id));
  }
}
