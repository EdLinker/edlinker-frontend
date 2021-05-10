import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedHeaderModule } from './modules/shared/shared-header';
import { SharedBreadcrumbsModule } from './modules/shared/shared-breadcrumbs';
import { AuthGuard } from './modules/auth/guards';
import { AuthService } from './modules/auth/auth-page/services';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { TokenInterceptor } from './modules/auth/auth-page/interceptors/token.interceptor';
import { UserState } from './modules/shared/user-store/user-state';
import { UserService } from './modules/shared/user-store/services/user.service';
import { MapResponseService } from './modules/shared/helper/services/map-response.service';
import { StudentPostsState } from './modules/user-student/student-home/store/student-post-state';
import { TeacherPostState } from './modules/user-teacher/teacher-post/store/teacher-post.state';
import { TeacherAuditoriumsListState } from './modules/user-teacher/teacher-home/store/teacher-auditoriumslist.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([
      UserState,
      StudentPostsState,
      TeacherPostState,
      TeacherAuditoriumsListState
    ]),
    environment.plugins,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedHeaderModule,
    SharedBreadcrumbsModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    UserService,
    MapResponseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
