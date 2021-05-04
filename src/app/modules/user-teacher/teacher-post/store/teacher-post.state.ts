import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Task } from 'src/models';
import { TeacherPostService } from '../services';
import { TeacherGetPosts } from './actions';
import { finalize, tap } from 'rxjs/operators';
import { HideLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';

export class TeacherPostStateModel {
    tasks!: Task[];
}

@State<TeacherPostStateModel>({
    name: 'teacherPost',
    defaults: {
        tasks: [],
    },
})
@Injectable()
export class TeacherPostState {
    constructor(
        private teacherPostService: TeacherPostService,
        private store: Store,
        private mapResponseService: MapResponseService
    ) { }

    @Selector()
    static getPosts(state: TeacherPostStateModel) {
        return state.tasks;
    }

    @Action(TeacherGetPosts)
    getPosts({ getState, setState }: StateContext<TeacherPostStateModel>, { id }: TeacherGetPosts) {
        return this.teacherPostService.getPosts(id).pipe(
            finalize(() => this.store.dispatch(new HideLoaderAction())),
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    tasks: this.mapResponseService.snakeToCamel(result)
                });
            })
        );
    }
}
