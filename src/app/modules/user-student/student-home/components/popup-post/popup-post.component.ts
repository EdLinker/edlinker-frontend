import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentGetPosts } from '../../store/actions';
import { StudentPostsState } from '../../store/student-post-state';
import { Task } from 'src/models/task.model';
import { Url } from 'src/models';

@Component({
    selector: 'app-popup-post.component.html',
    templateUrl: './../popup-post/popup-post.component.html',
    styleUrls: ['./../popup-post/popup-post.component.scss']
})
export class PostPopupComponent implements OnInit {

    task!: Task | undefined;
    urls: Url[] | undefined;
    showAddTasks!: boolean;
    mediaUrl?: boolean = false;
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    readonly separatorKeysCodes: number[] = [ENTER, COMMA];

    //todo links from database
    links = [{
        url: 'https://material.angular.io/components/badge/overview'
    },
    {
        url: 'https://material.angular.io/components/badge/overview'
    }
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) tasks: Task,
        private route: Router,
        private store: Store
    ) {
        this.setDataPost(tasks);
    }


    ngOnInit() {
    }

    setUrl() {
        if (this.task !== undefined && this.task.urls.length >= 1) { return this.urls = JSON.parse(this.task.urls);}
    }

    addTasks() {
        this.showAddTasks = !this.showAddTasks;
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.links.push({ url: value.trim() });
        }

        if (input) {
            input.value = '';
        }
    }

    remove(link: any): void {
        const index = this.links.indexOf(link);

        if (index >= 0) {
            this.links.splice(index, 1);
        }
    }

    async setDataPost(tasks: Task) {
        const id =  this.route.url.slice(-1);
        if (tasks !== undefined) { return this.task = tasks, this.setUrl() ;}
        await this.store.dispatch(new StudentGetPosts()).toPromise();
        const newTasks = this.store.selectSnapshot(StudentPostsState.getTasks);
        return this.task = newTasks.find(task => task.taskId === Number(id)), this.setUrl();
    }

}
