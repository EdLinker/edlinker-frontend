import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { LoginAction } from 'src/app/modules/shared/user-store/actions';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  hide = true;
  aSub!: Subscription;
  err: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private store: Store
  ) {
    this.err = false;
   }

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

    this.aSub = this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.err = false;
        this.store.dispatch(new LoginAction());
      },
      err => {
        this.err = true;
        this.loginForm.enable();
      }
    );
  }

  errorMessage() {
    return 'Будь ласка перевірьте правильність даних';
  }

}
