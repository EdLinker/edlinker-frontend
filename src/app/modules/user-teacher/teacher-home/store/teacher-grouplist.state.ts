import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { tap } from 'rxjs/operators';
import { GroupModele } from 'src/models';
import { TeacherGroupsService } from '../services';
import { GetTeacherGroups } from '../store/actions';


export class TeacherGroupListModel {
    groups!: GroupModele[];
}

@State<TeacherGroupListModel>({
    name: 'teacherGroupList',
    defaults: {
        groups: [],
    }
})

@Injectable()
export class TeacherGroupListState {
    constructor(
        private teacherGroupsService: TeacherGroupsService,
    ) { }

    @Selector()
    static getGroupList(state: TeacherGroupListModel) {
        return state.groups;
    }

    @Action(GetTeacherGroups)
    getGroupList({ getState, setState }: StateContext<TeacherGroupListModel>) {
        return this.teacherGroupsService.getGroupList().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    groups: result,
                });
            })
        );
    }
}
