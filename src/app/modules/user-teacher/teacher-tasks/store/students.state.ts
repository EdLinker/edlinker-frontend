import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Student } from 'src/models';
import { TeacherGetStudents } from './actions';
import { StudentsService } from '../services';
import { tap } from 'rxjs/operators';

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
        private store: Store,
        private studentsService: StudentsService
    ) { }

    @Selector()
    static getStudents(state: StudentsStateModel) {
        return state.students;
    }

    @Action(TeacherGetStudents)
    getStudents({ getState, setState }: StateContext<StudentsStateModel>) {
        return this.studentsService.getStudents().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    students: result,
                });
            })
        );
    }
}
