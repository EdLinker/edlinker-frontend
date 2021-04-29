import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-teacher-create-post-form',
  templateUrl: './teacher-create-post-form.component.html',
  styleUrls: ['./teacher-create-post-form.component.scss']
})
export class TeacherCreatePostFormComponent implements OnInit {

  createPostForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      urls: this.formBuilder.array([]),
    });
  }


  // urls logic

  get urls() {
    return this.createPostForm.get('urls') as FormArray;
  }

  addUrls() {
    this.urls.push(this.formBuilder.control('', Validators.required));
  }

  remUrls(link: number) {
    console.log(this.urls.at(link));
    this.urls.removeAt(link);
  }

  linkOnBlur(i: number) {
    console.log(blur);
  }


  onSubmit() {
    console.warn(this.createPostForm.value);
  }
}
