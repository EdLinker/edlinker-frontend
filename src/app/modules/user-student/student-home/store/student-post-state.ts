import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { StudentPostsService } from '../services';
import { StudentGetPosts } from './actions';
import { tap } from 'rxjs/operators';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';
import { Task } from 'src/models/task.model';

export class StudentPostsStateModel {
    tasks!: Task[];
}

@State<StudentPostsStateModel>({
    name: 'studentTasks',
    defaults: {
        tasks: [],
    },
})

@Injectable()
export class StudentPostsState {

    constructor(
        private studentPostsService: StudentPostsService,
        private mapResponse: MapResponseService
    ) {}

    @Selector()
    static getTasks(state: StudentPostsStateModel) {
        return state.tasks;
    }

    @Action(StudentGetPosts)
    getPosts({ getState, patchState }: StateContext<StudentPostsStateModel>) {
        return this.studentPostsService.getPosts().pipe(
            tap((result) => {
                const state = getState();
                patchState({
                    ...state,
                    tasks: this.mapResponse.snakeToCamel(result),
                });
            })
        );
    };
}
