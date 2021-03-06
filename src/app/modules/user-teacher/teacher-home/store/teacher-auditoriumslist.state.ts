import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';

import { tap } from 'rxjs/operators';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';
import { AuditoriumModel } from 'src/models';
import { TeacherAuditoriumsService } from '../services';
import { GetTeacherAuditoriums } from './actions';


export class TeacherAuditoriumsListModel {
    auditoriums!: AuditoriumModel[];
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
        private mapResponseService: MapResponseService
    ) { }

    @Selector()
    static getAuditoriumsList(state: TeacherAuditoriumsListModel) {
        return state.auditoriums;
    }

    @Action(GetTeacherAuditoriums)
    getAuditoriumsList({ getState, patchState }: StateContext<TeacherAuditoriumsListModel>) {
        return this.teacherAuditoriumsService.getAuditoriumsList().pipe(
            tap((result) => {
                const state = getState();
                patchState({
                    ...state,
                    auditoriums: this.mapResponseService.snakeToCamel(result)
                });
            })
        );
    }
}
