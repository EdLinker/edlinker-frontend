import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Post } from 'src/models';
import { StudentPostsService } from '../services';
import { HideLoaderAction, StudentGetPost, StudentGetPosts } from './actions';
import { finalize, tap } from 'rxjs/operators';

export class StudentPostsStateModel {
    posts!: Post[];
}

@State<StudentPostsStateModel>({
    name: 'studentPosts',
    defaults: {
        posts: [],
    },
})

@Injectable()
export class StudentPostsState {
    constructor(
        private studentPostsService: StudentPostsService,
        private store: Store
    ) { }

    @Selector()
    static getPosts(state: StudentPostsStateModel) {
        return state.posts;
    }

    @Action(StudentGetPosts)
    getPosts({ getState, setState }: StateContext<StudentPostsStateModel>) {
        return this.studentPostsService.getPosts().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    posts: result,
                });
            })
        );
    };
}
