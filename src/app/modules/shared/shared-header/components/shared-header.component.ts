import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/modules/auth/auth-page/services';
import { UserProfile } from 'src/models';
import { UserState } from '../../user-store/user-state';

@Component({
  selector: 'app-shared-header-component',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent implements OnInit {

  userData!: UserProfile;

  constructor(
    private store: Store,
    private authService: AuthService
    ) { }


  userDataForTooltip() {
    return `
    ${this.userData.role} #${this.userData.id}
    ${this.userData.lastName} ${this.userData.firstName} ${this.userData.patronymic}
    `;
  }


  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): UserProfile {
    const userRole = this.store.selectSnapshot(UserState.getRole);
    const user = this.store.selectSnapshot(UserState.getUser);
    return this.userData = {
      id: user.id,
      role: userRole,
      firstName: user.firstName,
      lastName: user.lastName,
      patronymic: user.patronymic,
    };
  }

  logOut() {
    this.authService.logOut();
  }

}
