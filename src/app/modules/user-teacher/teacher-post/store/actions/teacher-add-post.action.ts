import { NewTask } from 'src/models';

export class TeacherAddPost {
    static readonly type = '[Teacher] Add post';
    constructor(public payload: NewTask) { }
}
