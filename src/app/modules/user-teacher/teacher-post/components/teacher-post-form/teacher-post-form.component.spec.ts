import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPostFormComponent } from './teacher-post-form.component';

describe('TeacherPostFormComponent', () => {
  let component: TeacherPostFormComponent;
  let fixture: ComponentFixture<TeacherPostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
