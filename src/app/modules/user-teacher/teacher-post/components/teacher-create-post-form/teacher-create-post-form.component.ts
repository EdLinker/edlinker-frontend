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
      title: [''],
      value: ['']
    });
  }

  onSubmit() {
    const title = this.createPostForm.controls['title'].value
    const value = this.createPostForm.controls['value'].value

    this.store.dispatch(new TeacherAddPost({
      title: title,
      value: value,
      author: 'Admin'
    }))
      .subscribe(() => this.createPostForm.reset());
  }
}
