import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Post } from 'src/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-popup-post.component.html',
    templateUrl: './../popup-post/popup-post.component.html',
    styleUrls: ['./../popup-post/popup-post.component.css']
})
export class PostPopupComponent implements OnInit {
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
        @Inject(MAT_DIALOG_DATA) public data: Post,
    ) { }

    ngOnInit(): void {
        if (this.data.mediaUrl.length !== 0) {
            this.mediaUrl = !this.mediaUrl;
        }
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
