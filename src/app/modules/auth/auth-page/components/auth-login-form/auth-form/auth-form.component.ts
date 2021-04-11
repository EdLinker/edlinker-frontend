import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetUser } from 'src/app/modules/shared/user-store/actions';
import { UserState } from 'src/app/modules/shared/user-store/user-state';
import { Role } from 'src/models';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy {

  @Select(UserState.getRole) role$!: Observable<string>;

  loginForm!: FormGroup;
  hide = true;
  aSub!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(255), Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(6)]]
    });
  }

  login() {
    this.loginForm.disable();
    this.store.dispatch(new GetUser());
    this.aSub = this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.role$.subscribe(role => {
          if (role === 'student') {
            this.route.navigate(['/student']);
            return this.loginForm.reset();
          }
          if (role === 'teacher') {
            this.route.navigate(['/teacher']);
            return this.loginForm.reset();
          }
        });
      },
      error => {
        console.warn(error);
        this.loginForm.enable();
      }
    );
  }

}
