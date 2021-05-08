import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { MapResponseService } from 'src/app/modules/shared/helper/services/map-response.service';
import { TeacherAddPost } from '../../store/actions/teacher-add-post.action';

@Component({
  selector: 'app-teacher-create-post-form',
  templateUrl: './teacher-create-post-form.component.html',
  styleUrls: ['./teacher-create-post-form.component.scss']
})
export class TeacherCreatePostFormComponent implements OnInit {

  createPostForm!: FormGroup;
  auditoriumId!: number;
  subjectId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private mapResponseService: MapResponseService
  ) { }

  ngOnInit() {
    this.initForm();
    this.auditoriumId = Number(this.route.snapshot.paramMap.get('auditoriumId'));
    this.subjectId = Number(this.route.snapshot.paramMap.get('subjectId'));
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

  clearForm() {
    this.createPostForm.reset();
  }

  validateUrls(urls: string[]) {
    urls = urls.map(item => item.trim());
    const url = urls.filter(item => item !== '');
    return url;
  }

  onSubmit() {
    if (this.createPostForm.valid) {
      return this.prepareToSend();
    }
    return;
  }

  prepareToSend() {
    const arrayOfLinks = this.validateUrls(this.createPostForm.controls.urls.value);
    if (arrayOfLinks.length > 0) {
      const links = arrayOfLinks.map(obj => ({ url: obj }));
      const resultObject = this.mapResponseService.camelToSnake({
        task: {
          title: this.createPostForm.controls.title.value,
          auditoriumId: this.auditoriumId,
          subjectId: this.subjectId,
          description: this.createPostForm.controls.content.value,
          url: links,
        }
      });
      return this.store.dispatch(new TeacherAddPost(resultObject, this.auditoriumId));
    }

    return this.store.dispatch(new TeacherAddPost(
      this.mapResponseService.camelToSnake({
        task: {
          title: this.createPostForm.controls.title.value,
          auditoriumId: this.auditoriumId,
          subjectId: this.subjectId,
          description: this.createPostForm.controls.content.value,
        }
      }),
      this.auditoriumId));
  }

}
