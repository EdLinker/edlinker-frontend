import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPopupComponent } from './popup-post.component';

@Component({
    template: ''
  })
  export class PopupEntryComponent {
    constructor(public dialog: MatDialog, private router: Router,
      private route: ActivatedRoute) {
      this.openDialog();
    }
    openDialog(): void {
      const dialogRef = this.dialog.open(PostPopupComponent, {
            // data: post,
            height: 'auto',
            width: '100%',
      });

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['../'], { relativeTo: this.route });
      });
    }
  }
