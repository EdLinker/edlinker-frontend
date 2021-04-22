import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { User } from 'src/models';
import { MapResponseService } from '../helper/services/map-response.service';
import { GetUser, LoginAction } from './actions';
import { UserService } from './services';
import { NgZone } from '@angular/core';

export class UserStateModel {
    user!: User;
}

@State<UserStateModel>({
    name: 'User',
})
@Injectable()
export class UserState {
    constructor(
        private userService: UserService,
        private mapResponseService: MapResponseService,
        private router: Router,
        private ngZone: NgZone
    ) { }

    @Selector()
    static getUser(state: UserStateModel) {
        return state.user;
    }

    @Selector()
    static getRole(state: UserStateModel) {
        return state.user.roles.
            map((data => {
                const roles: string = data.name;
                return roles;
            })).toString();
    }

    @Action(GetUser)
    getUser({ getState, setState }: StateContext<UserStateModel>) {
        return this.userService.getUser().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    user: this.mapResponseService.snakeToCamel(result),
                });
            })
        );
    }

    @Action(LoginAction)
    async loginActions({ getState, setState, dispatch }: StateContext<UserStateModel>) {
        await dispatch(new GetUser()).toPromise();
        if(getState().user.roles.find(role => role.name === 'teacher')) {return this.ngZone.run(() => this.router.navigate(['teacher']));}
        return this.ngZone.run(() => this.router.navigate(['student']));
    }
}
