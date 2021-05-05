import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { NewTask } from 'src/models';
import { TeacherAddPost } from '../../store/actions/teacher-add-post.action';

@Component({
  selector: 'app-teacher-create-post-form',
  templateUrl: './teacher-create-post-form.component.html',
  styleUrls: ['./teacher-create-post-form.component.scss']
})
export class TeacherCreatePostFormComponent implements OnInit {

  createPostForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) { }

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

  get urls() {
    return this.createPostForm.get('urls') as FormArray;
  }

  addUrls() {
    this.urls.push(this.formBuilder.control('', Validators.required));
  }

  remUrls(link: number) {
    this.urls.removeAt(link);
  }

  validateUrls(urls: string[]) {
    urls = urls.map(item => item.trim());
    const url = urls.filter(item => item !== '');
    return url;
  }

  onSubmit() {
    this.prepareToSend();
  }

  prepareToSend() {
    const a = this.validateUrls(this.createPostForm.controls.urls.value);

    if (a.length > 0) {
      const links = JSON.stringify(a.map(obj => ({ url: obj})));
      console.log(links);
      const resultObject = {
        auditoriumId: 1,
        title: this.createPostForm.controls.title.value,
        description: this.createPostForm.controls.content.value,
        urls: links
      };
      return this.store.dispatch(new TeacherAddPost(resultObject));
    }

    return this.store.dispatch(new TeacherAddPost({
      auditoriumId: 1,
      title: this.createPostForm.controls.title.value,
      description: this.createPostForm.controls.content.value,
    }));
  }

  /**
   * створити діспатч
   * в діспатчеві додати нові дані в сторедж(стореджс сам відрендерить їх)
   * в тому ж екшині створити еррор хендлер, якщо HTTP помилка то видалити дані зі стореджу і можливо показаnи нотифікацію
   * якщо помилки немає, нічого не робити
   */
}
