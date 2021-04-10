import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { User } from 'src/models';
import { AuthService } from '../../auth/auth-page/services';
import { GetUser } from './actions';

export class UserStateModel {
    user!: User[];
}

@State<UserStateModel>({
    name: 'User',
    defaults: {
        user: [],
    },
})
@Injectable()
export class UserState {
    constructor(
        private authService: AuthService,
    ) { }

    @Selector()
    static getUser(state: UserStateModel) {
        return state.user;
    }

    @Action(GetUser)
    getUser({ getState, setState }: StateContext<UserStateModel>) {
        return this.authService.getUserTest().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    user: result,
                });
            })
        );
    }
}
