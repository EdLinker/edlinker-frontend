import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Post } from 'src/models';
import { StudentPostsService } from '../services';
import { StudentGetPosts } from './actions';
import { tap } from 'rxjs/operators';

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
    constructor(private studentPostsService: StudentPostsService) { }

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
    }
}
