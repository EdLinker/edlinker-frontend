import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { StudentGetPosts } from '../../store/actions';
import { StudentPostsState } from '../../store/student-post-state';
import { Post } from 'src/models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-popup-post.component.html',
    templateUrl: './../popup-post/popup-post.component.html',
    styleUrls: ['./../popup-post/popup-post.component.scss']
})
export class PostPopupComponent implements OnInit {

    data!: Post;
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

    constructor() { }


    ngOnInit() {
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
}
