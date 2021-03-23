import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authPageRouting } from './auth-page.routing';
import { AuthPageViewComponent } from './components';
import { AuthFormComponent } from './components/auth-login-form/auth-form/auth-form.component';
import { AuthService } from './services';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule.forChild(authPageRouting),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [AuthPageViewComponent, AuthFormComponent],
  providers: [AuthService],
})
export class AuthPageModule { }
