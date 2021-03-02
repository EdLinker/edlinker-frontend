import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { TeacherAddPost } from '../../store/actions';

@Component({
  selector: 'app-teacher-post-form',
  templateUrl: './teacher-post-form.component.html',
  styleUrls: ['./teacher-post-form.component.css']
})
export class TeacherPostFormComponent implements OnInit {

  createPostForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private store: Store
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
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
      value: value
    }))
    .subscribe(() => this.createPostForm.reset());
  }
}
