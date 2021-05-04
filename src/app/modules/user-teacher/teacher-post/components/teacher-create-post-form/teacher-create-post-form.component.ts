import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Store } from '@ngxs/store';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-teacher-create-post-form',
  templateUrl: './teacher-create-post-form.component.html',
  styleUrls: ['./teacher-create-post-form.component.scss']
})
export class TeacherCreatePostFormComponent implements OnInit {
  isDate: boolean;
  createPostForm!: FormGroup;
  isFile: boolean;
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
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.isDate = false;
    this.isFile = false;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required ],
      value: ['', Validators.required ]
    });
  }

  //todo update post-task-modele
  mylog() {
    const title = this.createPostForm.controls.title.value;
    const value = this.createPostForm.controls.value.value;
    const data = {
      id: Math.floor(Math.random() * 10),
      title,
      value,
      subjectName: 'Some Subject',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      date: '26.05.2021 16:40',
      author: 'Carl Mask',
      mediaUrl: this.links
    };
    console.log(data);
  }

  onSubmit() {
    const title = this.createPostForm.controls.title.value;
    const value = this.createPostForm.controls.value.value;

    if (this.createPostForm.valid) {
      return;
    }
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

  addTmp(): void {
    this.links.push({ url: '' });
  }

  remove(link: any): void {
    const index = this.links.indexOf(link);

    if (index >= 0) {
      this.links.splice(index, 1);
    }
  }
}
