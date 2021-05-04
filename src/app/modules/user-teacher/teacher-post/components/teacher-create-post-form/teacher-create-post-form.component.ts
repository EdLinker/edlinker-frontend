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
    // console.log(this.urls.at(link));
    this.urls.removeAt(link);
  }

  // linkOnBlur(i: number) {
  //   // console.log(this.urls.value);
  // }

  validateUrls(urls: string[]) {
    urls = urls.map(item => item.trim());
    const url = urls.filter(item => item !== '');
    return url;
  }

 onSubmit() {
    const a = this.validateUrls(this.createPostForm.controls.urls.value);
    if (a.length > 0) {
      console.log(a);
    } else {
      // const test2 = {
      //   auditoriumId: 1,
      //   title: this.createPostForm.controls.title.value,
      //   description: this.createPostForm.controls.content.value,
      // };
      // return console.log('без юрл');
    }
  }
}
