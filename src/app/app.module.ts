import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBreadcrumbsModule } from './modules/shared/shared-breadcrumbs';
import { SharedHeaderModule } from './modules/shared/shared-header';
import { AuthGuard } from './modules/auth/guards';
import { AuthService } from './modules/auth/auth-page/services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { TokenInterceptor } from './modules/auth/auth-page/interceptors/token.interceptor';
import { MapResponseService } from './modules/shared/helper/services';
import { environment } from 'src/environments/environment';
import { UserState } from './modules/shared/user-store/user-state';
import { UserService } from './modules/shared/user-store/services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
      NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedBreadcrumbsModule,
    SharedHeaderModule,
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
