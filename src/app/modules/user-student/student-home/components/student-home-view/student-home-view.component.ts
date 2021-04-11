import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MapResponseService } from 'src/app/modules/shared/helper/services';
import { GetUser } from 'src/app/modules/shared/user-store/actions';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Role, User } from 'src/models';

@Component({
  selector: 'app-student-home-view',
  templateUrl: 'student-home-view.component.html'
})

export class StudentHomeViewComponent implements OnInit {

  @Select(UserState.getRole) role$!: Observable<Role>;

  constructor(private store: Store) { }


  ngOnInit() {
    // this.store.dispatch(new GetUser());
    // this.role$.subscribe(v => console.log(v));
  }
}
