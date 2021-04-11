import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Role, User } from 'src/models';
import { AuthService } from '../../auth/auth-page/services';
import { MapResponseService } from '../helper/services';
import { GetUser } from './actions';
import { UserService } from './services';

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
        private mapResponseService: MapResponseService
    ) { }

    @Selector()
    static getRole(state: UserStateModel) {
        return state.user.roles.
            map((data => {
                const roles: string = data.name;
                return roles;
            })).toString();
    }

    @Selector()
    static getUser(state: UserStateModel) {
        return state.user;
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
}
