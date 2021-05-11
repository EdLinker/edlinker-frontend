import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { GetUser } from 'src/app/modules/shared/user-store/actions';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { TeacherAuditoriumsListModel } from 'src/app/modules/user-teacher/teacher-home/store/teacher-auditoriumslist.state';

@Component({
    selector: 'app-landing-view',
    templateUrl: './landing-view.component.html',
    styleUrls: ['./landing-view.component.scss']

})

export class LandingViewComponent implements OnInit {

    role!: string;
    constructor(
        private route: Router,
        private store: Store
        ) {
            this.getRole();
        }

    ngOnInit() {}

     async getRole() {
        await this.store.dispatch(new GetUser()).toPromise();
        this.role = this.store.selectSnapshot(UserState.getRole);
        this.checkRole();
     }

     checkRole() {
         if (this.role === 'teacher') {
             return this.route.navigate(['teacher']);
         }
         if (this.role === 'student') {
             return this.route.navigate(['student']);
         }
         return this.route.navigate(['auth']);
     }
}
