import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPostViewComponent } from './teacher-post-view.component';

describe('TeacherPostViewComponent', () => {
  let component: TeacherPostViewComponent;
  let fixture: ComponentFixture<TeacherPostViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherPostViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
