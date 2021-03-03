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

  createPostForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(255)]],
      value: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  onSubmit() {
    const title = this.createPostForm.controls['title'].value
    const value = this.createPostForm.controls['value'].value
    const today = new Date();
    const date = 'Дата:' + today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + 'Час:' + today.getHours() + ':' + today.getMinutes();

    if (this.createPostForm.valid) {
      this.store.dispatch(new TeacherAddPost({
        title: title,
        value: value,
        author: 'Admin',
        date: date,
      }))
        .subscribe(() => this.createPostForm.reset());
    }
  }
}
