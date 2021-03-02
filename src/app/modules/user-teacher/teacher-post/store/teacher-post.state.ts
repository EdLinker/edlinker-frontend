import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Post } from 'src/models';
import { TeacherAddPost } from './actions';

export class TeacherPostStateModel {
    posts!: Post[];
}

@State<TeacherPostStateModel>({
    name: 'teacherPost',
    defaults: {
        posts: []
    }
})
@Injectable()
export class TeacherPostState {

    @Selector()
    static getPosts(state: TeacherPostStateModel) {
        return state.posts;
    }

    @Action(TeacherAddPost)
    add({getState, patchState }: StateContext<TeacherPostStateModel>, { payload }: TeacherAddPost) {
        const state = getState();
        patchState({
            posts: [...state.posts, payload]
        });
    }
}