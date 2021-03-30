import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  hide = true;
  aSub!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
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

    this.aSub = this.authService.login(this.loginForm.value).subscribe(
      () => {
        console.log('There will be redirect');
        this.loginForm.reset();
      },
      error => {
        console.warn(error);
        this.loginForm.enable();
      }
    );
  }

}
