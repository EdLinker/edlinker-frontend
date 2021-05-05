import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Task } from 'src/models';
import { TeacherPostService } from '../services';
import { TeacherGetPosts } from './actions';
import { finalize, tap } from 'rxjs/operators';
import { HideLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';
import { Router } from '@angular/router';

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
        private router: Router
    ) { }

    @Selector()
    static getPosts(state: TeacherPostStateModel) {
        return state.posts;
    }

    @Action(TeacherAddPost)
    add(
        { getState, patchState }: StateContext<TeacherPostStateModel>,
        { payload }: TeacherAddPost
    ) {
        return this.teacherPostService.addPost(payload).pipe(
            tap((result) => {
                const state = getState();
                patchState({
                    posts: [...state.posts, result],
                });
            })
        ).subscribe(() => this.router.navigate(['teacher/class-tasks']));
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
