import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Student } from 'src/models';
import { TeacherGetStudents } from './actions';
import { StudentsService } from '../services';
import { tap } from 'rxjs/operators';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';

export class StudentsStateModel {
    students!: Student[];
}

@State<StudentsStateModel>({
    name: 'students',
    defaults: {
        students: [],
    },
})
@Injectable()
export class StudentsState {
    constructor(
        private studentsService: StudentsService,
        private mapResponseService: MapResponseService
    ) { }

    @Selector()
    static getStudents(state: StudentsStateModel) {
        return state.students;
    }

    @Action(TeacherGetStudents)
    getStudents({ getState, patchState }: StateContext<StudentsStateModel>, { numb, id }: TeacherGetStudents) {
        return this.studentsService.getStudents(numb, id).pipe(
            tap((result) => {
                const state = getState();
                patchState({
                    ...state,
                    students: this.mapResponseService.snakeToCamel(result),
                });
            })
        );
    }
}
