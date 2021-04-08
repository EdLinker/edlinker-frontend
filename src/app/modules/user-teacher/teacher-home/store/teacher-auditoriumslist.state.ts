import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { tap } from 'rxjs/operators';
import { AuditoriumModele } from 'src/models';
import { TeacherAuditoriumsService } from '../services';
import { GetTeacherAuditoriums } from './actions';


export class TeacherAuditoriumsListModel {
    auditoriums!: AuditoriumModele[];
}

@State<TeacherAuditoriumsListModel>({
    name: 'teacherAuditoriumList',
    defaults: {
        auditoriums: [],
    }
})

@Injectable()
export class TeacherAuditoriumsListState {
    constructor(
        private teacherAuditoriumsService: TeacherAuditoriumsService,
    ) { }

    @Selector()
    static getAuditoriumsList(state: TeacherAuditoriumsListModel) {
        return state.auditoriums;
    }

    @Action(GetTeacherAuditoriums)
    getAuditoriumsList({ getState, setState }: StateContext<TeacherAuditoriumsListModel>) {
        return this.teacherAuditoriumsService.getAuditoriumsList().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    auditoriums: result,
                });
            })
        );
    }
}
