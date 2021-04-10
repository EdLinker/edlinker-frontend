import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetUser } from 'src/app/modules/shared/user-store/actions';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { User } from 'src/models';

@Component({
  selector: 'app-student-home-view',
  templateUrl: 'student-home-view.component.html'
})

export class StudentHomeViewComponent implements OnInit {

  @Select(UserState.getUser) user$!: Observable<User[]>;

  constructor(private store: Store) { }


  ngOnInit() {
    this.store.dispatch(new GetUser());
    this.user$.subscribe(v => console.log(v));
  }
}
