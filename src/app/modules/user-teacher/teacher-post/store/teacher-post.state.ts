import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Post } from 'src/models';
import { TeacherPostService } from '../services';
import { TeacherAddPost } from './actions';
import { tap } from 'rxjs/operators';

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
    constructor(private teacherPostService: TeacherPostService) { }

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
}
