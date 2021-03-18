import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
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
      title: ['', [Validators.required, Validators.maxLength(255)]],
      value: ['', [Validators.required, Validators.maxLength(255)]]
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
        mediaUrl: 'Google.com'
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
}
