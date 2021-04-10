import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Store } from '@ngxs/store';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TeacherAddPost } from '../../store/actions';

@Component({
  selector: 'app-teacher-create-post-form',
  templateUrl: './teacher-create-post-form.component.html',
  styleUrls: ['./teacher-create-post-form.component.css']
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

  onSubmit() {
    const title = this.createPostForm.controls.title.value;
    const value = this.createPostForm.controls.value.value;

    if (this.createPostForm.valid) {
      this.store.dispatch(new TeacherAddPost({
        title,
        value,
        subjectName: 'Some Subject',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
        date: '26.05.2021 16:40',
        author: 'Carl Mask',
        mediaUrl: this.links
      }))
        .subscribe(() => this.createPostForm.reset());
    }
  }

  openDatePicker() {
    this.isDate = !this.isDate;
  }

  openAddFilesInput() {
    this.isFile = !this.isFile;
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
