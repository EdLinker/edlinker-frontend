import { Injectable, NgZone } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { NewTask, Task } from 'src/models';
import { TeacherPostService } from '../services';
import { TeacherAddPost, TeacherGetPosts } from './actions';
import { finalize, tap } from 'rxjs/operators';
import { HideLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { Router } from '@angular/router';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';
import { Location } from '@angular/common';

export class TeacherPostStateModel {
    tasks!: Task[];
}

export class TeacherCreatePostStateModel {
    tasks!: NewTask[];
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
        private location: Location,
        private mapResponseService: MapResponseService,
        private zone: NgZone
    ) { }

    @Selector()
    static getPosts(state: TeacherPostStateModel) {
        return state.tasks;
    }

    @Action(TeacherAddPost)
    add(
        { getState, patchState }: StateContext<TeacherPostStateModel>,
        { payload, id }: TeacherAddPost,
    ) {
        return this.teacherPostService.addPost(payload, id)
        .subscribe(() => this.location.back());
    }

    @Action(TeacherGetPosts)
    getPosts({ getState, patchState }: StateContext<TeacherPostStateModel>, { id }: TeacherGetPosts) {
        return this.teacherPostService.getPosts(id).pipe(
            finalize(() => this.store.dispatch(new HideLoaderAction())),
            tap((result) => {
                const state = getState();
                patchState({
                    ...state,
                    tasks: this.mapResponseService.snakeToCamel(result)
                });
            })
        );
    }
}
