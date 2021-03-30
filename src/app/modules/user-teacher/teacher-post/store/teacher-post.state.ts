import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { Post } from 'src/models';
import { TeacherPostService } from '../services';
import { TeacherAddPost, TeacherGetPosts } from './actions';
import { finalize, tap } from 'rxjs/operators';
import { HideLoaderAction } from 'src/app/modules/user-student/student-home/store/actions';

export class TeacherPostStateModel {
    posts!: Post[];
}

@State<TeacherPostStateModel>({
    name: 'teacherPost',
    defaults: {
        posts: [],
    },
})
@Injectable()
export class TeacherPostState {
    constructor(
        private teacherPostService: TeacherPostService,
        private store: Store
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
        );
    }

    @Action(TeacherGetPosts)
    getPosts({ getState, setState }: StateContext<TeacherPostStateModel>) {
        return this.teacherPostService.getPosts().pipe(
            finalize(() => this.store.dispatch(new HideLoaderAction())),
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    posts: result,
                });
            })
        );
    }
}
