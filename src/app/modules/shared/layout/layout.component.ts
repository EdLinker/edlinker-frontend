import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUser } from '../user-store/actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  this.store.dispatch(new GetUser());
  }

}
